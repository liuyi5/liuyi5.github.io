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
    //ʹ��ģ��������ݰ�
    //    ��װ�󶨼��Ϸ���
    getTemplateHtml: function(id,data) {
        return template(id, data);
    },
    //��װ  �����ӵ�html�����ݽ��а�
    bindArttemplate:function(str,data){
    var render = template.compile(str);
    var html = render(data);
    return html
}
}

var $$ = new fn();
