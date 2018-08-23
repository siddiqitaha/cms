﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using T2.Cms.Domain.Interface.Site;
using T2.Cms.Domain.Interface.Site.Category;
using T2.Cms.Domain.Interface.Site.Extend;
using T2.Cms.Domain.Interface.Site.Template;
using T2.Cms.Infrastructure;
using T2.Cms.Models;

namespace T2.Cms.Domain.Implement.Site.Category
{
    public class Category : ICategory
    {
        private ICategoryRepository _rep;
        private IExtendFieldRepository _extendRep;

        private IList<IExtendField> _extendFields;
        private ICategory _parent;
        private IEnumerable<ICategory> _childs;
        private ICategory _next;
        private ICategory _previous;
        private IEnumerable<ICategory> _nextLevelChilds;
        private string _uriPath;
        private IList<ITemplateBind> _templates;
        private CmsCategoryEntity value;
        private ISite site;
        private ISiteRepository siteRepo;
        private readonly ITemplateRepository _tempRep;

        internal Category(ICategoryRepository rep, IExtendFieldRepository extendRep,
            ITemplateRepository tmpRep,CmsCategoryEntity value)
        {
            this.value = value;
            this._rep = rep;
            this._extendRep = extendRep;
            this._tempRep = tmpRep;
        }
        
        public int Lft
        {
            get;
            set;
        }

        public int Rgt
        {
            get;
            set;
        }

        public int SortNumber
        {
            get;
            set;
        }

        public string Icon { get; set; }

        public int ModuleId
        {
            get;
            set;
        }

        public string Tag
        {
            get;
            set;
        }

        public string Name
        {
            get;
            set;
        }

        public string PageTitle
        {
            get;
            set;
        }

        public string Keywords
        {
            get;
            set;
        }

        public string Description
        {
            get;
            set;
        }

        public string Location
        {
            get;
            set;
        }

        public int Save()
        {
            if (this.GetDomainId() <= 0)
            {
                this.SetAutoSortNumber();
            }
            int result = this._rep.SaveCategory(this);

            #region 保存模板

            IList<ITemplateBind> delBinds = new List<ITemplateBind>();

            foreach (ITemplateBind templateBind in this.Templates)
            {
                this._tempRep.SaveTemplateBind(templateBind, this.GetDomainId());
                if (String.IsNullOrEmpty(templateBind.TplPath))
                {
                    delBinds.Add(templateBind);
                }
            }

            for (int i = 0; i < delBinds.Count; i++)
            {
                this.Templates.Remove(delBinds[i]);
                delBinds[i] = null;
            }

            #endregion

            #region 保存扩展属性

            this._extendRep.UpdateCategoryExtends(this);

            #endregion

            this.Site().ClearSelf();
            this.ClearSelf();
            return result;
        }

        private void SetAutoSortNumber()
        {
            if(this.Parent == null)
            {
                this.SortNumber = 1;
                return;
            }
            if (this.Parent.Childs != null && this.Parent.Childs.Any())
            {
                this.SortNumber = this.Parent.Childs.Max(a => a.Get().SortNumber) + 1;
            }
            else
            {
                this.SortNumber = 1;
            }
        }


        public IList<IExtendField> ExtendFields
        {
            get
            {
                return _extendFields ?? (_extendFields = new List<IExtendField>(
                    this._extendRep.GetExtendFields(this.Site().GetAggregaterootId(), this.GetDomainId())));
            }
            set
            {

                IList<IExtendField> delList = new List<IExtendField>();
                IList<int> addList = new List<int>();
                IList<IExtendField> usedList = new List<IExtendField>();


                bool isExists;

                #region 计算删除的扩展属性
                foreach (IExtendField extend in this.ExtendFields)
                {
                    isExists = false;

                    foreach (IExtendField valueExtend in value)
                    {
                        if (extend.GetDomainId() == valueExtend.GetDomainId())
                        {
                            isExists = true;
                            break;
                        }
                    }

                    if (!isExists)
                    {
                        delList.Add(extend);

                        //验证是否被占用
                        int usedNum = this._extendRep.GetCategoryExtendRefrenceNum(this, extend.GetDomainId());
                        if (usedNum > 0)
                        {
                            usedList.Add(extend);
                        }
                    }
                }

                if (usedList.Count != 0)
                {
                    StringBuilder strBuilder = new StringBuilder();
                    strBuilder.Append("扩展属性：");
                    int i = 0;
                    foreach (IExtendField extend in usedList)
                    {
                        if (i++ != 0) strBuilder.Append("、");
                        strBuilder.Append(extend.Name);
                    }
                    strBuilder.Append("已使用该扩展，请先清理后再删除绑定！");

                    throw new Exception(strBuilder.ToString());
                }


                foreach (IExtendField extend in delList)
                {
                    this.ExtendFields.Remove(extend);
                }

                #endregion

                #region 添加新增的扩展属性
                foreach (IExtendField valueExtend in value)
                {
                    isExists = false;
                    foreach (IExtendField extend in this.ExtendFields)
                    {
                        if (extend.GetDomainId() == valueExtend.GetDomainId())
                        {
                            isExists = true;
                            break;
                        }
                    }

                    if (!isExists)
                    {
                        addList.Add(valueExtend.GetDomainId());
                    }
                }

                foreach (int extendId in addList)
                {
                    this.ExtendFields.Add(this._extendRep.GetExtendFieldById(this.Site().GetAggregaterootId(), extendId));
                }

                #endregion


                _extendFields = value;
            }
        }



        public IList<ITemplateBind> Templates
        {
            get
            {
                return this._templates ?? (this._templates = new List<ITemplateBind>(this._tempRep.GetTemplateBindsForCategory(this)));
            }
            set
            {
                this._templates = value;
            }
        }


        //public IEnumerable<ICategory> NextLevelCategories
        //{
        //    get;
        //    set;
        //}

        //public bool IsSign
        //{
        //    get;
        //    set;
        //}

        //public int Level
        //{
        //    get;
        //    set;
        //}




        public ICategory Parent
        {
            get
            {
                return _parent ?? (_parent ?? this._rep.GetParent(this));
            }
            set { this._parent = value; }
        }

        public IEnumerable<ICategory> Childs
        {
            get
            {
                return _childs ?? (_childs ?? this._rep.GetChilds(this));
            }
        }

        public IEnumerable<ICategory> NextLevelChilds
        {
            get
            {
                if (this._nextLevelChilds == null)
                {
                    this._nextLevelChilds = this._rep.GetNextLevelChilds(this).OrderBy(a => a.Get().SortNumber);
                }
                return this._nextLevelChilds;
            }
        }


        public ICategory Next
        {
            get { return this._next ?? (this._next = this._rep.GetNext(this)); }
        }

        public ICategory Previous
        {
            get { return this._previous ?? (this._previous = this._rep.GetPrevious(this)); }
        }


        public string UriPath
        {
            get
            {
                if (this._uriPath == null)
                {
                    string path = this.Tag;
                    ICategory parent = this;
                    int rootLft = this.Site().RootCategory.Lft;

                    while ((parent = parent.Parent) != null && parent.Lft != rootLft)
                    {
                        path = String.Concat(parent.Get().Tag, "/", path);
                    }
                    this._uriPath = path;
                }
                return this._uriPath;
            }
        }


        public void ClearSelf()
        {
            foreach (ICategory category in this.Childs)
            {
                category.ClearSelf();
            }

            this._childs = null;
            this._parent = null;
            this._next = null;
            this._previous = null;
            this._extendFields = null;
            this._nextLevelChilds = null;
            this._uriPath = null;

        }

        /// <summary>
        /// 向上移动排序
        /// </summary>
        public void MoveSortUp()
        {
            if (this.Parent != null)
            {
                ICategory[] list = this.Parent.Childs.OrderBy(a=>a.Get().SortNumber).ToArray();
                for (int i = 0; i < list.Length; i++)
                {
                    if (list[i].GetDomainId() == this.GetDomainId() && i !=0)
                    {
                        this.SwapSortNumber(list[i - 1],true);
                        break;
                    }
                }
            }
        }

        /// <summary>
        /// 向下移动排序
        /// </summary>
        public void MoveSortDown()
        {
            if (this.Parent != null)
            {
                ICategory[] list = this.Parent.Childs.OrderBy(a => a.Get().SortNumber).ToArray();
                for (int i = 0; i < list.Length; i++)
                {
                    if (list[i].GetDomainId() == this.GetDomainId() && i < list.Length - 1)
                    {
                        this.SwapSortNumber(list[i + 1],false);
                        break;
                    }
                }
            }
        }

        private void SwapSortNumber(ICategory c,bool up)
        {
            //todo: 应该是更改
            if (c == null) return;
            int sortN = c.Get().SortNumber;
            c.Get().SortNumber = this.SortNumber;
            if (this.SortNumber == sortN || sortN < 0 || this.SortNumber < 0) //为了兼容旧有数据
            {
                if (sortN < 0 && !up)
                {
                    this.SortNumber = 0;
                    c.Get().SortNumber += 1;
                    if (c.Get().SortNumber <= 0)
                    {
                        c.Get().SortNumber = 1;
                    }
                }
                else
                {
                    this.SortNumber = sortN + (up ? 1 : -1);
                }
            }
            else 
            {
                // 以上均为兼容
                this.SortNumber = sortN;
            }
            c.SaveSortNumber();
            this.SaveSortNumber();
        }

        /// <summary>
        /// 保存排序号码
        /// </summary>
       public void SaveSortNumber()
        {
            this._rep.SaveCategorySortNumber(this.GetDomainId(),this.SortNumber);
        }

        public CmsCategoryEntity Get()
        {
            return this.value;

        }

        public Error Set(CmsCategoryEntity src)
        {

            if(this.value.ID <= 0)
            {
                if(src.SiteId <= 0)
                {
                    return new Error("参数错误:SiteId");
                }
                this.value.SiteId = src.SiteId;
                this.value.Code = src.Code;
                this.value.Path = "";
                this.value.Flag = 0; //todo: 初始化flag
                int maxSortNumber = this._rep.GetMaxSortNumber(this.value.SiteId);
                if (maxSortNumber == 0) maxSortNumber = 1;
                this.value.SortNumber = maxSortNumber;
            }

            if (!this._rep.CheckTagMatch(src.Tag,this.value.SiteId,this.value.ID))
            {
                return new Error("分类TAG已存在");
            }
            this.value.Tag = src.Tag;
            if (src.ParentId > 0)
            {
                ICategory ip = this._rep.GetCategoryById(src.ParentId);
                if(ip == null || ip.Get().SiteId != this.value.SiteId)
                {
                    return new Error("上级分类不存在");
                }
                if (this.value.ParentId != src.ParentId)
                {
                    this.value.ParentId = src.ParentId;
                    this.parentChanged(ip);
                }
            }
            this.value.Flag = src.Flag;
            this.value.ModuleId = src.ModuleId;
            this.value.Name = src.Name;
            this.value.Icon = src.Icon;
            this.value.Title = src.Title;
            this.value.Keywords = src.Keywords;
            this.value.Description = src.Description;
            this.value.Location = src.Location;
            return null;
        }

        private Error parentChanged(ICategory parent)
        {
            this.value.Path = parent.UriPath + "/" + this.value.Tag;
            this.value.Code = this.value.Path.GetHashCode().ToString();
            return null;
           // throw new NotImplementedException();
        }

        public ISite Site()
        {
            if (this.site == null && this.value.SiteId > 0)
            {
                this.site = this.siteRepo.GetSiteById(this.value.SiteId);
            }
            return this.site;
        }

        public int GetDomainId()
        {
            return this.value.ID;
        }
    }
}
