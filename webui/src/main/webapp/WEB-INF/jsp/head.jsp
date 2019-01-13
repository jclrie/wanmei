<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- 头信息 -->
<div class="header">
    <div class="wrap cf">
        <span class="f_left welcome">欢迎来到完美世界周边商城！</span>
        <div class="f_right header_cart_tip">
            <a href="/cartView" class="text"><span class="icon"></span>购物车（<span class="cartNum">5</span>）</a>
            <div class="cart_list"></div>
        </div>
        <dl class="f_right">
            <dt><a href="#" class="needLogin">我的订单</a></dt>
            <dd><a href="#" class="needLogin">我的关注</a></dd>
        </dl>
        <dl class="f_right userlogin">
        <dt id="head_div">
        </dt>
        <dd><a href="/registerView" target="_blank">注册</a></dd>
</dl>
    </div>
</div>
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
            <label for="username">用户名</label>
            <input type="text" id="username" placeholder="admin">
        </p>
        <p>
            <label for="psw">密码</label>
            <input type="text" id="psw" placeholder="psw">
        </p>
        <input type="submit"  value="登录">
        <input type="reset" value="重置">
    </form>
</div>
<!-- 右侧悬浮条 -->
<div class="fixed_bar">
    <dl>
        <dd class="center">
            <a href="#" target="_blank" class="needLogin"><span></span></a>
            <p class="tip"><a href="#" class="needLogin">个人中心</a></p>
        </dd>
        <dd class="my_like">
            <a href="#" target="_blank" class="needLogin"><span></span></a>
            <p class="tip"><a href="#" class="needLogin">我的关注</a></p>
        </dd>
        <dd class="fixed_cart_tip">
            <a target="_blank" href="/cartView"><span><i></i>购物车<font class="cartNum">5</font></span></a>
        </dd>
        <dd class="online">
            <a href="#" target="_blank" class="needLogin"><span></span></a>
            <p class="tip"><a href="#" target="_blank" class="needLogin">在线客服</a></p>
        </dd>
    </dl>
<p class="go_top" title="Scroll Back to Top" style="opacity: 0;"><a href="#"><span></span></a></p></div>

<!-- 顶部导航 -->
<div class="top_nav">
    <div class="wrap cf">
        <a href="/productview" class="f_left logo logo_wm"><img src="/static/images/logo_wm.png" width="120" height="41" alt="" title="完美商城"></a>
        <a href="#" class="f_left logo logo_shop"><img src="/static/images/logo_shop.png" width="55" height="27" alt="" title="完美商城"></a>
        <div class="f_left all_wares">
            <p class="text"><span></span>全部商品</p>
            <ul style="display: none;">
                <li>
                    <a href="#" target="_blank" class="ellipsis2" title="DOTA2神秘商店">DOTA2神秘商店<em></em></a>
                    <dl>
                        <dd><a href="#" target="_blank">手办扭蛋</a></dd>
                        <dd><a href="#" target="_blank">创意T恤</a></dd>
                        <dd><a href="#" target="_blank">焕新服饰</a></dd>
                        <dd><a href="#" target="_blank">生活用品</a></dd>
                        <dd><a href="#" target="_blank">毛绒合辑</a></dd>
                    </dl>
                </li>
                <li>
                    <a href="#" target="_blank" class="ellipsis2" title="完美世界周边">完美世界周边<em></em></a>
                    <dl>
                        <dd><a href="#" target="_blank">梦间集周边</a></dd>

                        <dd><a href="#" target="_blank">诛仙3专区</a></dd>
                    </dl>
                </li>
                <li>
                    <a href="#" target="_blank" class="ellipsis2" title="CSGO正版周边">CSGO正版周边<em></em></a>
                </li>
                <li>
                    <a href="#" target="_blank" class="ellipsis2" title="姜小虎系列周边">姜小虎系列周边<em></em></a>
                </li>
                <li>
                    <a href="#" target="_blank" class="ellipsis2" title="游戏外设">游戏外设<em></em></a>
                    <dl>
                        <dd><a href="#" target="_blank">键盘</a></dd>
                        <dd><a href="#" target="_blank">鼠标</a></dd>
                        <dd><a href="#" target="_blank">耳机</a></dd>
                    </dl>
                </li>
            </ul>
        </div>
        <ul class="nav f_left">
            <li><a href="/productview" >首页</a></li>
            <li><a href="#" target="_blank">完美世界周边</a></li>
            <li><a href="#" target="_blank">DOTA2专区</a></li>
            <li><a href="#" target="_blank">FAQ</a></li>
        </ul>
        <div class="f_right header_search">
            <!--顶部侧搜索框-->
            <form action="" method="get" class="cf">
                <input type="text" class="text " data-old-key="" value="">
                <input type="button" class="btn">
                <span class="keyword">

                        <a href="#" class="tj_link" data-url="#" data-pid="346" target="_blank">敌法师</a>

                        <a href="#" class="tj_link" data-url="#" data-pid="454" target="_blank">国际金猪</a>
                    
                </span>
                <div class="keyword_list">
                    <dl>

                    </dl>
                </div>
            </form>
        </div>
    </div>
</div>