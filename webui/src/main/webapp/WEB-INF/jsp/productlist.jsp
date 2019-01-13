<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>商品列表</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/static/css/productlist.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/static/css/list.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/static/css/login.css">
</head>
<body style="text-align: left;">
<%@ include file="head.jsp" %>


    <!-- 通栏广告 -->
    <div class="header_ad">
        <div class="wrap">
            <a href="#" data-url="#" data-pid="" class="tj_link" target="_blank"><img src="${pageContext.request.contextPath }/static/images/productlist/29eb983c5f0944f696652420a612c178.jpg" width="1190" height="100" title="csgo周边" alt=""></a>
        </div>
    </div>
    
    <!-- 面包屑导航 -->
    <div class="nav_bar">
        <div class="wrap">
            <a href="index.html">首页</a>
            
                &gt; <a href="#">Dota2神秘商店</a>
            
            
                 
                    &gt; <a href="#">DOTA2神秘商店</a>
                 
                    &gt; <a href="#">创意T恤</a>
                
            
            
        </div>
    </div>
    
    <!-- 分类导航 -->
    <div class="class_nav">
        <div class="wrap">
            <dl class="cf">
                <dt class="f_left">分类：</dt>
                <dd class="f_left">
                    <a href="#" class="">全部</a>
                    
                        <a href="#" class="">DOTA2神秘商店</a>
                    
                </dd>
            </dl>
        </div>
    </div>

            <!-- 商品列表主体 -->
            <div class="wrap">
                <div class="sequence">
                    <a href="/productview" data-order="1" class="sales ">默认</a>
                            <a href="/productview?orderBy=1" data-order="2" class="prices">价格<span></span></a>
<!--                     <a href="#" data-order="4" class="">上架时间</a> -->
                </div>
                <div class="cf list">
                    <ul class="cf">
                    	<c:forEach items="${products}" var="product" varStatus="status">
                    		<c:choose>
                    			<c:when test="${(status.index+1) mod 4==0}">
                    				<li class="product-item in" style="margin-right:0px;">
                    			</c:when>
                    			<c:otherwise>
		                            <li class="product-item in"">
                    			</c:otherwise>
                    		</c:choose>
                                <a href="#" data-pid="504" class="like "><span></span><font>1</font></a>
                                <a href="/prodetailView?pid=${product.pid}" target="_blank"><img src="http://localhost:7070${product.imgurl}" alt="" title="${product.pname}"></a>
                                <p class="name ellipsis" title="${product.pname}" style="word-wrap: break-word; word-break: break-all;">${product.pname}</p>
                                <p class="price">¥${product.price}
                                    

                                </p>
                                <div class="add">
                                    <a class="star stars0" href="#" target="_blank"></a>
                                                
                                                    <a href="#" class="btn" target="_blank"><span></span>加入购物车</a>
                                </div>
                            </li>
                        </c:forEach>
                    
                        
                    </ul>
                    <div class="page" data-page-count="17" data-page-num="1" data-page-size="24"></div>
                </div>
            </div>

<%@ include file="footer.jsp" %>
<!--显示购物车-->
<script type="text/javascript">
    var ctx = '';
    var host_url = '#';
    var static_image_url = '#';
    var sso_service_type = '#';
    var page_id = 'list';
    var mobile = '';
</script>
<script type="text/javascript" src="${pageContext.request.contextPath }/static/js/jq_183.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/static/js/jquery.boxy.js"></script>
<%-- <script type="text/javascript" src="${pageContext.request.contextPath }/static/js/lib.js"></script> --%>

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