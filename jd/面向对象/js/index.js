/**
 * Created by yaochen on 2016/1/27.
 */

//ģ���Ʒ����
    //ʵ�������ﳵ
var cart = new Cart();
//ʵ������Ʒ
var p = new Product(cart);
p.name = "HM���з���ɽ��";
p.price = 600
p.tuangou = 550
p.descriotion = "�����ģ������ģ���ɽһ��������һ������ã��Һã���Ҳ�ã�̫���ˣ�һ�����������������"
p.img = [{small:"images/s11.jpg",big:"images/s13.jpg"},{small:"images/s11.jpg",big:"images/s13.jpg"}]

//ģ���վ� ģ�⹺�ﳵ������������Ʒ
cart.products.push(p);
cart.products.push(p);
cart.products.push(p);

//���������
p.init();
cart.init();



//    //ʵ�������ﳵ
//var cart = new Cart();
//$("#btnaddcart").on("click",function() {
//    $(window).scrollTop(0);
//    cart.products.push(p)
//    cart.init();
//    //cart.addCart();
//    //cart.getSum();//����
//    //cart.totalPrice();//�ܼ�
//})




