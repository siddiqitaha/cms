﻿//
// Copyright (C) 2007-2008 TO2.NET,All rights reserved.
// 
// Project: jr.Cms.Manager
// FileName : Ajax.cs
// Author : PC-CWLIU (new.min@msn.com)
// Create : 2011/10/15 21:16:56
// Description :
//
// Get infromation of this software,please visit our site http://to2.net/cms
//
//

using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using JR.Cms.Web.Util;
using JR.Stand.Abstracts.Web;
using JR.Stand.Core.Framework.Web.UI;

namespace JR.Cms.Web.Manager.Handle
{
    /// <summary>
    /// 上传
    /// </summary>
    public class UploadHandler : BasePage
    {
        /// <summary>
        /// 上传图片
        /// </summary>
        public void UploadImage_POST()
        {
            string uploadFor = Request.Query("for");
            var file = Request.FileIndex(0);
            //string id = base.Request.Query("upload.id");
            var dir = UploadUtils.GetUploadDirPath(CurrentSite.SiteId, "image", true);
            var name = UploadUtils.GetUploadFileName(file, uploadFor);
            UploadResultResponse(file,dir, name, false);
        }

        private void UploadResultResponse(ICompatiblePostedFile file, string dir, string name,
            bool autoName)
        {
            try
            {
                var filePath =  new FileUpload(dir, name, autoName).Upload(file);
                Response.Write("{" + $"\"url\":\"{filePath}\"" + "}");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.StackTrace);
                Response.Write("{" + $"\"error\":\"{ex.Message}\"" + "}");
            }
        }


        /// <summary>
        /// 上传分类缩略图
        /// </summary>
        public void UploadCatThumb_POST()
        {
            var file = Request.FileIndex(0);
            //string id = base.Request.Query("upload.id");
            var dir = UploadUtils.GetUploadDirPath(CurrentSite.SiteId, "image/cat", false);
            var name = UploadUtils.GetUploadFileRawName(file);
            UploadResultResponse(file,dir, name, true);
        }


        /// <summary>
        /// 上传文档缩略图
        /// </summary>
        public void UploadArchiveThumb_POST()
        {
            var file = Request.File("upload_thumbnail");
            var dir = UploadUtils.GetUploadDirPath(CurrentSite.SiteId, "image/art", true);
            var name = UploadUtils.GetUploadFileName(file, "");
            UploadResultResponse(file,dir, name, true);
        }


        /// <summary>
        /// 上传文件
        /// </summary>
        public void UploadPropertyFile_POST()
        {
            var file = Request.FileIndex(0);
            var dt = DateTime.Now;
            var dir = UploadUtils.GetUploadDirPath(CurrentSite.SiteId, "prop", true);
            var name = UploadUtils.GetUploadFileName(file, "");
            UploadResultResponse(file,dir, name, true);
        }

        /// <summary>
        /// 上传文件
        /// </summary>
        public void UploadFile_POST()
        {
           // string uploadfor = Request.Query("for");
           // string id = Request.Query("upload.id");
            var file = Request.FileIndex(0);
            var dir = UploadUtils.GetUploadDirPath(CurrentSite.SiteId, "file", true);
            var name = UploadUtils.GetUploadFileName(file, "");
            UploadResultResponse(file,dir, name, false);
        }

        #region 文件上传至远程服务器

        /// <summary>
        /// 文件上传至远程服务器
        /// </summary>
        /// <param name="url">远程服务地址</param>
        /// <param name="postedFile">上传文件</param>
        /// <param name="parameters">POST参数</param>
        /// <param name="cookieContainer">cookie</param>
        /// <param name="output">远程服务器响应字符串</param>
        public void HttpPostFile(string url, ICompatiblePostedFile postedFile, Dictionary<string, object> parameters,
            CookieContainer cookieContainer, ref string output)
        {
            //1>创建请求
            var request = (HttpWebRequest) WebRequest.Create(url);
            //2>Cookie容器
            request.CookieContainer = cookieContainer;
            request.Method = "POST";
            request.Timeout = 20000;
            request.Credentials = CredentialCache.DefaultCredentials;
            request.KeepAlive = true;

            var boundary = "----------------------------" + DateTime.Now.Ticks.ToString("x"); //分界线
            var boundaryBytes = Encoding.ASCII.GetBytes("\r\n--" + boundary + "\r\n");
            
            //内容类型
            request.ContentType = "multipart/form-data; boundary=" + boundary;
            
            //3>表单数据模板
            var formDataTemplate = "\r\n--" + boundary + "\r\nContent-Disposition: form-data; name=\"{0}\";\r\n\r\n{1}";

            //4>读取流
            var buffer = new byte[postedFile.GetLength()];
            postedFile.OpenReadStream().Read(buffer, 0, buffer.Length);

            //5>写入请求流数据
            var strHeader =
                "Content-Disposition:application/x-www-form-urlencoded; name=\"{0}\";filename=\"{1}\"\r\nContent-Type:{2}\r\n\r\n";
            strHeader = string.Format(strHeader, "filedata", postedFile.GetFileName(), postedFile.GetContentType());
            //6>HTTP请求头
            var byteHeader = Encoding.ASCII.GetBytes(strHeader);
            try
            {
                using (var stream = request.GetRequestStream())
                {
                    //写入请求流
                    if (null != parameters)
                        foreach (var item in parameters)
                        {
                            stream.Write(boundaryBytes, 0, boundaryBytes.Length); //写入分界线
                            var formBytes =
                                Encoding.UTF8.GetBytes(string.Format(formDataTemplate, item.Key, item.Value));
                            stream.Write(formBytes, 0, formBytes.Length);
                        }

                    //6.0>分界线============================================注意：缺少次步骤，可能导致远程服务器无法获取Request.Files集合
                    stream.Write(boundaryBytes, 0, boundaryBytes.Length);
                    //6.1>请求头
                    stream.Write(byteHeader, 0, byteHeader.Length);
                    //6.2>把文件流写入请求流
                    stream.Write(buffer, 0, buffer.Length);
                    //6.3>写入分隔流
                    var trailer = Encoding.ASCII.GetBytes("\r\n--" + boundary + "--\r\n");
                    stream.Write(trailer, 0, trailer.Length);
                    //6.4>关闭流
                    stream.Close();
                }

                var response = (HttpWebResponse) request.GetResponse();
                using (var reader = new StreamReader(response.GetResponseStream()))
                {
                    output = reader.ReadToEnd();
                }

                response.Close();
            }
            catch (Exception ex)
            {
                throw new Exception("上传文件时远程服务器发生异常！", ex);
            }
        }

        #endregion
    }
}