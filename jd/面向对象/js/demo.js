/**
 * Created by yaochen on 2016/1/28.
 */
/**
 * Created by yaochen on 2016/1/28.
 */
function fn(){

}
fn.prototype = {
    $id:function(id){
        return document.getElementById(id)
    },
    $tag:function(tag){
        return document.getElementsByTagName(tag)
    },
    tab:function(){

    },
    formateString:function(str, data){
    return str.replace(/@\((\w+)\)/g, function(match, key){
        return data[key]
        });
    },
    //使用模板进行数据绑定
    //    封装绑定集合方法
    getTemplateHtml: function(id,data) {
        return template(id, data);
    },
    //封装  将带坑的html和数据进行绑定
    bindArttemplate:function(str,data){
    var render = template.compile(str);
    var html = render(data);
    return html
}
}

var $$ = new fn();
