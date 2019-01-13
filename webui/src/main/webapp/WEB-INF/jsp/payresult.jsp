<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<!--支付最终页-->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>支付页</title>
    <link rel="stylesheet" type="text/css" href="/static/css/payresult.css">
    <link rel="stylesheet" type="text/css" href="/static/css/payresultcart.css">
    <link rel="stylesheet" type="text/css" href="/static/css/login.css">
</head>
<body style="text-align: left;">
<jsp:include page="head.jsp"></jsp:include>
    <!-- 面包屑导航 -->
    <div class="nav_bar">
        <div class="wrap">
            您现在的位置：
            <a href="index.html">首页</a>&gt;
            <a href="shoppingcart.html">我的购物车</a>&gt;
            <a href="#">提交订单</a>
        </div>
    </div>
    <!-- 购物车商品主体 -->
    <div class="wrap">
        <div class="cart_send">
            <div class="cf send_header">
                <div class="f_left title">
                            <h1>提交支付</h1>
                </div>
                        <ul class="f_right step">
                            <li class="finish"><p><span>1</span></p><font>我的购物车</font></li>
                            <li class="finish"><p><span>2</span></p><font>填写核对订单信息</font></li>
                            <li class="ongoing"><p><span>3</span></p><font>提交支付</font></li>
                        </ul>
            </div>
            <!-- 订单信息 -->
            <div class="orders" style="position:relative;">
                <dl class="cf">
                    <dt class="f_left"></dt>
                    <dd class="f_left" style="width: 800px;">
                                <p class="title">订单已生成，请您记得在1小时内完成支付，否则需要重新下单哦！</p>
                        <table cellspacing="0" cellpadding="0">
                            <tbody>
                            <tr>
                                <th>订单号：</th>
                                <!--订单号-->
                                <td><a href="#" class="num">E1069934790589968384</a></td>
                            </tr>
                            <tr>
                                <th>总金额：</th>
                                <td id="payFee">659.00元</td>
                            </tr>
                            
                            <tr>
                                <th>收件人：</th>
                                <td>张三 13345678901</td>
                            </tr>
                            
                            <tr>
                                <th>配送地址：</th>
                                <td>河北省 石家庄市 元氏县，河北建设 (051130)</td>
                            </tr>
                            </tbody>
                        </table>
                    </dd>
                </dl>
            </div>
            <!-- 付款方式 -->
            <div class="pay_method">
                <p class="title">请选择以下支付方式付款</p>
                <dl>
                    <dt>第三方支付</dt>
                    <dd class="cf">
                        <a href="javascript:void(0)" value="12" class="curr"><img src="/static/images/payresult/pay006.jpg" width="174" height="60" alt="支付宝扫码" title="支付宝扫码"></a>
                        <a href="javascript:void(0)" value="11"><img src="/static/images/payresult/pay007.jpg" width="174" height="60" alt="微信扫码" title="微信扫码"></a>
                        <a href="javascript:void(0)" value="6"><img src="/static/images/payresult/pay001.jpg" width="174" height="60" alt="支付宝" title="支付宝"></a>
                    </dd>
                </dl>
                <dl>
                    <dt>银行卡支付</dt>
                    <dd class="cf">
                        <a href="javascript:void(0)" value="101"><img src="/static/images/payresult/pay002.jpg" width="174" height="60" alt="招商银行" title="招商银行"></a>
                        <a href="javascript:void(0)" value="102"><img src="/static/images/payresult/pay003.jpg" width="174" height="60" alt="中国工商银行" title="中国工商银行"></a>
                        <a href="javascript:void(0)" value="104"><img src="/static/images/payresult/pay004.jpg" width="174" height="60" alt="中国农业银行" title="中国农业银行"></a>
                        <a href="javascript:void(0)" value="105"><img src="/static/images/payresult/pay005.jpg" width="174" height="60" alt="中国银行" title="中国银行"></a>
                    </dd>
                </dl>
            </div>
            <!-- 提交按钮 -->
            <div class="pay_submit">
                <input type="button" value="立即支付" class="submit">
                <!--需要自己修改订单详情页的弹出以及请求-->
                <input type="button" value="订单详情" class="info" onclick="window.open('pay.html')">
            </div>
            <form method="post" id="pay_form" action="" target="_blank">
                <input type="hidden" id="payMethod" name="payMethod" value="12">
                <input type="hidden" id="orderSn" name="orderSn" value="E1069934790589968384">
            </form>
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
            <a href="#" target="_blank"><img src="/static/images/payresult/5d951f30-3bec-4af3-b906-27c8b4156f84_120.jpg" alt="" title="DOTA2-TI7  水晶喵女与狸娜 T恤"></a>
            <p class="name ellipsis" title="DOTA2-TI7  水晶喵女与狸娜 T恤" style="word-wrap: break-word; word-break: break-all;">DOTA2-TI7  水晶喵女与狸娜 T恤</p>
            <p class="price">¥139.00</p>
        </li>

        <li>
            <a href="#" target="_blank"><img src="/static/images/payresult/d9cde1a175234cb8b4032fcc4d55aa34_120.jpg" alt="" title="DOTA2-2018年国际邀请赛 卫衣"></a>
            <p class="name ellipsis" title="DOTA2-2018年国际邀请赛 卫衣" style="word-wrap: break-word; word-break: break-all;">DOTA2-2018年国际邀请赛 卫衣</p>
            <p class="price">¥499.00</p>
        </li>
        <li>
            <a href="#" target="_blank"><img src="/static/images/payresult/aa558b1778a04eaf9e4d3dddb32d9d3f_120.jpg" alt="" title="DOTA2- T恤 烫金拍拍"></a>
            <p class="name ellipsis" title="DOTA2- T恤 烫金拍拍" style="word-wrap: break-word; word-break: break-all;">DOTA2- T恤 烫金拍拍</p>
            <p class="price">¥139.00</p>
        </li>
        <li>
            <a href="#" target="_blank"><img src="/static/images/payresult/3187c675efd94166a622985ce759e2a9_120.jpg" alt="" title="DOTA2 - T恤 Q版熊战士"></a>
            <p class="name ellipsis" title="DOTA2 - T恤 Q版熊战士" style="word-wrap: break-word; word-break: break-all;">DOTA2 - T恤 Q版熊战士</p>
            <p class="price">¥139.00</p>
        </li>

        <li>
            <a href="#" target="_blank"><img src="/static/images/payresult/93945894-d9c6-4f43-91cc-76203c9893d8_120.jpg" alt="" title="DOTA2-TI7 装甲就位 T恤"></a>
            <p class="name ellipsis" title="DOTA2-TI7 装甲就位 T恤" style="word-wrap: break-word; word-break: break-all;">DOTA2-TI7 装甲就位 T恤</p>
            <p class="price">¥139.00</p>
        </li>
    
    
    
        <li>
            <a href="#" target="_blank"><img src="/static/images/payresult/042cbcd654af4bb69fd885d0d6e9d0ca_120.jpg" alt="" title="DOTA2-2018年国际邀请赛 主题马克杯"></a>
            <p class="name ellipsis" title="DOTA2-2018年国际邀请赛 主题马克杯" style="word-wrap: break-word; word-break: break-all;">DOTA2-2018年国际邀请赛 主题马克杯</p>
            <p class="price">¥118.00</p>
        </li>
        
    </ul>
    
    
    
    <ul class="cf" style="float: left; width: 1080px;">
    
        <li>
            <a href="#" target="_blank"><img src="/static/images/payresult/5997b704-37e9-42e0-9ae1-641913e0074e_120.jpg" alt="" title="DOTA2-潮汐猎人 马克杯"></a>
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
<script type="text/javascript" src="js/jq_183.js"></script>
<script type="text/javascript" src="js/jquery.boxy.js"></script>
<script type="text/javascript" src="js/lib.js"></script>

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