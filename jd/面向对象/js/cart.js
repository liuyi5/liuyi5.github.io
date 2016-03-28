///**
// * Created by yaochen on 2016/1/26.
// */
////定义购物车对象
//function Cart(){
//     //产品的总价
//    this.totalPrice1 = 0
//      //产品的总数量
//    this.sum = 0
//      //产品的列表
//    this.products = []
//}
//Cart.prototype = {
//      //部件
//    init:function(){
//        this.addCart();
//        this.getSum();
//        this.totalPrice();
//      },
//       //添加产品信息
//    addCart:function(){
//
//        var str = "";
//        //console.log(this.products.length)
//        for(var i = 0;i<this.products.length;i++){
//            str+='<div class="cart_box">'
//                str+='<div class="message">'
//                str+='<div class="alert-close"> </div>'
//                str+='<div class="list_img"><img src="'+this.products[i].img[0].small+'" class="img-responsive" alt=""/></div>'
//                str+='<div class="list_desc"><h4><a href="#">'+this.products[i].name+'</a></h4><span class="actual">$'+this.products[i].tuangou+'</span></div>'
//                str+='<div class="clearfix"></div>'
//                str+=' </div>'
//            str+=' </div>'
//        }
//
//            $(".shopping_cart").html(str);
//    },
//    //计算数量
//    getSum:function(){
//        this.sum = this.products.length;
//        //console.log(this.sum)
//        return $('.cartsum').html(this.sum)
//    },
//    //计算总价
//    totalPrice:function(){
//        //数量*单价
//        for(var i=0;i<this.products.length;i++){
//            this.totalPrice1 += this.products[i].tuangou;
//            return $('#cartprice').html("$"+this.totalPrice1);
//        }
//    }
//}


function Cart(){
    //产品的数量
    this.sum = 0;
    //产品的总价
    this.price = 0;
    //产品的信息
    this.products = [];
}


Cart.prototype = {
    //绑定基本信息
    bindBasic:function(){

    },
    //绑定产品列表
    bindProductList:function(){
        var str = "";
        for(var i = 0;i<this.products.length;i++){
            str+='<div class="cart_box">'
                str+='<div class="message">'
                str+='<div class="alert-close"> </div>'
                str+='<div class="list_img"><img src="'+this.products[i].img[0].small+'" class="img-responsive" alt=""/></div>'
                str+='<div class="list_desc"><h4><a href="#">'+this.products[i].name+'</a></h4><span class="actual">$'+this.products[i].tuangou+'</span></div>'
                str+='<div class="clearfix"></div>'
                str+=' </div>'
            str+=' </div>'
        }

            $(".shopping_cart").html(str);
    },
    //部件
    init:function(){
        this.bindBasic();
        this.bindProductList();

        $('.cartsum').html(this.getProductSum());
        $('#cartprice').html("$"+this.getProductPrices())
    },
    //计算产品的个数
    getProductSum:function(){
        if(this.products.length && this.products.length>=0){
            return this.products.length;
        }else{
            return 0;
        }
    },
    //计算产品总价格
    getProductPrices:function(){
        var sum = 0;
        for(var i = 0; i<this.products.length;i++){
           sum+=this.products[i].tuangou;
        }
        return sum;

    }

}
