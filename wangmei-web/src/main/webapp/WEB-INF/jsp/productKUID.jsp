<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!-- Bootstrap -->
    <link href="${pageContext.request.contextPath }/static/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="${pageContext.request.contextPath }/static/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="${pageContext.request.contextPath }/static/vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="${pageContext.request.contextPath }/static/vendors/iCheck/skins/flat/green.css" rel="stylesheet">
    <!-- bootstrap-progressbar -->
    <link href="${pageContext.request.contextPath }/static/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet">
    <!-- JQVMap -->
    <link href="${pageContext.request.contextPath }/static/vendors/jqvmap/dist/jqvmap.min.css" rel="stylesheet"/>

    <!-- Custom Theme Style -->
    <link href="${pageContext.request.contextPath }/static/build/css/custom.min.css" rel="stylesheet">
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
	<%@ include file="left.jsp" %>
	<%@ include file="nav.jsp" %>


        <!-- page content -->
        <div class="right_col" role="main">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
            <table class="table table-striped">
            	<input type="hidden" value="${product.pid}" id="pid">
	          		<label>${productKUID.aname }</label>
	          		<c:forEach items="${kuidView}" var="attrInfo">
	          		<tr>
	          		<div class="row">
	          			<td>
	          			<div class="col-md-1 col-sm-12 col-xs-12 form-group">
	                    	<label class="form-group">${attrInfo.vname }</label>
	                  	</div>
	                  	</td>
	                  	<td>
	          			<div class="col-md-1 col-sm-12 col-xs-12 form-group">
	                    	<input type="text" value="${attrInfo.storenum}" onkeyup="this.value=this.value.replace(/\D/gi,'')" name="storenum" data="${attrInfo.vid }" class="form-control">
	                  	</div>
	                  	</td>
	                </div>
	                </tr>
	          		</c:forEach>
	          		<tr>
          			<td><button type="button" id="btn_submit" class="btn btn-primary">确定</button></td>
          		</tr>
          	</table>
            </div>
          </div>
          <br />
        </div>
        <!-- /page content -->
        <!-- footer content -->
        <footer>
          <div class="pull-right">
            Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>

    <!-- jQuery -->
    <script src="${pageContext.request.contextPath }/static/vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="${pageContext.request.contextPath }/static/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="${pageContext.request.contextPath }/static/vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="${pageContext.request.contextPath }/static/vendors/nprogress/nprogress.js"></script>
    <!-- Chart.js -->
    <!-- bootstrap-progressbar -->
    <script src="${pageContext.request.contextPath }/static/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
    <!-- iCheck -->
    <script src="${pageContext.request.contextPath }/static/vendors/iCheck/icheck.min.js"></script>
    <!-- Skycons -->
    <script src="${pageContext.request.contextPath }/static/vendors/skycons/skycons.js"></script>
    <!-- Custom Theme Scripts -->
    <script src="${pageContext.request.contextPath }/static/build/js/custom.min.js"></script>
    <script type="text/javascript">
    	$(function(){
    		var array=new Array();
    		$('#btn_submit').click(function(){
        		$('input[name="storenum"]').each(function(i,obj){
        			//创建对象
        			var kuid=new ProductKUID('${product.pid}',$(this).attr('data'),$(this).val());
        			console.log(kuid);
        			array.push(kuid);
        		});
        		$.ajax({
        			url:'${pageContext.request.contextPath }/updateProductkuid',
        			data:JSON.stringify(array),
        			dataType:'json',
        			type:'post',
        			contentType:'application/json;charset=utf-8',
        			success:function(data){
        				alert(data.msg);
        			}
        		}); 
    		});

    		 /*   	 */	
    	});
    	//定义对象
    	function ProductKUID(pid,vid,storenum){
    		this.pid=pid;
    		this.vid=vid;
    		this.storenum=storenum;
    	}
    </script>
  </body>
</html>
