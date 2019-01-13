<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" >
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
    <link href="${pageContext.request.contextPath }/static/js/kindeditor-4.1.10/themes/default/default.css" type="text/css" rel="stylesheet">
	<script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath }/static/js/kindeditor-4.1.10/kindeditor-all.js"></script>
	<script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath }/static/js/kindeditor-4.1.10/lang/zh-CN.js"></script>
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
	  <%@ include file="left.jsp" %>
      <%@ include file="nav.jsp" %>
        <!-- page content -->
        <div class="right_col" role="main">
                 
                        <form class="form-horizontal form-label-left" id="AddForm" >

                          <span class="section">添加商品基本信息</span>

                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3" for="first-name">商品分类 <span class="required">*</span>
                            </label>
                              <div class="col-md-6 col-sm-6 col-xs-12">
                          <!-- Button trigger modal -->
							<button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">
							 请选择
							</button>
							<input type="hidden" value="" name="cid" id="pid"><span></span>
							<!-- Modal -->
							<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
							  <div class="modal-dialog" role="document">
							    <div class="modal-content">
							      <div class="modal-header">
							        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
							      </div>
							      <div class="modal-body">
							        <div id="tree"></div>
							      </div>
							    </div>
							   </div>
							  </div>
                        	</div>                        
                          </div>
                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3" for="pname">商品名称 <span class="required">*</span>
                            </label>
                            <div class="col-md-6 col-sm-6">
                              <input type="text" id="pname" name="pname" required="required" class="form-control col-md-7 col-xs-12">
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3" for="ppoint">卖点 <span class="required">*</span>
                            </label>
                            <div class="col-md-6 col-sm-6">
                              <input type="text" id="ppoint" name="ppoint" required="required" class="form-control col-md-7 col-xs-12">
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3" for="price">价格 <span class="required">*</span>
                            </label>
                            <div class="col-md-6 col-sm-6">
                              <input type="text" id="price" onkeyup="num(this)" name="price" required="required" class="form-control col-md-7 col-xs-12">
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="middle-name" class="control-label col-md-3 col-sm-3">商品图片</label>
                            <div class="col-md-2 col-sm-2">
                              <input type="button" id="J_selectImage" class="form-control col-md-2 col-xs-4" value="图片上传" />
                            </div>
                            <div class="col-md-4 col-sm-4">
                            <div id="J_imageView" style="width: 50px;height: 50px"></div>                              
							  <input name="imgurl" type="hidden" id="imgurl" value="">
							</div>
                          </div>
                          <div class="form-group">
                            <label for="middle-name" class="control-label col-md-3 col-sm-3">商品说明*</label>
                            <div class="col-md-2 col-sm-2">
                            	<textarea name="information" cols="100" rows="8" style="width: 700px; height: 200px; visibility: hidden;"></textarea>
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
        <!-- jQuery Smart Wizard -->
    <script src="${pageContext.request.contextPath }/static/vendors/jQuery-Smart-Wizard/js/jquery.smartWizard.js"></script>
    <!-- Custom Theme Scripts -->
    <script src="${pageContext.request.contextPath }/static/build/js/custom.min.js"></script>
    <script src="${pageContext.request.contextPath }/static/build/js/bootstrap-treeview.min.js"></script>
    <script>
    	//校验
	    function num(obj){
	    	obj.value = obj.value.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
/* 	    	obj.value = obj.value.replace(/^\./g,""); //验证第一个字符是数字
	    	obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个, 清除多余的
	    	obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
	    	obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数 */
    	}
	     var itemAddEditor ;
		//页面初始化完毕后执行此方法
		$(function(){
			//创建富文本编辑器
			itemAddEditor = KindEditor.create("#AddForm [name=information]", {
	    	resizeType : 1,
	    	allowImageUpload : true,
	    	allowFileManager : true,
	    	uploadJson : '/pic/upload',//服务器端提交的地址
	    	filePostName:'uploadFile',//服务器端提交的文件名称
	    	afterUpload : function(url, data, name){
	    		this.sync();//同步将富文本框中的内容同步到textarea
	         }
	    	});
		});
	
		$(function(){
			$('#btnAdd').click(function(){
				//同步文本框中的商品描述
				itemAddEditor.sync();//同步富文本编辑框内容到textarea
				var param=$("#AddForm").serialize();//pid=2&pName=xxx
				console.log(param);
// 				alert(param);
				 $.ajax({
					url:'${pageContext.request.contextPath}/productAdd',
					data:param,
					dataType:'json',
					type:'post',
					success:function(data){
						alert(data.message);
						location.href="/indexview";
					}
				}); 
			});
		}); 
    </script>
    
    <!-- 图片上传 -->
    <script type="text/javascript">
	         KindEditor.ready(function(K) {
	            var editor = K.editor({
	                filePostName:"uploadFile",//上传组件名
	                uploadJson: '/pic/upload',//上传地址
	                dir:"image"//类型
	            });
	            K('#J_selectImage').click(function() {
	                editor.loadPlugin('multiimage', function() {
	                    editor.plugin.multiImageDialog({
	                        clickFn : function(urlList) {
	                            var div = K('#J_imageView');
	                            div.html('');
	                            K.each(urlList, function(i, data) {
	                                div.append('<img style="width:50px;height:50px;" src="' + data.url + '">');
	                                 K('#imgurl').attr('value',data.url);
	                            });
	                           
	                            editor.hideDialog();
	                        }
	                    });
	                });
	            });
	        }); 
	        //分类树菜单
	        var getTree=function(){
    		$.ajax({
    			url:'${pageContext.request.contextPath }/catree',//获取节点数据
    			dataType:'json',
    			success:function(data){
    				$('#tree').treeview({
    					data: data,//treeview控件绑定的数据
    					onNodeSelected:function(event, data){
    						$('#pid').val(data.cid);
    						$('#pid').next('span').html(data.text);
    						$('#myModal').modal('hide');
    					}
    				});
    				$('#tree').treeview('collapseAll', { silent: true });
    			},
    			
	    		});
	    	}
	    	getTree();
        </script>
  </body>
</html>
