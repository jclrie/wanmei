<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/static/css/list.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/static/css/login.css">
</head>
<body>
<div class="login">
    <span></span>
    <h1>账号登录</h1>
    <form method="post" id="form_login">
        <p>
            <label for="username">用户名</label>
            <input type="text" name="uname" id="username" placeholder="admin">
        </p>
        <p>
            <label for="psw">密码</label>
            <input type="password" name="pwd" id="psw" placeholder="psw">
        </p>
        <input type="submit"  value="登录">
        <input type="reset" value="重置">
    </form>
</div>
<script type="text/javascript" src="${pageContext.request.contextPath }/static/js/jquery1.11.min.js"></script>
<script type="text/javascript">
		<!--登录模块-->
		$(function(){
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
		});
        
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
</script>
<script type="text/javascript">
    var returnUrl ='${returnUrl}';
	$(function(){
		$('#form_login').submit(function(){
			$.ajax({
 			   type: "get",
 			   url: "${pageContext.request.contextPath }/dologin",
 			   data: $('#form_login').serialize(),
 			   success: function(obj){
 			     if(obj.code==200){
 			    	 alert(obj.msg);
 			    	 if(returnUrl==""){
 			    	 	location.href="http://localhost:6060/productview";
 			    	 }else{
 			    		location.href=returnUrl+"?token="+obj.object.token;
 			    	 }
 			     }else{
 			    	 alert(obj.msg);
 			     }
 			   }
	 		});
			return false;
		});
	});
</script>
</body>
</html>