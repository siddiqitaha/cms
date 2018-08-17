package com.gcy.sz.repo;
// auto generate by gof (http://github.com/jsix/goex)
import java.io.Serializable;
import java.util.List;
import java.util.Map;
import com.gcy.sz.repo.model.*;

/** 仓储 */
public interface ICmsTableColumnRepo {
    /** 获取 */
    CmsTableColumnEntity get(Serializable id);
    /** 根据条件获取单条 */
    CmsTableColumnEntity getCmsTableColumnBy(String where,Map<String,Object> params);
    /** 根据条件获取多条 */
    List<CmsTableColumnEntity> selectCmsTableColumn(String where,Map<String,Object> params);
    /** 保存 */
    int saveCmsTableColumn(CmsTableColumnEntity v);
    /** 删除 */
    Error deleteCmsTableColumn(Serializable id);
    /** 批量删除 */
    int BatchDeleteCmsTableColumn(String where,Map<String,Object> params);
}
