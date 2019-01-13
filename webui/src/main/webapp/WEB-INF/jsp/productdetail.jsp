<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<!--产品详情页-->
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>产品详情页</title>
<link rel="stylesheet" type="text/css"
	href="/static/css/productdetail.css">
<link rel="stylesheet" type="text/css" href="/static/css/item.css">
<link rel="stylesheet" type="text/css" href="/static/css/login.css">
<script type="text/javascript">
	function changeSize(kuid, idx,storenum) {
		$('a[data-value="size"]').each(function(i, obj) {
			if ($(this).attr("class") != 'option sku-item null') {
				var tt = $(this).attr("class");
				$(this).attr("class", "option sku-item");
				if (i == idx) {
					$(this).attr("class", "option sku-item curr");
				}
			}
		});
		$('input[name="vAttrValue"]').val($('#attr'+kuid).attr("data-attr"));
		$('#stock_num').text(storenum);
		$('input[name="kuid"]').val(kuid);
	}
</script>
<body style="text-align: left;">


	<!--登录层-->
	<div class="login">
		<span></span>
		<!--关闭按钮-->
		<div class="close_box">
			<font>×</font>
		</div>
		<!--表单登录-->
		<h1>账号登录</h1>
		<form action="" method="post" id="form_login">
			<p>
				<label for="username">用户名</label> <input type="text" id="username"
					placeholder="admin">
			</p>
			<p>
				<label for="psw">密码</label> <input type="text" id="psw"
					placeholder="psw">
			</p>
			<input type="submit" value="登录"> <input type="reset"
				value="重置">
		</form>
	</div>

	
	<jsp:include page="head.jsp"></jsp:include>
	<!-- 面包屑导航 -->
	<div class="nav_bar">
		<div class="wrap">
			<a href="index.html">首页</a> &gt; <a href="#">Dota2神秘商店</a> &gt; <a
				href="#">DOTA2神秘商店</a> &gt; <a href="#">创意T恤</a> &gt; <a href="#">DOTA2-TI7
				水晶喵女与狸娜 T恤</a>
		</div>
	</div>
	
	<!-- 商品细节 -->
	<input id="isSkuProduct" type="hidden" value="true">
	<input id="productId" type="hidden" value="360">
	<input id="skuId" type="hidden" value="1027">
	<div class="goods_detail">
		<div class="wrap cf">
			<div class="gallery f_left">
				<div class="picFocus">
					<div class="bd">
						<div class="tempWrap"
							style="overflow: hidden; position: relative; width: 430px">
							<ul
								style="width: 430px; position: relative; overflow: hidden; padding: 0px; margin: 0px; left: 0px;">

								<li style="float: left; width: 430px;"><img
									src="http://localhost:7070${product.imgurl}" width="430"
									height="430"></li>

							</ul>
						</div>
					</div>
					<div class="hd">
						<ul>

							<li class="on"><img
								src="http://localhost:7070${product.imgurl}" width="100"
								height="100" alt="DOTA2-TI7  水晶喵女与狸娜 T恤"
								title="DOTA2-TI7  水晶喵女与狸娜 T恤"></li>

						</ul>
					</div>
				</div>
				<div class="share">
					<dl class="cf">
						<dt class="f_left">
							<a href="javascript:void(0)" data-pid="360" class="like "><span></span>关注<font>3</font></a>
						</dt>
					</dl>
				</div>
			</div>
			<div class="property f_left">
				<div class="title">
					<h1>${product.pname}</h1>
					<p>${product.ppoint }</p>
				</div>
				<p id="productShowPrice" class="price">¥ ${product.price}</p>
				<table>
					<tbody>
						<tr>
							<th>运费：</th>
							<td>
								<div class="meta">
									<span class="from">北京</span>至<span class="to shippingTo"
										title="北京">北京<i></i></span><font>快递：<span
										class="shippingFee">￥15.00</span></font>
									<div class="popup shippingPopup">
										<p class="close">
											<span></span>
										</p>
										<div class="nav">
											<ul class="cf">
												<li class="province">北京<span></span></li>
												<li class="city curr" style="">请选择<span></span></li>
												<li class="regions" style="display: none;"></li>
											</ul>
										</div>
										<div class="pane">
											<dl class="cf" style="display: none;">
												<dd data-area-id="110000">北京</dd>
												<dd data-area-id="120000">天津</dd>
												<dd data-area-id="130000">河北</dd>
												<dd data-area-id="140000">山西</dd>
												<dd data-area-id="150000">内蒙</dd>
												<dd data-area-id="210000">辽宁</dd>
												<dd data-area-id="220000">吉林</dd>
												<dd data-area-id="230000">黑龙江</dd>
												<dd data-area-id="310000">上海</dd>
												<dd data-area-id="320000">江苏</dd>
												<dd data-area-id="330000">浙江</dd>
												<dd data-area-id="340000">安徽</dd>
												<dd data-area-id="350000">福建</dd>
												<dd data-area-id="360000">江西</dd>
												<dd data-area-id="370000">山东</dd>
												<dd data-area-id="410000">河南</dd>
												<dd data-area-id="420000">湖北</dd>
												<dd data-area-id="430000">湖南</dd>
												<dd data-area-id="440000">广东</dd>
												<dd data-area-id="450000">广西</dd>
												<dd data-area-id="460000">海南</dd>
												<dd data-area-id="500000">重庆</dd>
												<dd data-area-id="510000">四川</dd>
												<dd data-area-id="520000">贵州</dd>
												<dd data-area-id="530000">云南</dd>
												<dd data-area-id="540000">西藏</dd>
												<dd data-area-id="610000">陕西</dd>
												<dd data-area-id="620000">甘肃</dd>
												<dd data-area-id="630000">青海</dd>
												<dd data-area-id="640000">宁夏</dd>
												<dd data-area-id="650000">新疆</dd>
												<dd data-area-id="710000">台湾</dd>
												<dd data-area-id="810000">香港</dd>
												<dd data-area-id="820000">澳门</dd>
												<dd data-area-id="990000">海外</dd>
											</dl>
											<dl class="cf" style="">
												<dd data-area-id="110100" title="北京市">北京市</dd>
											</dl>
											<dl class="cf" style="display: none;"></dl>
										</div>

									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<table style="margin-left: -4px;" id="product_sku_table">

									<tbody>
										<tr>
											<c:set var="flag" value="-1"></c:set>
											<th>型号：</th>
											<td><c:forEach items="${kuidView}" var="kuid"
													varStatus="status">
													<input type="hidden" id="attr${kuid.kuid}" data-attr="${kuid.vname}">
													<c:choose>
														<c:when test="${(empty kuid.storenum) || (kuid.storenum==0)}">
															<a data-value="size" href="javascript:void(0)"
																class="option sku-item null">
														</c:when>
														<c:otherwise>
															<c:choose>
																<c:when test="${flag==-1}">
																	<a data-value="size"
																		href="javascript:changeSize(${kuid.kuid},${status.index},${kuid.storenum})"
																		class="option sku-item curr" > 
																		<c:set var="flag" value="${status.index}"></c:set>
																		<c:set var="size" value="${kuid.vname}"></c:set>
																</c:when>
																<c:otherwise>
																	<a data-value="size"
																		href="javascript:changeSize(${kuid.kuid},${status.index},${kuid.storenum})"
																		class="option sku-item">
																</c:otherwise>
															</c:choose>
														</c:otherwise>
													</c:choose>
													 ${kuid.vname}<em></em>
													</a>
												</c:forEach>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<th>数量：</th>
							<td><span class="amount number-input"><span class="reduce disable" id="reduce"></span><input id="buyNumber" type="text" value="1" min="1" stock="32" maxlength="3"  onkeyup="this.value=this.value.replace(/\D/gi,'')" autocomplete="off"><span class="plus" id="plus"></span></span>
									<span class="stock stock_info">（库存<font
									id="stock_num">
									<c:out value="${kuidView[flag].storenum}"></c:out>
									</font>件）
							</span> <span class="sold">已售出<font id="sold_num">43</font>件
							</span></td>
						</tr>
					</tbody>
				</table>
				<div class="btns">
					<a href="javascript:void(0)" class="buy btn_buy"
						onclick="window.open('shoppingcart.html')">立即购买</a> <a
						href="javascript:void(0)" class="add btn_addCart" id="addCart"><span></span>加入购物车</a>
				</div>
			</div>
		</div>
	</div>
	<form id="cartAddForm">
		<input name="id" type="hidden" value="${product.pid}">
		<input name="vAttrValue" type="hidden" value="${size}">
		<input name="num" type="hidden" value="1"> 
		<input name="kuid" type="hidden" value="${kuidView[flag].kuid}">
	</form>
	<!-- 套餐 -->
	<!-- 介绍 -->
	<div class="presentation">
		<div class="wrap cf">
			<!-- 猜你喜欢 -->
			<div class="guess_like f_left">
				<dl>
					<dt>猜你喜欢</dt>
					<dd>
						<a href="#" target="_blank"><img
							src="/static/images/productdetail/aa558b1778a04eaf9e4d3dddb32d9d3f_120.jpg"
							alt="DOTA2- T恤 烫金拍拍" title="DOTA2- T恤 烫金拍拍"></a>
						<p class="name ellipsis" title="DOTA2- T恤 烫金拍拍"
							style="word-wrap: break-word; word-break: break-all;">DOTA2-
							T恤 烫金拍拍</p>
						<p class="price">¥139.00</p>
					</dd>




					<dd>
						<a href="#" target="_blank"><img
							src="/static/images/productdetail/93945894-d9c6-4f43-91cc-76203c9893d8_120.jpg"
							alt="DOTA2-TI7 装甲就位 T恤" title="DOTA2-TI7 装甲就位 T恤"></a>
						<p class="name ellipsis" title="DOTA2-TI7 装甲就位 T恤"
							style="word-wrap: break-word; word-break: break-all;">DOTA2-TI7
							装甲就位 T恤</p>
						<p class="price">¥139.00</p>
					</dd>




					<dd>
						<a href="#" target="_blank"><img
							src="/static/images/productdetail/d9cde1a175234cb8b4032fcc4d55aa34_120.jpg"
							alt="DOTA2-2018年国际邀请赛 卫衣" title="DOTA2-2018年国际邀请赛 卫衣"></a>
						<p class="name ellipsis" title="DOTA2-2018年国际邀请赛 卫衣"
							style="word-wrap: break-word; word-break: break-all;">DOTA2-2018年国际邀请赛
							卫衣</p>
						<p class="price">¥499.00</p>
					</dd>




					<dd>
						<a href="#" target="_blank"><img
							src="/static/images/productdetail/042cbcd654af4bb69fd885d0d6e9d0ca_120.jpg"
							alt="DOTA2-2018年国际邀请赛 主题马克杯" title="DOTA2-2018年国际邀请赛 主题马克杯"></a>
						<p class="name ellipsis" title="DOTA2-2018年国际邀请赛 主题马克杯"
							style="word-wrap: break-word; word-break: break-all;">DOTA2-2018年国际邀请赛
							主题马克杯</p>
						<p class="price">¥118.00</p>
					</dd>




					<dd>
						<a href="#" target="_blank"><img
							src="/static/images/productdetail/5997b704-37e9-42e0-9ae1-641913e0074e_120.jpg"
							alt="DOTA2-潮汐猎人 马克杯" title="DOTA2-潮汐猎人 马克杯"></a>
						<p class="name ellipsis" title="DOTA2-潮汐猎人 马克杯"
							style="word-wrap: break-word; word-break: break-all;">DOTA2-潮汐猎人
							马克杯</p>
						<p class="price">¥188.00</p>
					</dd>

				</dl>
			</div>
			<!-- 详情 -->
			<div class="product_detail details f_left">
				<ul class="cf details_nav desc_tab">
					<li class="curr"><a href="javascript:void(0)">商品介绍</a></li>
					<li><a href="javascript:void(0)">产品评论<span>(0)</span></a></li>
				</ul>
				<div class="desc_pane cf">
					<div class="content cf">
						<p>
							<a href="#" target="_blank"></a>
						</p>
						<p>
							<img src="/static/images/productdetail/1502872462844018121.jpg"
								title="1502872462844018121.jpg" alt="1.jpg" style="float: left;">
						</p>
						<p>
							<img src="/static/images/productdetail/1500317854934064890.jpg"
								style="" title="1500317854934064890.jpg">
						</p>
						<p>
							<br>
						</p>
					</div>
					<div class="content cf" style="display: none;">
						<div class="comment">
							<div class="cf rate_header">
								<div class="f_left rate_score">
									<p class="num">0%</p>
									<p class="stars stars2"></p>
									<span>好评度</span>
								</div>
								<div class="f_left rate_bar">
									<table cellspacing="0" cellpadding="0">
										<tbody>
											<tr>
												<th>好评(0%)</th>
												<td><p>
														<span style="width: 0%"></span>
													</p></td>
											</tr>
											<tr>
												<th>中评(0%)</th>
												<td><p>
														<span style="width: 0%"></span>
													</p></td>
											</tr>
											<tr>
												<th>差评(0%)</th>
												<td><p>
														<span style="width: 0%"></span>
													</p></td>
											</tr>
										</tbody>
									</table>
								</div>
								<dl class="cf f_right">
									<dt class="f_left">买家印象：</dt>
									<dd class="f_left">

										<a href="javascript:void(0)">TI7周边(0)</a>

									</dd>
								</dl>
							</div>
							<div class="rate_toolbar">
								<a data-type="0" href="javascript:void(0)" class="curr">全部评价（<span>0</span>）
								</a> <a data-type="4" href="javascript:void(0)">晒图（<span>0</span>）
								</a> <a data-type="1" href="javascript:void(0)">好评（<span>0</span>）
								</a> <a data-type="3" href="javascript:void(0)">中评（<span>0</span>）
								</a> <a data-type="2" href="javascript:void(0)">差评（<span>0</span>）
								</a>
							</div>
							<div class="comment_list">

								<div class="page" data-page-count="0" data-page-num="0"
									data-page-size="10"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<jsp:include page="footer.jsp"></jsp:include>

	<script type="text/javascript">
		var ctx = '';
		var host_url = '#';
		var static_image_url = '#';
		var sso_service_type = '#';
		var page_id = 'list';
		var mobile = '';
	</script>
	<script type="text/javascript" src="/static/js/jq_183.js"></script>
	<script type="text/javascript" src="/static/js/jquery.min.js"></script>
	<script type="text/javascript" src="/static/js/jquery.boxy.js"></script>
<!-- 	<script type="text/javascript" src="/static/js/lib.js"></script> -->
	<!--登录模块-->
	<script>
		function changeNum(num){
		}
		$('#addCart').click(function (){
			var num = $('#buyNumber').val();
			var vid = $('input[name="vAttrValue"]').val();
			var param = $('#cartAddForm').serialize();
		    $('input[name="num"]').val(num);
			if(vid!=null && vid!=""){
				$.ajax({
					url:"/addCart",
					data:param,
					success:function(data){
// 						alert(data.msg);
						getCart();
					}
				});		
			}  
		});
		$('#plus').click(function(){
			var num = parseInt($('#buyNumber').val());
			var storenum = parseInt($('#stock_num').text());
			if(isNaN(storenum)){
				$('#buyNumber').val(1);
			}else if(num+1<=storenum){
				$('#buyNumber').val(num+1);
			}else{
				$('#buyNumber').val(storenum);
			}
		});
		$('#reduce').click(function(){
			var num = parseInt($('#buyNumber').val());
			if(num-1>=1){
				$('#buyNumber').val(num-1);
			}else{
				$('#buyNumber').val(1);
			}
		});
		
		$("#login")
				.click(
						function() {
							showDiv($(".login"));
							function showDiv(obj) {
								$(obj).show();
								center(obj);
								$(window).scroll(function() {
									center(obj);
								});
								$(window).resize(function() {
									center(obj);
								});
							}
							function center(obj) {
								var windowWidth = document.documentElement.clientWidth;
								var windowHeight = document.documentElement.clientHeight;
								var popupHeight = $(obj).height();
								var popupWidth = $(obj).width();
								$(obj)
										.css(
												{
													"position" : "absolute",
													"top" : (windowHeight - popupHeight)
															/ 2
															+ $(document)
																	.scrollTop(),
													"left" : (windowWidth - popupWidth) / 2
												});
							}
						});
		// 隐藏登录层
		$(".close_box font").click(function() {
			$(".login").delay(1000).fadeOut(1000);
			setTimeout(function() {
				$("#form_login").get(0).reset();
			}, 1500);
		});
	</script>

</body>
</html>