<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<!-- about -->
<div class="about">
    <div class="wrap">
        <ul class="cf">
            <li class="goods"><span></span>正品保证</li>
            <li class="shopping"><span></span>轻松购物</li>
            <li class="logistics"><span></span>快速配送</li>
            <li class="return"><span></span>无忧退换</li>
        </ul>
        <div class="cf link">
            <dl>
                <dt>购物指南</dt>
                <dd><a href="#" target="_blank">常见问题</a></dd>
                <dd><a href="#" target="_blank" class="needLogin">订单状态</a></dd>
                <dd><a href="#" target="_blank">购物流程</a></dd>
                <dd><a href="#" target="_blank">支付方式</a></dd>
            </dl>
            <dl>
                <dt>配送方式</dt>
                <dd><a href="#" target="_blank">配送范围</a></dd>
                <dd><a href="#" target="_blank">快递费用</a></dd>
            </dl>
            <dl>
                <dt>售后服务</dt>
                <dd><a href="#" target="_blank">退换货流程</a></dd>
                <dd><a href="#" target="_blank">退换货政策</a></dd>
                <dd><a href="#" target="_blank">服务政策</a></dd>
            </dl>
            <dl>
                <dt>关注我们</dt>
                <dd><a href="#" target="_blank">公司官网</a></dd>
                <dd><a href="#" target="_blank">官方微信</a></dd>
                <dd>
                    <a href="#" target="_blank">商务合作</a>
                    <div class="tip">
                        <i></i>
                        <p>联系人：张女士</p>
                        <p>邮箱：<span>zhangchenrui@pwrd.com</span></p>
                        <p>联系电话：<span>010-57805531</span></p>
                    </div>
                </dd>
            </dl>
            <div class="f_right contact">
                <p class="tel">028-68723699</p>
                <p class="time">周一至周日 9:00-22:00</p>
                <a href="#" target="_blank" class="needLogin"><span></span>在线客服</a>
            </div>
        </div>
    </div>
</div>
<!-- copyright -->
<div class="copyright">
    <div class="wrap">
        <ul class="cf">
            <li><a href="#" target="_blank">公司介绍</a></li>
            <li><a href="#" target="_blank">开发团队</a></li>
            <li><a href="#" target="_blank">招聘信息</a></li>
            <li><a href="#" target="_blank">联系我们</a></li>
            <li><a href="#" target="_blank">法律声明</a></li>
            <li><a href="#" target="_blank">网站地图</a></li>
        </ul>
        <p class="text">京ICP证：050016号《网络文化经营许可证》编号：文网文【2017】8929-1007号《网络视听许可证》编号：0110587 京公网安备11010502033859号 完美世界（北京）软件科技发展有限公司版权所有</p>
        <div class="link">
            <a href="#" target="_blank"><img src="${pageContext.request.contextPath }/static/images/copyright01.jpg" width="108" height="40" alt="经营性网站备案信息"></a>
            <a href="#" target="_blank"><img src="${pageContext.request.contextPath }/static/images/copyright02.jpg" width="108" height="40" alt="可信网站示范单位"></a>
            <a href="http://www.bjwhzf.gov.cn/accuse.do" target="_blank"><img src="${pageContext.request.contextPath }/static/images/copyright03.jpg" width="108" height="40" alt="举报热线"></a>
            <a href="#" target="_blank"><img src="${pageContext.request.contextPath }/static/images/copyright04.jpg" width="108" height="40" alt="中国网络游戏版权保护联盟"></a>
            <a href="#" target="_blank"><img src="${pageContext.request.contextPath }/static/images/copyright05.jpg" width="108" height="40" alt="绿色通道"></a>
        </div>
    </div>
</div>
<script type="text/javascript" src="${pageContext.request.contextPath }/static/js/jquery1.11.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/static/js/jquery.boxy.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/static/js/sub.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/static/js/jquery.cookie.js"></script>
<script type="text/javascript">
		function getCart(){
			$.ajax({
				url:"/getcart",
				cache:false,
				success:function(data){
					$('*[class="cartNum"]').each(function(){
						$(this).text(data.length);
					});
				}
			});
		}
		getCart();
		var d=$.cookie('TOKEN_COOKIE');
		var data={
			token:d
		};
		$.ajax({
			url:"/checkIsLogin",
			data:data,
			success:function(data){
				if(data.code==500){
					$('#head_div').html(data.object.relname+'&nbsp;&nbsp;<a href="/logout?token='+d+'" class="needLogin">注销</a>');
				}else{
					$('#head_div').html('<a href="/loginView"  class="needLogin" id="login">登录</a>');
				}
			}
		}); 
</script>
</html>