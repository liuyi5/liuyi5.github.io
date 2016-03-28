/**
 * Created by yaochen on 2016/1/26.
 */
//定义产品对象
function Product(cart){
    //产品名称
    this.name = "";
    //产品介绍
    this.descriotion = "";
    //产品的原价
    this.price = 0;
    //产品的团购价格
    this.tuangou  = 0;
    //购买人数
    this.sum = 0;
    //图片列表
    this.img = [{small:"",big:""},{small:"",big:""},{small:"",big:""}]
   //因为我的产品对象需要使用其他对象，可以通过参数传进来
    this.cart = cart;
}
Product.prototype = {
    init:function(){
        this.bindDomDetail();
        this.bindDomImages();
        this.bindEvents()
    },
    //绑定基本信息
    bindDomDetail:function(){
        var str = "";
        str+=" <h1 id='pname'>{{name}}</h1>"
        str+='<ul class="rating">'
        str+='<li><a class="product-rate" href="#"> </a> <span> </span></li>'
        str+='<li><a href="#" id="buyCount">{{sum}}</a>人购买</li>'
        str+='<div class="clearfix"></div>'
        str+='</ul>'
        str+=' <div class="price_single">'
        str+='<span class="reducedfrom" id="price">${{price}}</span>'
        str+='<span class="actual" id="groupPrice">${{tuangou}}</span><a href="#">团购</a>'
        str+="</div>"
        str+='<h2 class="quick">简述:</h2>'
        str+='<p class="quick_desc" id="description">{{descriotion}}</p>';
        str+=$(".product").html();
        //使用formateString方法绑定数据
        str = $$.bindArttemplate(str,this);
        $(".product").html(str);

    },
    //绑定图片
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
        /*jquery插件实现的幻灯片特效*/
        $('#etalage').etalage({
            thumb_image_width: 250,
            thumb_image_height: 300,
        });
    },
    //绑定事件
    bindEvents:function(){
        var _this = this
        //注册点击事件
        $("#btnaddcart").click(function(){
            //回到顶部
            $(window).scrollTop(0);
            //将当前产品添加到购物车里
            _this.cart.products.push(_this);
            //重新绑定
           _this.cart.init();
        })
    }
}


