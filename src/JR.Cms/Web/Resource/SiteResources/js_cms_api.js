﻿//
//文件：Cms Javascript WebApi
//版本: 0.0.1
//时间：2014-06-21
// Note : 请调用API前，先调用jr.spi.setPath('${page.domain}');这样才能请求到指定站点的接口。
// Modify :  2015-09-18 19:37  [jsix] [!] : 重构
//
if (!window.$jr) alert('未加载core.js！');
$jr.extend({
    /** old version */
    hapi: {
        path: '',
        setPath:function(p) {
            this.path = p;
        },
        request: function (apiName, params, call, errCall) {
            var uri = this.path + '/webapi?key=11857832134&name=' + apiName;
            for (var key in params) {
                uri += '&' + key + '=' + params[key];
            }
            jr.xhr.request(uri,{params: {}, method: 'GET', data: 'json' }, {
                success: call,
                error: errCall
            });
        },
        getRLink: function (contentId, data,callback, error) {
            this.request(data === 'html' ? 'rel_link' : 'rel_link_json',
                { content_id: contentId },
                callback,
                error
                );
        }
    },
    api:{
        path: '/cms/webapi',
        setPath:function(p) {
            this.path = p;
        },
        request: function (apiName, params, call, errCall) {
            var url = this.path +apiName+ (apiName.indexOf("?") === -1?"?":"&")+'key=11857832134';
            jr.xhr.get(url,call, errCall);
        },
        getRLink: function (contentId, callback, error) {
            this.request("relate/"+contentId, callback, error);
        }
    },
});