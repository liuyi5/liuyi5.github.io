/**
 * Created by yaochen on 2016/1/27.
 */

//模拟产品数据
    //实例化购物车
var cart = new Cart();
//实例化产品
var p = new Product(cart);
p.name = "HM休闲服登山包";
p.price = 600
p.tuangou = 550
p.descriotion = "棒棒的，棒棒的，登山一流，服务一流，你好，我好，他也好，太棒了，一口气等上珠穆朗玛峰"
p.img = [{small:"images/s11.jpg",big:"images/s13.jpg"},{small:"images/s11.jpg",big:"images/s13.jpg"}]

//模拟收据 模拟购物车里面有三个产品
cart.products.push(p);
cart.products.push(p);
cart.products.push(p);

//面向对象编程
p.init();
cart.init();



//    //实例化购物车
//var cart = new Cart();
//$("#btnaddcart").on("click",function() {
//    $(window).scrollTop(0);
//    cart.products.push(p)
//    cart.init();
//    //cart.addCart();
//    //cart.getSum();//数量
//    //cart.totalPrice();//总价
//})




