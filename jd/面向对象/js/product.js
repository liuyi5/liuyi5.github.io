/**
 * Created by yaochen on 2016/1/26.
 */
//�����Ʒ����
function Product(cart){
    //��Ʒ����
    this.name = "";
    //��Ʒ����
    this.descriotion = "";
    //��Ʒ��ԭ��
    this.price = 0;
    //��Ʒ���Ź��۸�
    this.tuangou  = 0;
    //��������
    this.sum = 0;
    //ͼƬ�б�
    this.img = [{small:"",big:""},{small:"",big:""},{small:"",big:""}]
   //��Ϊ�ҵĲ�Ʒ������Ҫʹ���������󣬿���ͨ������������
    this.cart = cart;
}
Product.prototype = {
    init:function(){
        this.bindDomDetail();
        this.bindDomImages();
        this.bindEvents()
    },
    //�󶨻�����Ϣ
    bindDomDetail:function(){
        var str = "";
        str+=" <h1 id='pname'>{{name}}</h1>"
        str+='<ul class="rating">'
        str+='<li><a class="product-rate" href="#"> </a> <span> </span></li>'
        str+='<li><a href="#" id="buyCount">{{sum}}</a>�˹���</li>'
        str+='<div class="clearfix"></div>'
        str+='</ul>'
        str+=' <div class="price_single">'
        str+='<span class="reducedfrom" id="price">${{price}}</span>'
        str+='<span class="actual" id="groupPrice">${{tuangou}}</span><a href="#">�Ź�</a>'
        str+="</div>"
        str+='<h2 class="quick">����:</h2>'
        str+='<p class="quick_desc" id="description">{{descriotion}}</p>';
        str+=$(".product").html();
        //ʹ��formateString����������
        str = $$.bindArttemplate(str,this);
        $(".product").html(str);

    },
    //��ͼƬ
    bindDomImage:function(data){
        var str =""
        str+='<li>'
        str+=' <img class="etalage_thumb_image" src="{{small}}" class="img-responsive" />'
        str+='<img class="etalage_source_image" src="{{big}}" class="img-responsive" />'
        str+='</li>'
        return $$.bindArttemplate(str,data);
    },
    bindDomImages:function(){
        var str =""
        for(var i = 0;i<this.img.length;i++){
            str += this.bindDomImage(this.img[i])
        }
        $(".etalage").html(str)
        /*jquery���ʵ�ֵĻõ�Ƭ��Ч*/
        $('#etalage').etalage({
            thumb_image_width: 250,
            thumb_image_height: 300,
        });
    },
    //���¼�
    bindEvents:function(){
        var _this = this
        //ע�����¼�
        $("#btnaddcart").click(function(){
            //�ص�����
            $(window).scrollTop(0);
            //����ǰ��Ʒ��ӵ����ﳵ��
            _this.cart.products.push(_this);
            //���°�
           _this.cart.init();
        })
    }
}


