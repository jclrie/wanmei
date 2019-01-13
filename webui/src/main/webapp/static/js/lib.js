(function (b) {
    var a = b.browser.msie && b.browser.version == "7.0";
    b.fn.countDown = function (d) {
        var c = b.extend({}, b.fn.countDown.defaults, d);
        b(this).html(c.tpl).data("config", c);
        var e = b(".digit", b(this));
        if (a) {
            e.html('<div class="bottom"></div>')
        } else {
            e.html('<div class="top"></div><div class="bottom"></div>')
        }
        b(this).doCountDown();
        return this
    };
    b.fn.stopCountDown = function () {
        clearTimeout(b(this).data("timer"))
    };
    b.fn.startCountDown = function () {
        b(this).doCountDown()
    };
    b.fn.doCountDown = function () {
        var f = b(this).data("config");
        var e = Math.floor((f.targetTime - new Date().valueOf()) / 1000);
        var h = b(this);
        if (e <= 0) {
            e = 0;
            if (b(this).data("timer")) {
                clearTimeout(b(this).data("timer"))
            }
        }
        var c, j, i, g = e % 60, d = Math.floor(e / 60) % 60;
        if (f.omitDays) {
            i = Math.floor(e / 60 / 60);
            if (f.omitWeeks) {
                j = Math.floor(e / 60 / 60 / 24);
                c = Math.floor(e / 60 / 60 / 24 / 7)
            } else {
                j = Math.floor(e / 60 / 60 / 24) % 7;
                c = Math.floor(e / 60 / 60 / 24 / 7)
            }
        } else {
            i = Math.floor(e / 60 / 60) % 24;
            if (f.omitWeeks) {
                j = Math.floor(e / 60 / 60 / 24);
                c = Math.floor(e / 60 / 60 / 24 / 7)
            } else {
                j = Math.floor(e / 60 / 60 / 24) % 7;
                c = Math.floor(e / 60 / 60 / 24 / 7)
            }
        }
        h.dashChangeTo("seconds_dash", g, 800);
        h.dashChangeTo("minutes_dash", d, 1200);
        h.dashChangeTo("hours_dash", i, 1200);
        h.dashChangeTo("days_dash", j, 1200);
        h.dashChangeTo("weeks_dash", c, 1200);
        if (e > 0) {
            var k = setTimeout(function () {
                h.doCountDown()
            }, 1000);
            h.data("timer", k)
        } else {
            if (f.onComplete) {
                f.onComplete()
            }
        }
    };
    b.fn.dashChangeTo = function (h, k, f) {
        if (k > 99) {
            k = 99
        }
        var e = b(this);
        var j = e.find("." + h + " .digit");
        for (var c = (j.length - 1); c >= 0; c--) {
            var g = k % 10;
            k = (k - g) / 10;
            e.digitChangeTo(j.eq(c), g, f)
        }
    };
    b.fn.digitChangeTo = function (g, f, d) {
        if (!d) {
            d = 800
        }
        if (a) {
            b(".bottom", g).html((f ? f : "0"))
        } else {
            var e = b(".top", g);
            var c = b(".bottom", g);
            if (e.html() != f + "") {
                e.css({display: "none"});
                e.html((f ? f : "0")).slideDown(d);
                c.animate({height: ""}, d, function () {
                    c.html(e.html());
                    c.css({display: "block", height: ""});
                    e.hide().slideUp(10)
                })
            }
        }
    };
    b.fn.countDown.defaults = {
        omitDays: true,
        omitWeeks: true,
        onComplete: function () {
        },
        tpl: ['<span class="dash hours_dash">', '	<span class="digit"></span>', '	<span class="digit"></span>', "</span>", "<font>:</font>", '<span class="dash minutes_dash">', '	<span class="digit"></span>', '	<span class="digit"></span>', "</span>", "<font>:</font>", '<span class="dash seconds_dash">', '	<span class="digit"></span>', '	<span class="digit"></span>', "</span>"].join("")
    }
})(jQuery);
/*!

 */
(function (b) {
    b.fn.slide = function (a) {
        b.fn.slide.defaults = {
            type: "slide",
            effect: "fade",
            autoPlay: false,
            delayTime: 500,
            interTime: 2500,
            triggerTime: 150,
            defaultIndex: 0,
            titCell: ".hd li",
            mainCell: ".bd",
            targetCell: null,
            trigger: "mouseover",
            scroll: 1,
            vis: 1,
            titOnClassName: "on",
            autoPage: false,
            prevCell: ".prev",
            nextCell: ".next",
            pageStateCell: ".pageState",
            opp: false,
            pnLoop: true,
            easing: "swing",
            startFun: null,
            endFun: null,
            switchLoad: null,
            playStateCell: ".playState",
            mouseOverStop: true,
            defaultPlay: true,
            returnDefault: false
        };
        return this.each(function () {
            var aQ = b.extend({}, b.fn.slide.defaults, a);
            var bq = b(this);
            var aX = aQ.effect;
            var bj = b(aQ.prevCell, bq);
            var aS = b(aQ.nextCell, bq);
            var aU = b(aQ.pageStateCell, bq);
            var aG = b(aQ.playStateCell, bq);
            var a4 = b(aQ.titCell, bq);
            var bl = a4.size();
            var a7 = b(aQ.mainCell, bq);
            var bs = a7.children().size();
            var bp = aQ.switchLoad;
            var aR = b(aQ.targetCell, bq);
            var aM = parseInt(aQ.defaultIndex);
            var a8 = parseInt(aQ.delayTime);
            var bi = parseInt(aQ.interTime);
            var aB = parseInt(aQ.triggerTime);
            var a3 = parseInt(aQ.scroll);
            var a6 = (aQ.autoPlay == "false" || aQ.autoPlay == false) ? false : true;
            var a2 = (aQ.opp == "false" || aQ.opp == false) ? false : true;
            var bf = (aQ.autoPage == "false" || aQ.autoPage == false) ? false : true;
            var aC = (aQ.pnLoop == "false" || aQ.pnLoop == false) ? false : true;
            var a0 = (aQ.mouseOverStop == "false" || aQ.mouseOverStop == false) ? false : true;
            var ba = (aQ.defaultPlay == "false" || aQ.defaultPlay == false) ? false : true;
            var aA = (aQ.returnDefault == "false" || aQ.returnDefault == false) ? false : true;
            var aV = isNaN(aQ.vis) ? 1 : parseInt(aQ.vis);
            var aH = !-[1,] && !window.XMLHttpRequest;
            var aO = 0;
            var aW = 0;
            var bh = 0;
            var aY = 0;
            var az = aQ.easing;
            var a1 = null;
            var aI = null;
            var au = null;
            var aE = aQ.titOnClassName;
            var aZ = a4.index(bq.find("." + aE));
            var aF = aM = aZ == -1 ? aM : aZ;
            var br = aM;
            var aK = aM;
            var bg = bs >= aV ? (bs % a3 != 0 ? bs % a3 : a3) : 0;
            var av;
            var aw = aX == "leftMarquee" || aX == "topMarquee" ? true : false;
            var aL = function () {
                if (b.isFunction(aQ.startFun)) {
                    aQ.startFun(aM, bl, bq, b(aQ.titCell, bq), a7, aR, bj, aS)
                }
            };
            var bo = function () {
                if (b.isFunction(aQ.endFun)) {
                    aQ.endFun(aM, bl, bq, b(aQ.titCell, bq), a7, aR, bj, aS)
                }
            };
            var bu = function () {
                a4.removeClass(aE);
                if (ba) {
                    a4.eq(br).addClass(aE)
                }
            };
            if (aQ.type == "menu") {
                if (ba) {
                    a4.removeClass(aE).eq(aM).addClass(aE)
                }
                a4.hover(function () {
                    av = b(this).find(aQ.targetCell);
                    var c = a4.index(b(this));
                    aI = setTimeout(function () {
                        aM = c;
                        a4.removeClass(aE).eq(aM).addClass(aE);
                        aL();
                        switch (aX) {
                            case"fade":
                                av.stop(true, true).animate({opacity: "show"}, a8, az, bo);
                                break;
                            case"slideDown":
                                av.stop(true, true).animate({height: "show"}, a8, az, bo);
                                break
                        }
                    }, aQ.triggerTime)
                }, function () {
                    clearTimeout(aI);
                    switch (aX) {
                        case"fade":
                            av.animate({opacity: "hide"}, a8, az);
                            break;
                        case"slideDown":
                            av.animate({height: "hide"}, a8, az);
                            break
                    }
                });
                if (aA) {
                    bq.hover(function () {
                        clearTimeout(au)
                    }, function () {
                        au = setTimeout(bu, a8)
                    })
                }
                return
            }
            if (bl == 0) {
                bl = bs
            }
            if (aw) {
                bl = 2
            }
            if (bf) {
                if (bs >= aV) {
                    if (aX == "leftLoop" || aX == "topLoop") {
                        bl = bs % a3 != 0 ? (bs / a3 ^ 0) + 1 : bs / a3
                    } else {
                        var ay = bs - aV;
                        bl = 1 + parseInt(ay % a3 != 0 ? (ay / a3 + 1) : (ay / a3));
                        if (bl <= 0) {
                            bl = 1
                        }
                    }
                } else {
                    bl = 1
                }
                a4.html("");
                var aJ = "";
                if (aQ.autoPage == true || aQ.autoPage == "true") {
                    for (var aN = 0; aN < bl; aN++) {
                        aJ += "<li>" + (aN + 1) + "</li>"
                    }
                } else {
                    for (var aN = 0; aN < bl; aN++) {
                        aJ += aQ.autoPage.replace("$", (aN + 1))
                    }
                }
                a4.html(aJ);
                var a4 = a4.children()
            }
            if (bs >= aV) {
                a7.children().each(function () {
                    if (b(this).width() > bh) {
                        bh = b(this).width();
                        aW = b(this).outerWidth(true)
                    }
                    if (b(this).height() > aY) {
                        aY = b(this).height();
                        aO = b(this).outerHeight(true)
                    }
                });
                var a9 = a7.children();
                var bb = function () {
                    for (var c = 0; c < aV; c++) {
                        a9.eq(c).clone().addClass("clone").appendTo(a7)
                    }
                    for (var c = 0; c < bg; c++) {
                        a9.eq(bs - c - 1).clone().addClass("clone").prependTo(a7)
                    }
                };
                switch (aX) {
                    case"fold":
                        a7.css({position: "relative", width: aW, height: aO}).children().css({
                            position: "absolute",
                            width: bh,
                            left: 0,
                            top: 0,
                            display: "none"
                        });
                        break;
                    case"top":
                        a7.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + aV * aO + 'px"></div>').css({
                            top: -(aM * a3) * aO,
                            position: "relative",
                            padding: "0",
                            margin: "0"
                        }).children().css({height: aY});
                        break;
                    case"left":
                        a7.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + aV * aW + 'px"></div>').css({
                            width: bs * aW,
                            left: -(aM * a3) * aW,
                            position: "relative",
                            overflow: "hidden",
                            padding: "0",
                            margin: "0"
                        }).children().css({"float": "left", width: bh});
                        break;
                    case"leftLoop":
                    case"leftMarquee":
                        bb();
                        a7.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + aV * aW + 'px"></div>').css({
                            width: (bs + aV + bg) * aW,
                            position: "relative",
                            overflow: "hidden",
                            padding: "0",
                            margin: "0",
                            left: -(bg + aM * a3) * aW
                        }).children().css({"float": "left", width: bh});
                        break;
                    case"topLoop":
                    case"topMarquee":
                        bb();
                        a7.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + aV * aO + 'px"></div>').css({
                            height: (bs + aV + bg) * aO,
                            position: "relative",
                            padding: "0",
                            margin: "0",
                            top: -(bg + aM * a3) * aO
                        }).children().css({height: aY});
                        break
                }
            }
            var i = function (c) {
                var d = c * a3;
                if (c == bl) {
                    d = bs
                } else {
                    if (c == -1 && bs % a3 != 0) {
                        d = -bs % a3
                    }
                }
                return d
            };
            var bt = function (f) {
                var g = function (j) {
                    for (var k = j; k < (aV + j); k++) {
                        f.eq(k).find("img[" + bp + "]").each(function () {
                            var m = b(this);
                            m.attr("src", m.attr(bp)).removeAttr(bp);
                            if (a7.find(".clone")[0]) {
                                var n = a7.children();
                                for (var l = 0; l < n.size(); l++) {
                                    n.eq(l).find("img[" + bp + "]").each(function () {
                                        if (b(this).attr(bp) == m.attr("src")) {
                                            b(this).attr("src", b(this).attr(bp)).removeAttr(bp)
                                        }
                                    })
                                }
                            }
                        })
                    }
                };
                switch (aX) {
                    case"fade":
                    case"fold":
                    case"top":
                    case"left":
                    case"slideDown":
                        g(aM * a3);
                        break;
                    case"leftLoop":
                    case"topLoop":
                        g(bg + i(aK));
                        break;
                    case"leftMarquee":
                    case"topMarquee":
                        var c = aX == "leftMarquee" ? a7.css("left").replace("px", "") : a7.css("top").replace("px", "");
                        var d = aX == "leftMarquee" ? aW : aO;
                        var e = bg;
                        if (c % d != 0) {
                            var h = Math.abs(c / d ^ 0);
                            if (aM == 1) {
                                e = bg + h
                            } else {
                                e = bg + h - 1
                            }
                        }
                        g(e);
                        break
                }
            };
            var aD = function (f) {
                if (ba && aF == aM && !f && !aw) {
                    return
                }
                if (aw) {
                    if (aM >= 1) {
                        aM = 1
                    } else {
                        if (aM <= 0) {
                            aM = 0
                        }
                    }
                } else {
                    aK = aM;
                    if (aM >= bl) {
                        aM = 0
                    } else {
                        if (aM < 0) {
                            aM = bl - 1
                        }
                    }
                }
                aL();
                if (bp != null) {
                    bt(a7.children())
                }
                if (aR[0]) {
                    av = aR.eq(aM);
                    if (bp != null) {
                        bt(aR)
                    }
                    if (aX == "slideDown") {
                        aR.not(av).stop(true, true).slideUp(a8);
                        av.slideDown(a8, az, function () {
                            if (!a7[0]) {
                                bo()
                            }
                        })
                    } else {
                        aR.not(av).stop(true, true).hide();
                        av.animate({opacity: "show"}, a8, function () {
                            if (!a7[0]) {
                                bo()
                            }
                        })
                    }
                }
                if (bs >= aV) {
                    switch (aX) {
                        case"fade":
                            a7.children().stop(true, true).eq(aM).animate({opacity: "show"}, a8, az, function () {
                                bo()
                            }).siblings().hide();
                            break;
                        case"fold":
                            a7.children().stop(true, true).eq(aM).animate({opacity: "show"}, a8, az, function () {
                                bo()
                            }).siblings().animate({opacity: "hide"}, a8, az);
                            break;
                        case"top":
                            a7.stop(true, false).animate({top: -aM * a3 * aO}, a8, az, function () {
                                bo()
                            });
                            break;
                        case"left":
                            a7.stop(true, false).animate({left: -aM * a3 * aW}, a8, az, function () {
                                bo()
                            });
                            break;
                        case"leftLoop":
                            var d = aK;
                            a7.stop(true, true).animate({left: -(i(aK) + bg) * aW}, a8, az, function () {
                                if (d <= -1) {
                                    a7.css("left", -(bg + (bl - 1) * a3) * aW)
                                } else {
                                    if (d >= bl) {
                                        a7.css("left", -bg * aW)
                                    }
                                }
                                bo()
                            });
                            break;
                        case"topLoop":
                            var d = aK;
                            a7.stop(true, true).animate({top: -(i(aK) + bg) * aO}, a8, az, function () {
                                if (d <= -1) {
                                    a7.css("top", -(bg + (bl - 1) * a3) * aO)
                                } else {
                                    if (d >= bl) {
                                        a7.css("top", -bg * aO)
                                    }
                                }
                                bo()
                            });
                            break;
                        case"leftMarquee":
                            var c = a7.css("left").replace("px", "");
                            if (aM == 0) {
                                a7.animate({left: ++c}, 0, function () {
                                    if (a7.css("left").replace("px", "") >= 0) {
                                        a7.css("left", -bs * aW)
                                    }
                                })
                            } else {
                                a7.animate({left: --c}, 0, function () {
                                    if (a7.css("left").replace("px", "") <= -(bs + bg) * aW) {
                                        a7.css("left", -bg * aW)
                                    }
                                })
                            }
                            break;
                        case"topMarquee":
                            var e = a7.css("top").replace("px", "");
                            if (aM == 0) {
                                a7.animate({top: ++e}, 0, function () {
                                    if (a7.css("top").replace("px", "") >= 0) {
                                        a7.css("top", -bs * aO)
                                    }
                                })
                            } else {
                                a7.animate({top: --e}, 0, function () {
                                    if (a7.css("top").replace("px", "") <= -(bs + bg) * aO) {
                                        a7.css("top", -bg * aO)
                                    }
                                })
                            }
                            break
                    }
                }
                a4.removeClass(aE).eq(aM).addClass(aE);
                aF = aM;
                if (!aC) {
                    aS.removeClass("nextStop");
                    bj.removeClass("prevStop");
                    if (aM == 0) {
                        bj.addClass("prevStop")
                    }
                    if (aM == bl - 1) {
                        aS.addClass("nextStop")
                    }
                }
                aU.html("<span>" + (aM + 1) + "</span>/" + bl)
            };
            if (ba) {
                aD(true)
            }
            if (aA) {
                bq.hover(function () {
                    clearTimeout(au)
                }, function () {
                    au = setTimeout(function () {
                        aM = br;
                        if (ba) {
                            aD()
                        } else {
                            if (aX == "slideDown") {
                                av.slideUp(a8, bu)
                            } else {
                                av.animate({opacity: "hide"}, a8, bu)
                            }
                        }
                        aF = aM
                    }, 300)
                })
            }
            var ax = function (c) {
                a1 = setInterval(function () {
                    a2 ? aM-- : aM++;
                    aD()
                }, !!c ? c : bi)
            };
            var bd = function (c) {
                a1 = setInterval(aD, !!c ? c : bi)
            };
            var a5 = function () {
                if (!a0 && a6 && !aG.hasClass("pauseState")) {
                    clearInterval(a1);
                    ax()
                }
            };
            var ar = function () {
                if (aC || aM != bl - 1) {
                    aM++;
                    aD();
                    if (!aw) {
                        a5()
                    }
                }
            };
            var bc = function () {
                if (aC || aM != 0) {
                    aM--;
                    aD();
                    if (!aw) {
                        a5()
                    }
                }
            };
            var be = function () {
                clearInterval(a1);
                aw ? bd() : ax();
                aG.removeClass("pauseState")
            };
            var aP = function () {
                clearInterval(a1);
                aG.addClass("pauseState")
            };
            if (a6) {
                if (aw) {
                    a2 ? aM-- : aM++;
                    bd();
                    if (a0) {
                        a7.hover(aP, be)
                    }
                } else {
                    ax();
                    if (a0) {
                        bq.hover(aP, be)
                    }
                }
            } else {
                if (aw) {
                    a2 ? aM-- : aM++
                }
                aG.addClass("pauseState")
            }
            aG.click(function () {
                aG.hasClass("pauseState") ? be() : aP()
            });
            if (aQ.trigger == "mouseover") {
                a4.hover(function () {
                    var c = a4.index(this);
                    aI = setTimeout(function () {
                        aM = c;
                        aD();
                        a5()
                    }, aQ.triggerTime)
                }, function () {
                    clearTimeout(aI)
                })
            } else {
                a4.click(function () {
                    aM = a4.index(this);
                    aD();
                    a5()
                })
            }
            if (aw) {
                aS.mousedown(ar);
                bj.mousedown(bc);
                if (aC) {
                    var bk;
                    var bn = function () {
                        bk = setTimeout(function () {
                            clearInterval(a1);
                            bd(bi / 10 ^ 0)
                        }, 150)
                    };
                    var aT = function () {
                        clearTimeout(bk);
                        clearInterval(a1);
                        bd()
                    };
                    aS.mousedown(bn);
                    aS.mouseup(aT);
                    bj.mousedown(bn);
                    bj.mouseup(aT)
                }
                if (aQ.trigger == "mouseover") {
                    aS.hover(ar, function () {
                    });
                    bj.hover(bc, function () {
                    })
                }
            } else {
                aS.click(ar);
                bj.click(bc)
            }
            if (aQ.vis == "auto" && a3 == 1 && (aX == "left" || aX == "leftLoop")) {
                var at;
                var bm = function () {
                    if (aH) {
                        a7.width("auto");
                        a7.children().width("auto")
                    }
                    a7.parent().width("auto");
                    aW = a7.parent().width();
                    if (aH) {
                        a7.parent().width(aW)
                    }
                    a7.children().width(aW);
                    if (aX == "left") {
                        a7.width(aW * bs);
                        a7.stop(true, false).animate({left: -aM * aW}, 0)
                    } else {
                        a7.width(aW * (bs + 2));
                        a7.stop(true, false).animate({left: -(aM + 1) * aW}, 0)
                    }
                    if (!aH && (aW != a7.parent().width())) {
                        bm()
                    }
                };
                b(window).resize(function () {
                    clearTimeout(at);
                    at = setTimeout(bm, 100)
                });
                bm()
            }
        })
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (j, i, b, c, d) {
        return jQuery.easing[jQuery.easing.def](j, i, b, c, d)
    }, easeInQuad: function (j, i, b, c, d) {
        return c * (i /= d) * i + b
    }, easeOutQuad: function (j, i, b, c, d) {
        return -c * (i /= d) * (i - 2) + b
    }, easeInOutQuad: function (j, i, b, c, d) {
        if ((i /= d / 2) < 1) {
            return c / 2 * i * i + b
        }
        return -c / 2 * ((--i) * (i - 2) - 1) + b
    }, easeInCubic: function (j, i, b, c, d) {
        return c * (i /= d) * i * i + b
    }, easeOutCubic: function (j, i, b, c, d) {
        return c * ((i = i / d - 1) * i * i + 1) + b
    }, easeInOutCubic: function (j, i, b, c, d) {
        if ((i /= d / 2) < 1) {
            return c / 2 * i * i * i + b
        }
        return c / 2 * ((i -= 2) * i * i + 2) + b
    }, easeInQuart: function (j, i, b, c, d) {
        return c * (i /= d) * i * i * i + b
    }, easeOutQuart: function (j, i, b, c, d) {
        return -c * ((i = i / d - 1) * i * i * i - 1) + b
    }, easeInOutQuart: function (j, i, b, c, d) {
        if ((i /= d / 2) < 1) {
            return c / 2 * i * i * i * i + b
        }
        return -c / 2 * ((i -= 2) * i * i * i - 2) + b
    }, easeInQuint: function (j, i, b, c, d) {
        return c * (i /= d) * i * i * i * i + b
    }, easeOutQuint: function (j, i, b, c, d) {
        return c * ((i = i / d - 1) * i * i * i * i + 1) + b
    }, easeInOutQuint: function (j, i, b, c, d) {
        if ((i /= d / 2) < 1) {
            return c / 2 * i * i * i * i * i + b
        }
        return c / 2 * ((i -= 2) * i * i * i * i + 2) + b
    }, easeInSine: function (j, i, b, c, d) {
        return -c * Math.cos(i / d * (Math.PI / 2)) + c + b
    }, easeOutSine: function (j, i, b, c, d) {
        return c * Math.sin(i / d * (Math.PI / 2)) + b
    }, easeInOutSine: function (j, i, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * i / d) - 1) + b
    }, easeInExpo: function (j, i, b, c, d) {
        return (i == 0) ? b : c * Math.pow(2, 10 * (i / d - 1)) + b
    }, easeOutExpo: function (j, i, b, c, d) {
        return (i == d) ? b + c : c * (-Math.pow(2, -10 * i / d) + 1) + b
    }, easeInOutExpo: function (j, i, b, c, d) {
        if (i == 0) {
            return b
        }
        if (i == d) {
            return b + c
        }
        if ((i /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (i - 1)) + b
        }
        return c / 2 * (-Math.pow(2, -10 * --i) + 2) + b
    }, easeInCirc: function (j, i, b, c, d) {
        return -c * (Math.sqrt(1 - (i /= d) * i) - 1) + b
    }, easeOutCirc: function (j, i, b, c, d) {
        return c * Math.sqrt(1 - (i = i / d - 1) * i) + b
    }, easeInOutCirc: function (j, i, b, c, d) {
        if ((i /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - i * i) - 1) + b
        }
        return c / 2 * (Math.sqrt(1 - (i -= 2) * i) + 1) + b
    }, easeInElastic: function (o, m, p, a, b) {
        var d = 1.70158;
        var c = 0;
        var n = a;
        if (m == 0) {
            return p
        }
        if ((m /= b) == 1) {
            return p + a
        }
        if (!c) {
            c = b * 0.3
        }
        if (n < Math.abs(a)) {
            n = a;
            var d = c / 4
        } else {
            var d = c / (2 * Math.PI) * Math.asin(a / n)
        }
        return -(n * Math.pow(2, 10 * (m -= 1)) * Math.sin((m * b - d) * (2 * Math.PI) / c)) + p
    }, easeOutElastic: function (o, m, p, a, b) {
        var d = 1.70158;
        var c = 0;
        var n = a;
        if (m == 0) {
            return p
        }
        if ((m /= b) == 1) {
            return p + a
        }
        if (!c) {
            c = b * 0.3
        }
        if (n < Math.abs(a)) {
            n = a;
            var d = c / 4
        } else {
            var d = c / (2 * Math.PI) * Math.asin(a / n)
        }
        return n * Math.pow(2, -10 * m) * Math.sin((m * b - d) * (2 * Math.PI) / c) + a + p
    }, easeInOutElastic: function (o, m, p, a, b) {
        var d = 1.70158;
        var c = 0;
        var n = a;
        if (m == 0) {
            return p
        }
        if ((m /= b / 2) == 2) {
            return p + a
        }
        if (!c) {
            c = b * (0.3 * 1.5)
        }
        if (n < Math.abs(a)) {
            n = a;
            var d = c / 4
        } else {
            var d = c / (2 * Math.PI) * Math.asin(a / n)
        }
        if (m < 1) {
            return -0.5 * (n * Math.pow(2, 10 * (m -= 1)) * Math.sin((m * b - d) * (2 * Math.PI) / c)) + p
        }
        return n * Math.pow(2, -10 * (m -= 1)) * Math.sin((m * b - d) * (2 * Math.PI) / c) * 0.5 + a + p
    }, easeInBack: function (l, k, b, c, d, j) {
        if (j == undefined) {
            j = 1.70158
        }
        return c * (k /= d) * k * ((j + 1) * k - j) + b
    }, easeOutBack: function (l, k, b, c, d, j) {
        if (j == undefined) {
            j = 1.70158
        }
        return c * ((k = k / d - 1) * k * ((j + 1) * k + j) + 1) + b
    }, easeInOutBack: function (l, k, b, c, d, j) {
        if (j == undefined) {
            j = 1.70158
        }
        if ((k /= d / 2) < 1) {
            return c / 2 * (k * k * (((j *= (1.525)) + 1) * k - j)) + b
        }
        return c / 2 * ((k -= 2) * k * (((j *= (1.525)) + 1) * k + j) + 2) + b
    }, easeInBounce: function (j, i, b, c, d) {
        return c - jQuery.easing.easeOutBounce(j, d - i, 0, c, d) + b
    }, easeOutBounce: function (j, i, b, c, d) {
        if ((i /= d) < (1 / 2.75)) {
            return c * (7.5625 * i * i) + b
        } else {
            if (i < (2 / 2.75)) {
                return c * (7.5625 * (i -= (1.5 / 2.75)) * i + 0.75) + b
            } else {
                if (i < (2.5 / 2.75)) {
                    return c * (7.5625 * (i -= (2.25 / 2.75)) * i + 0.9375) + b
                } else {
                    return c * (7.5625 * (i -= (2.625 / 2.75)) * i + 0.984375) + b
                }
            }
        }
    }, easeInOutBounce: function (j, i, b, c, d) {
        if (i < d / 2) {
            return jQuery.easing.easeInBounce(j, i * 2, 0, c, d) * 0.5 + b
        }
        return jQuery.easing.easeOutBounce(j, i * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
    }
});
(function (j, d) {
    if (j.fn.dotdotdot) {
        return
    }
    j.fn.dotdotdot = function (x) {
        if (this.length == 0) {
            j.fn.dotdotdot.debug('No element found for "' + this.selector + '".');
            return this
        }
        if (this.length > 1) {
            return this.each(function () {
                j(this).dotdotdot(x)
            })
        }
        var t = this;
        var y = t.contents();
        if (t.data("dotdotdot")) {
            t.trigger("destroy.dot")
        }
        t.data("dotdotdot-style", t.attr("style") || "");
        t.css("word-wrap", "break-word").css("word-break", "break-all");
        if (t.css("white-space") === "nowrap") {
            t.css("white-space", "normal")
        }
        t.bind_events = function () {
            t.bind("update.dot", function (A, C) {
                t.removeClass("is-truncated");
                A.preventDefault();
                A.stopPropagation();
                switch (typeof v.height) {
                    case"number":
                        v.maxHeight = v.height;
                        break;
                    case"function":
                        v.maxHeight = v.height.call(t[0]);
                        break;
                    default:
                        v.maxHeight = q(t);
                        break
                }
                v.maxHeight += v.tolerance;
                if (typeof C != "undefined") {
                    if (typeof C == "string" || ("nodeType" in C && C.nodeType === 1)) {
                        C = j("<div />").append(C).contents()
                    }
                    if (C instanceof j) {
                        y = C
                    }
                }
                u = t.wrapInner('<div class="dotdotdot" />').children();
                u.contents().detach().end().append(y.clone(true)).find("br").replaceWith("  <br />  ").end().css({
                    height: "auto",
                    width: "auto",
                    border: "none",
                    padding: 0,
                    margin: 0
                });
                var B = false, z = false;
                if (s.afterElement) {
                    B = s.afterElement.clone(true);
                    B.show();
                    s.afterElement.detach()
                }
                if (m(u, v)) {
                    if (v.wrap == "children") {
                        z = c(u, v, B)
                    } else {
                        z = o(u, t, u, v, B)
                    }
                }
                u.replaceWith(u.contents());
                u = null;
                if (j.isFunction(v.callback)) {
                    v.callback.call(t[0], z, y)
                }
                s.isTruncated = z;
                return z
            }).bind("isTruncated.dot", function (A, z) {
                A.preventDefault();
                A.stopPropagation();
                if (typeof z == "function") {
                    z.call(t[0], s.isTruncated)
                }
                return s.isTruncated
            }).bind("originalContent.dot", function (A, z) {
                A.preventDefault();
                A.stopPropagation();
                if (typeof z == "function") {
                    z.call(t[0], y)
                }
                return y
            }).bind("destroy.dot", function (z) {
                z.preventDefault();
                z.stopPropagation();
                t.unwatch().unbind_events().contents().detach().end().append(y).attr("style", t.data("dotdotdot-style") || "").removeClass("is-truncated").data("dotdotdot", false)
            });
            return t
        };
        t.unbind_events = function () {
            t.unbind(".dot");
            return t
        };
        t.watch = function () {
            t.unwatch();
            if (v.watch == "window") {
                var B = j(window), A = B.width(), z = B.height();
                B.bind("resize.dot" + s.dotId, function () {
                    if (A != B.width() || z != B.height() || !v.windowResizeFix) {
                        A = B.width();
                        z = B.height();
                        if (r) {
                            clearInterval(r)
                        }
                        r = setTimeout(function () {
                            t.trigger("update.dot")
                        }, 100)
                    }
                })
            } else {
                w = l(t);
                r = setInterval(function () {
                    if (t.is(":visible")) {
                        var C = l(t);
                        if (w.width != C.width || w.height != C.height) {
                            t.trigger("update.dot");
                            w = C
                        }
                    }
                }, 500)
            }
            return t
        };
        t.unwatch = function () {
            j(window).unbind("resize.dot" + s.dotId);
            if (r) {
                clearInterval(r)
            }
            return t
        };
        var v = j.extend(true, {}, j.fn.dotdotdot.defaults, x), s = {}, w = {}, r = null, u = null;
        if (!(v.lastCharacter.remove instanceof Array)) {
            v.lastCharacter.remove = j.fn.dotdotdot.defaultArrays.lastCharacter.remove
        }
        if (!(v.lastCharacter.noEllipsis instanceof Array)) {
            v.lastCharacter.noEllipsis = j.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis
        }
        s.afterElement = b(v.after, t);
        s.isTruncated = false;
        s.dotId = n++;
        t.data("dotdotdot", true).bind_events().trigger("update.dot");
        if (v.watch) {
            t.watch()
        }
        return t
    };
    j.fn.dotdotdot.defaults = {
        ellipsis: "... ",
        wrap: "word",
        fallbackToLetter: true,
        lastCharacter: {},
        tolerance: 0,
        callback: null,
        after: null,
        height: null,
        watch: false,
        windowResizeFix: true
    };
    j.fn.dotdotdot.defaultArrays = {lastCharacter: {remove: [" ", "\u3000", ",", ";", ".", "!", "?"], noEllipsis: []}};
    j.fn.dotdotdot.debug = function (r) {
    };
    var n = 1;

    function c(u, y, x) {
        var w = u.children(), r = false;
        u.empty();
        for (var t = 0, s = w.length; t < s; t++) {
            var v = w.eq(t);
            u.append(v);
            if (x) {
                u.append(x)
            }
            if (m(u, y)) {
                v.remove();
                r = true;
                break
            } else {
                if (x) {
                    x.detach()
                }
            }
        }
        return r
    }

    function o(s, t, y, x, w) {
        var r = false;
        var v = "a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style";
        var u = "script, .dotdotdot-keep";
        s.contents().detach().each(function () {
            var A = this, z = j(A);
            if (typeof A == "undefined") {
                return true
            } else {
                if (z.is(u)) {
                    s.append(z)
                } else {
                    if (r) {
                        return true
                    } else {
                        s.append(z);
                        if (w && !z.is(x.after) && !z.find(x.after).length) {
                            s[s.is(v) ? "after" : "append"](w)
                        }
                        if (m(y, x)) {
                            if (A.nodeType == 3) {
                                r = e(z, t, y, x, w)
                            } else {
                                r = o(z, t, y, x, w)
                            }
                        }
                        if (!r) {
                            if (w) {
                                w.detach()
                            }
                        }
                    }
                }
            }
        });
        t.addClass("is-truncated");
        return r
    }

    function e(t, v, G, w, s) {
        var D = t[0];
        if (!D) {
            return false
        }
        var z = i(D), r = (z.indexOf(" ") !== -1) ? " " : "\u3000", B = (w.wrap == "letter") ? "" : r, E = z.split(B),
            A = -1, H = -1, C = 0, u = E.length - 1;
        if (w.fallbackToLetter && C == 0 && u == 0) {
            B = "";
            E = z.split(B);
            u = E.length - 1
        }
        while (C <= u && !(C == 0 && u == 0)) {
            var x = Math.floor((C + u) / 2);
            if (x == H) {
                break
            }
            H = x;
            a(D, E.slice(0, H + 1).join(B) + w.ellipsis);
            G.children().each(function () {
                j(this).toggle().toggle()
            });
            if (!m(G, w)) {
                A = H;
                C = H
            } else {
                u = H;
                if (w.fallbackToLetter && C == 0 && u == 0) {
                    B = "";
                    E = E[0].split(B);
                    A = -1;
                    H = -1;
                    C = 0;
                    u = E.length - 1
                }
            }
        }
        if (A != -1 && !(E.length == 1 && E[0].length == 0)) {
            z = g(E.slice(0, A + 1).join(B), w);
            a(D, z)
        } else {
            var y = t.parent();
            t.detach();
            var F = (s && s.closest(y).length) ? s.length : 0;
            if (y.contents().length > F) {
                D = f(y.contents().eq(-1 - F), v)
            } else {
                D = f(y, v, true);
                if (!F) {
                    y.detach()
                }
            }
            if (D) {
                z = g(i(D), w);
                a(D, z);
                if (F && s) {
                    j(D).parent().append(s)
                }
            }
        }
        return true
    }

    function m(s, r) {
        return s.innerHeight() > r.maxHeight
    }

    function g(r, s) {
        while (j.inArray(r.slice(-1), s.lastCharacter.remove) > -1) {
            r = r.slice(0, -1)
        }
        if (j.inArray(r.slice(-1), s.lastCharacter.noEllipsis) < 0) {
            r += s.ellipsis
        }
        return r
    }

    function l(r) {
        return {width: r.innerWidth(), height: r.innerHeight()}
    }

    function a(s, r) {
        if (s.innerText) {
            s.innerText = r
        } else {
            if (s.nodeValue) {
                s.nodeValue = r
            } else {
                if (s.textContent) {
                    s.textContent = r
                }
            }
        }
    }

    function i(r) {
        if (r.innerText) {
            return r.innerText
        } else {
            if (r.nodeValue) {
                return r.nodeValue
            } else {
                if (r.textContent) {
                    return r.textContent
                } else {
                    return ""
                }
            }
        }
    }

    function k(r) {
        do {
            r = r.previousSibling
        } while (r && r.nodeType !== 1 && r.nodeType !== 3);
        return r
    }

    function f(s, v, r) {
        var u = s && s[0], t;
        if (u) {
            if (!r) {
                if (u.nodeType === 3) {
                    return u
                }
                if (j.trim(s.text())) {
                    return f(s.contents().last(), v)
                }
            }
            t = k(u);
            while (!t) {
                s = s.parent();
                if (s.is(v) || !s.length) {
                    return false
                }
                t = k(s[0])
            }
            if (t) {
                return f(j(t), v)
            }
        }
        return false
    }

    function b(r, s) {
        if (!r) {
            return false
        }
        if (typeof r === "string") {
            r = j(r, s);
            return (r.length) ? r : false
        }
        return !r.jquery ? false : r
    }

    function q(u) {
        var v = u.innerHeight(), t = ["paddingTop", "paddingBottom"];
        for (var w = 0, s = t.length; w < s; w++) {
            var r = parseInt(u.css(t[w]), 10);
            if (isNaN(r)) {
                r = 0
            }
            v -= r
        }
        return v
    }

    var p = j.fn.html;
    j.fn.html = function (r) {
        if (r != d && !j.isFunction(r) && this.data("dotdotdot")) {
            return this.trigger("update", [r])
        }
        return p.apply(this, arguments)
    };
    var h = j.fn.text;
    j.fn.text = function (r) {
        if (r != d && !j.isFunction(r) && this.data("dotdotdot")) {
            r = j("<div />").text(r).html();
            return this.trigger("update", [r])
        }
        return h.apply(this, arguments)
    }
})(jQuery);
jQuery(document).ready(function (a) {
    a(".dot-ellipsis").each(function () {
        var f = a(this).hasClass("dot-resize-update");
        var d = a(this).hasClass("dot-timer-update");
        var c = 0;
        var e = a(this).attr("class").split(/\s+/);
        a.each(e, function (h, i) {
            var g = i.match(/^dot-height-(\d+)$/);
            if (g !== null) {
                c = Number(g[1])
            }
        });
        var b = new Object();
        if (d) {
            b.watch = true
        }
        if (f) {
            b.watch = "window"
        }
        if (c > 0) {
            b.height = c
        }
        a(this).dotdotdot(b)
    })
});
jQuery(window).load(function () {
    jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot")
});
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports === "object") {
            a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function (f) {
    var a = /\+/g;

    function d(i) {
        return b.raw ? i : encodeURIComponent(i)
    }

    function g(i) {
        return b.raw ? i : decodeURIComponent(i)
    }

    function h(i) {
        return d(b.json ? JSON.stringify(i) : String(i))
    }

    function c(i) {
        if (i.indexOf('"') === 0) {
            i = i.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            i = decodeURIComponent(i.replace(a, " "));
            return b.json ? JSON.parse(i) : i
        } catch (j) {
        }
    }

    function e(j, i) {
        var k = b.raw ? j : c(j);
        return f.isFunction(i) ? i(k) : k
    }

    var b = f.cookie = function (q, p, v) {
        if (p !== undefined && !f.isFunction(p)) {
            v = f.extend({}, b.defaults, v);
            if (typeof v.expires === "number") {
                var r = v.expires, u = v.expires = new Date();
                u.setTime(+u + r * 86400000)
            }
            return (document.cookie = [d(q), "=", h(p), v.expires ? "; expires=" + v.expires.toUTCString() : "", v.path ? "; path=" + v.path : "", v.domain ? "; domain=" + v.domain : "", v.secure ? "; secure" : ""].join(""))
        }
        var w = q ? undefined : {};
        var s = document.cookie ? document.cookie.split("; ") : [];
        for (var o = 0, m = s.length; o < m; o++) {
            var n = s[o].split("=");
            var j = g(n.shift());
            var k = n.join("=");
            if (q && q === j) {
                w = e(k, p);
                break
            }
            if (!q && (k = e(k)) !== undefined) {
                w[j] = k
            }
        }
        return w
    };
    b.defaults = {};
    f.removeCookie = function (j, i) {
        if (f.cookie(j) === undefined) {
            return false
        }
        f.cookie(j, "", f.extend({}, i, {expires: -1}));
        return !f.cookie(j)
    }
}));
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a((typeof(jQuery) != "undefined") ? jQuery : window.Zepto)
    }
}(function (f) {
    var c = {};
    c.fileapi = f("<input type='file'/>").get(0).files !== undefined;
    c.formdata = window.FormData !== undefined;
    var e = !!f.fn.prop;
    f.fn.attr2 = function () {
        if (!e) {
            return this.attr.apply(this, arguments)
        }
        var g = this.prop.apply(this, arguments);
        if ((g && g.jquery) || typeof g === "string") {
            return g
        }
        return this.attr.apply(this, arguments)
    };
    f.fn.ajaxSubmit = function (j) {
        if (!this.length) {
            d("ajaxSubmit: skipping submit process - no element selected");
            return this
        }
        var i, C, m, o = this;
        if (typeof j == "function") {
            j = {success: j}
        } else {
            if (j === undefined) {
                j = {}
            }
        }
        i = j.type || this.attr2("method");
        C = j.url || this.attr2("action");
        m = (typeof C === "string") ? f.trim(C) : "";
        m = m || window.location.href || "";
        if (m) {
            m = (m.match(/^([^#]+)/) || [])[1]
        }
        j = f.extend(true, {
            url: m,
            success: f.ajaxSettings.success,
            type: i || f.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, j);
        var u = {};
        this.trigger("form-pre-serialize", [this, j, u]);
        if (u.veto) {
            d("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
            return this
        }
        if (j.beforeSerialize && j.beforeSerialize(this, j) === false) {
            d("ajaxSubmit: submit aborted via beforeSerialize callback");
            return this
        }
        var n = j.traditional;
        if (n === undefined) {
            n = f.ajaxSettings.traditional
        }
        var s = [];
        var E, F = this.formToArray(j.semantic, s);
        if (j.data) {
            j.extraData = j.data;
            E = f.param(j.data, n)
        }
        if (j.beforeSubmit && j.beforeSubmit(F, this, j) === false) {
            d("ajaxSubmit: submit aborted via beforeSubmit callback");
            return this
        }
        this.trigger("form-submit-validate", [F, this, j, u]);
        if (u.veto) {
            d("ajaxSubmit: submit vetoed via form-submit-validate trigger");
            return this
        }
        var y = f.param(F, n);
        if (E) {
            y = (y ? (y + "&" + E) : E)
        }
        if (j.type.toUpperCase() == "GET") {
            j.url += (j.url.indexOf("?") >= 0 ? "&" : "?") + y;
            j.data = null
        } else {
            j.data = y
        }
        var H = [];
        if (j.resetForm) {
            H.push(function () {
                o.resetForm()
            })
        }
        if (j.clearForm) {
            H.push(function () {
                o.clearForm(j.includeHidden)
            })
        }
        if (!j.dataType && j.target) {
            var l = j.success || function () {
            };
            H.push(function (q) {
                var k = j.replaceTarget ? "replaceWith" : "html";
                f(j.target)[k](q).each(l, arguments)
            })
        } else {
            if (j.success) {
                H.push(j.success)
            }
        }
        j.success = function (K, q, L) {
            var J = j.context || this;
            for (var I = 0, k = H.length; I < k; I++) {
                H[I].apply(J, [K, q, L || o, o])
            }
        };
        if (j.error) {
            var z = j.error;
            j.error = function (J, k, q) {
                var I = j.context || this;
                z.apply(I, [J, k, q, o])
            }
        }
        if (j.complete) {
            var h = j.complete;
            j.complete = function (I, k) {
                var q = j.context || this;
                h.apply(q, [I, k, o])
            }
        }
        var D = f("input[type=file]:enabled", this).filter(function () {
            return f(this).val() !== ""
        });
        var p = D.length > 0;
        var B = "multipart/form-data";
        var x = (o.attr("enctype") == B || o.attr("encoding") == B);
        var w = c.fileapi && c.formdata;
        d("fileAPI :" + w);
        var r = (p || x) && !w;
        var v;
        if (j.iframe !== false && (j.iframe || r)) {
            if (j.closeKeepAlive) {
                f.get(j.closeKeepAlive, function () {
                    v = G(F)
                })
            } else {
                v = G(F)
            }
        } else {
            if ((p || x) && w) {
                v = t(F)
            } else {
                v = f.ajax(j)
            }
        }
        o.removeData("jqxhr").data("jqxhr", v);
        for (var A = 0; A < s.length; A++) {
            s[A] = null
        }
        this.trigger("form-submit-notify", [this, j]);
        return this;

        function g(K) {
            var L = f.param(K, j.traditional).split("&");
            var q = L.length;
            var k = [];
            var J, I;
            for (J = 0; J < q; J++) {
                L[J] = L[J].replace(/\+/g, " ");
                I = L[J].split("=");
                k.push([decodeURIComponent(I[0]), decodeURIComponent(I[1])])
            }
            return k
        }

        function t(q) {
            var k = new FormData();
            for (var I = 0; I < q.length; I++) {
                k.append(q[I].name, q[I].value)
            }
            if (j.extraData) {
                var L = g(j.extraData);
                for (I = 0; I < L.length; I++) {
                    if (L[I]) {
                        k.append(L[I][0], L[I][1])
                    }
                }
            }
            j.data = null;
            var K = f.extend(true, {}, f.ajaxSettings, j, {
                contentType: false,
                processData: false,
                cache: false,
                type: i || "POST"
            });
            if (j.uploadProgress) {
                K.xhr = function () {
                    var M = f.ajaxSettings.xhr();
                    if (M.upload) {
                        M.upload.addEventListener("progress", function (Q) {
                            var P = 0;
                            var N = Q.loaded || Q.position;
                            var O = Q.total;
                            if (Q.lengthComputable) {
                                P = Math.ceil(N / O * 100)
                            }
                            j.uploadProgress(Q, N, O, P)
                        }, false)
                    }
                    return M
                }
            }
            K.data = null;
            var J = K.beforeSend;
            K.beforeSend = function (N, M) {
                if (j.formData) {
                    M.data = j.formData
                } else {
                    M.data = k
                }
                if (J) {
                    J.call(this, N, M)
                }
            };
            return f.ajax(K)
        }

        function G(af) {
            var L = o[0], K, ab, V, ad, Y, N, Q, O, P, Z, ac, T;
            var ai = f.Deferred();
            ai.abort = function (aj) {
                O.abort(aj)
            };
            if (af) {
                for (ab = 0; ab < s.length; ab++) {
                    K = f(s[ab]);
                    if (e) {
                        K.prop("disabled", false)
                    } else {
                        K.removeAttr("disabled")
                    }
                }
            }
            V = f.extend(true, {}, f.ajaxSettings, j);
            V.context = V.context || V;
            Y = "jqFormIO" + (new Date().getTime());
            if (V.iframeTarget) {
                N = f(V.iframeTarget);
                Z = N.attr2("name");
                if (!Z) {
                    N.attr2("name", Y)
                } else {
                    Y = Z
                }
            } else {
                N = f('<iframe name="' + Y + '" src="' + V.iframeSrc + '" />');
                N.css({position: "absolute", top: "-1000px", left: "-1000px"})
            }
            Q = N[0];
            O = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function () {
                },
                getResponseHeader: function () {
                },
                setRequestHeader: function () {
                },
                abort: function (aj) {
                    var ak = (aj === "timeout" ? "timeout" : "aborted");
                    d("aborting upload... " + ak);
                    this.aborted = 1;
                    try {
                        if (Q.contentWindow.document.execCommand) {
                            Q.contentWindow.document.execCommand("Stop")
                        }
                    } catch (al) {
                    }
                    N.attr("src", V.iframeSrc);
                    O.error = ak;
                    if (V.error) {
                        V.error.call(V.context, O, ak, aj)
                    }
                    if (ad) {
                        f.event.trigger("ajaxError", [O, V, ak])
                    }
                    if (V.complete) {
                        V.complete.call(V.context, O, ak)
                    }
                }
            };
            ad = V.global;
            if (ad && 0 === f.active++) {
                f.event.trigger("ajaxStart")
            }
            if (ad) {
                f.event.trigger("ajaxSend", [O, V])
            }
            if (V.beforeSend && V.beforeSend.call(V.context, O, V) === false) {
                if (V.global) {
                    f.active--
                }
                ai.reject();
                return ai
            }
            if (O.aborted) {
                ai.reject();
                return ai
            }
            P = L.clk;
            if (P) {
                Z = P.name;
                if (Z && !P.disabled) {
                    V.extraData = V.extraData || {};
                    V.extraData[Z] = P.value;
                    if (P.type == "image") {
                        V.extraData[Z + ".x"] = L.clk_x;
                        V.extraData[Z + ".y"] = L.clk_y
                    }
                }
            }
            var U = 1;
            var R = 2;

            function S(al) {
                var ak = null;
                try {
                    if (al.contentWindow) {
                        ak = al.contentWindow.document
                    }
                } catch (aj) {
                    d("cannot get iframe.contentWindow document: " + aj)
                }
                if (ak) {
                    return ak
                }
                try {
                    ak = al.contentDocument ? al.contentDocument : al.document
                } catch (aj) {
                    d("cannot get iframe.contentDocument: " + aj);
                    ak = al.document
                }
                return ak
            }

            var J = f("meta[name=csrf-token]").attr("content");
            var I = f("meta[name=csrf-param]").attr("content");
            if (I && J) {
                V.extraData = V.extraData || {};
                V.extraData[I] = J
            }

            function aa() {
                var ar = o.attr2("target"), an = o.attr2("action"), al = "multipart/form-data",
                    ao = o.attr("enctype") || o.attr("encoding") || al;
                L.setAttribute("target", Y);
                if (!i || /post/i.test(i)) {
                    L.setAttribute("method", "POST")
                }
                if (an != V.url) {
                    L.setAttribute("action", V.url)
                }
                if (!V.skipEncodingOverride && (!i || /post/i.test(i))) {
                    o.attr({encoding: "multipart/form-data", enctype: "multipart/form-data"})
                }
                if (V.timeout) {
                    T = setTimeout(function () {
                        ac = true;
                        X(U)
                    }, V.timeout)
                }

                function ap() {
                    try {
                        var at = S(Q).readyState;
                        d("state = " + at);
                        if (at && at.toLowerCase() == "uninitialized") {
                            setTimeout(ap, 50)
                        }
                    } catch (au) {
                        d("Server abort: ", au, " (", au.name, ")");
                        X(R);
                        if (T) {
                            clearTimeout(T)
                        }
                        T = undefined
                    }
                }

                var aq = [];
                try {
                    if (V.extraData) {
                        for (var ak in V.extraData) {
                            if (V.extraData.hasOwnProperty(ak)) {
                                if (f.isPlainObject(V.extraData[ak]) && V.extraData[ak].hasOwnProperty("name") && V.extraData[ak].hasOwnProperty("value")) {
                                    aq.push(f('<input type="hidden" name="' + V.extraData[ak].name + '">').val(V.extraData[ak].value).appendTo(L)[0])
                                } else {
                                    aq.push(f('<input type="hidden" name="' + ak + '">').val(V.extraData[ak]).appendTo(L)[0])
                                }
                            }
                        }
                    }
                    if (!V.iframeTarget) {
                        N.appendTo("body")
                    }
                    if (Q.attachEvent) {
                        Q.attachEvent("onload", X)
                    } else {
                        Q.addEventListener("load", X, false)
                    }
                    setTimeout(ap, 15);
                    try {
                        L.submit()
                    } catch (am) {
                        var aj = document.createElement("form").submit;
                        aj.apply(L)
                    }
                } finally {
                    L.setAttribute("action", an);
                    L.setAttribute("enctype", ao);
                    if (ar) {
                        L.setAttribute("target", ar)
                    } else {
                        o.removeAttr("target")
                    }
                    f(aq).remove()
                }
            }

            if (V.forceSync) {
                aa()
            } else {
                setTimeout(aa, 10)
            }
            var ag, ah, ae = 50, M;

            function X(ap) {
                if (O.aborted || M) {
                    return
                }
                ah = S(Q);
                if (!ah) {
                    d("cannot access response document");
                    ap = R
                }
                if (ap === U && O) {
                    O.abort("timeout");
                    ai.reject(O, "timeout");
                    return
                } else {
                    if (ap == R && O) {
                        O.abort("server abort");
                        ai.reject(O, "error", "server abort");
                        return
                    }
                }
                if (!ah || ah.location.href == V.iframeSrc) {
                    if (!ac) {
                        return
                    }
                }
                if (Q.detachEvent) {
                    Q.detachEvent("onload", X)
                } else {
                    Q.removeEventListener("load", X, false)
                }
                var an = "success", ar;
                try {
                    if (ac) {
                        throw"timeout"
                    }
                    var am = V.dataType == "xml" || ah.XMLDocument || f.isXMLDoc(ah);
                    d("isXml=" + am);
                    if (!am && window.opera && (ah.body === null || !ah.body.innerHTML)) {
                        if (--ae) {
                            d("requeing onLoad callback, DOM not available");
                            setTimeout(X, 250);
                            return
                        }
                    }
                    var at = ah.body ? ah.body : ah.documentElement;
                    O.responseText = at ? at.innerHTML : null;
                    O.responseXML = ah.XMLDocument ? ah.XMLDocument : ah;
                    if (am) {
                        V.dataType = "xml"
                    }
                    O.getResponseHeader = function (aw) {
                        var av = {"content-type": V.dataType};
                        return av[aw.toLowerCase()]
                    };
                    if (at) {
                        O.status = Number(at.getAttribute("status")) || O.status;
                        O.statusText = at.getAttribute("statusText") || O.statusText
                    }
                    var aj = (V.dataType || "").toLowerCase();
                    var aq = /(json|script|text)/.test(aj);
                    if (aq || V.textarea) {
                        var ao = ah.getElementsByTagName("textarea")[0];
                        if (ao) {
                            O.responseText = ao.value;
                            O.status = Number(ao.getAttribute("status")) || O.status;
                            O.statusText = ao.getAttribute("statusText") || O.statusText
                        } else {
                            if (aq) {
                                var ak = ah.getElementsByTagName("pre")[0];
                                var au = ah.getElementsByTagName("body")[0];
                                if (ak) {
                                    O.responseText = ak.textContent ? ak.textContent : ak.innerText
                                } else {
                                    if (au) {
                                        O.responseText = au.textContent ? au.textContent : au.innerText
                                    }
                                }
                            }
                        }
                    } else {
                        if (aj == "xml" && !O.responseXML && O.responseText) {
                            O.responseXML = W(O.responseText)
                        }
                    }
                    try {
                        ag = k(O, aj, V)
                    } catch (al) {
                        an = "parsererror";
                        O.error = ar = (al || an)
                    }
                } catch (al) {
                    d("error caught: ", al);
                    an = "error";
                    O.error = ar = (al || an)
                }
                if (O.aborted) {
                    d("upload aborted");
                    an = null
                }
                if (O.status) {
                    an = (O.status >= 200 && O.status < 300 || O.status === 304) ? "success" : "error"
                }
                if (an === "success") {
                    if (V.success) {
                        V.success.call(V.context, ag, "success", O)
                    }
                    ai.resolve(O.responseText, "success", O);
                    if (ad) {
                        f.event.trigger("ajaxSuccess", [O, V])
                    }
                } else {
                    if (an) {
                        if (ar === undefined) {
                            ar = O.statusText
                        }
                        if (V.error) {
                            V.error.call(V.context, O, an, ar)
                        }
                        ai.reject(O, "error", ar);
                        if (ad) {
                            f.event.trigger("ajaxError", [O, V, ar])
                        }
                    }
                }
                if (ad) {
                    f.event.trigger("ajaxComplete", [O, V])
                }
                if (ad && !--f.active) {
                    f.event.trigger("ajaxStop")
                }
                if (V.complete) {
                    V.complete.call(V.context, O, an)
                }
                M = true;
                if (V.timeout) {
                    clearTimeout(T)
                }
                setTimeout(function () {
                    if (!V.iframeTarget) {
                        N.remove()
                    } else {
                        N.attr("src", V.iframeSrc)
                    }
                    O.responseXML = null
                }, 100)
            }

            var W = f.parseXML || function (aj, ak) {
                if (window.ActiveXObject) {
                    ak = new ActiveXObject("Microsoft.XMLDOM");
                    ak.async = "false";
                    ak.loadXML(aj)
                } else {
                    ak = (new DOMParser()).parseFromString(aj, "text/xml")
                }
                return (ak && ak.documentElement && ak.documentElement.nodeName != "parsererror") ? ak : null
            };
            var q = f.parseJSON || function (aj) {
                return window["eval"]("(" + aj + ")")
            };
            var k = function (ao, am, al) {
                var ak = ao.getResponseHeader("content-type") || "", aj = am === "xml" || !am && ak.indexOf("xml") >= 0,
                    an = aj ? ao.responseXML : ao.responseText;
                if (aj && an.documentElement.nodeName === "parsererror") {
                    if (f.error) {
                        f.error("parsererror")
                    }
                }
                if (al && al.dataFilter) {
                    an = al.dataFilter(an, am)
                }
                if (typeof an === "string") {
                    if (am === "json" || !am && ak.indexOf("json") >= 0) {
                        an = q(an)
                    } else {
                        if (am === "script" || !am && ak.indexOf("javascript") >= 0) {
                            f.globalEval(an)
                        }
                    }
                }
                return an
            };
            return ai
        }
    };
    f.fn.ajaxForm = function (g) {
        g = g || {};
        g.delegation = g.delegation && f.isFunction(f.fn.on);
        if (!g.delegation && this.length === 0) {
            var h = {s: this.selector, c: this.context};
            if (!f.isReady && h.s) {
                d("DOM not ready, queuing ajaxForm");
                f(function () {
                    f(h.s, h.c).ajaxForm(g)
                });
                return this
            }
            d("terminating; zero elements found by selector" + (f.isReady ? "" : " (DOM not ready)"));
            return this
        }
        if (g.delegation) {
            f(document).off("submit.form-plugin", this.selector, b).off("click.form-plugin", this.selector, a).on("submit.form-plugin", this.selector, g, b).on("click.form-plugin", this.selector, g, a);
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", g, b).bind("click.form-plugin", g, a)
    };

    function b(h) {
        var g = h.data;
        if (!h.isDefaultPrevented()) {
            h.preventDefault();
            f(h.target).ajaxSubmit(g)
        }
    }

    function a(k) {
        var j = k.target;
        var h = f(j);
        if (!(h.is("[type=submit],[type=image]"))) {
            var g = h.closest("[type=submit]");
            if (g.length === 0) {
                return
            }
            j = g[0]
        }
        var i = this;
        i.clk = j;
        if (j.type == "image") {
            if (k.offsetX !== undefined) {
                i.clk_x = k.offsetX;
                i.clk_y = k.offsetY
            } else {
                if (typeof f.fn.offset == "function") {
                    var l = h.offset();
                    i.clk_x = k.pageX - l.left;
                    i.clk_y = k.pageY - l.top
                } else {
                    i.clk_x = k.pageX - j.offsetLeft;
                    i.clk_y = k.pageY - j.offsetTop
                }
            }
        }
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    f.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    };
    f.fn.formToArray = function (x, g) {
        var w = [];
        if (this.length === 0) {
            return w
        }
        var l = this[0];
        var z = this.attr("id");
        var q = x ? l.getElementsByTagName("*") : l.elements;
        var A;
        if (q && !/MSIE [678]/.test(navigator.userAgent)) {
            q = f(q).get()
        }
        if (z) {
            A = f(":input[form=" + z + "]").get();
            if (A.length) {
                q = (q || []).concat(A)
            }
        }
        if (!q || !q.length) {
            return w
        }
        var r, p, o, y, m, t, k;
        for (r = 0, t = q.length; r < t; r++) {
            m = q[r];
            o = m.name;
            if (!o || m.disabled) {
                continue
            }
            if (x && l.clk && m.type == "image") {
                if (l.clk == m) {
                    w.push({name: o, value: f(m).val(), type: m.type});
                    w.push({name: o + ".x", value: l.clk_x}, {name: o + ".y", value: l.clk_y})
                }
                continue
            }
            y = f.fieldValue(m, true);
            if (y && y.constructor == Array) {
                if (g) {
                    g.push(m)
                }
                for (p = 0, k = y.length; p < k; p++) {
                    w.push({name: o, value: y[p]})
                }
            } else {
                if (c.fileapi && m.type == "file") {
                    if (g) {
                        g.push(m)
                    }
                    var h = m.files;
                    if (h.length) {
                        for (p = 0; p < h.length; p++) {
                            w.push({name: o, value: h[p], type: m.type})
                        }
                    } else {
                        w.push({name: o, value: "", type: m.type})
                    }
                } else {
                    if (y !== null && typeof y != "undefined") {
                        if (g) {
                            g.push(m)
                        }
                        w.push({name: o, value: y, type: m.type, required: m.required})
                    }
                }
            }
        }
        if (!x && l.clk) {
            var s = f(l.clk), u = s[0];
            o = u.name;
            if (o && !u.disabled && u.type == "image") {
                w.push({name: o, value: s.val()});
                w.push({name: o + ".x", value: l.clk_x}, {name: o + ".y", value: l.clk_y})
            }
        }
        return w
    };
    f.fn.formSerialize = function (g) {
        return f.param(this.formToArray(g))
    };
    f.fn.fieldSerialize = function (h) {
        var g = [];
        this.each(function () {
            var m = this.name;
            if (!m) {
                return
            }
            var k = f.fieldValue(this, h);
            if (k && k.constructor == Array) {
                for (var l = 0, j = k.length; l < j; l++) {
                    g.push({name: m, value: k[l]})
                }
            } else {
                if (k !== null && typeof k != "undefined") {
                    g.push({name: this.name, value: k})
                }
            }
        });
        return f.param(g)
    };
    f.fn.fieldValue = function (m) {
        for (var l = [], j = 0, g = this.length; j < g; j++) {
            var k = this[j];
            var h = f.fieldValue(k, m);
            if (h === null || typeof h == "undefined" || (h.constructor == Array && !h.length)) {
                continue
            }
            if (h.constructor == Array) {
                f.merge(l, h)
            } else {
                l.push(h)
            }
        }
        return l
    };
    f.fieldValue = function (g, o) {
        var j = g.name, u = g.type, w = g.tagName.toLowerCase();
        if (o === undefined) {
            o = true
        }
        if (o && (!j || g.disabled || u == "reset" || u == "button" || (u == "checkbox" || u == "radio") && !g.checked || (u == "submit" || u == "image") && g.form && g.form.clk != g || w == "select" && g.selectedIndex == -1)) {
            return null
        }
        if (w == "select") {
            var p = g.selectedIndex;
            if (p < 0) {
                return null
            }
            var r = [], h = g.options;
            var l = (u == "select-one");
            var q = (l ? p + 1 : h.length);
            for (var k = (l ? p : 0); k < q; k++) {
                var m = h[k];
                if (m.selected) {
                    var s = m.value;
                    if (!s) {
                        s = (m.attributes && m.attributes.value && !(m.attributes.value.specified)) ? m.text : m.value
                    }
                    if (l) {
                        return s
                    }
                    r.push(s)
                }
            }
            return r
        }
        return f(g).val()
    };
    f.fn.clearForm = function (g) {
        return this.each(function () {
            f("input,select,textarea", this).clearFields(g)
        })
    };
    f.fn.clearFields = f.fn.clearInputs = function (g) {
        var h = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var j = this.type, i = this.tagName.toLowerCase();
            if (h.test(j) || i == "textarea") {
                this.value = ""
            } else {
                if (j == "checkbox" || j == "radio") {
                    this.checked = false
                } else {
                    if (i == "select") {
                        this.selectedIndex = -1
                    } else {
                        if (j == "file") {
                            if (/MSIE/.test(navigator.userAgent)) {
                                f(this).replaceWith(f(this).clone(true))
                            } else {
                                f(this).val("")
                            }
                        } else {
                            if (g) {
                                if ((g === true && /hidden/.test(j)) || (typeof g == "string" && f(this).is(g))) {
                                    this.value = ""
                                }
                            }
                        }
                    }
                }
            }
        })
    };
    f.fn.resetForm = function () {
        return this.each(function () {
            if (typeof this.reset == "function" || (typeof this.reset == "object" && !this.reset.nodeType)) {
                this.reset()
            }
        })
    };
    f.fn.enable = function (g) {
        if (g === undefined) {
            g = true
        }
        return this.each(function () {
            this.disabled = !g
        })
    };
    f.fn.selected = function (g) {
        if (g === undefined) {
            g = true
        }
        return this.each(function () {
            var h = this.type;
            if (h == "checkbox" || h == "radio") {
                this.checked = g
            } else {
                if (this.tagName.toLowerCase() == "option") {
                    var i = f(this).parent("select");
                    if (g && i[0] && i[0].type == "select-one") {
                        i.find("option").selected(false)
                    }
                    this.selected = g
                }
            }
        })
    };
    f.fn.ajaxSubmit.debug = false;

    function d() {
        if (!f.fn.ajaxSubmit.debug) {
            return
        }
        var g = "[jquery.form] " + Array.prototype.join.call(arguments, "");
        if (window.console && window.console.log) {
            window.console.log(g)
        } else {
            if (window.opera && window.opera.postError) {
                window.opera.postError(g)
            }
        }
    }
}));
/*!
 *
 */
(function (a) {
    a.fn.numberInput = function (d) {
        var c = a.extend({}, a.fn.numberInput.defaults, d);

        function f(l) {
            var g = a(l);
            var h = a.meta ? a.extend({}, c, g.data()) : c;
            var m;
            if (h.main_cell) {
                m = a(h.main_cell, g)
            } else {
                m = g
            }
            var n = m.attr(h.max_attr);
            var k = m.attr(h.min_attr);
            var j = m.val();
            b(g, m, n, k);
            e(g, m, j, n, k);
            if (h.minus_cell) {
                var o = a(h.minus_cell, g);
                o.click(function () {
                    var p = parseInt(m.val()) - h.step;
                    if (!a.isNumeric(k) || p >= k) {
                        m.val(p);
                        e(g, m, p, n, k, true)
                    }
                    return false
                })
            }
            if (h.incr_cell) {
                var i = a(h.incr_cell, g);
                i.click(function () {
                    var p = parseInt(m.val()) + h.step;
                    if (!a.isNumeric(n) || p <= n) {
                        m.val(p);
                        e(g, m, p, n, k, true)
                    }
                    return false
                })
            }
        }

        function b(j, i, g, h) {
            i.keydown(function (l) {
                var k = parseInt(l.keyCode);
                if (k >= 96 && k <= 105 || k >= 48 && k <= 57 || k == 8) {
                    return true
                } else {
                    return false
                }
            }).bind("paste", function () {
                a(this).val(a(this).val().replace(/\D|^0/g, ""))
            }).blur(function () {
                var k = a(this).val();
                k = parseInt(k.replace(/\D|^0/g, ""));
                if (!a.isNumeric(k)) {
                    k = 1
                }
                if (a.isNumeric(g) && k > g) {
                    k = g
                } else {
                    if (a.isNumeric(h) && k < h) {
                        k = h
                    }
                }
                a(this).val(k);
                e(j, i, k, g, h, true)
            }).css("imeMode", "disabled").attr("autocomplete", "off");
            if (a.isNumeric(g) && g.length > 0) {
                i.attr("maxlength", g.length)
            }
        }

        function e(n, m, k, g, h, j) {
            if (c.minus_cell) {
                var i = a(c.minus_cell, n);
                if (a.isNumeric(h) && k <= h) {
                    i.addClass(c.disable_class)
                }
                if (a.isNumeric(h) && k > h) {
                    i.removeClass(c.disable_class)
                }
            }
            if (c.incr_cell) {
                var l = a(c.incr_cell, n);
                if (a.isNumeric(g) && k >= g) {
                    l.addClass(c.disable_class)
                }
                if (a.isNumeric(g) && k < g) {
                    l.removeClass(c.disable_class)
                }
            }
            if (j && c.callback) {
                c.callback(m, k)
            }
        }

        return this.each(function () {
            f(this)
        })
    };
    a.fn.numberInput.defaults = {
        max_attr: "max",
        min_attr: "min",
        main_cell: "input",
        minus_cell: ".reduce",
        incr_cell: ".plus",
        disable_class: "disable",
        callback: 0,
        step: 1
    }
})(jQuery);
(function (a) {
    a.PaginationCalculator = function (b, c) {
        this.maxentries = b;
        this.opts = c
    };
    a.extend(a.PaginationCalculator.prototype, {
        numPages: function () {
            return Math.ceil(this.maxentries / this.opts.items_per_page)
        }, getInterval: function (f) {
            var d = Math.floor(this.opts.num_display_entries / 2);
            var e = this.numPages();
            var c = e - this.opts.num_display_entries;
            var g = f > d ? Math.max(Math.min(f - d, c), 0) : 0;
            var b = f > d ? Math.min(f + d + (this.opts.num_display_entries % 2), e) : Math.min(this.opts.num_display_entries, e);
            return {start: g, end: b}
        }
    });
    a.PaginationRenderers = {};
    a.PaginationRenderers.defaultRenderer = function (b, c) {
        this.maxentries = b;
        this.opts = c;
        this.pc = new a.PaginationCalculator(b, c)
    };
    a.extend(a.PaginationRenderers.defaultRenderer.prototype, {
        createLink: function (b, e, d, f) {
            var g, c = this.pc.numPages();
            b = b < 0 ? 0 : (b < c ? b : c - 1);
            d = a.extend({text: b + 1, classes: ""}, d || {});
            if (b == e) {
                if (f) {
                    g = a('<a href="#" class="' + this.opts.disabled_class + '">' + d.text + "</a>")
                } else {
                    g = a('<a href="#" class="' + this.opts.current_class + '">' + d.text + "</a>")
                }
            } else {
                g = a("<a>" + d.text + "</a>").attr("href", this.opts.link_to.replace(/__id__/, b))
            }
            if (d.classes) {
                g.addClass(d.classes)
            }
            if (d.rel) {
                g.attr("rel", d.rel)
            }
            g.data("page_id", b);
            return g
        }, appendRange: function (c, f, g, b, e) {
            var d;
            for (d = g; d < b; d++) {
                this.createLink(d, f, e).appendTo(c)
            }
        }, getLinks: function (i, e) {
            var f, b, c = this.pc.getInterval(i), h = this.pc.numPages(), d = a("<div class='pagination'></div>");
            if (this.opts.prev_text && (i > 0 || this.opts.prev_show_always)) {
                d.append(this.createLink(i - 1, i, {
                    text: this.opts.prev_text,
                    classes: this.opts.prev_class,
                    rel: "prev"
                }, true))
            }
            if (c.start > 0 && this.opts.num_edge_entries > 0) {
                b = Math.min(this.opts.num_edge_entries, c.start);
                this.appendRange(d, i, 0, b, {classes: "sp"});
                if (this.opts.num_edge_entries < c.start && this.opts.ellipse_text) {
                    a('<span class="' + this.opts.ellipse_class + '">' + this.opts.ellipse_text + "</span>").appendTo(d)
                }
            }
            this.appendRange(d, i, c.start, c.end);
            if (c.end < h && this.opts.num_edge_entries > 0) {
                if (h - this.opts.num_edge_entries > c.end && this.opts.ellipse_text) {
                    a('<span class="' + this.opts.ellipse_class + '">' + this.opts.ellipse_text + "</span>").appendTo(d)
                }
                f = Math.max(h - this.opts.num_edge_entries, c.end);
                this.appendRange(d, i, f, h, {classes: "ep"})
            }
            if (this.opts.next_text && (i < h - 1 || this.opts.next_show_always)) {
                d.append(this.createLink(i + 1, i, {
                    text: this.opts.next_text,
                    classes: this.opts.next_class,
                    rel: "next"
                }, true))
            }
            if (this.opts.show_total) {
                d.append('<span class="total">' + this.opts.total_pref_text + h + this.opts.total_suff_text + "</span>")
            }
            if (this.opts.show_goto) {
                d.append('<span class="goto">' + this.opts.goto_pref_text + '</span><input type="text" class="goto_input" size="3"><span>' + this.opts.goto_suff_text + '</span><input type="button" class="goto_btn" value="' + this.opts.goto_button_text + '"/>');
                a(".goto_input", d).keydown(function (k) {
                    if (k.keyCode == 13) {
                        var j = a(".goto_input", d).val();
                        if (a.isNumeric(j) && j > 0 && j <= h) {
                            e(k, j - 1)
                        }
                    }
                    return false
                });
                a(".goto_btn", d).click(function (k) {
                    var j = a(".goto_input", d).val();
                    if (a.isNumeric(j) && j > 0 && j <= h) {
                        e(k, j - 1)
                    }
                    return false
                })
            }
            var g = this.opts;
            a("a", d).click(function (j) {
                if (a(this).hasClass(g.current_class) || a(this).hasClass(g.disabled_class)) {
                    return false
                }
                e(j);
                return false
            });
            return d
        }
    });
    a.fn.pagination = function (i, b) {
        b = a.extend({
            items_per_page: 10,
            num_display_entries: 5,
            current_page: 0,
            num_edge_entries: 2,
            link_to: "#",
            prev_text: "prev",
            prev_class: "prev",
            next_text: "next",
            next_class: "next",
            current_class: "current",
            disabled_class: "disabled",
            ellipse_text: "...",
            ellipse_class: "",
            prev_show_always: true,
            next_show_always: true,
            renderer: "defaultRenderer",
            show_if_single_page: false,
            load_first_page: true,
            show_total: false,
            total_pref_text: "共",
            total_suff_text: "页",
            show_goto: false,
            goto_pref_text: "到第",
            goto_suff_text: "页",
            goto_button_text: "确 定",
            callback: function () {
                return false
            }
        }, b || {});
        var c = this, f, k, e;

        function d(n, q) {
            var o;
            var m = a(n.target);
            var l = m.data("page_id");
            if (!a.isNumeric(l)) {
                l = q
            }
            var r = g(l);
            if (!r) {
                n.stopPropagation()
            }
            return r
        }

        function g(l) {
            c.data("current_page", l);
            k = f.getLinks(l, d);
            c.empty();
            k.appendTo(c);
            var m = b.callback(l, c);
            return m
        }

        e = parseInt(b.current_page, 10);
        c.data("current_page", e);
        i = (!i || i < 0) ? 1 : i;
        b.items_per_page = (!b.items_per_page || b.items_per_page < 0) ? 1 : b.items_per_page;
        if (!a.PaginationRenderers[b.renderer]) {
            throw new ReferenceError("Pagination renderer '" + b.renderer + "' was not found in jQuery.PaginationRenderers object.")
        }
        f = new a.PaginationRenderers[b.renderer](i, b);
        var h = new a.PaginationCalculator(i, b);
        var j = h.numPages();
        c.off("setPage").on("setPage", {numPages: j}, function (m, l) {
            if (l >= 0 && l < m.data.numPages) {
                g(l);
                return false
            }
        });
        c.off("prevPage").on("prevPage", function (l) {
            var m = a(this).data("current_page");
            if (m > 0) {
                g(m - 1)
            }
            return false
        });
        c.off("nextPage").on("nextPage", {numPages: j}, function (l) {
            var m = a(this).data("current_page");
            if (m < l.data.numPages - 1) {
                g(m + 1)
            }
            return false
        });
        c.off("currentPage").on("currentPage", function () {
            var l = a(this).data("current_page");
            g(l);
            return false
        });
        k = f.getLinks(e, d);
        c.empty();
        if (j > 1 || b.show_if_single_page) {
            k.appendTo(c)
        }
        if (b.load_first_page) {
            b.callback(e, c)
        }
    }
})(jQuery);
(function () {
    function aq(b) {
        function a(g, h, j, d, f, k) {
            for (; f >= 0 && k > f; f += b) {
                var c = d ? d[f] : f;
                j = h(j, g[c], c, g)
            }
            return j
        }

        return function (h, j, f, g) {
            j = aD(j, g, 4);
            var k = !au(h) && ar.keys(h), d = (k || h).length, l = b > 0 ? 0 : d - 1;
            return arguments.length < 3 && (f = h[k ? k[l] : l], l += b), a(h, j, f, k, l, d)
        }
    }

    function ak(a) {
        return function (d, f, g) {
            f = ag(f, g);
            for (var b = Q(d), c = a > 0 ? 0 : b - 1; c >= 0 && b > c; c += a) {
                if (f(d[c], c, d)) {
                    return c
                }
            }
            return -1
        }
    }

    function am(c, a, b) {
        return function (h, f, g) {
            var j = 0, d = Q(h);
            if ("number" == typeof g) {
                c > 0 ? j = g >= 0 ? g : Math.max(g + d, j) : d = g >= 0 ? Math.min(g + 1, d) : g + d + 1
            } else {
                if (b && g && d) {
                    return g = b(h, f), h[g] === f ? g : -1
                }
            }
            if (f !== f) {
                return g = a(at.call(h, j, d), ar.isNaN), g >= 0 ? g + j : -1
            }
            for (g = c > 0 ? j : d - 1; g >= 0 && d > g; g += c) {
                if (h[g] === f) {
                    return g
                }
            }
            return -1
        }
    }

    function aA(g, c) {
        var d = Y.length, f = g.constructor, a = ar.isFunction(f) && f.prototype || aE, b = "constructor";
        for (ar.has(g, b) && !ar.contains(c, b) && c.push(b); d--;) {
            b = Y[d], b in g && g[b] !== a[b] && !ar.contains(c, b) && c.push(b)
        }
    }

    var aj = this, aw = aj._, ap = Array.prototype, aE = Object.prototype, aC = Function.prototype, az = ap.push,
        at = ap.slice, al = aE.toString, ao = aE.hasOwnProperty, ax = Array.isArray, ai = Object.keys, ay = aC.bind,
        af = Object.create, aB = function () {
        }, ar = function (a) {
            return a instanceof ar ? a : this instanceof ar ? void (this._wrapped = a) : new ar(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = ar), exports._ = ar) : aj._ = ar, ar.VERSION = "1.8.3";
    var aD = function (c, a, b) {
        if (a === void 0) {
            return c
        }
        switch (null == b ? 3 : b) {
            case 1:
                return function (d) {
                    return c.call(a, d)
                };
            case 2:
                return function (d, f) {
                    return c.call(a, d, f)
                };
            case 3:
                return function (f, g, d) {
                    return c.call(a, f, g, d)
                };
            case 4:
                return function (g, h, d, f) {
                    return c.call(a, g, h, d, f)
                }
        }
        return function () {
            return c.apply(a, arguments)
        }
    }, ag = function (c, a, b) {
        return null == c ? ar.identity : ar.isFunction(c) ? aD(c, a, b) : ar.isObject(c) ? ar.matcher(c) : ar.property(c)
    };
    ar.iteratee = function (b, a) {
        return ag(b, a, 1 / 0)
    };
    var aF = function (b, a) {
        return function (j) {
            var l = arguments.length;
            if (2 > l || null == j) {
                return j
            }
            for (var g = 1; l > g; g++) {
                for (var h = arguments[g], m = b(h), d = m.length, n = 0; d > n; n++) {
                    var k = m[n];
                    a && j[k] !== void 0 || (j[k] = h[k])
                }
            }
            return j
        }
    }, av = function (b) {
        if (!ar.isObject(b)) {
            return {}
        }
        if (af) {
            return af(b)
        }
        aB.prototype = b;
        var a = new aB;
        return aB.prototype = null, a
    }, ah = function (a) {
        return function (b) {
            return null == b ? void 0 : b[a]
        }
    }, ad = Math.pow(2, 53) - 1, Q = ah("length"), au = function (b) {
        var a = Q(b);
        return "number" == typeof a && a >= 0 && ad >= a
    };
    ar.each = ar.forEach = function (g, c, d) {
        c = aD(c, d);
        var f, a;
        if (au(g)) {
            for (f = 0, a = g.length; a > f; f++) {
                c(g[f], f, g)
            }
        } else {
            var b = ar.keys(g);
            for (f = 0, a = b.length; a > f; f++) {
                c(g[b[f]], b[f], g)
            }
        }
        return g
    }, ar.map = ar.collect = function (k, f, g) {
        f = ag(f, g);
        for (var h = !au(k) && ar.keys(k), c = (h || k).length, d = Array(c), j = 0; c > j; j++) {
            var b = h ? h[j] : j;
            d[j] = f(k[b], b, k)
        }
        return d
    }, ar.reduce = ar.foldl = ar.inject = aq(1), ar.reduceRight = ar.foldr = aq(-1), ar.find = ar.detect = function (d, a, b) {
        var c;
        return c = au(d) ? ar.findIndex(d, a, b) : ar.findKey(d, a, b), c !== void 0 && c !== -1 ? d[c] : void 0
    }, ar.filter = ar.select = function (d, a, b) {
        var c = [];
        return a = ag(a, b), ar.each(d, function (g, f, e) {
            a(g, f, e) && c.push(g)
        }), c
    }, ar.reject = function (c, a, b) {
        return ar.filter(c, ar.negate(ag(a)), b)
    }, ar.every = ar.all = function (h, c, d) {
        c = ag(c, d);
        for (var f = !au(h) && ar.keys(h), a = (f || h).length, b = 0; a > b; b++) {
            var g = f ? f[b] : b;
            if (!c(h[g], g, h)) {
                return !1
            }
        }
        return !0
    }, ar.some = ar.any = function (h, c, d) {
        c = ag(c, d);
        for (var f = !au(h) && ar.keys(h), a = (f || h).length, b = 0; a > b; b++) {
            var g = f ? f[b] : b;
            if (c(h[g], g, h)) {
                return !0
            }
        }
        return !1
    }, ar.contains = ar.includes = ar.include = function (d, a, b, c) {
        return au(d) || (d = ar.values(d)), ("number" != typeof b || c) && (b = 0), ar.indexOf(d, a, b) >= 0
    }, ar.invoke = function (d, a) {
        var b = at.call(arguments, 2), c = ar.isFunction(a);
        return ar.map(d, function (f) {
            var e = c ? a : f[a];
            return null == e ? e : e.apply(f, b)
        })
    }, ar.pluck = function (b, a) {
        return ar.map(b, ar.property(a))
    }, ar.where = function (b, a) {
        return ar.filter(b, ar.matcher(a))
    }, ar.findWhere = function (b, a) {
        return ar.find(b, ar.matcher(a))
    }, ar.max = function (f, m, b) {
        var h, l, g = -1 / 0, d = -1 / 0;
        if (null == m && null != f) {
            f = au(f) ? f : ar.values(f);
            for (var k = 0, j = f.length; j > k; k++) {
                h = f[k], h > g && (g = h)
            }
        } else {
            m = ag(m, b), ar.each(f, function (i, a, c) {
                l = m(i, a, c), (l > d || l === -1 / 0 && g === -1 / 0) && (g = i, d = l)
            })
        }
        return g
    }, ar.min = function (f, m, b) {
        var h, l, g = 1 / 0, d = 1 / 0;
        if (null == m && null != f) {
            f = au(f) ? f : ar.values(f);
            for (var k = 0, j = f.length; j > k; k++) {
                h = f[k], g > h && (g = h)
            }
        } else {
            m = ag(m, b), ar.each(f, function (i, a, c) {
                l = m(i, a, c), (d > l || 1 / 0 === l && 1 / 0 === g) && (g = i, d = l)
            })
        }
        return g
    }, ar.shuffle = function (g) {
        for (var c, d = au(g) ? g : ar.values(g), f = d.length, a = Array(f), b = 0; f > b; b++) {
            c = ar.random(0, b), c !== b && (a[b] = a[c]), a[c] = d[b]
        }
        return a
    }, ar.sample = function (c, a, b) {
        return null == a || b ? (au(c) || (c = ar.values(c)), c[ar.random(c.length - 1)]) : ar.shuffle(c).slice(0, Math.max(0, a))
    }, ar.sortBy = function (c, a, b) {
        return a = ag(a, b), ar.pluck(ar.map(c, function (g, d, f) {
            return {value: g, index: d, criteria: a(g, d, f)}
        }).sort(function (h, d) {
            var f = h.criteria, g = d.criteria;
            if (f !== g) {
                if (f > g || f === void 0) {
                    return 1
                }
                if (g > f || g === void 0) {
                    return -1
                }
            }
            return h.index - d.index
        }), "value")
    };
    var Z = function (a) {
        return function (c, d, f) {
            var b = {};
            return d = ag(d, f), ar.each(c, function (h, g) {
                var j = d(h, g, c);
                a(b, h, j)
            }), b
        }
    };
    ar.groupBy = Z(function (c, a, b) {
        ar.has(c, b) ? c[b].push(a) : c[b] = [a]
    }), ar.indexBy = Z(function (c, a, b) {
        c[b] = a
    }), ar.countBy = Z(function (c, a, b) {
        ar.has(c, b) ? c[b]++ : c[b] = 1
    }), ar.toArray = function (a) {
        return a ? ar.isArray(a) ? at.call(a) : au(a) ? ar.map(a, ar.identity) : ar.values(a) : []
    }, ar.size = function (a) {
        return null == a ? 0 : au(a) ? a.length : ar.keys(a).length
    }, ar.partition = function (f, b, c) {
        b = ag(b, c);
        var d = [], a = [];
        return ar.each(f, function (h, g, e) {
            (b(h, g, e) ? d : a).push(h)
        }), [d, a]
    }, ar.first = ar.head = ar.take = function (c, a, b) {
        return null == c ? void 0 : null == a || b ? c[0] : ar.initial(c, c.length - a)
    }, ar.initial = function (c, a, b) {
        return at.call(c, 0, Math.max(0, c.length - (null == a || b ? 1 : a)))
    }, ar.last = function (c, a, b) {
        return null == c ? void 0 : null == a || b ? c[c.length - 1] : ar.rest(c, Math.max(0, c.length - a))
    }, ar.rest = ar.tail = ar.drop = function (c, a, b) {
        return at.call(c, null == a || b ? 1 : a)
    }, ar.compact = function (a) {
        return ar.filter(a, ar.identity)
    };
    var G = function (g, v, b, m) {
        for (var s = [], j = 0, d = m || 0, q = Q(g); q > d; d++) {
            var p = g[d];
            if (au(p) && (ar.isArray(p) || ar.isArguments(p))) {
                v || (p = G(p, v, b));
                var k = 0, h = p.length;
                for (s.length += h; h > k;) {
                    s[j++] = p[k++]
                }
            } else {
                b || (s[j++] = p)
            }
        }
        return s
    };
    ar.flatten = function (b, a) {
        return G(b, a, !1)
    }, ar.without = function (a) {
        return ar.difference(a, at.call(arguments, 1))
    }, ar.uniq = ar.unique = function (g, q, b, k) {
        ar.isBoolean(q) || (k = b, b = q, q = !1), null != b && (b = ag(b, k));
        for (var p = [], h = [], d = 0, m = Q(g); m > d; d++) {
            var l = g[d], j = b ? b(l, d, g) : l;
            q ? (d && h === j || p.push(l), h = j) : b ? ar.contains(h, j) || (h.push(j), p.push(l)) : ar.contains(p, l) || p.push(l)
        }
        return p
    }, ar.union = function () {
        return ar.uniq(G(arguments, !0, !0))
    }, ar.intersection = function (h) {
        for (var c = [], d = arguments.length, f = 0, a = Q(h); a > f; f++) {
            var b = h[f];
            if (!ar.contains(c, b)) {
                for (var g = 1; d > g && ar.contains(arguments[g], b); g++) {
                }
                g === d && c.push(b)
            }
        }
        return c
    }, ar.difference = function (b) {
        var a = G(arguments, !0, !0, 1);
        return ar.filter(b, function (c) {
            return !ar.contains(a, c)
        })
    }, ar.zip = function () {
        return ar.unzip(arguments)
    }, ar.unzip = function (d) {
        for (var a = d && ar.max(d, Q).length || 0, b = Array(a), c = 0; a > c; c++) {
            b[c] = ar.pluck(d, c)
        }
        return b
    }, ar.object = function (f, b) {
        for (var c = {}, d = 0, a = Q(f); a > d; d++) {
            b ? c[f[d]] = b[d] : c[f[d][0]] = f[d][1]
        }
        return c
    }, ar.findIndex = ak(1), ar.findLastIndex = ak(-1), ar.sortedIndex = function (k, f, g, h) {
        g = ag(g, h, 1);
        for (var c = g(f), d = 0, j = Q(k); j > d;) {
            var b = Math.floor((d + j) / 2);
            g(k[b]) < c ? d = b + 1 : j = b
        }
        return d
    }, ar.indexOf = am(1, ar.findIndex, ar.sortedIndex), ar.lastIndexOf = am(-1, ar.findLastIndex), ar.range = function (g, c, d) {
        null == c && (c = g || 0, g = 0), d = d || 1;
        for (var f = Math.max(Math.ceil((c - g) / d), 0), a = Array(f), b = 0; f > b; b++, g += d) {
            a[b] = g
        }
        return a
    };
    var aa = function (h, c, d, f, a) {
        if (!(f instanceof c)) {
            return h.apply(d, a)
        }
        var b = av(h.prototype), g = h.apply(b, a);
        return ar.isObject(g) ? g : b
    };
    ar.bind = function (d, a) {
        if (ay && d.bind === ay) {
            return ay.apply(d, at.call(arguments, 1))
        }
        if (!ar.isFunction(d)) {
            throw new TypeError("Bind must be called on a function")
        }
        var b = at.call(arguments, 2), c = function () {
            return aa(d, c, a, this, b.concat(at.call(arguments)))
        };
        return c
    }, ar.partial = function (c) {
        var a = at.call(arguments, 1), b = function () {
            for (var g = 0, d = a.length, f = Array(d), h = 0; d > h; h++) {
                f[h] = a[h] === ar ? arguments[g++] : a[h]
            }
            for (; g < arguments.length;) {
                f.push(arguments[g++])
            }
            return aa(c, b, this, this, f)
        };
        return b
    }, ar.bindAll = function (d) {
        var a, b, c = arguments.length;
        if (1 >= c) {
            throw new Error("bindAll must be passed function names")
        }
        for (a = 1; c > a; a++) {
            b = arguments[a], d[b] = ar.bind(d[b], d)
        }
        return d
    }, ar.memoize = function (c, a) {
        var b = function (g) {
            var d = b.cache, f = "" + (a ? a.apply(this, arguments) : g);
            return ar.has(d, f) || (d[f] = c.apply(this, arguments)), d[f]
        };
        return b.cache = {}, b
    }, ar.delay = function (c, a) {
        var b = at.call(arguments, 2);
        return setTimeout(function () {
            return c.apply(null, b)
        }, a)
    }, ar.defer = ar.partial(ar.delay, ar, 1), ar.throttle = function (f, m, b) {
        var h, l, g, d = null, k = 0;
        b || (b = {});
        var j = function () {
            k = b.leading === !1 ? 0 : ar.now(), d = null, g = f.apply(h, l), d || (h = l = null)
        };
        return function () {
            var c = ar.now();
            k || b.leading !== !1 || (k = c);
            var a = m - (c - k);
            return h = this, l = arguments, 0 >= a || a > m ? (d && (clearTimeout(d), d = null), k = c, g = f.apply(h, l), d || (h = l = null)) : d || b.trailing === !1 || (d = setTimeout(j, a)), g
        }
    }, ar.debounce = function (f, m, b) {
        var h, l, g, d, k, j = function () {
            var a = ar.now() - d;
            m > a && a >= 0 ? h = setTimeout(j, m - a) : (h = null, b || (k = f.apply(g, l), h || (g = l = null)))
        };
        return function () {
            g = this, l = arguments, d = ar.now();
            var a = b && !h;
            return h || (h = setTimeout(j, m)), a && (k = f.apply(g, l), g = l = null), k
        }
    }, ar.wrap = function (b, a) {
        return ar.partial(a, b)
    }, ar.negate = function (a) {
        return function () {
            return !a.apply(this, arguments)
        }
    }, ar.compose = function () {
        var b = arguments, a = b.length - 1;
        return function () {
            for (var c = a, d = b[a].apply(this, arguments); c--;) {
                d = b[c].call(this, d)
            }
            return d
        }
    }, ar.after = function (b, a) {
        return function () {
            return --b < 1 ? a.apply(this, arguments) : void 0
        }
    }, ar.before = function (c, a) {
        var b;
        return function () {
            return --c > 0 && (b = a.apply(this, arguments)), 1 >= c && (a = null), b
        }
    }, ar.once = ar.partial(ar.before, 2);
    var V = !{toString: null}.propertyIsEnumerable("toString"),
        Y = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    ar.keys = function (c) {
        if (!ar.isObject(c)) {
            return []
        }
        if (ai) {
            return ai(c)
        }
        var a = [];
        for (var b in c) {
            ar.has(c, b) && a.push(b)
        }
        return V && aA(c, a), a
    }, ar.allKeys = function (c) {
        if (!ar.isObject(c)) {
            return []
        }
        var a = [];
        for (var b in c) {
            a.push(b)
        }
        return V && aA(c, a), a
    }, ar.values = function (f) {
        for (var b = ar.keys(f), c = b.length, d = Array(c), a = 0; c > a; a++) {
            d[a] = f[b[a]]
        }
        return d
    }, ar.mapObject = function (k, f, g) {
        f = ag(f, g);
        for (var h, c = ar.keys(k), d = c.length, j = {}, b = 0; d > b; b++) {
            h = c[b], j[h] = f(k[h], h, k)
        }
        return j
    }, ar.pairs = function (f) {
        for (var b = ar.keys(f), c = b.length, d = Array(c), a = 0; c > a; a++) {
            d[a] = [b[a], f[b[a]]]
        }
        return d
    }, ar.invert = function (f) {
        for (var b = {}, c = ar.keys(f), d = 0, a = c.length; a > d; d++) {
            b[f[c[d]]] = c[d]
        }
        return b
    }, ar.functions = ar.methods = function (c) {
        var a = [];
        for (var b in c) {
            ar.isFunction(c[b]) && a.push(b)
        }
        return a.sort()
    }, ar.extend = aF(ar.allKeys), ar.extendOwn = ar.assign = aF(ar.keys), ar.findKey = function (h, c, d) {
        c = ag(c, d);
        for (var f, a = ar.keys(h), b = 0, g = a.length; g > b; b++) {
            if (f = a[b], c(h[f], f, h)) {
                return f
            }
        }
    }, ar.pick = function (g, v, b) {
        var m, s, j = {}, d = g;
        if (null == d) {
            return j
        }
        ar.isFunction(v) ? (s = ar.allKeys(d), m = aD(v, b)) : (s = G(arguments, !1, !1, 1), m = function (e, a, c) {
            return a in c
        }, d = Object(d));
        for (var q = 0, p = s.length; p > q; q++) {
            var k = s[q], h = d[k];
            m(h, k, d) && (j[k] = h)
        }
        return j
    }, ar.omit = function (d, a, b) {
        if (ar.isFunction(a)) {
            a = ar.negate(a)
        } else {
            var c = ar.map(G(arguments, !1, !1, 1), String);
            a = function (f, e) {
                return !ar.contains(c, e)
            }
        }
        return ar.pick(d, a, b)
    }, ar.defaults = aF(ar.allKeys, !0), ar.create = function (c, a) {
        var b = av(c);
        return a && ar.extendOwn(b, a), b
    }, ar.clone = function (a) {
        return ar.isObject(a) ? ar.isArray(a) ? a.slice() : ar.extend({}, a) : a
    }, ar.tap = function (b, a) {
        return a(b), b
    }, ar.isMatch = function (h, c) {
        var d = ar.keys(c), f = d.length;
        if (null == h) {
            return !f
        }
        for (var a = Object(h), b = 0; f > b; b++) {
            var g = d[b];
            if (c[g] !== a[g] || !(g in a)) {
                return !1
            }
        }
        return !0
    };
    var U = function (g, v, b, m) {
        if (g === v) {
            return 0 !== g || 1 / g === 1 / v
        }
        if (null == g || null == v) {
            return g === v
        }
        g instanceof ar && (g = g._wrapped), v instanceof ar && (v = v._wrapped);
        var s = al.call(g);
        if (s !== al.call(v)) {
            return !1
        }
        switch (s) {
            case"[object RegExp]":
            case"[object String]":
                return "" + g == "" + v;
            case"[object Number]":
                return +g !== +g ? +v !== +v : 0 === +g ? 1 / +g === 1 / v : +g === +v;
            case"[object Date]":
            case"[object Boolean]":
                return +g === +v
        }
        var j = "[object Array]" === s;
        if (!j) {
            if ("object" != typeof g || "object" != typeof v) {
                return !1
            }
            var d = g.constructor, q = v.constructor;
            if (d !== q && !(ar.isFunction(d) && d instanceof d && ar.isFunction(q) && q instanceof q) && "constructor" in g && "constructor" in v) {
                return !1
            }
        }
        b = b || [], m = m || [];
        for (var p = b.length; p--;) {
            if (b[p] === g) {
                return m[p] === v
            }
        }
        if (b.push(g), m.push(v), j) {
            if (p = g.length, p !== v.length) {
                return !1
            }
            for (; p--;) {
                if (!U(g[p], v[p], b, m)) {
                    return !1
                }
            }
        } else {
            var k, h = ar.keys(g);
            if (p = h.length, ar.keys(v).length !== p) {
                return !1
            }
            for (; p--;) {
                if (k = h[p], !ar.has(v, k) || !U(g[k], v[k], b, m)) {
                    return !1
                }
            }
        }
        return b.pop(), m.pop(), !0
    };
    ar.isEqual = function (b, a) {
        return U(b, a)
    }, ar.isEmpty = function (a) {
        return null == a ? !0 : au(a) && (ar.isArray(a) || ar.isString(a) || ar.isArguments(a)) ? 0 === a.length : 0 === ar.keys(a).length
    }, ar.isElement = function (a) {
        return !(!a || 1 !== a.nodeType)
    }, ar.isArray = ax || function (a) {
        return "[object Array]" === al.call(a)
    }, ar.isObject = function (b) {
        var a = typeof b;
        return "function" === a || "object" === a && !!b
    }, ar.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (a) {
        ar["is" + a] = function (b) {
            return al.call(b) === "[object " + a + "]"
        }
    }), ar.isArguments(arguments) || (ar.isArguments = function (a) {
        return ar.has(a, "callee")
    }), "function" != typeof/./ && "object" != typeof Int8Array && (ar.isFunction = function (a) {
        return "function" == typeof a || !1
    }), ar.isFinite = function (a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, ar.isNaN = function (a) {
        return ar.isNumber(a) && a !== +a
    }, ar.isBoolean = function (a) {
        return a === !0 || a === !1 || "[object Boolean]" === al.call(a)
    }, ar.isNull = function (a) {
        return null === a
    }, ar.isUndefined = function (a) {
        return a === void 0
    }, ar.has = function (b, a) {
        return null != b && ao.call(b, a)
    }, ar.noConflict = function () {
        return aj._ = aw, this
    }, ar.identity = function (a) {
        return a
    }, ar.constant = function (a) {
        return function () {
            return a
        }
    }, ar.noop = function () {
    }, ar.property = ah, ar.propertyOf = function (a) {
        return null == a ? function () {
        } : function (b) {
            return a[b]
        }
    }, ar.matcher = ar.matches = function (a) {
        return a = ar.extendOwn({}, a), function (b) {
            return ar.isMatch(b, a)
        }
    }, ar.times = function (f, b, c) {
        var d = Array(Math.max(0, f));
        b = aD(b, c, 1);
        for (var a = 0; f > a; a++) {
            d[a] = b(a)
        }
        return d
    }, ar.random = function (b, a) {
        return null == a && (a = b, b = 0), b + Math.floor(Math.random() * (a - b + 1))
    }, ar.now = Date.now || function () {
        return (new Date).getTime()
    };
    var ac = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, C = ar.invert(ac),
        H = function (f) {
            var b = function (e) {
                return f[e]
            }, c = "(?:" + ar.keys(f).join("|") + ")", d = RegExp(c), a = RegExp(c, "g");
            return function (e) {
                return e = null == e ? "" : "" + e, d.test(e) ? e.replace(a, b) : e
            }
        };
    ar.escape = H(ac), ar.unescape = H(C), ar.result = function (d, a, b) {
        var c = null == d ? void 0 : d[a];
        return c === void 0 && (c = b), ar.isFunction(c) ? c.call(d) : c
    };
    var an = 0;
    ar.uniqueId = function (b) {
        var a = ++an + "";
        return b ? b + a : a
    }, ar.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var X = /(.)^/, ae = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
        ab = /\\|'|\r|\n|\u2028|\u2029/g, W = function (a) {
            return "\\" + ae[a]
        };
    ar.template = function (g, q, b) {
        !q && b && (q = b), q = ar.defaults({}, q, ar.templateSettings);
        var k = RegExp([(q.escape || X).source, (q.interpolate || X).source, (q.evaluate || X).source].join("|") + "|$", "g"),
            p = 0, h = "__p+='";
        g.replace(k, function (f, i, n, s, c) {
            return h += g.slice(p, c).replace(ab, W), p = c + f.length, i ? h += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? h += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : s && (h += "';\n" + s + "\n__p+='"), f
        }), h += "';\n", q.variable || (h = "with(obj||{}){\n" + h + "}\n"), h = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + h + "return __p;\n";
        try {
            var d = new Function(q.variable || "obj", "_", h)
        } catch (m) {
            throw m.source = h, m
        }
        var l = function (a) {
            return d.call(this, a, ar)
        }, j = q.variable || "obj";
        return l.source = "function(" + j + "){\n" + h + "}", l
    }, ar.chain = function (b) {
        var a = ar(b);
        return a._chain = !0, a
    };
    var J = function (b, a) {
        return b._chain ? ar(a).chain() : a
    };
    ar.mixin = function (a) {
        ar.each(ar.functions(a), function (b) {
            var c = ar[b] = a[b];
            ar.prototype[b] = function () {
                var d = [this._wrapped];
                return az.apply(d, arguments), J(this, c.apply(ar, d))
            }
        })
    }, ar.mixin(ar), ar.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (b) {
        var a = ap[b];
        ar.prototype[b] = function () {
            var c = this._wrapped;
            return a.apply(c, arguments), "shift" !== b && "splice" !== b || 0 !== c.length || delete c[0], J(this, c)
        }
    }), ar.each(["concat", "join", "slice"], function (b) {
        var a = ap[b];
        ar.prototype[b] = function () {
            return J(this, a.apply(this._wrapped, arguments))
        }
    }), ar.prototype.value = function () {
        return this._wrapped
    }, ar.prototype.valueOf = ar.prototype.toJSON = ar.prototype.value, ar.prototype.toString = function () {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return ar
    })
}).call(this);
_.templateSettings = {
    evaluate: /\{\{([\s\S]+?)\}\}/g,
    interpolate: /\{\{=([\s\S]+?)\}\}/g,
    escape: /\{\{-([\s\S]+?)\}\}/g
};
!function (e, d) {
    var f = d(e, e.document);
    e.lazySizes = f, "object" == typeof module && module.exports && (module.exports = f)
}(window, function (aj, ai) {
    if (ai.getElementsByClassName) {
        var ah, ag = ai.documentElement, af = aj.Date, ae = aj.HTMLPictureElement, ad = "addEventListener",
            ac = "getAttribute", ab = aj[ad], aa = aj.setTimeout, Z = aj.requestAnimationFrame || aa,
            Y = aj.requestIdleCallback, X = /^picture$/i, W = ["load", "error", "lazyincluded", "_lazyloaded"], V = {},
            U = Array.prototype.forEach, S = function (d, c) {
                return V[c] || (V[c] = new RegExp("(\\s|^)" + c + "(\\s|$)")), V[c].test(d[ac]("class") || "") && V[c]
            }, Q = function (d, c) {
                S(d, c) || d.setAttribute("class", (d[ac]("class") || "").trim() + " " + c)
            }, O = function (e, d) {
                var f;
                (f = S(e, d)) && e.setAttribute("class", (e[ac]("class") || "").replace(f, " "))
            }, M = function (f, e, h) {
                var g = h ? ad : "removeEventListener";
                h && M(f, e), W.forEach(function (a) {
                    f[g](a, e)
                })
            }, K = function (b, l, k, j, i) {
                var h = ai.createEvent("CustomEvent");
                return h.initCustomEvent(l, !j, !i, k || {}), b.dispatchEvent(h), h
            }, J = function (a, f) {
                var c;
                !ae && (c = aj.picturefill || ah.pf) ? c({reevaluate: !0, elements: [a]}) : f && f.src && (a.src = f.src)
            }, I = function (d, c) {
                return (getComputedStyle(d, null) || {})[c]
            }, H = function (e, c, f) {
                for (f = f || e.offsetWidth; f < ah.minSize && c && !e._lazysizesWidth;) {
                    f = c.offsetWidth, c = c.parentNode
                }
                return f
            }, G = function () {
                var b, h, g = [], f = function () {
                    var a;
                    for (b = !0, h = !1; g.length;) {
                        a = g.shift(), a[0].apply(a[1], a[2])
                    }
                    b = !1
                };
                return function (a) {
                    b ? a.apply(this, arguments) : (g.push([a, this, arguments]), h || (h = !0, (ai.hidden ? aa : Z)(f)))
                }
            }(), F = function (d, c) {
                return c ? function () {
                    G(d)
                } : function () {
                    var a = this, e = arguments;
                    G(function () {
                        d.apply(a, e)
                    })
                }
            }, T = function (j) {
                var e, p = 0, o = 125, n = 999, m = n, l = function () {
                    e = !1, p = af.now(), j()
                }, k = Y ? function () {
                    Y(l, {timeout: m}), m !== n && (m = n)
                } : F(function () {
                    aa(l)
                }, !0);
                return function (b) {
                    var c;
                    (b = b === !0) && (m = 66), e || (e = !0, c = o - (af.now() - p), 0 > c && (c = 0), b || 9 > c && Y ? k() : aa(k, c))
                }
            }, R = function (h) {
                var e, l, k = 99, j = function () {
                    e = null, h()
                }, i = function () {
                    var b = af.now() - l;
                    k > b ? aa(i, k - b) : (Y || j)(j)
                };
                return function () {
                    l = af.now(), e || (e = aa(i, k))
                }
            }, P = function () {
                var at, ar, aq, ap, ao, A, am, al, ak, D, B, z, y, w, v, u = /^img$/i, t = /^iframe$/i,
                    s = "onscroll" in aj && !/glebot/.test(navigator.userAgent), r = 0, p = 0, m = 0, j = 0,
                    h = function (f) {
                        m--, f && f.target && M(f.target, h), (!f || 0 > m || !f.target) && (m = 0)
                    }, g = function (k, x) {
                        var o, n = k, l = "hidden" == I(ai.body, "visibility") || "hidden" != I(k, "visibility");
                        for (ak -= x, z += x, D -= x, B += x; l && (n = n.offsetParent) && n != ai.body && n != ag;) {
                            l = (I(n, "opacity") || 1) > 0, l && "visible" != I(n, "overflow") && (o = n.getBoundingClientRect(), l = B > o.left && D < o.right && z > o.top - 1 && ak < o.bottom + 1)
                        }
                        return l
                    }, e = function () {
                        var ax, aw, E, C, x, o, l, k, f;
                        if ((ao = ah.loadMode) && 8 > m && (ax = at.length)) {
                            aw = 0, j++, null == w && ("expand" in ah || (ah.expand = ag.clientHeight > 500 ? 500 : 400), y = ah.expand, w = y * ah.expFactor), w > p && 1 > m && j > 3 && ao > 2 ? (p = w, j = 0) : p = ao > 1 && j > 2 && 6 > m ? y : r;
                            for (; ax > aw; aw++) {
                                if (at[aw] && !at[aw]._lazyRace) {
                                    if (s) {
                                        if ((k = at[aw][ac]("data-expand")) && (o = 1 * k) || (o = p), f !== o && (am = innerWidth + o * v, al = innerHeight + o, l = -1 * o, f = o), E = at[aw].getBoundingClientRect(), (z = E.bottom) >= l && (ak = E.top) <= al && (B = E.right) >= l * v && (D = E.left) <= am && (z || B || D || ak) && (aq && 3 > m && !k && (3 > ao || 4 > j) || g(at[aw], o))) {
                                            if (q(at[aw]), x = !0, m > 9) {
                                                break
                                            }
                                        } else {
                                            !x && aq && !C && 4 > m && 4 > j && ao > 2 && (ar[0] || ah.preloadAfterLoad) && (ar[0] || !k && (z || B || D || ak || "auto" != at[aw][ac](ah.sizesAttr))) && (C = ar[0] || at[aw])
                                        }
                                    } else {
                                        q(at[aw])
                                    }
                                }
                            }
                            C && !x && q(C)
                        }
                    }, d = T(e), c = function (f) {
                        Q(f.target, ah.loadedClass), O(f.target, ah.loadingClass), M(f.target, a)
                    }, b = F(c), a = function (f) {
                        b({target: f.target})
                    }, i = function (k, f) {
                        try {
                            k.contentWindow.location.replace(f)
                        } catch (l) {
                            k.src = f
                        }
                    }, av = function (k) {
                        var f, n, l = k[ac](ah.srcsetAttr);
                        (f = ah.customMedia[k[ac]("data-media") || k[ac]("media")]) && k.setAttribute("media", f), l && k.setAttribute("srcset", l), f && (n = k.parentNode, n.insertBefore(k.cloneNode(), k), n.removeChild(k))
                    }, au = F(function (aC, aB, aA, az, ay) {
                        var ax, aw, E, C, x, n;
                        (x = K(aC, "lazybeforeunveil", aB)).defaultPrevented || (az && (aA ? Q(aC, ah.autosizesClass) : aC.setAttribute("sizes", az)), aw = aC[ac](ah.srcsetAttr), ax = aC[ac](ah.srcAttr), ay && (E = aC.parentNode, C = E && X.test(E.nodeName || "")), n = aB.firesLoad || "src" in aC && (aw || ax || C), x = {target: aC}, n && (M(aC, h, !0), clearTimeout(ap), ap = aa(h, 2500), Q(aC, ah.loadingClass), M(aC, a, !0)), C && U.call(E.getElementsByTagName("source"), av), aw ? aC.setAttribute("srcset", aw) : ax && !C && (t.test(aC.nodeName) ? i(aC, ax) : aC.src = ax), (aw || C) && J(aC, {src: ax})), G(function () {
                            aC._lazyRace && delete aC._lazyRace, O(aC, ah.lazyClass), (!n || aC.complete) && (n ? h(x) : m--, c(x))
                        })
                    }), q = function (l) {
                        var k, x = u.test(l.nodeName), o = x && (l[ac](ah.sizesAttr) || l[ac]("sizes")), n = "auto" == o;
                        (!n && aq || !x || !l.src && !l.srcset || l.complete || S(l, ah.errorClass)) && (k = K(l, "lazyunveilread").detail, n && N.updateElem(l, !0, l.offsetWidth), l._lazyRace = !0, m++, au(l, k, n, o, x))
                    }, an = function () {
                        if (!aq) {
                            if (af.now() - A < 999) {
                                return void aa(an, 999)
                            }
                            var f = R(function () {
                                ah.loadMode = 3, d()
                            });
                            aq = !0, ah.loadMode = 3, d(), ab("scroll", function () {
                                3 == ah.loadMode && (ah.loadMode = 2), f()
                            }, !0)
                        }
                    };
                return {
                    _: function () {
                        A = af.now(), at = ai.getElementsByClassName(ah.lazyClass), ar = ai.getElementsByClassName(ah.lazyClass + " " + ah.preloadClass), v = ah.hFac, ab("scroll", d, !0), ab("resize", d, !0), aj.MutationObserver ? new MutationObserver(d).observe(ag, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (ag[ad]("DOMNodeInserted", d, !0), ag[ad]("DOMAttrModified", d, !0), setInterval(d, 999)), ab("hashchange", d, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (f) {
                            ai[ad](f, d, !0)
                        }), /d$|^c/.test(ai.readyState) ? an() : (ab("load", an), ai[ad]("DOMContentLoaded", d), aa(an, 20000)), d(at.length > 0)
                    }, checkElems: d, unveil: q
                }
            }(), N = function () {
                var b, j = F(function (l, k, q, p) {
                    var o, n, m;
                    if (l._lazysizesWidth = p, p += "px", l.setAttribute("sizes", p), X.test(k.nodeName || "")) {
                        for (o = k.getElementsByTagName("source"), n = 0, m = o.length; m > n; n++) {
                            o[n].setAttribute("sizes", p)
                        }
                    }
                    q.detail.dataAttr || J(l, q.detail)
                }), i = function (g, d, m) {
                    var l, k = g.parentNode;
                    k && (m = H(g, k, m), l = K(g, "lazybeforesizes", {
                        width: m,
                        dataAttr: !!d
                    }), l.defaultPrevented || (m = l.detail.width, m && m !== g._lazysizesWidth && j(g, k, l, m)))
                }, h = function () {
                    var a, d = b.length;
                    if (d) {
                        for (a = 0; d > a; a++) {
                            i(b[a])
                        }
                    }
                }, c = R(h);
                return {
                    _: function () {
                        b = ai.getElementsByClassName(ah.autosizesClass), ab("resize", c)
                    }, checkElems: c, updateElem: i
                }
            }(), L = function () {
                L.i || (L.i = !0, N._(), P._())
            };
        return function () {
            var a, c = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: 0.8,
                loadMode: 2
            };
            ah = aj.lazySizesConfig || aj.lazysizesConfig || {};
            for (a in c) {
                a in ah || (ah[a] = c[a])
            }
            aj.lazySizesConfig = ah, aa(function () {
                ah.init && L()
            })
        }(), {cfg: ah, autoSizer: N, loader: P, init: L, uP: J, aC: Q, rC: O, hC: S, fire: K, gW: H, rAF: G}
    }
});
$(function () {
    if (!isLogin()) {
        // checkLogin()
    }
    initEvent();
    initPageUI();
    initLogin();
    initWareList();
    initTopCart();
    initTopSearchInput();
    initSidebar();
    initScrollTop();
    initTjLink();
    initLwtCountDown();
    initProductBtn();
    initAbout();
    // $(window).resize(function () {
    //     var b = $.simpleDialog.queue;
    //     for (var a = 0; a < b.length; a++) {
    //         b[a].center()
    //     }
    // })
});

function initAbout() {
    $(".about dd").hover(function () {
        $(this).find(".tip").fadeIn()
    }, function () {
        $(this).find(".tip").hide()
    })
}

function initPageUI(a) {
    if (!a) {
        a = $("body")
    }
    initEllipsis(a);
    initCheckbox(a);
    initSelect(a);
    initStar(a)
}

function initStar(a) {
    $(".sel_star", a).each(function () {
        var d = $(this);
        var c = $(this).find("span");
        var b = $(this).find("input");
        if (b.val()) {
            $(this).data("index", b.val());
            c.slice(0, parseInt(d.data("index"))).addClass("active")
        }
        if (!d.hasClass("disabled")) {
            c.mouseenter(function () {
                $(this).addClass("active").prevAll("span").addClass("active")
            }).mouseleave(function () {
                c.removeClass("active");
                if (d.data("index")) {
                    c.slice(0, parseInt(d.data("index"))).addClass("active")
                }
            }).click(function () {
                b.val($(this).data("value"));
                d.data("index", $(this).index())
            })
        }
    })
}

function initSelect(a) {
    $(".shop_selector", a).on("click", "p", function () {
        $(this).toggleClass("curr").siblings("ul").toggle()
    }).on("click", "li", function () {
        var d = $(this).closest(".select");
        d.find("p").removeClass("curr");
        var c = d.data("val");
        var e = $(this).data("value");
        if (c != e) {
            d.data("val", e).find("p").find("font").text($(this).find("font").text());
            $(this).addClass("curr").siblings().removeClass("curr");
            d.trigger("change")
        }
        $(this).closest("ul").hide()
    });
    var b = $(".my_select");
    if (b.size() > 0) {
        b.find("dl").each(function () {
            $(this).css("width", $(this).parent().width())
        });
        b.find("p").each(function () {
            $(this).css("width", $(this).parent().width() - 30)
        });
        b.live("click", function (d) {
            _event.stop_bubble(d);
            b.css("z-index", "1");
            $(this).css("z-index", "5");
            b.children("dl").hide();
            $(this).children("dl").show();
            if ($(this).children("dl").height() >= 200) {
                $(this).children("dl").css({height: 200, "overflow-y": "scroll"})
            } else {
                $(this).children("dl").css({height: "auto", "overflow-y": "visible"})
            }
            var c = _event.get_event(d);
            if (c.tagName == "DD") {
                $(c).parent().hide()
            }
        });
        b.find("dd").live("click", function () {
            var c = $(this).closest("div").find("input").val();
            var d = $(this).attr("value");
            $(this).closest("dl").height("auto");
            $(this).attr("checked", "checked").siblings().removeAttr("checked");
            $(this).closest("div").find("input").val($(this).attr("value")).prev().children("span").text($(this).text());
            if (c != d) {
                $(this).trigger("change")
            }
        });
        b.find('dd[checked="checked"]').click();
        b.live("hover", function (c) {
            if (c.type == "mouseenter") {
            } else {
                $(this).children("dl").hide()
            }
        });
        $(document).click(function () {
            b.children("dl").hide()
        })
    }
}

function initTjLink() {
    $(".tj_link").each(function () {
        var b = $(this).data("url");
        var a = $(this).data("pid");
        if (!b && a) {
            b = ctx + "/product/" + a
        }
        if (b) {
            $(this).attr("href", b)
        } else {
            if ($(this).attr("href") == "" || $(this).attr("href") == "#") {
                $(this).click(function () {
                    return false
                })
            }
        }
    })
}

function initTopCart() {
    $(".header_cart_tip").mouseenter(function () {
        var a = $(this);
        if (!a.find(".text").hasClass("curr")) {
            $.getJSON(ctx + "/cart/cartList?_=" + new Date().getTime(), function (b) {
                if (b.code == 1) {
                    $(".cartNum").text(b.result.sumNum);
                    var c = a.find(".cart_list");
                    c.html(_.template($.trim($("#top_cart_tpl").html()))(b.result));
                    c.stop().slideDown().siblings(".text").addClass("curr");
                    initEllipsis(c);
                    $(".close", c).click(function () {
                        var e = $(this).closest("li");
                        var d = e.data("pid");
                        $.ajax({
                            type: "post", url: ctx + "/cart/remove", data: {pids: d}, success: function (f) {
                                if (f.code == 1) {
                                    $(".cartNum").text(f.result.sumNum);
                                    if (f.result.sumNum > 0) {
                                        e.remove();
                                        $(".cartTotalPrice span").text(getRmbPrice(f.result.sumPrice))
                                    } else {
                                        c.html('<p class="list_null">购物车还没有商品，快去挑选商品吧！</p>')
                                    }
                                } else {
                                    showErrorAlert(f.message)
                                }
                            }, dataType: "json"
                        });
                        return false
                    })
                }
            })
        }
    }).mouseleave(function () {
        $(this).find(".cart_list").stop().slideUp().siblings(".text").removeClass("curr")
    });
    $(".header_cart_tip .shop_list .close").on("click", function () {
        $(this).closest("li").remove();
        return false
    })
}

function initTopSearchInput() {
    var b = $(".header_search .text");
    if (b.val()) {
        b.addClass("focus").siblings(".keyword").hide()
    }
    b.on("click", function (c) {
        c.stopPropagation();
        $(this).addClass("focus").siblings(".keyword").hide();
        showSearchSuggest()
    }).keyup(function (c) {
        if (c.keyCode == 13) {
            window.location.href = ctx + "/product/list?kw=" + $(this).val()
        } else {
            showSearchSuggest()
        }
    });
    $(".header_search .btn").click(function () {
        window.location.href = ctx + "/product/list?kw=" + b.val();
        return false
    });
    var a = b.siblings(".keyword_list");
    a.on("click", function (c) {
        c.stopPropagation()
    });
    $("html").on("click", function () {
        var c = $.trim(b.val());
        if (!c) {
            b.siblings(".keyword").show()
        }
        b.removeClass("focus");
        a.stop().slideUp(100)
    })
}

function showSearchSuggest() {
    var c = $(".header_search .text");
    var a = c.siblings(".keyword_list");
    var b = $.trim(c.val());
    var d = c.data("oldKey");
    if (b != d) {
        c.data("oldKey", b);
        $.getJSON(ctx + "/api/searchSuggest?key=" + b, function (f) {
            if (f) {
                var e = a.find("dl");
                e.empty();
                $.each(f, function (i, h) {
                    var g = "<font>" + b + "</font>" + i.substring(b.length);
                    e.append('<dd><a href="' + ctx + "/product/list?kw=" + i + '"><span>约有<i>' + h + "</i>件</span>" + g + "</a></dd>")
                });
                if (a.find("dd").length > 0) {
                    a.stop().slideDown()
                } else {
                    a.hide()
                }
            }
        })
    } else {
        if (a.find("dd").length > 0) {
            a.stop().slideDown(100)
        } else {
            a.hide()
        }
    }
}

function initSidebar() {
    $(".fixed_bar dd").hover(function () {
        $(this).find(".tip").show().stop().animate({left: -78, opacity: 1})
    }, function () {
        $(this).find(".tip").stop().animate({left: -128, opacity: 0}, function () {
            $(this).hide()
        })
    })
}

function initScrollTop() {
    var a = {
        setting: {startline: 100, scrollto: 0, scrollduration: 1000, fadeduration: [500, 100]},
        controlHTML: '<a href="javascript:void(0)"><span></span></a>',
        controlattrs: {offsetx: 5, offsety: 5},
        anchorkeyword: "#top",
        state: {isvisible: false, shouldvisible: false},
        scrollup: function () {
            if (!this.cssfixedsupport) {
                this.$control.css({opacity: 0})
            }
            var b = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
            if (typeof b == "string" && jQuery("#" + b).length == 1) {
                b = jQuery("#" + b).offset().top
            } else {
                b = 0
            }
            this.$body.animate({scrollTop: b}, this.setting.scrollduration)
        },
        keepfixed: function () {
            var d = jQuery(window);
            var c = d.scrollLeft() + d.width() - this.$control.width() - this.controlattrs.offsetx;
            var b = d.scrollTop() + d.height() - this.$control.height() - this.controlattrs.offsety;
            this.$control.css({left: c + "px", top: b + "px"})
        },
        togglecontrol: function () {
            var b = jQuery(window).scrollTop();
            if (!this.cssfixedsupport) {
                this.keepfixed()
            }
            this.state.shouldvisible = (b >= this.setting.startline) ? true : false;
            if (this.state.shouldvisible && !this.state.isvisible) {
                this.$control.stop().animate({opacity: 1}, this.setting.fadeduration[0]);
                this.state.isvisible = true
            } else {
                if (this.state.shouldvisible == false && this.state.isvisible) {
                    this.$control.stop().animate({opacity: 0}, this.setting.fadeduration[1]);
                    this.state.isvisible = false
                }
            }
        },
        init: function () {
            jQuery(document).ready(function (d) {
                var b = a;
                var c = document.all;
                b.cssfixedsupport = !c || c && document.compatMode == "CSS1Compat" && window.XMLHttpRequest;
                b.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? d("html") : d("body")) : d("html,body");
                b.$control = d('<p class="go_top">' + b.controlHTML + "</p>").css({opacity: 0}).attr({title: "Scroll Back to Top"}).click(function () {
                    b.scrollup();
                    return false
                }).appendTo(".fixed_bar");
                if (document.all && !window.XMLHttpRequest && b.$control.text() != "") {
                    b.$control.css({width: b.$control.width()})
                }
                b.togglecontrol();
                d('a[href="' + b.anchorkeyword + '"]').click(function () {
                    b.scrollup();
                    return false
                });
                d(window).bind("scroll resize", function (f) {
                    b.togglecontrol()
                })
            })
        }
    };
    a.init()
}

function initLogin(a) {
    $(".needLogin", a).click(function () {
        var b = $(this).attr("targetUrl");
        if (!b) {
            b = $(this).attr("href")
        }
        if (isLogin()) {
            if ($(this).is("a")) {
                return true
            } else {
                window.location.href = b
            }
        } else {
            loginBox(b);
            return false
        }
    })
}


function updateUserLogin() {
    var a = $(".userlogin");
    a.load(ctx + "/userLogin?_=" + new Date().getTime(), function () {
        initLogin(a)
    })
}

function syncCartNum() {
    $.ajax({
        type: "post", url: ctx + "/cart/num", data: {_: new Date().getTime()}, success: function (a) {
            $(".cartNum").text(a)
        }
    })
}

function loginBox(a) {
    if (!a) {
        a = location.href
    }
    if (a.indexOf("/") == 0) {
        a = host_url + ctx + a
    }
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i)) {
        loginSso(a)
    } else {
        // wm.account.open({location: a, service: "wmshop"})
    }
}

function loginSso(a) {
    window.location.href = ctx + "/login?location=" + encodeURIComponent(a)
}

function isLogin() {
    var a = false;
    $.ajax({
        type: "get", url: ctx + "/isLogin", data: {_: new Date().getTime()}, async: false, success: function (b) {
            a = (b == 1)
        }
    });
    return a
}

function initWareList() {
    $(".top_nav .all_wares").mouseenter(function () {
        $(this).find(".text").addClass("curr").siblings("ul").stop().show()
    }).mouseleave(function () {
        $(this).find(".text").removeClass("curr").siblings("ul").stop().hide()
    });
    $(".top_nav .all_wares li").mouseenter(function () {
        $(this).addClass("on").find("dl").stop().slideDown()
    }).mouseleave(function () {
        $(this).removeClass("on").find("dl").stop().slideUp(0)
    })
}

var _event = {};

function initEvent() {
    _event.stop_bubble = function (a) {
        a = a || window.event;
        if (a.stopPropagation) {
            a.stopPropagation()
        } else {
            a.cancelBubble = true
        }
    };
    _event.get_event = function (b) {
        var b = b || window.event;
        var a = b.target || b.srcElement;
        return a
    };
    $.ajaxSetup({
        beforeSend: function (a) {
            a.setRequestHeader("x-csrf-token", $("#_csrf").val())
        }
    })
}

function initEllipsis(a) {
    if (!a) {
        a = $("body")
    }
    $(".ellipsis", a).each(function () {
        if (!$(this).attr("title")) {
            $(this).attr("title", $.trim($(this).text()))
        }
        $(this).dotdotdot({after: ".suffix", wrap: "letter"})
    });
    $(".ellipsis2", a).each(function () {
        if (!$(this).attr("title")) {
            $(this).attr("title", $.trim($(this).text()))
        }
    })
}

function initCheckbox(a) {
    $(".checkbox label", a).hover(function () {
        $(this).addClass("hover")
    }, function () {
        $(this).removeClass("hover")
    }).click(function () {
        $(this).toggleClass("curr");
        if ($(this).hasClass("curr")) {
            $(this).closest(".checkbox").find("input").attr("checked", true)
        } else {
            $(this).closest(".checkbox").find("input").removeAttr("checked")
        }
    })
}

function log(a) {
    if (window.console) {
        window.console.log(a)
    }
}

function initLwtCountDown() {
    var a = $(".count_down_time");
    var d = new Date().getTime();
    a.each(function (f) {
        var h = $(this), g = Number(h.data("startTime")), e = Number(h.data("endTime"));
        if (!h.attr("id")) {
            h.attr("id", "countdown_box_" + f)
        }
        if (d < g) {
            h.countDown({
                targetTime: g, onComplete: function () {
                    h.countDown({
                        targetTime: e, onComplete: function () {
                            b(h)
                        }, omitDays: true
                    });
                    c(h)
                }, omitDays: true
            })
        } else {
            if (d >= g && d < e) {
                h.countDown({
                    targetTime: e, onComplete: function () {
                        b(h)
                    }, omitDays: true
                })
            }
        }
    });

    function c(e) {
    }

    function b(e) {
    }
}

function showAddToCartMsg() {
    showMsgBox("商品已加入到购物车", {
        buttons: [{label: "继续购物", value: "cancel", className: "continue"}, {
            label: "去购物车查看",
            value: "cart",
            className: "other"
        }], callback: function (a) {
            if (a == "cart") {
                window.location.href = ctx + "/cart"
            }
            return true
        }
    })
}

var defaultMsgBoxOption = {
    title: "提示",
    type: "",
    buttons: [{label: "确认", value: "ok", className: "continue"}, {label: "取消", value: "cancel", className: "cancel"}]
};
var defaultBoxOption = {
    title: "", content: "", buttons: [], callback: function (b, c, a) {
        return true
    }, afterShow: function (b, a) {
    }
};

function showCustomBox(c) {
    c = $.extend({}, defaultBoxOption, c);
    var b = $('<div class="prompt_box"></div>');
    b.append('<p class="title">' + c.title + '<span class="close"></span></p>');
    b.append('<div class="prompt_content">' + c.content + "</div>");
    if (c.buttons && c.buttons.length > 0) {
        var a = $('<p class="btn"></p>');
        $.each(c.buttons, function () {
            a.append('<a href="#" class="' + this.className + '" data-btn-value="' + this.value + '">' + this.label + "</a>")
        });
        b.append(a)
    }
    var d = $.simpleDialog({
        skin: false, content: b, afterShow: function () {
            c.afterShow(this.getContent(), this)
        }
    });
    b.find("[data-btn-value]").click(function () {
        if (c.callback($(this).data("btnValue"), b, d)) {
            d.hide();
            if (typeof c.onClose == "function") {
                c.onClose(b, d)
            }
        }
        return false
    });
    b.find(".close").click(function () {
        d.hide();
        if (typeof c.onClose == "function") {
            c.onClose(b, d)
        }
        return false
    })
}

function showMsgBox(b, a) {
    a = $.extend({}, defaultMsgBoxOption, a);
    a.content = '<p class="tip"><span class="' + a.type + '"></span>' + b + "</p>";
    showCustomBox(a)
}

function showMsgAlert(a) {
    showMsgBox(a, {title: "提示", type: "", buttons: [{label: "确认", value: "ok", className: "continue"}]})
}

function showErrorAlert(a) {
    showMsgBox(a, {type: "error", buttons: [{label: "确认", value: "ok", className: "continue"}]})
}

function showConfirm(b, c, a) {
    a = $.extend({}, defaultMsgBoxOption, {
        type: "warning", callback: function (f, d, e) {
            if (f == "ok") {
                c(d, e)
            }
            return true
        }
    }, a);
    showMsgBox(b, a)
}

function formatMoney(e, d) {
    if (/[^0-9\.]/.test(e)) {
        e = "0.00"
    } else {
        if (e == null || e == "") {
            e = "0.00"
        } else {
            e = e.toString().replace(/^(\d*)$/, "$1.");
            e = (e + "00").replace(/(\d*\.\d\d)\d*/, "$1");
            e = e.replace(".", ",");
            var c = /(\d)(\d{3},)/;
            while (c.test(e)) {
                e = e.replace(c, "$1,$2")
            }
            e = e.replace(/,(\d\d)$/, ".$1")
        }
    }
    if (d == 0) {
        var b = e.split(".");
        if (b[1] == "00") {
            e = b[0]
        }
    }
    return e
}

function getRmbPrice(a) {
    return formatMoney(a / 100, 2)
}

function ellipsisText(f, b) {
    var e = 0;
    var a;
    var c = "";
    for (var d = 0; d < f.length; d++) {
        e++;
        a = f.charCodeAt(d);
        if (a > 127 || a == 94) {
            e++
        }
        if (e >= b && d < f.length - 1) {
            c = c + "...";
            break
        } else {
            c = c + f.charAt(d)
        }
    }
    return c
}

function applyFunc(b, a) {
    var c = b;
    if (typeof b === "string") {
        var d = b.split(".");
        if (d.length > 1) {
            c = window;
            $.each(d, function (e, g) {
                c = c[g]
            })
        } else {
            c = window[b]
        }
    }
    if (typeof c === "function") {
        c.apply(self, a)
    }
}

function initPageBar(d, f) {
    var b = d.data("pageCount");
    var c = d.data("pageNum") - 1;
    var a = d.data("pageSize");
    var e = d.data("pageCallback");
    d.pagination(b, {
        callback: function (h) {
            try {
                h = parseInt(h) + 1;
                if (isNaN(h)) {
                    h = 1
                }
            } catch (g) {
                h = 1
            }
            if (typeof f == "function") {
                f(h)
            } else {
                if (e) {
                    applyFunc(e, [h])
                } else {
                    window.location.href = replaceUrlParam(window.location.href, "p", h)
                }
            }
            return false
        },
        current_page: c,
        load_first_page: false,
        items_per_page: a,
        prev_text: " ",
        next_text: " ",
        current_class: "curr"
    })
}

function appendUrlParam(a, b, c) {
    return a + (a.indexOf("?") == -1 ? "?" : "&") + b + "=" + c
}

function getUrlParam(b, c) {
    if (!c) {
        c = b;
        b = undefined
    }
    var d = new RegExp("[?&]" + c + "=(.*?)(?=&|$)");
    var a = b ? b.match(d) : window.location.search.match(d);
    return a ? decodeURIComponent(a[1]) : null
}

function replaceUrlParam(a, b, d) {
    var c = getUrlParam(a, b);
    if (c === null) {
        return appendUrlParam(a, b, d)
    } else {
        return a.replace(new RegExp("(\\?|&)" + b + "=[^&]*"), "$1" + b + "=" + d)
    }
}

function addToCart(a, c) {
    if (!c) {
        c = 1
    }
    var d = [];
    var b = [];
    d.push(a);
    b.push(c);
    $.ajax({
        type: "post",
        traditional: true,
        url: ctx + "/cart/addNum",
        data: {pids: d, counts: b},
        success: function (e) {
            if (e.code == 1) {
                syncCartNum();
                showAddToCartMsg()
            } else {
                showErrorAlert(e.message)
            }
        },
        dataType: "json"
    })
}

function preCheckout(a, b) {
    if (!b) {
        b = 1
    }
    var c = {};
    c.pids = a;
    c["num_" + a] = b;
    $.ajax({
        type: "post", traditional: true, url: ctx + "/buy/preCheckout", data: c, success: function (d) {
            if (d.code == 1) {
                window.location.href = ctx + "/buy/checkout"
            } else {
                if (d.code == 0) {
                    loginBox(ctx + "/buy/checkout")
                } else {
                    if (d.code == 2) {
                        loginBox()
                    } else {
                        showErrorAlert(d.message)
                    }
                }
            }
        }, dataType: "json"
    })
}

function preSaleCheckout(a, b) {
    if (!b) {
        b = 1
    }
    var c = {};
    c.pid = a;
    c.num = b;
    $.ajax({
        type: "post", traditional: true, url: ctx + "/presale/preCheckout", data: c, success: function (d) {
            if (d.code == 1) {
                window.location.href = ctx + "/presale/checkout"
            } else {
                if (d.code == 0) {
                    loginBox(ctx + "/presale/checkout")
                } else {
                    if (d.code == 2) {
                        loginBox()
                    } else {
                        showErrorAlert(d.message)
                    }
                }
            }
        }, dataType: "json"
    })
}

function initProductBtn() {
    $(".product-item").hover(function () {
        $(this).find(".add").stop().slideToggle()
    }, function () {
        $(this).find(".add").stop().slideToggle()
    });
    $(".btn_addCart").click(function () {
        if (!$(this).hasClass("disabled") && $(this).data("pid")) {
            addToCart($(this).data("pid"))
        }
        return false
    });
    $(".btn_book").click(function () {
        if (!$(this).hasClass("disabled") && $(this).data("pid")) {
            var a = $(this).data("pid");
            var b = ctx + "/book/checkout/" + a;
            if (isLogin()) {
                window.location.href = b
            } else {
                loginBox(b)
            }
        }
        return false
    });
    $(".btn_presale").click(function () {
        if (!$(this).hasClass("disabled") && $(this).data("pid")) {
            var a = $(this).data("pid");
            var b = ctx + "/product/" + a;
            window.location.href = b
        }
        return false
    });
    $("a.like").on("click", function () {
        var b = $(this);
        if (!b.hasClass("curr")) {
            if (isLogin()) {
                var a = b.data("pid");
                $.ajax({
                    type: "post", url: ctx + "/user/fav/add", data: {pid: a}, success: function (c) {
                        if (c.code == 1) {
                            var d = $('<font style="position: absolute; top:0; right:0; font-weight: bold;">+1</font>');
                            b.append(d).addClass("curr");
                            d.animate({top: -20}, function () {
                                $(this).remove();
                                b.find("font").text(c.result)
                            })
                        } else {
                            if (c.code == 0) {
                                loginBox()
                            } else {
                                showErrorAlert(c.message)
                            }
                        }
                    }, dataType: "json"
                })
            } else {
                loginBox();
                return false
            }
        }
    })
}

function initHistory() {
    $(".likes").slide({
        titCell: ".nav li",
        mainCell: ".content",
        trigger: "click",
        interTime: 5000,
        prevCell: "",
        nextCell: "",
        effect: "left"
    }).find(".content > .like").show();
    loadViewHistory(12, function (a) {
        if (a && a.length > 0) {
            var b = $(".likes .like");
            b.eq(0).find(".list").append(_.template($.trim($("#guess_like_tpl").html()))({list: a}));
            initEllipsis(b);
            b.slide({
                titCell: ".hd",
                mainCell: ".bd .list",
                autoPage: "<a href='javascript:void(0)'></a>",
                effect: "left",
                autoPlay: true
            }).find(".bd .list > ul").show()
        }
    })
}

function initTabs(a, b, d, c, e) {
    a.click(function () {
        var f = $(this).index();
        $(this).addClass(d).siblings().removeClass(d);
        if (c) {
            $(this).nextAll().hide()
        }
        b.eq(f).show().siblings().hide();
        if (typeof e === "function") {
            e($(this), $(this).index())
        }
        return false
    })
}

function bindAllCheck(a, b, c) {
    a.click(function () {
        if ($(this).find("label").hasClass("curr")) {
            a.find("label").addClass("curr");
            b.find("label").addClass("curr");
            b.find("input").attr("checked", true)
        } else {
            a.find("label").removeClass("curr");
            b.find("label").removeClass("curr");
            b.find("input").removeAttr("checked")
        }
        c()
    });
    b.find("label").click(function () {
        var e = b.size();
        var d = b.find("label.curr").size();
        if (e == d) {
            a.find("label").addClass("curr")
        } else {
            a.find("label").removeClass("curr")
        }
        c()
    })
}

function ajaxPost(c, d, e, b, a) {
    a = $.extend({
        type: "post", dataType: "json", data: d, url: ctx + c, success: function (f) {
            if (f && f.code == 1) {
                if (typeof e == "function") {
                    e(f)
                }
            } else {
                if (f && f.message) {
                    if (typeof b == "function") {
                        b(f.message, f)
                    } else {
                        showErrorAlert("服务异常，请稍后再试！")
                    }
                } else {
                    if (typeof b == "function") {
                        b("服务异常，请稍后再试！", f)
                    } else {
                        showErrorAlert("服务异常，请稍后再试！")
                    }
                }
            }
        }, error: function () {
            if (typeof b == "function") {
                b("服务异常，请稍后再试！")
            } else {
                showErrorAlert("服务异常，请稍后再试！")
            }
        }
    }, a);
    $.ajax(a)
}

function ajaxPostForm(a, d, c, b) {
    b = $.extend({}, {
        success: function (e) {
            if (e && e.code == 1) {
                if (typeof d == "function") {
                    d(e)
                }
            } else {
                if (e && e.message) {
                    if (typeof c == "function") {
                        c(e.message)
                    } else {
                        showErrorAlert("服务异常，请稍后再试！")
                    }
                } else {
                    if (typeof c == "function") {
                        c("服务异常，请稍后再试！", e)
                    } else {
                        showErrorAlert("服务异常，请稍后再试！")
                    }
                }
            }
        }, error: function () {
            if (typeof c == "function") {
                c("服务异常，请稍后再试！")
            } else {
                showErrorAlert("服务异常，请稍后再试！")
            }
        }, dataType: "json"
    }, b);
    a.ajaxSubmit(b)
}

function initAjaxForm(a, d, c, f, b, e) {
    a.submit(function () {
        a.ajaxSubmit({
            beforeSubmit: function () {
                var g = c();
                if (d.hasClass("disabled")) {
                    return false
                }
                if (g) {
                    d.addClass("disabled")
                }
                return g
            }, dataType: "json", error: function () {
                d.removeClass("disabled");
                if (typeof b == "function") {
                    b("服务异常，请稍后再试！")
                } else {
                    showErrorAlert("服务异常，请稍后再试！")
                }
            }, success: function (g) {
                d.removeClass("disabled");
                if (g && g.code == 1) {
                    if (typeof f == "function") {
                        f(g)
                    }
                } else {
                    if (g && g.message) {
                        if (typeof b == "function") {
                            b(g.message, g)
                        } else {
                            showErrorAlert(g.message)
                        }
                    } else {
                        if (typeof b == "function") {
                            b("服务异常，请稍后再试！")
                        } else {
                            showErrorAlert("服务异常，请稍后再试！")
                        }
                    }
                }
            }
        });
        return false
    });
    d.click(function () {
        if (!d.hasClass("disabled")) {
            if (typeof e == "function") {
                e()
            }
            a.submit()
        }
        return false
    })
}

function checkPhone(a) {
    return a.match(/(^1[3|4|5|7|8]\d{9}$)|(^\++\d{2,}$)/)
}

function checkZipcode(a) {
    return a.match(/^[0-9]{6}$/)
}

function checkRangeLength(d, b, a) {
    var c = zhStrLength(d);
    return c >= b && c <= a
}

function zhStrLength(d) {
    var e = 0, a = d.length, b = -1;
    for (var c = 0; c < a; c++) {
        b = d.charCodeAt(c);
        if (b >= 0 && b <= 128) {
            e += 1
        } else {
            e += 2
        }
    }
    return e
}

function loadViewHistory(e, d, c) {
    var a = getCookiesViewHistory(c);
    var b = _.first(a, e);
    if (b && b.length > 0) {
        $.ajax({
            type: "post", traditional: true, url: ctx + "/product/info", data: {pids: b}, success: function (f) {
                if (f.code == 1) {
                    d(f.result)
                }
            }, dataType: "json"
        })
    }
}

function addViewHistory(a) {
    if (!a) {
        return
    }
    var b = getCookiesViewHistory(a);
    b.unshift(a);
    saveCookieViewHistory(b)
}

var product_view_history_cookie_name = "product_cookies_view_history";

function saveCookieViewHistory(a) {
    $.cookie(product_view_history_cookie_name, _.first(a, 50).join(), {expires: 7, path: "/"})
}

function getCookiesViewHistory(b) {
    var a = $.cookie(product_view_history_cookie_name);
    if (!a) {
        a = []
    } else {
        a = a.split(",");
        if (b) {
            a = _.without(a, b)
        }
    }
    return a
}

function h_auto(e, b) {
    e.css("height", "auto");
    b.css("height", "auto");
    var c = e.height();
    var d = b.height();
    var a = Math.max(c, d);
    e.css("height", a);
    b.css("height", a)
}

function checkIdnumber(c) {
    var f = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
    };
    var e = c.toUpperCase();
    var g, b;
    var d, h;
    var a = new Array();
    a = e.split("");
    if (f[parseInt(e.substr(0, 2))] == null) {
        return 4
    }
    switch (e.length) {
        case 15:
            if ((parseInt(e.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(e.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(e.substr(6, 2)) + 1900) % 4 == 0)) {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/
            } else {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/
            }
            if (ereg.test(e)) {
                return 0
            } else {
                return 2
            }
            break;
        case 18:
            if (parseInt(e.substr(6, 4)) % 4 == 0 || (parseInt(e.substr(6, 4)) % 100 == 0 && parseInt(e.substr(6, 4)) % 4 == 0)) {
                ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/
            } else {
                ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/
            }
            if (ereg.test(e)) {
                d = (parseInt(a[0]) + parseInt(a[10])) * 7 + (parseInt(a[1]) + parseInt(a[11])) * 9 + (parseInt(a[2]) + parseInt(a[12])) * 10 + (parseInt(a[3]) + parseInt(a[13])) * 5 + (parseInt(a[4]) + parseInt(a[14])) * 8 + (parseInt(a[5]) + parseInt(a[15])) * 4 + (parseInt(a[6]) + parseInt(a[16])) * 2 + parseInt(a[7]) * 1 + parseInt(a[8]) * 6 + parseInt(a[9]) * 3;
                g = d % 11;
                h = "F";
                b = "10X98765432";
                h = b.substr(g, 1);
                if (h == a[17]) {
                    return 0
                } else {
                    return 3
                }
            } else {
                return 2
            }
            break;
        default:
            return 1;
            break
    }
}

function checkEmail(a) {
    return /[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+/.test(a)
}

function linkKeyword(e, b, d) {
    var c = e.html();
    var a = c.replace(new RegExp(b, "gm"), "<a href='" + d + "' target='_blank' style='text-decoration: underline; color: #F00;'>" + b + "</a>");
    e.html(a)
};