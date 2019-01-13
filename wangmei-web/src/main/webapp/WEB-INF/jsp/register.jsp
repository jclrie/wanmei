<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- Meta, title, CSS, favicons, etc. -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Gentellela Alela! |</title>
<!-- jquery -->
<script
	src="${pageContext.request.contextPath }/static/vendors/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap -->
<link href="/static/vendors/bootstrap/dist/css/bootstrap.min.css"
	rel="stylesheet">
<!-- Font Awesome -->
<link href="/static/vendors/font-awesome/css/font-awesome.min.css"
	rel="stylesheet">
<!-- NProgress -->
<link href="/static/vendors/nprogress/nprogress.css" rel="stylesheet">
<!-- Animate.css -->
<!--     <link href="https://colorlib.com/polygon/gentelella/css/animate.min.css" rel="stylesheet"> -->

<!-- Custom Theme Style -->
<link href="/static/build/css/custom.min.css" rel="stylesheet">
<script type="text/javascript">
	function checkPhone() {
		var phone = $('input[name="tel"]').val();
		if (!(/^1[34578]\d{9}$/.test(phone))) {
			$('#hint_id').text("手机格式不正确");
			return false;
		} else {
			var data = 'id='+$('input[name="tel"]').val()+'&type=${type}';
			$.ajax({
				url : "/CheckID",
				type : "post",
				data : data,
				dataType : "json",
				success : function(data) {
					if (data.code == 500) {
						$('#hint_id').text("手机号已被注册");
					}else{
						$('#hint_id').text("");
					}
				}
			});
			
			return true;
		}
	}
	function checkEmail() {
		var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
		var email = $('input[name="email"]').val();
		if (!re.test(email)) {
			$('#hint_id').text("邮箱格式不正确");
			return false;
		} else {
			var data = 'id='+$('input[name="email"]').val()+'&type=${type}';
			$.ajax({
				url : "/CheckID",
				type : "post",
				data : data,
				dataType : "json",
				success : function(data) {
					if (data.code == 500) {
						$('#hint_id').text("邮箱已被注册");
					}else{
						$('#hint_id').text("");
					}
				}
			});
			return true;
		}
	}
	function checkPwd() {
		var pwd = $('input[name="password"]').val();
		if (pwd == "") {
			$('#hint_pwd').text("密码不能为空");
			return false;
		} else {
			$('#hint_pwd').text("");
			return true;
		}
	}
	function register() {
		if ('${type}' == '1' && !checkEmail()) {
			alert("邮箱格式不正确");
			return false;
		}
		if ('${type}' == '0' && !checkPhone()) {
			alert("手机号格式不正确");
			return false;
		}
		if (!checkPwd()) {
			alert("密码不能为空");
			return false;
		}
		$.ajax({
			url : "/register",
			type : "post",
			data : $('#registerForm').serialize() + "&type=${type}",
			dataType : "json",
			success : function(data) {
				alert(data.msg);
				if (data.code == 200) {
					location.href = "/loginView";
				} 
			}
		});
	}
</script>
</head>

<body class="login">
	<div>
		<a class="hiddenanchor" id="signup"></a> <a class="hiddenanchor"
			id="signin"></a>

		<div class="login_wrapper">
			<div class="animate form login_form">
				<section class="login_content">
					<form id="registerForm">
						<input type="hidden" name="rid" value="1">
						<h1>Register Form</h1>
						<div>
							<c:if test="${type eq '0'}">
								<input name="tel" type="text" class="form-control"
									placeholder="telphone" onblur="checkPhone()" required="" />
							</c:if>
							<c:if test="${type eq '1'}">
								<input name="email" type="email" class="form-control"
									onblur="checkEmail()" placeholder="email" required="" />
							</c:if>
							<span id="hint_id"></span>
						</div>
						<div>
							<input name="password" type="password" class="form-control"
								onblur="checkPwd()" placeholder="Password" required="" /> <span
								id="hint_pwd"></span>
							<input name="relname" type="text" class="form-control"
									placeholder="姓名"  required="" />
							<input name="keyidentity" type="text" class="form-control"
									placeholder="身份证"  required="" />
						</div>
						<div>
							<a class="btn btn-default submit" href="javascript:register()">Register</a>
						</div>
						<div class="clearfix"></div>

						<div class="separator">
							<p class="change_link">
								<c:if test="${type eq '0'}">
									<a href="/registerShow?type=1" class="to_register"> 邮箱注册 </a>
								</c:if>
								<c:if test="${type eq '1'}">
									<a href="/registerShow?type=0" class="to_register"> 手机号注册 </a>
								</c:if>
							<p class="change_link">
								Already a member ? <a href="/loginView" class="to_register"> Log in </a>
	                </p>
                </p>
							

                <div class="clearfix"></div>
                <br />

                <div>
                  <h1>
									<i class="fa fa-paw"></i> Gentelella Alela!</h1>
                  <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </body>
</html>