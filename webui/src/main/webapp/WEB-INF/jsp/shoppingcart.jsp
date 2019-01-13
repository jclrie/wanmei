<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html> 
<!--购物车-->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>购物车</title>
    <link rel="stylesheet" type="text/css" href="/static/css/shoppingcart.css">
    <link rel="stylesheet" type="text/css" href="/static/css/cart.css">
    <link rel="stylesheet" type="text/css" href="/static/css/login.css">
</head>
<body style="text-align: left;">
<jsp:include page="head.jsp"></jsp:include>
<!-- 面包屑导航 -->
    <div class="nav_bar">
        <div class="wrap">
            <a href="index.html">首页</a>&gt;
            <a href="#">我的购物车</a>
        </div>
    </div>
    <!-- 购物车商品主体 -->
    <div class="wrap">

            <div class="cart_list">
                <!--购物车表单-->
                <form id="cartForm" method="post" action="">
                    <table cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <td class="state"><span class="all_checkbox"><span class="checkbox"><label class="curr" data-chose="choseAll" data-pid="check_bnt" onclick="togAll(this);"></label></span><label>全选</label></span></td>
                            <td class="name">商品名称</td>
                            <td class="num">数量</td>
                            <td class="prices">价格</td>
                            <td class="operation">操作</td>
                        </tr>
                        </thead>
                        <tbody>
                        	<c:set var="total" value="0"></c:set>
                        	<c:forEach items="${carts}" var="cart">
	                            <tr data-pid="522">
	                                <td class="state">
	                                    <span class="checkbox">
	                                        <input type="checkbox" name="pids" value="522" checked="checked">
	                                        <label class="curr" data-pid="check_bnt" data-chose="cart_bnt" data-kuid="${cart.kuid}" onclick="updateSingle(this);"></label>
	                                    </span>
	                                </td>
	                                <td>
	                                        <dl class="cf">
	                                            <dt class="f_left"><a href="/prodetailView?pid=${cart.id}" target="_blank"><img src="http://localhost:7070/${cart.product.imgurl}" alt="" title="${cart.product.pname}"></a></dt>
	                                            <dd class="f_left">
	                                                <h1 class="cf">
	                                                    <a href="/prodetailView?pid=${cart.id}" class="name ellipsis2" target="_blank" title="${cart.product.pname}">${cart.product.pname}&nbsp;${cart.vAttrValue}</a>
	                                                </h1>
	
	                                            </dd>
	                                        </dl>
	                                </td>
	                                <td>
	                                    <input id="single_price${cart.kuid}" type="hidden" value="${cart.product.price}">
	                                    <span class="amount number-input"><span class="reduce disable" onclick="reduce('${cart.kuid}')" id="reduce"></span><input id="buyNumber${cart.kuid}"  onkeyup="this.value=this.value.replace(/\D/gi,'')" onblur="onInput('${cart.kuid}')" name="num_522" data-pid="522" type="text" value="${cart.num}" min="1" data-stock="45" data-suit-number="1" maxlength="3" autocomplete="off"><span class="plus" onclick="plus('${cart.kuid}')"></span></span>
	                                        <p class="stock">库存<font id="stock_num${cart.kuid}">${cart.productKuid.storenum}</font>件</p>
	                                </td>
	                                <td class="price">¥<font id="price${cart.kuid}" class="everyPrice">${cart.product.price*cart.num}</font></td>
	                                <td><a href="javascript:void(0)" onclick="del('${cart.kuid}')" class="del" data-pid="522"><span></span></a></td>
	                            </tr>
	                            <c:set var="total" value="${total+cart.product.price*cart.num}"></c:set>
							</c:forEach>
                        </tbody>
                    </table>
                    <div class="cf total_bar">
                        <p class="f_left">
                            <span class="all_checkbox"><span class="checkbox"><label class="curr" data-chose="choseAll" data-pid="check_bnt" onclick="togAll(this);"></label></span><label>全选</label></span>
                            <a href="javascript:void(0)" class="batch-delete" onclick="delChosen()">删除选中商品</a>
                            <a href="/productview">继续购物</a>
                        </p>
                        <div class="f_right">
                            <div class="f_right">
                                <input type="button" value="去结算" class="btn btn_checkout" onclick="toPay();">
                                <p class="tip tip_checkout" style="display: none;"></p>
                            </div>
                            <p class="f_right">共<span id="num"><font id="checkoutNum">${carts.size()}</font></span>件商品，　合计：<span>¥<font id="checkoutPrice">${total}</font></span></p>
                        </div>
                    </div>
                </form>
            </div>

<!-- 猜你喜欢 && 我的关注 -->
<div class="likes">
    <div class="nav">
        <ul class="cf">
            <li class="on">猜你喜欢</li>

        </ul>
    </div>
    <div class="tempWrap" style="overflow:hidden; position:relative; width:1190px"><div class="content" style="width: 1190px; position: relative; overflow: hidden; padding: 0px; margin: 0px; left: 0px;">
        <div class="like" style="float: left; width: 1190px;">
            <div class="bd">
                <div class="tempWrap" style="overflow:hidden; position:relative; width:1080px"><div class="list" style="width: 2160px; position: relative; overflow: hidden; padding: 0px; margin: 0px; left: 0px;">


    <ul class="cf" style="float: left; width: 1080px;">

        <li>
            <a href="#" target="_blank"><img src="/static/images/shoppingcart/5d951f30-3bec-4af3-b906-27c8b4156f84_120.jpg" alt="" title="DOTA2-TI7  水晶喵女与狸娜 T恤"></a>
            <p class="name ellipsis" title="DOTA2-TI7  水晶喵女与狸娜 T恤" style="word-wrap: break-word; word-break: break-all;">DOTA2-TI7  水晶喵女与狸娜 T恤</p>
            <p class="price">¥139.00</p>
        </li>



        <li>
            <a href="#" target="_blank"><img src="/static/images/shoppingcart/d9cde1a175234cb8b4032fcc4d55aa34_120.jpg" alt="" title="DOTA2-2018年国际邀请赛 卫衣"></a>
            <p class="name ellipsis" title="DOTA2-2018年国际邀请赛 卫衣" style="word-wrap: break-word; word-break: break-all;">DOTA2-2018年国际邀请赛 卫衣</p>
            <p class="price">¥499.00</p>
        </li>



        <li>
            <a href="#" target="_blank"><img src="/static/images/shoppingcart/aa558b1778a04eaf9e4d3dddb32d9d3f_120.jpg" alt="" title="DOTA2- T恤 烫金拍拍"></a>
            <p class="name ellipsis" title="DOTA2- T恤 烫金拍拍" style="word-wrap: break-word; word-break: break-all;">DOTA2- T恤 烫金拍拍</p>
            <p class="price">¥139.00</p>
        </li>



        <li>
            <a href="#" target="_blank"><img src="/static/images/shoppingcart/3187c675efd94166a622985ce759e2a9_120.jpg" alt="" title="DOTA2 - T恤 Q版熊战士"></a>
            <p class="name ellipsis" title="DOTA2 - T恤 Q版熊战士" style="word-wrap: break-word; word-break: break-all;">DOTA2 - T恤 Q版熊战士</p>
            <p class="price">¥139.00</p>
        </li>



        <li>
            <a href="#" target="_blank"><img src="/static/images/shoppingcart/93945894-d9c6-4f43-91cc-76203c9893d8_120.jpg" alt="" title="DOTA2-TI7 装甲就位 T恤"></a>
            <p class="name ellipsis" title="DOTA2-TI7 装甲就位 T恤" style="word-wrap: break-word; word-break: break-all;">DOTA2-TI7 装甲就位 T恤</p>
            <p class="price">¥139.00</p>
        </li>



        <li>
            <a href="#" target="_blank"><img src="/static/images/shoppingcart/042cbcd654af4bb69fd885d0d6e9d0ca_120.jpg" alt="" title="DOTA2-2018年国际邀请赛 主题马克杯"></a>
            <p class="name ellipsis" title="DOTA2-2018年国际邀请赛 主题马克杯" style="word-wrap: break-word; word-break: break-all;">DOTA2-2018年国际邀请赛 主题马克杯</p>
            <p class="price">¥118.00</p>
        </li>

    </ul>
    </div></div>
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

<script type="text/javascript" src="/static/js/jquery.min.js"></script>
<!-- <script type="text/javascript" src="/static/js/jq_183.js"></script> -->
<!-- <script type="text/javascript" src="/static/js/lib.js"></script> -->
<script type="text/javascript" src="/static/js/jquery.boxy.js"></script>

<!--登录模块-->
<script type="text/javascript">

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
<script type="text/javascript" src="/static/js/jquery.cookie.js"></script>
<script>
	function toPay(){
		var token = $.cookie('TOKEN_COOKIE');
		var arr = new Array();
		$('label[data-chose="cart_bnt"]').each(function(){
			if($(this).attr("class")=="curr"){
				var kuid = $(this).attr("data-kuid");
				arr.push(kuid);
			}
		});
		window.open('/order/payView?token='+token+"&kuids="+arr);
	}
	function delChosen(){
		var arr = new Array();
		$('label[data-chose="cart_bnt"]').each(function(){
			if($(this).attr("class")=="curr"){
				var kuid = $(this).attr("data-kuid");
				arr.push(kuid);
			}
		});
		$.ajax({
			url:"delListCart",
			traditional: true,
			data:{kuids:arr},
			success:function(data){
				location.href="/cartView";
			}
		});
	}
	
	function del(kuid){
		$.ajax({
			url:"delCart",
			data:"kuid="+kuid,
			success:function(){
				location.href="/cartView";
			}
		});
	}
	function updateSingle(obj){
		var total = parseInt($('#checkoutPrice').text());
		var kuid = $(obj).attr("data-kuid");
		var price = parseInt($('#price'+kuid).text());
		var num = parseInt($('#checkoutNum').text());
		if($(obj).attr("class")=="curr"){
			$(obj).attr("class","");
			$('#checkoutPrice').text(total-price);
			$('#checkoutNum').text(num-1);
		}else{
			$(obj).attr("class","curr");
			$('#checkoutPrice').text(total+price);
			$('#checkoutNum').text(num+1);
		}
		$('label[data-chose="choseAll"]').each(function (){
			$(this).attr("class","");
		});
		
	}
	function togAll(obj){
		if($(obj).attr("class")=="curr"){
			$('label[data-pid="check_bnt"]').each(function(){
				$(this).attr("class","");
			});
			$('#checkoutPrice').text('0');
			$('#checkoutNum').text('0');
		}else{
			var num = 0;
			var total = 0;
			$('label[data-pid="check_bnt"]').each(function(){
				$(this).attr("class","curr");
				$('#checkoutPrice').text('${total}');
				$('#checkoutNum').text('${carts.size()}');
			});
		}
	}
	function reduce(id){
		var buyNumber = '#buyNumber'+id;
		var num = parseInt($(buyNumber).val());
		if(num-1>=1){
			$(buyNumber).val(num-1);
			$.ajax({
				url:"updateCart",
				data:"kuid="+id+"&num="+(num-1),
				success:function(){
				}
			});
		}else{
			$(buyNumber).val(1);
		}
		calculate(id);
	}
	function plus(id){
		var buyNumber = '#buyNumber'+id;
		var stockNumber = '#stock_num'+id;
		var num = parseInt($(buyNumber).val());
		var storenum = parseInt($(stockNumber).text());
		if(isNaN(storenum)){
			$(buyNumber).val(1);
		}else if(num+1<=storenum){
			$(buyNumber).val(num+1);
			$.ajax({
				url:"updateCart",
				data:"kuid="+id+"&num="+(num+1),
				success:function(){
				}
			});
		}else{
			$(buyNumber).val(storenum);
		}
		calculate(id);
	}
	function onInput(id){
		var num = parseInt($('#buyNumber'+id).val());
		var storenum = parseInt($('#stock_num'+id).text());
		if(num<1){
			$('#buyNumber'+id).val(1)
		}
		if (num>storenum) {
			$('#buyNumber'+id).val(storenum);
		}
		$.ajax({
			url:"updateCart",
			data:"kuid="+id+"&num="+num,
			success:function(){
			}
		});
		calculate(id);
	}
	
	function calculate(id){
		var temp = $('#single_price'+id).val();
		var singlePrice = parseInt($('#single_price'+id).val()); 
		var num = parseInt($('#buyNumber'+id).val());
		$('#price'+id).text(singlePrice*num);
		calTotal();
	}
	function calTotal(){
		var total = 0;
		$('font[class="everyPrice"]').each(function(){
			var price = $(this).text();
			total = total + parseInt(price);
		});
		$('#checkoutPrice').text(total);
	}
</script>