<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!-- Bootstrap -->
<link
	href="${pageContext.request.contextPath }/static/vendors/bootstrap/dist/css/bootstrap.min.css"
	rel="stylesheet">
<!-- Font Awesome -->
<link
	href="${pageContext.request.contextPath }/static/vendors/font-awesome/css/font-awesome.min.css"
	rel="stylesheet">
<!-- NProgress -->
<link
	href="${pageContext.request.contextPath }/static/vendors/nprogress/nprogress.css"
	rel="stylesheet">
<!-- iCheck -->
<link
	href="${pageContext.request.contextPath }/static/vendors/iCheck/skins/flat/green.css"
	rel="stylesheet">
<!-- bootstrap-progressbar -->
<link
	href="${pageContext.request.contextPath }/static/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css"
	rel="stylesheet">
<!-- JQVMap -->
<link
	href="${pageContext.request.contextPath }/static/vendors/jqvmap/dist/jqvmap.min.css"
	rel="stylesheet" />

<!-- Custom Theme Style -->
<link
	href="${pageContext.request.contextPath }/static/build/css/custom.min.css"
	rel="stylesheet">
<link
	href="${pageContext.request.contextPath }/static/js/kindeditor-4.1.10/themes/default/default.css"
	type="text/css" rel="stylesheet">
<script type="text/javascript" charset="utf-8"
	src="${pageContext.request.contextPath }/static/js/kindeditor-4.1.10/kindeditor-all.js"></script>
<script type="text/javascript" charset="utf-8"
	src="${pageContext.request.contextPath }/static/js/kindeditor-4.1.10/lang/zh-CN.js"></script>
</head>

<body class="nav-md">
	<div class="container body">
		<div class="main_container">
			<%@ include file="left.jsp"%>
			<%@ include file="nav.jsp"%>
			<!-- page content -->
			<div class="right_col" role="main">

				<form class="form-horizontal form-label-left" id="AddForm">

					<span class="section">添加商品库存</span>

					<input type="hidden" name="pid" value="${product.pid}"> 
					<div class="form-group">
						<label class="control-label col-md-3 col-sm-3" for="pname">商品名称
							<span class="required">*</span>
						</label>
						<div class="col-md-6 col-sm-6">
							<input type="text" readonly="readonly" value="${product.pname}"
								id="pname" name="pname" required="required"
								class="form-control col-md-7 col-xs-12">
						</div>
					</div>
					<c:forEach items="${attrs}" var="attr">
						<div class="form-group">
							<label class="control-label col-md-3 col-sm-3" for="pname">${attr.aname}
								<span class="required">*</span>
							</label>
							<div class="col-md-6 col-sm-6">
								<!-- Single button -->
								<c:forEach items="${attr.attributevalues}" var="attrValue">
									<label class="checkbox-inline">
								      <input type="radio" name="vid" value="${attrValue.vid}"> ${attrValue.vname}
								   </label>
								</c:forEach>
							</div>
						</div>
					</c:forEach>
					<div class="form-group">
						<label class="control-label col-md-3 col-sm-3" for="price">库存量
							<span class="required">*</span>
						</label>
						<div class="col-md-6 col-sm-6">
							<input type="text" id="price" name="storenum" required="required"
								class="form-control col-md-7 col-xs-12">
						</div>
					</div>

					<div class="form-group">
						<div class="col-md-2 col-sm-2 col-md-offset-3">
							<button type="button" id="btnAdd" class="btn btn-primary">添加</button>
							<button type="reset" class="btn btn-primary">取消</button>
						</div>
					</div>
				</form>

			</div>
			<!-- /page content -->
			<!-- footer content -->
			<footer>
				<div class="pull-right">
					Gentelella - Bootstrap Admin Template by <a
						href="https://colorlib.com">Colorlib</a>
				</div>
				<div class="clearfix"></div>
			</footer>
			<!-- /footer content -->
		</div>
	</div>

	<!-- jQuery -->
	<script
		src="${pageContext.request.contextPath }/static/vendors/jquery/dist/jquery.min.js"></script>
	<!-- Bootstrap -->
	<script
		src="${pageContext.request.contextPath }/static/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
	<!-- FastClick -->
	<script
		src="${pageContext.request.contextPath }/static/vendors/fastclick/lib/fastclick.js"></script>
	<!-- NProgress -->
	<script
		src="${pageContext.request.contextPath }/static/vendors/nprogress/nprogress.js"></script>
	<!-- Chart.js -->
	<!-- bootstrap-progressbar -->
	<script
		src="${pageContext.request.contextPath }/static/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
	<!-- iCheck -->
	<script
		src="${pageContext.request.contextPath }/static/vendors/iCheck/icheck.min.js"></script>
	<!-- Skycons -->
	<script
		src="${pageContext.request.contextPath }/static/vendors/skycons/skycons.js"></script>
	<!-- jQuery Smart Wizard -->
	<script
		src="${pageContext.request.contextPath }/static/vendors/jQuery-Smart-Wizard/js/jquery.smartWizard.js"></script>
	<!-- Custom Theme Scripts -->
	<script
		src="${pageContext.request.contextPath }/static/build/js/custom.min.js"></script>
	<script
		src="${pageContext.request.contextPath }/static/build/js/bootstrap-treeview.min.js"></script>
	<script>
		$(function() {
			$('#btnAdd').click(function() {
				var param = $("#AddForm").serialize();//pid=2&pName=xxx
				console.log(param);
				 $.ajax({
					url : '${pageContext.request.contextPath}/kuidAdd',
					data : param,
					dataType : 'json',
					type : 'post',
					success : function(data) {
						alert(data.msg);
					}
				}); 
			});
		});
	</script>

</body>
</html>
