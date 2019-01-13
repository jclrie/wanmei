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

<!-- Bootstrap -->
<link
	href="${pageContext.request.contextPath}/static/vendors/bootstrap/dist/css/bootstrap.min.css"
	rel="stylesheet">
<!-- Font Awesome -->
<link
	href="${pageContext.request.contextPath}/static/vendors/font-awesome/css/font-awesome.min.css"
	rel="stylesheet">
<!-- NProgress -->
<link
	href="${pageContext.request.contextPath}/static/vendors/nprogress/nprogress.css"
	rel="stylesheet">
<!-- iCheck -->
<link
	href="${pageContext.request.contextPath}/static/vendors/iCheck/skins/flat/green.css"
	rel="stylesheet">
<!-- bootstrap-progressbar -->
<link
	href="${pageContext.request.contextPath}/static/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css"
	rel="stylesheet">
<!-- JQVMap -->
<link
	href="${pageContext.request.contextPath}/static/vendors/jqvmap/dist/jqvmap.min.css"
	rel="stylesheet" />

<!-- Custom Theme Style -->
<link
	href="${pageContext.request.contextPath}/static/build/css/custom.min.css"
	rel="stylesheet">
</head>

<body class="nav-md">
	<div class="container body">
		<div class="main_container">
			<jsp:include page="../left.jsp"></jsp:include>
			<!-- top navigation -->
			<div class="top_nav">
				<jsp:include page="../nav.jsp"></jsp:include>
			</div>
			<!-- /top navigation -->

			<!-- page content -->
			<div class="right_col" role="main">
				<!-- top tiles -->

				<!-- /top tiles -->

				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12"></div>

				</div>
				<table class="table">
					<tr>
						<td>分类ID</td>
						<td>分类名称</td>
						<td>添加人员</td>
						<td>添加时间</td>
						<td>修改人员</td>
						<td>修改时间</td>
						<td>所属分类</td>
					</tr>
					<c:forEach items="${page.list}" var="category">
						<tr>
							<td>${category.cid}</td>
							<td>${category.cname}</td>
							<td>${category.adduser}</td>
							<td>${category.addtime}</td>
							<td>${category.modifyuser}</td>
							<td>${category.modifytime }</td>
							<td>${category.parentid}</td>
						</tr>
					</c:forEach>
				</table>
				<nav aria-label="Page navigation">
				  <ul class="pagination">
				    <li>
				      <a href="/categoryView?pageNum=${page.pageNum-1<1?1:(page.pageNum-1)}" aria-label="Previous">
				        <span aria-hidden="true">&laquo;</span>
				      </a>
				    </li>
				    <c:forEach begin="1" end="${page.pages}" varStatus="status">
				    	<c:choose>
				    		<c:when test="${page.pageNum eq status.index}">
				    			<li class="active">
				    		</c:when>
				    		<c:otherwise>
				    			<li>
				    		</c:otherwise>
				    	</c:choose>
				    		<a href="/categoryView?pageNum=${status.index}">${status.index}</a>
				    	</li>
				    </c:forEach>
				    <li>
				      <a href="/categoryView?pageNum=${page.pageNum+1>page.pages?page.pages:(page.pageNum+1)}" aria-label="Next">
				        <span aria-hidden="true">&raquo;</span>
				      </a>
				    </li>
				  </ul>
				</nav>
				<br />
			</div>
		</div>

		<!-- jQuery -->
		<script src="/static/vendors/jquery/dist/jquery.min.js"></script>
		<!-- Bootstrap -->
		<script src="/static/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
		<!-- FastClick -->
		<script src="/static/vendors/fastclick/lib/fastclick.js"></script>
		<!-- NProgress -->
		<script src="/static/vendors/nprogress/nprogress.js"></script>
		<!-- Chart.js -->
		<script src="/static/vendors/Chart.js/dist/Chart.min.js"></script>
		<!-- gauge.js -->
		<script src="/static/vendors/gauge.js/dist/gauge.min.js"></script>
		<!-- bootstrap-progressbar -->
		<script
			src="/static/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
		<!-- iCheck -->
		<script src="/static/vendors/iCheck/icheck.min.js"></script>
		<!-- Skycons -->
		<script src="/static/vendors/skycons/skycons.js"></script>
		<!-- Flot -->
		<script src="/static/vendors/Flot/jquery.flot.js"></script>
		<script src="/static/vendors/Flot/jquery.flot.pie.js"></script>
		<script src="/static/vendors/Flot/jquery.flot.time.js"></script>
		<script src="/static/vendors/Flot/jquery.flot.stack.js"></script>
		<script src="/static/vendors/Flot/jquery.flot.resize.js"></script>
		<!-- Flot plugins -->
		<script
			src="/static/vendors/flot.orderbars/js/jquery.flot.orderBars.js"></script>
		<script src="/static/vendors/flot-spline/js/jquery.flot.spline.min.js"></script>
		<script src="/static/vendors/flot.curvedlines/curvedLines.js"></script>
		<!-- DateJS -->
		<script src="/static/vendors/DateJS/build/date.js"></script>
		<!-- JQVMap -->
		<script src="/static/vendors/jqvmap/dist/jquery.vmap.js"></script>
		<script src="/static/vendors/jqvmap/dist/maps/jquery.vmap.world.js"></script>
		<script
			src="/static/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js"></script>
		<!-- bootstrap-daterangepicker -->
		<script src="/static/js/moment/moment.min.js"></script>
		<script src="/static/js/datepicker/daterangepicker.js"></script>

		<!-- Custom Theme Scripts -->
		<script src="/static/build/js/custom.min.js"></script>

		<!-- Flot -->
		<script>
			$(document)
					.ready(
							function() {
								var data1 = [ [ gd(2012, 1, 1), 17 ],
										[ gd(2012, 1, 2), 74 ],
										[ gd(2012, 1, 3), 6 ],
										[ gd(2012, 1, 4), 39 ],
										[ gd(2012, 1, 5), 20 ],
										[ gd(2012, 1, 6), 85 ],
										[ gd(2012, 1, 7), 7 ] ];

								var data2 = [ [ gd(2012, 1, 1), 82 ],
										[ gd(2012, 1, 2), 23 ],
										[ gd(2012, 1, 3), 66 ],
										[ gd(2012, 1, 4), 9 ],
										[ gd(2012, 1, 5), 119 ],
										[ gd(2012, 1, 6), 6 ],
										[ gd(2012, 1, 7), 9 ] ];
								$("#canvas_dahs").length
										&& $
												.plot(
														$("#canvas_dahs"),
														[ data1, data2 ],
														{
															series : {
																lines : {
																	show : false,
																	fill : true
																},
																splines : {
																	show : true,
																	tension : 0.4,
																	lineWidth : 1,
																	fill : 0.4
																},
																points : {
																	radius : 0,
																	show : true
																},
																shadowSize : 2
															},
															grid : {
																verticalLines : true,
																hoverable : true,
																clickable : true,
																tickColor : "#d5d5d5",
																borderWidth : 1,
																color : '#fff'
															},
															colors : [
																	"rgba(38, 185, 154, 0.38)",
																	"rgba(3, 88, 106, 0.38)" ],
															xaxis : {
																tickColor : "rgba(51, 51, 51, 0.06)",
																mode : "time",
																tickSize : [ 1,
																		"day" ],
																//tickLength: 10,
																axisLabel : "Date",
																axisLabelUseCanvas : true,
																axisLabelFontSizePixels : 12,
																axisLabelFontFamily : 'Verdana, Arial',
																axisLabelPadding : 10
															},
															yaxis : {
																ticks : 8,
																tickColor : "rgba(51, 51, 51, 0.06)",
															},
															tooltip : false
														});

								function gd(year, month, day) {
									return new Date(year, month - 1, day)
											.getTime();
								}
							});
		</script>
		<!-- /Flot -->

		<!-- JQVMap -->
		<script>
			/*       $(document).ready(function(){
			 $('#world-map-gdp').vectorMap({
			 map: 'world_en',
			 backgroundColor: null,
			 color: '#ffffff',
			 hoverOpacity: 0.7,
			 selectedColor: '#666666',
			 enableZoom: true,
			 showTooltip: true,
			 values: sample_data,
			 scaleColors: ['#E6F2F0', '#149B7E'],
			 normalizeFunction: 'polynomial'
			 });
			 }); */
		</script>
		<!-- /JQVMap -->

		<!-- Skycons -->
		<script>
			$(document).ready(
					function() {
						var icons = new Skycons({
							"color" : "#73879C"
						}), list = [ "clear-day", "clear-night",
								"partly-cloudy-day", "partly-cloudy-night",
								"cloudy", "rain", "sleet", "snow", "wind",
								"fog" ], i;

						for (i = list.length; i--;)
							icons.set(list[i], list[i]);

						icons.play();
					});
		</script>
		<!-- /Skycons -->

		<!-- Doughnut Chart -->
		<script>
			$(document).ready(function() {
				var options = {
					legend : false,
					responsive : false
				};

				/*   new Chart(document.getElementById("canvas1"), {
				    type: 'doughnut',
				    tooltipFillColor: "rgba(51, 51, 51, 0.55)",
				    data: {
				      labels: [
				        "Symbian",
				        "Blackberry",
				        "Other",
				        "Android",
				        "IOS"
				      ],
				      datasets: [{
				        data: [15, 20, 30, 10, 30],
				        backgroundColor: [
				          "#BDC3C7",
				          "#9B59B6",
				          "#E74C3C",
				          "#26B99A",
				          "#3498DB"
				        ],
				        hoverBackgroundColor: [
				          "#CFD4D8",
				          "#B370CF",
				          "#E95E4F",
				          "#36CAAB",
				          "#49A9EA"
				        ]
				      }]
				    },
				    options: options
				  });*/
			});
		</script>
		<!-- /Doughnut Chart -->

		<!-- bootstrap-daterangepicker -->
		<script>
			$(document)
					.ready(
							function() {

								var cb = function(start, end, label) {
									console.log(start.toISOString(), end
											.toISOString(), label);
									$('#reportrange span')
											.html(
													start
															.format('MMMM D, YYYY')
															+ ' - '
															+ end
																	.format('MMMM D, YYYY'));
								};

								var optionSet1 = {
									startDate : moment().subtract(29, 'days'),
									endDate : moment(),
									minDate : '01/01/2012',
									maxDate : '12/31/2015',
									dateLimit : {
										days : 60
									},
									showDropdowns : true,
									showWeekNumbers : true,
									timePicker : false,
									timePickerIncrement : 1,
									timePicker12Hour : true,
									ranges : {
										'Today' : [ moment(), moment() ],
										'Yesterday' : [
												moment().subtract(1, 'days'),
												moment().subtract(1, 'days') ],
										'Last 7 Days' : [
												moment().subtract(6, 'days'),
												moment() ],
										'Last 30 Days' : [
												moment().subtract(29, 'days'),
												moment() ],
										'This Month' : [
												moment().startOf('month'),
												moment().endOf('month') ],
										'Last Month' : [
												moment().subtract(1, 'month')
														.startOf('month'),
												moment().subtract(1, 'month')
														.endOf('month') ]
									},
									opens : 'left',
									buttonClasses : [ 'btn btn-default' ],
									applyClass : 'btn-small btn-primary',
									cancelClass : 'btn-small',
									format : 'MM/DD/YYYY',
									separator : ' to ',
									locale : {
										applyLabel : 'Submit',
										cancelLabel : 'Clear',
										fromLabel : 'From',
										toLabel : 'To',
										customRangeLabel : 'Custom',
										daysOfWeek : [ 'Su', 'Mo', 'Tu', 'We',
												'Th', 'Fr', 'Sa' ],
										monthNames : [ 'January', 'February',
												'March', 'April', 'May',
												'June', 'July', 'August',
												'September', 'October',
												'November', 'December' ],
										firstDay : 1
									}
								};
								$('#reportrange span').html(
										moment().subtract(29, 'days').format(
												'MMMM D, YYYY')
												+ ' - '
												+ moment().format(
														'MMMM D, YYYY'));
								$('#reportrange').daterangepicker(optionSet1,
										cb);
								$('#reportrange').on('show.daterangepicker',
										function() {
											console.log("show event fired");
										});
								$('#reportrange').on('hide.daterangepicker',
										function() {
											console.log("hide event fired");
										});
								$('#reportrange')
										.on(
												'apply.daterangepicker',
												function(ev, picker) {
													console
															.log("apply event fired, start/end dates are "
																	+ picker.startDate
																			.format('MMMM D, YYYY')
																	+ " to "
																	+ picker.endDate
																			.format('MMMM D, YYYY'));
												});
								$('#reportrange').on('cancel.daterangepicker',
										function(ev, picker) {
											console.log("cancel event fired");
										});
								$('#options1')
										.click(
												function() {
													$('#reportrange').data(
															'daterangepicker')
															.setOptions(
																	optionSet1,
																	cb);
												});
								$('#options2')
										.click(
												function() {
													$('#reportrange').data(
															'daterangepicker')
															.setOptions(
																	optionSet2,
																	cb);
												});
								$('#destroy')
										.click(
												function() {
													$('#reportrange').data(
															'daterangepicker')
															.remove();
												});
							});
		</script>
		<!-- /bootstrap-daterangepicker -->

		<!-- gauge.js -->
		<script>
		$(function(){
			console.log('${page}');
		});
			var opts = {
				lines : 12,
				angle : 0,
				lineWidth : 0.4,
				pointer : {
					length : 0.75,
					strokeWidth : 0.042,
					color : '#1D212A'
				},
				limitMax : 'false',
				colorStart : '#1ABC9C',
				colorStop : '#1ABC9C',
				strokeColor : '#F0F3F3',
				generateGradient : true
			};
			//       var target = document.getElementById('foo'),
			//           gauge = new Gauge(target).setOptions(opts);

			//       gauge.maxValue = 6000;
			//       gauge.animationSpeed = 32;
			//       gauge.set(3200);
			//       gauge.setTextField(document.getElementById("gauge-text"));
		</script>
		<!-- /gauge.js -->
</body>
</html>
