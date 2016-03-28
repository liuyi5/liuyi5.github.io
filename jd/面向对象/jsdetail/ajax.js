

var product =  new Product()
//页面的业务逻辑
$(document).ready(function(){
    $$.myAjax('http://localhost/data/product.json',function(e){
        var json = JSON.parse(e);
        /*开始编程*/
        /*产品相关*/
        /*实例化*/
        product.name=json.name;
        product.description=json.description
        product.normalPrice=json.price;
        product.groupbuyPrice=json.youhuijia;
        product.buySum=json.sum;
        product.images=[
            {small:'images/s11.jpg',big:'images/s11.jpg'},
            {small:'images/s12.jpg',big:'images/s12.jpg'},
            {small:'images/s13.jpg',big:'images/s13.jpg'}
        ]
        /*使用对象中的方法属性*/
        product.bindDOMDetail()
        product.bindDOMImage()

        /*绑定事件*/
        $('#btnaddcart').click(function(){
            /*购物车新增一个产品*/
            cart.products.push(product)
            ///*更新购物车 - 重新绑定购物车*/
            /*如果不封装，这里就可能产生代码重复*/
            cart.bindBasic()
            cart.bindList()
            $(window).scrollTop(0);
        });

    });


    /*实例购物车*/
    var cart =  new Cart()
    cart.sum=3
    cart.allPrice=2000

    /*假设购物车中已经有三个产品*/
    cart.products.push(product)
    cart.products.push(product)
    cart.products.push(product)

    /*使用对象中的方法属性*/
    cart.bindBasic()
    cart.bindList()

});