///**
// * Created by yaochen on 2016/1/26.
// */
////���幺�ﳵ����
//function Cart(){
//     //��Ʒ���ܼ�
//    this.totalPrice1 = 0
//      //��Ʒ��������
//    this.sum = 0
//      //��Ʒ���б�
//    this.products = []
//}
//Cart.prototype = {
//      //����
//    init:function(){
//        this.addCart();
//        this.getSum();
//        this.totalPrice();
//      },
//       //��Ӳ�Ʒ��Ϣ
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
//    //��������
//    getSum:function(){
//        this.sum = this.products.length;
//        //console.log(this.sum)
//        return $('.cartsum').html(this.sum)
//    },
//    //�����ܼ�
//    totalPrice:function(){
//        //����*����
//        for(var i=0;i<this.products.length;i++){
//            this.totalPrice1 += this.products[i].tuangou;
//            return $('#cartprice').html("$"+this.totalPrice1);
//        }
//    }
//}


function Cart(){
    //��Ʒ������
    this.sum = 0;
    //��Ʒ���ܼ�
    this.price = 0;
    //��Ʒ����Ϣ
    this.products = [];
}


Cart.prototype = {
    //�󶨻�����Ϣ
    bindBasic:function(){

    },
    //�󶨲�Ʒ�б�
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
    //����
    init:function(){
        this.bindBasic();
        this.bindProductList();

        $('.cartsum').html(this.getProductSum());
        $('#cartprice').html("$"+this.getProductPrices())
    },
    //�����Ʒ�ĸ���
    getProductSum:function(){
        if(this.products.length && this.products.length>=0){
            return this.products.length;
        }else{
            return 0;
        }
    },
    //�����Ʒ�ܼ۸�
    getProductPrices:function(){
        var sum = 0;
        for(var i = 0; i<this.products.length;i++){
           sum+=this.products[i].tuangou;
        }
        return sum;

    }

}
