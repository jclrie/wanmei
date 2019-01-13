<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<!--支付页-->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>支付页</title>
    <link rel="stylesheet" type="text/css" href="/static/css/pay.css">
    <link rel="stylesheet" type="text/css" href="/static/css/paycart.css">
    <link rel="stylesheet" type="text/css" href="/static/css/login.css">
</head>
<body style="text-align: left;">

<jsp:include page="head.jsp"></jsp:include>
    <!-- 面包屑导航 -->
    <div class="nav_bar">
        <div class="wrap">
            您现在的位置：
            <a href="index.html">首页</a>&gt;
            <a href="#">我的购物车</a>&gt;
            <a href="#">提交订单</a>
        </div>
    </div>
    <!-- 购物车商品主体 -->
    <div class="wrap">
        <div class="cart_send">
            <div class="cf send_header">
                <div class="f_left title">
                    <h1>结算页</h1>
                </div>
                <ul class="f_right step">
                    <li class="finish"><p><span>1</span></p><font>我的购物车</font></li>
                    <li class="ongoing"><p><span>2</span></p><font>填写核对订单信息</font></li>
                    <li><p><span>3</span></p><font>提交支付</font></li>
                </ul>
            </div>
            <!-- 收货人信息 -->
            <div class="address">
                <div class="cf title">
                    <a href="javascript:void(0)" class="f_right address_add"><span></span>新增收货地址</a>
                    收货人信息
                </div>
                <div class="address_list">
                    <table cellspacing="0" cellpadding="0" class="list">
                        <tbody><tr data-address-id="36759" class="curr">
            <td width="103">
                <p class="name">
                    <input type="radio" name="addressId" id="addr_36759" value="36759" checked="checked">
                    <label for="addr_36759"><span class="ellipsis2" title="">${user.relname} </span><em></em></label>
                </p>
            </td>
            <td>
                <p class="info">
                    <span class="addr ellipsis2" title="北京 北京市 东城区 河北建设 (100010)">北京 北京市 东城区 河北建设 (100010)</span>
                    <span class="tel">${user.tel}</span>
                </p>
            </td>
            <td>
                <p class="operated">
                    <a href="javascript:void(0)" class="edit">编辑</a>
                    <a href="javascript:void(0)" class="del">删除</a>
                </p>
            </td>
        </tr>
                        </tbody>
                    </table>
                </div>
                <p class="address_more" style="display: none;"><a href="javascript:void(0)" class="">更多地址<span></span></a></p>
                
            </div>
            <!-- 确认商品 -->
            <div class="buying_list">
                <p class="title"><a href="/cartView" class="f_right">返回购物车</a>确认商品</p>
                <table cellspacing="0" cellpadding="0">
                    <tbody>
                    		<c:set var="total" value="0"></c:set>
                    		<c:forEach items="${carts}" var="cart">
                                <tr class="product_item">
                                    <td width="50"><a href="#" target="_blank"><img src="http://localhost:7070${cart.product.imgurl}" width="50" height="50" alt="" title=""></a></td>
                                    <td class="name">
                                        <h1><a href="#" class="ellipsis2" target="_blank" title="${cart.product.pname}">${cart.product.pname}&nbsp;${cart.vAttrValue}</a></h1>
                                        <p class="ellipsis2" title=""></p>
                                    </td>
                                    <td class="num"> × <span>${cart.num}</span></td>
                                    <td class="price">¥<span>${cart.num*cart.product.price}</span></td>
                                    <c:set var="total" value="${total+cart.product.price*cart.num}"></c:set>
                                </tr>
                              </c:forEach>
                    </tbody>
                </table>
            </div>
            <!-- 结算 -->
            <div class="cf statement">
                <table cellpadding="0" cellspacing="0" class="f_left">
                    <tbody>
                    <tr>
                        <th>优惠券</th>
                        <td>
                            <select id="couponSelect" name="coupon" class="my_select" onchange="selectCoupon()">
                                <option value="0">-- 选择优惠券 --</option>
                                
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>输入优惠券</th>
                        <td>
                            <input type="text" class="text" id="newCouponKey">
                            <input type="button" value="兑换" class="btn btn_bindCoupon">
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" class="f_right">
                    <tbody>
                    <tr>
                        <th>商品数量：</th>
                        <td>${carts.size()}</td>
                    </tr>
                    <tr>
                        <th>折扣：</th>
                        <td id="couponAmount">¥0.00</td>
                    </tr>
                    <tr>
                        <th>邮费：</th>
                        <td id="shippingFeeAmount">¥15.00</td>
                    </tr>
                    <tr class="total">
                        <th>合计：</th>
                        <td id="sumRmbPrice">¥${total+15.00}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <!-- 立即支付 -->
            <div class="pay_immediately">
                <input type="hidden" name="token" id="token" value="RraxBPvQbfGtBsOUP2j2uaBGi1ekEmQvznw">
                <input type="hidden" id="sumPrice" value="64400">
                <input type="hidden" id="couponPrice" value="0">
                <input type="hidden" id="discountPrice" value="0">
                <input type="hidden" id="shippingFeePrice" value="1500">
                <!--需要自己修改支付页面的调整方式-->
                <input type="button" value="提交订单" class="btn btn_js" onclick="window.open('/order/payResultView')">
            </div>
        </div>
        











<!-- 猜你喜欢 && 我的关注 -->
<div class="likes">
    <div class="nav">
        <ul class="cf">
            <li class="on">猜你喜欢</li>
            
            <li>我的关注</li>
            
        </ul>
    </div>
    <div class="tempWrap" style="overflow:hidden; position:relative; width:1190px"><div class="content" style="width: 2380px; position: relative; overflow: hidden; padding: 0px; margin: 0px; left: 0px;">
        <div class="like" style="float: left; width: 1190px;">
            <div class="bd">
                <div class="tempWrap" style="overflow:hidden; position:relative; width:1080px"><div class="list" style="width: 2160px; position: relative; overflow: hidden; padding: 0px; margin: 0px; left: 0;">
    
    
    <ul class="cf" style="float: left; width: 1080px;">
    
        <li>
            <a href="#" target="_blank"><img src="/static/images/pay/5d951f30-3bec-4af3-b906-27c8b4156f84_120.jpg" alt="" title="DOTA2-TI7  水晶喵女与狸娜 T恤"></a>
            <p class="name ellipsis" title="DOTA2-TI7  水晶喵女与狸娜 T恤" style="word-wrap: break-word; word-break: break-all;">DOTA2-TI7  水晶喵女与狸娜 T恤</p>
            <p class="price">¥139.00</p>
        </li>
    
    
    
        <li>
            <a href="#" target="_blank"><img src="/static/images/pay/d9cde1a175234cb8b4032fcc4d55aa34_120.jpg" alt="" title="DOTA2-2018年国际邀请赛 卫衣"></a>
            <p class="name ellipsis" title="DOTA2-2018年国际邀请赛 卫衣" style="word-wrap: break-word; word-break: break-all;">DOTA2-2018年国际邀请赛 卫衣</p>
            <p class="price">¥499.00</p>
        </li>
    
    
    
        <li>
            <a href="#" target="_blank"><img src="/static/images/pay/aa558b1778a04eaf9e4d3dddb32d9d3f_120.jpg" alt="" title="DOTA2- T恤 烫金拍拍"></a>
            <p class="name ellipsis" title="DOTA2- T恤 烫金拍拍" style="word-wrap: break-word; word-break: break-all;">DOTA2- T恤 烫金拍拍</p>
            <p class="price">¥139.00</p>
        </li>
    
    
    
        <li>
            <a href="#" target="_blank"><img src="/static/images/pay/3187c675efd94166a622985ce759e2a9_120.jpg" alt="" title="DOTA2 - T恤 Q版熊战士"></a>
            <p class="name ellipsis" title="DOTA2 - T恤 Q版熊战士" style="word-wrap: break-word; word-break: break-all;">DOTA2 - T恤 Q版熊战士</p>
            <p class="price">¥139.00</p>
        </li>
    
    
    
        <li>
            <a href="#" target="_blank"><img src="/static/images/pay/93945894-d9c6-4f43-91cc-76203c9893d8_120.jpg" alt="" title="DOTA2-TI7 装甲就位 T恤"></a>
            <p class="name ellipsis" title="DOTA2-TI7 装甲就位 T恤" style="word-wrap: break-word; word-break: break-all;">DOTA2-TI7 装甲就位 T恤</p>
            <p class="price">¥139.00</p>
        </li>
    
    
    
        <li>
            <a href="#" target="_blank"><img src="/static/images/pay/042cbcd654af4bb69fd885d0d6e9d0ca_120.jpg" alt="" title="DOTA2-2018年国际邀请赛 主题马克杯"></a>
            <p class="name ellipsis" title="DOTA2-2018年国际邀请赛 主题马克杯" style="word-wrap: break-word; word-break: break-all;">DOTA2-2018年国际邀请赛 主题马克杯</p>
            <p class="price">¥118.00</p>
        </li>
        
    </ul>
    
    
    
    <ul class="cf" style="float: left; width: 1080px;">
    
        <li>
            <a href="#" target="_blank"><img src="/static/images/pay/5997b704-37e9-42e0-9ae1-641913e0074e_120.jpg" alt="" title="DOTA2-潮汐猎人 马克杯"></a>
            <p class="name ellipsis" title="DOTA2-潮汐猎人 马克杯" style="word-wrap: break-word; word-break: break-all;">DOTA2-潮汐猎人 马克杯</p>
            <p class="price">¥188.00</p>
        </li>
        
    </ul>
    </div></div>
                <a class="prev" href="javascript:void(0)"><span></span></a>
                <a class="next" href="javascript:void(0)"><span></span></a>
            </div>
        </div>
        
        <div class="like" style="float: left; width: 1190px;">
            <div class="bd">
                <div class="list">
                    
                    
                </div>
                <a class="prev" href="javascript:void(0)"><span></span></a>
                <a class="next" href="javascript:void(0)"><span></span></a>
            </div>
        </div>
         
    </div></div>
</div>

    </div>
<jsp:include page="footer.jsp"></jsp:include>
<!--显示购物车-->
<script type="text/javascript">
    var ctx = '';
    var host_url = '#';
    var static_image_url = '#';
    var sso_service_type = '#';
    var page_id = 'list';
    var mobile = '';
</script>
<script type="text/javascript" src="/static/js/jq_183.js"></script>
<script type="text/javascript" src="/static/js/jquery.boxy.js"></script>
<script type="text/javascript" src="/static/js/lib.js"></script>

<!--登录模块-->
<script>
    $("#login").click(function () {
        showDiv($(".login"));
        function showDiv(obj){
            $(obj).show();
            center(obj);
            $(window).scroll(function(){
                center(obj);
            });
            $(window).resize(function(){
                center(obj);
            });
        }
        function center(obj){
            var windowWidth = document.documentElement.clientWidth;
            var windowHeight = document.documentElement.clientHeight;
            var popupHeight = $(obj).height();
            var popupWidth = $(obj).width();
            $(obj).css({
                "position": "absolute",
                "top": (windowHeight-popupHeight)/2+$(document).scrollTop(),
                "left": (windowWidth-popupWidth)/2
            });
        }
    });
    // 隐藏登录层
    $(".close_box font").click(function () {
        $(".login").delay(1000).fadeOut(1000);
        setTimeout(function () {
            $("#form_login").get(0).reset();
        },1500);
    });
</script>
</body></html>