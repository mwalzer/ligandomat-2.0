﻿(function (h, e, b, i, c, g, j) {/*! Jssor */
    new (function () {
    });
    var d = h.$JssorEasing$ = {
        $EaseSwing: function (a) {
            return -b.cos(a * b.PI) / 2 + .5
        }, $EaseLinear: function (a) {
            return a
        }, $EaseInQuad: function (a) {
            return a * a
        }, $EaseOutQuad: function (a) {
            return -a * (a - 2)
        }, $EaseInOutQuad: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
        }, $EaseInCubic: function (a) {
            return a * a * a
        }, $EaseOutCubic: function (a) {
            return (a -= 1) * a * a + 1
        }, $EaseInOutCubic: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
        }, $EaseInQuart: function (a) {
            return a * a * a * a
        }, $EaseOutQuart: function (a) {
            return -((a -= 1) * a * a * a - 1)
        }, $EaseInOutQuart: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
        }, $EaseInQuint: function (a) {
            return a * a * a * a * a
        }, $EaseOutQuint: function (a) {
            return (a -= 1) * a * a * a * a + 1
        }, $EaseInOutQuint: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
        }, $EaseInSine: function (a) {
            return 1 - b.cos(a * b.PI / 2)
        }, $EaseOutSine: function (a) {
            return b.sin(a * b.PI / 2)
        }, $EaseInOutSine: function (a) {
            return -1 / 2 * (b.cos(b.PI * a) - 1)
        }, $EaseInExpo: function (a) {
            return a == 0 ? 0 : b.pow(2, 10 * (a - 1))
        }, $EaseOutExpo: function (a) {
            return a == 1 ? 1 : -b.pow(2, -10 * a) + 1
        }, $EaseInOutExpo: function (a) {
            return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2)
        }, $EaseInCirc: function (a) {
            return -(b.sqrt(1 - a * a) - 1)
        }, $EaseOutCirc: function (a) {
            return b.sqrt(1 - (a -= 1) * a)
        }, $EaseInOutCirc: function (a) {
            return (a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1)
        }, $EaseInElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .3, d = .075;
            return -(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c))
        }, $EaseOutElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .3, d = .075;
            return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1
        }, $EaseInOutElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .45, d = .1125;
            return (a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1
        }, $EaseInBack: function (a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, $EaseOutBack: function (a) {
            var b = 1.70158;
            return (a -= 1) * a * ((b + 1) * a + b) + 1
        }, $EaseInOutBack: function (a) {
            var b = 1.70158;
            return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        }, $EaseInBounce: function (a) {
            return 1 - d.$EaseOutBounce(1 - a)
        }, $EaseOutBounce: function (a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }, $EaseInOutBounce: function (a) {
            return a < 1 / 2 ? d.$EaseInBounce(a * 2) * .5 : d.$EaseOutBounce(a * 2 - 1) * .5 + .5
        }, $EaseGoBack: function (a) {
            return 1 - b.abs(2 - 1)
        }, $EaseInWave: function (a) {
            return 1 - b.cos(a * b.PI * 2)
        }, $EaseOutWave: function (a) {
            return b.sin(a * b.PI * 2)
        }, $EaseOutJump: function (a) {
            return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
        }, $EaseInJump: function (a) {
            return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
        }
    };
    var a = new function () {
        var f = this, xb = /\S+/g, T = 1, fb = 2, kb = 3, jb = 4, ob = 5, L, s = 0, l = 0, p = 0, bb = 0, A = 0, B = navigator, tb = B.appName, k = B.userAgent, z;

        function Eb() {
            if (!L) {
                L = {ie: "ontouchstart"in h || "createTouch"in e};
                var a;
                if (B.pointerEnabled || (a = B.msPointerEnabled))L.ud = a ? "msTouchAction" : "touchAction"
            }
            return L
        }

        function v(i) {
            if (!s) {
                s = -1;
                if (tb == "Microsoft Internet Explorer" && !!h.attachEvent && !!h.ActiveXObject) {
                    var f = k.indexOf("MSIE");
                    s = T;
                    p = n(k.substring(f + 5, k.indexOf(";", f)));
                    /*@cc_on bb=@_jscript_version@*/
                    ;
                    l = e.documentMode || p
                } else if (tb == "Netscape" && !!h.addEventListener) {
                    var d = k.indexOf("Firefox"), b = k.indexOf("Safari"), g = k.indexOf("Chrome"), c = k.indexOf("AppleWebKit");
                    if (d >= 0) {
                        s = fb;
                        l = n(k.substring(d + 8))
                    } else if (b >= 0) {
                        var j = k.substring(0, b).lastIndexOf("/");
                        s = g >= 0 ? jb : kb;
                        l = n(k.substring(j + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(k);
                        if (a) {
                            s = T;
                            l = p = n(a[1])
                        }
                    }
                    if (c >= 0)A = n(k.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);
                    if (a) {
                        s = ob;
                        l = n(a[2])
                    }
                }
            }
            return i == s
        }

        function q() {
            return v(T)
        }

        function O() {
            return q() && (l < 6 || e.compatMode == "BackCompat")
        }

        function ib() {
            return v(kb)
        }

        function hb() {
            return v(jb)
        }

        function nb() {
            return v(ob)
        }

        function cb() {
            return ib() && A > 534 && A < 535
        }

        function M() {
            return q() && l < 9
        }

        function t(a) {
            if (!z) {
                m(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function (b) {
                    if (a.style[b] != j) {
                        z = b;
                        return c
                    }
                });
                z = z || "transform"
            }
            return z
        }

        function sb(a) {
            return {}.toString.call(a)
        }

        var K;

        function Cb() {
            if (!K) {
                K = {};
                m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
                    K["[object " + a + "]"] = a.toLowerCase()
                })
            }
            return K
        }

        function m(a, d) {
            if (sb(a) == "[object Array]") {
                for (var b = 0; b < a.length; b++)if (d(a[b], b, a))return c
            } else for (var e in a)if (d(a[e], e, a))return c
        }

        function D(a) {
            return a == i ? String(a) : Cb()[sb(a)] || "object"
        }

        function qb(a) {
            for (var b in a)return c
        }

        function G(a) {
            try {
                return D(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {
            }
        }

        function y(a, b) {
            return {x: a, y: b}
        }

        function vb(b, a) {
            setTimeout(b, a || 0)
        }

        function I(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            m(d, function (c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index), e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
                    a = d + e
                }
            });
            a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
            return a
        }

        function eb(b, a) {
            if (l < 9)b.style.filter = a
        }

        function zb(b, a, c) {
            if (bb < 9) {
                var e = b.style.filter, h = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), g = a ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + a[0][0] + ", M12=" + a[0][1] + ", M21=" + a[1][0] + ", M22=" + a[1][1] + ", SizingMethod='auto expand')" : "", d = I(e, [h], g);
                eb(b, d);
                f.Xc(b, c.y);
                f.Zc(b, c.x)
            }
        }

        f.he = Eb;
        f.ed = q;
        f.je = ib;
        f.ee = hb;
        f.wc = nb;
        f.R = M;
        f.bd = function () {
            return l
        };
        f.yc = function () {
            v();
            return A
        };
        f.$Delay = vb;
        function W(a) {
            a.constructor === W.caller && a.Cc && a.Cc.apply(a, W.caller.arguments)
        }

        f.Cc = W;
        f.fb = function (a) {
            if (f.gd(a))a = e.getElementById(a);
            return a
        };
        function r(a) {
            return a || h.event
        }

        f.Tc = r;
        f.oc = function (a) {
            a = r(a);
            return a.target || a.srcElement || e
        };
        f.Rc = function (a) {
            a = r(a);
            return {x: a.pageX || a.clientX || 0, y: a.pageY || a.clientY || 0}
        };
        function E(c, d, a) {
            if (a != j)c.style[d] = a; else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && h.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, i);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function Y(b, c, a, d) {
            if (a != j) {
                d && (a += "px");
                E(b, c, a)
            } else return n(E(b, c))
        }

        function o(d, a) {
            var b = a & 2, c = a ? Y : E;
            return function (e, a) {
                return c(e, d, a, b)
            }
        }

        function Ab(b) {
            if (q() && p < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? n(a[1]) / 100 : 1
            } else return n(b.style.opacity || "1")
        }

        function Bb(c, a, f) {
            if (q() && p < 9) {
                var h = c.style.filter || "", i = new RegExp(/[\s]*alpha\([^\)]*\)/g), e = b.round(100 * a), d = "";
                if (e < 100 || f)d = "alpha(opacity=" + e + ") ";
                var g = I(h, [i], d);
                eb(c, g)
            } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
        }

        function ab(e, a) {
            var d = a.$Rotate || 0, c = a.$Scale == j ? 1 : a.$Scale;
            if (M()) {
                var l = f.se(d / 180 * b.PI, c, c);
                zb(e, !d && c == 1 ? i : l, f.re(l, a.$OriginalWidth, a.$OriginalHeight))
            } else {
                var g = t(e);
                if (g) {
                    var k = "rotate(" + d % 360 + "deg) scale(" + c + ")";
                    if (hb() && A > 535 && "ontouchstart"in h)k += " perspective(2000px)";
                    e.style[g] = k
                }
            }
        }

        f.me = function (b, a) {
            if (cb())vb(f.J(i, ab, b, a)); else ab(b, a)
        };
        f.le = function (b, c) {
            var a = t(b);
            if (a)b.style[a + "Origin"] = c
        };
        f.oe = function (a, c) {
            if (q() && p < 9 || p < 10 && O())a.style.zoom = c == 1 ? "" : c; else {
                var b = t(a);
                if (b) {
                    var f = "scale(" + c + ")", e = a.style[b], g = new RegExp(/[\s]*scale\(.*?\)/g), d = I(e, [g], f);
                    a.style[b] = d
                }
            }
        };
        f.ne = function (a) {
            if (!a.style[t(a)] || a.style[t(a)] == "none")a.style[t(a)] = "perspective(2000px)"
        };
        f.Qb = function (b, a) {
            return function (c) {
                c = r(c);
                var e = c.type, d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !f.nf(a, d)) && b(c)
            }
        };
        f.c = function (a, c, d, b) {
            a = f.fb(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        f.H = function (a, c, d, b) {
            a = f.fb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        f.Pb = function (a) {
            a = r(a);
            a.preventDefault && a.preventDefault();
            a.cancel = c;
            a.returnValue = g
        };
        f.af = function (a) {
            a = r(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = c
        };
        f.J = function (d, c) {
            var a = [].slice.call(arguments, 2), b = function () {
                var b = a.concat([].slice.call(arguments, 0));
                return c.apply(d, b)
            };
            return b
        };
        f.gf = function (a, b) {
            if (b == j)return a.textContent || a.innerText;
            var c = e.createTextNode(b);
            f.hc(a);
            a.appendChild(c)
        };
        f.U = function (d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };
        function rb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (S(a, b) == c)return a;
                if (!e) {
                    var d = rb(a, c, e, b);
                    if (d)return d
                }
            }
        }

        f.v = rb;
        function Q(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)if (a.nodeType == 1) {
                S(a, b) == d && c.push(a);
                if (!f) {
                    var e = Q(a, d, f, b);
                    if (e.length)c = c.concat(e)
                }
            }
            return c
        }

        function lb(a, c, d) {
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (a.tagName == c)return a;
                if (!d) {
                    var b = lb(a, c, d);
                    if (b)return b
                }
            }
        }

        f.cf = lb;
        function db(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)if (a.nodeType == 1) {
                (!c || a.tagName == c) && b.push(a);
                if (!e) {
                    var d = db(a, c, e);
                    if (d.length)b = b.concat(d)
                }
            }
            return b
        }

        f.of = db;
        f.mf = function (b, a) {
            return b.getElementsByTagName(a)
        };
        function C() {
            var e = arguments, d, c, b, a, g = 1 & e[0], f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)if (c = e[f])for (b in c) {
                a = c[b];
                if (a !== j) {
                    a = c[b];
                    d[b] = g && G(d[b]) ? C(g, {}, a) : a
                }
            }
            return d
        }

        f.l = C;
        function X(f, g) {
            var d = {}, c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (G(a) && G(b)) {
                        a = X(b);
                        e = !qb(a)
                    }
                    !e && (d[c] = a)
                }
            }
            return d
        }

        f.Nc = function (a) {
            return D(a) == "function"
        };
        f.Yb = function (a) {
            return D(a) == "array"
        };
        f.gd = function (a) {
            return D(a) == "string"
        };
        f.Qc = function (a) {
            return !isNaN(n(a)) && isFinite(a)
        };
        f.e = m;
        function P(a) {
            return e.createElement(a)
        }

        f.eb = function () {
            return P("DIV")
        };
        f.Qe = function () {
            return P("SPAN")
        };
        f.dc = function () {
        };
        function U(b, c, a) {
            if (a == j)return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function S(a, b) {
            return U(a, b) || U(a, "data-" + b)
        }

        f.L = U;
        f.s = S;
        function w(b, a) {
            if (a == j)return b.className;
            b.className = a
        }

        f.Lc = w;
        function ub(b) {
            var a = {};
            m(b, function (b) {
                a[b] = b
            });
            return a
        }

        function wb(b, a) {
            return b.match(a || xb)
        }

        function N(b, a) {
            return ub(wb(b || "", a))
        }

        f.Oe = wb;
        function Z(b, c) {
            var a = "";
            m(c, function (c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function H(a, c, b) {
            w(a, Z(" ", C(X(N(w(a)), N(c)), N(b))))
        }

        f.zb = function (a) {
            return a.parentNode
        };
        f.K = function (a) {
            f.S(a, "none")
        };
        f.C = function (a, b) {
            f.S(a, b ? "none" : "")
        };
        f.Dc = function (b, a) {
            b.removeAttribute(a)
        };
        f.Se = function () {
            return q() && l < 10
        };
        f.Ve = function (d, c) {
            if (c)d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)"; else {
                var g = d.style.cssText, f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = I(g, f, "");
                a.Nb(d, e)
            }
        };
        f.I = function () {
            return +new Date
        };
        f.D = function (b, a) {
            b.appendChild(a)
        };
        f.Kb = function (b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        f.yb = function (a, b) {
            (b || a.parentNode).removeChild(a)
        };
        f.Ne = function (a, b) {
            m(a, function (a) {
                f.yb(a, b)
            })
        };
        f.hc = function (a) {
            f.Ne(f.U(a, c), a)
        };
        f.Me = function (b, a) {
            return parseInt(b, a || 10)
        };
        var n = parseFloat;
        f.lc = n;
        f.nf = function (b, a) {
            var c = e.body;
            while (a && b !== a && c !== a)try {
                a = a.parentNode
            } catch (d) {
                return g
            }
            return b === a
        };
        function V(d, c, b) {
            var a = d.cloneNode(!c);
            !b && f.Dc(a, "id");
            return a
        }

        f.Q = V;
        f.vb = function (e, g) {
            var a = new Image;

            function b(e, c) {
                f.H(a, "load", b);
                f.H(a, "abort", d);
                f.H(a, "error", d);
                g && g(a, c)
            }

            function d(a) {
                b(a, c)
            }

            if (nb() && l < 11.6 || !e)b(!e); else {
                f.c(a, "load", b);
                f.c(a, "abort", d);
                f.c(a, "error", d);
                a.src = e
            }
        };
        f.bf = function (d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src)a = b;
                !c && e && e(a)
            }

            m(d, function (a) {
                f.vb(a.src, b)
            });
            b()
        };
        f.Wc = function (b, g, i, h) {
            if (h)b = V(b);
            var c = Q(b, g);
            if (!c.length)c = a.mf(b, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f], e = V(i);
                w(e, w(d));
                a.Nb(e, d.style.cssText);
                a.Kb(e, d);
                a.yb(d)
            }
            return b
        };
        function Db(c) {
            var q = this, o = "", r = ["av", "pv", "ds", "dn"], d = [], p, k = 0, h = 0, g = 0;

            function i() {
                H(c, p, d[g || k || h & 2 || h])
            }

            function b() {
                k = 0;
                i();
                f.H(e, "mouseup", b);
                f.H(e, "touchend", b);
                f.H(e, "touchcancel", b)
            }

            function n(a) {
                if (g)f.Pb(a); else {
                    k = 4;
                    i();
                    f.c(e, "mouseup", b);
                    f.c(e, "touchend", b);
                    f.c(e, "touchcancel", b)
                }
            }

            q.Uc = function (a) {
                if (a != j) {
                    h = a & 2 || a & 1;
                    i()
                } else return h
            };
            q.$Enable = function (a) {
                if (a == j)return !g;
                g = a ? 0 : 3;
                i()
            };
            c = f.fb(c);
            var l = a.Oe(w(c));
            if (l)o = l.shift();
            m(r, function (a) {
                d.push(o + a)
            });
            p = Z(" ", d);
            d.unshift("");
            f.c(c, "mousedown", n);
            f.c(c, "touchstart", n)
        }

        f.Xb = function (a) {
            return new Db(a)
        };
        f.qb = E;
        f.gb = o("overflow");
        f.B = o("top", 2);
        f.A = o("left", 2);
        f.n = o("width", 2);
        f.o = o("height", 2);
        f.Zc = o("marginLeft", 2);
        f.Xc = o("marginTop", 2);
        f.E = o("position");
        f.S = o("display");
        f.F = o("zIndex", 1);
        f.rb = function (b, a, c) {
            if (a != j)Bb(b, a, c); else return Ab(b)
        };
        f.Nb = function (a, b) {
            if (b != j)a.style.cssText = b; else return a.style.cssText
        };
        var R = {$Opacity: f.rb, $Top: f.B, $Left: f.A, db: f.n, cb: f.o, Ab: f.E, yg: f.S, $ZIndex: f.F}, u;

        function J() {
            if (!u)u = C({zg: f.Xc, Ag: f.Zc, $Clip: f.Ve, bc: f.me}, R);
            return u
        }

        function pb() {
            J();
            u.bc = u.bc;
            return u
        }

        f.Sd = J;
        f.Wd = pb;
        f.ae = function (c, b) {
            J();
            var a = {};
            m(b, function (d, b) {
                if (R[b])a[b] = R[b](c)
            });
            return a
        };
        f.M = function (c, b) {
            var a = J();
            m(b, function (d, b) {
                a[b] && a[b](c, d)
            })
        };
        f.be = function (b, a) {
            pb();
            f.M(b, a)
        };
        var F = new function () {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)for (var k = f[c] = [], b = 0; b < h; b++) {
                    for (var e = 0, a = 0; a < j; a++)e += d[c][a] * g[a][b];
                    k[b] = e
                }
                return f
            }

            a.Rb = function (d, c) {
                var a = b(d, [[c.x], [c.y]]);
                return y(a[0][0], a[1][0])
            }
        };
        f.se = function (d, a, c) {
            var e = b.cos(d), f = b.sin(d);
            return [[e * a, -f * c], [f * a, e * c]]
        };
        f.re = function (d, c, a) {
            var e = F.Rb(d, y(-c / 2, -a / 2)), f = F.Rb(d, y(c / 2, -a / 2)), g = F.Rb(d, y(c / 2, a / 2)), h = F.Rb(d, y(-c / 2, a / 2));
            return y(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
        };
        f.nd = function (l, g, t, r, u, w, j) {
            var c = g;
            if (l) {
                c = {};
                for (var f in g) {
                    var x = w[f] || 1, s = u[f] || [0, 1], e = (t - s[0]) / s[1];
                    e = b.min(b.max(e, 0), 1);
                    e = e * x;
                    var p = b.floor(e);
                    if (e != p)e -= p;
                    var v = r[f] || r.wb || d.$EaseSwing, q = v(e), h, y = l[f];
                    g[f];
                    var m = g[f];
                    if (a.Qc(m))h = y + m * q; else {
                        h = a.l({xb: {}}, l[f]);
                        a.e(m.xb, function (c, b) {
                            var a = c * q;
                            h.xb[b] = a;
                            h[b] += a
                        })
                    }
                    c[f] = h
                }
                if (g.$Zoom || g.$Rotate)c.bc = {
                    $Rotate: c.$Rotate || 0,
                    $Scale: c.$Zoom,
                    $OriginalWidth: j.$OriginalWidth,
                    $OriginalHeight: j.$OriginalHeight
                }
            }
            if (g.$Clip && j.$Move) {
                var k = c.$Clip.xb, o = (k.$Top || 0) + (k.$Bottom || 0), n = (k.$Left || 0) + (k.$Right || 0);
                c.$Left = (c.$Left || 0) + n;
                c.$Top = (c.$Top || 0) + o;
                c.$Clip.$Left -= n;
                c.$Clip.$Right -= n;
                c.$Clip.$Top -= o;
                c.$Clip.$Bottom -= o
            }
            if (c.$Clip && a.Se() && !c.$Clip.$Top && !c.$Clip.$Left && c.$Clip.$Right == j.$OriginalWidth && c.$Clip.$Bottom == j.$OriginalHeight)c.$Clip = i;
            return c
        }
    };

    function l() {
        var b = this, d = [];

        function i(a, b) {
            d.push({fc: a, ac: b})
        }

        function g(b, c) {
            a.e(d, function (a, e) {
                a.fc == b && a.ac === c && d.splice(e, 1)
            })
        }

        b.$On = b.addEventListener = i;
        b.$Off = b.removeEventListener = g;
        b.i = function (b) {
            var c = [].slice.call(arguments, 1);
            a.e(d, function (a) {
                a.fc == b && a.ac.apply(h, c)
            })
        }
    }

    function k(o, z, k, R, P, K) {
        o = o || 0;
        var e = this, s, p, q, x, B = 0, I, J, H, D, A = 0, l = 0, n = 0, E, m = o, f, j, r, y = [], C;

        function M(a) {
            f += a;
            j += a;
            m += a;
            l += a;
            n += a;
            A = a
        }

        function Q(a, b) {
            var c = a - f + o * b;
            M(c);
            return j
        }

        function w(o, i) {
            var d = o;
            if (r && (d >= j || d <= f))d = ((d - f) % r + r) % r + f;
            if (!E || x || i || l != d) {
                var g = b.min(d, j);
                g = b.max(g, f);
                if (!E || x || i || g != n) {
                    if (K) {
                        var h = (g - m) / (z || 1);
                        if (k.$Reverse)h = 1 - h;
                        var p = a.nd(P, K, h, I, H, J, k);
                        a.e(p, function (b, a) {
                            C[a] && C[a](R, b)
                        })
                    }
                    e.rc(n - m, g - m);
                    n = g;
                    a.e(y, function (b, c) {
                        var a = o < l ? y[y.length - c - 1] : b;
                        a.z(n - A, i)
                    });
                    var s = l, q = n;
                    l = d;
                    E = c;
                    e.Ib(s, q)
                }
            }
        }

        function F(a, c, d) {
            c && a.Jb(j, 1);
            if (!d) {
                f = b.min(f, a.Nd() + A);
                j = b.max(j, a.Z() + A)
            }
            y.push(a)
        }

        var t = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.msRequestAnimationFrame;
        if (a.je() && a.bd() < 7)t = i;
        t = t || function (b) {
                a.$Delay(b, k.$Interval)
            };
        function L() {
            if (s) {
                var d = a.I(), e = b.min(d - B, k.vd), c = l + e * q;
                B = d;
                if (c * q >= p * q)c = p;
                w(c);
                if (!x && c * q >= p * q)N(D); else t(L)
            }
        }

        function v(d, g, h) {
            if (!s) {
                s = c;
                x = h;
                D = g;
                d = b.max(d, f);
                d = b.min(d, j);
                p = d;
                q = p < l ? -1 : 1;
                e.td();
                B = a.I();
                t(L)
            }
        }

        function N(a) {
            if (s) {
                x = s = D = g;
                e.wd();
                a && a()
            }
        }

        e.$Play = function (a, b, c) {
            v(a ? l + a : j, b, c)
        };
        e.rd = v;
        e.Y = N;
        e.Pd = function (a) {
            v(a)
        };
        e.V = function () {
            return l
        };
        e.Ec = function () {
            return p
        };
        e.ub = function () {
            return n
        };
        e.z = w;
        e.$Move = function (a) {
            w(l + a)
        };
        e.$IsPlaying = function () {
            return s
        };
        e.Ld = function (a) {
            r = a
        };
        e.Jb = Q;
        e.$Shift = M;
        e.ab = function (a) {
            F(a, 0)
        };
        e.tc = function (a) {
            F(a, 1)
        };
        e.Nd = function () {
            return f
        };
        e.Z = function () {
            return j
        };
        e.Ib = e.td = e.wd = e.rc = a.dc;
        e.vc = a.I();
        k = a.l({$Interval: 16, vd: 50}, k);
        r = k.Kc;
        C = a.l({}, a.Sd(), k.jc);
        f = m = o;
        j = o + z;
        J = k.$Round || {};
        H = k.$During || {};
        I = a.l({wb: a.Nc(k.$Easing) && k.$Easing || d.$EaseSwing}, k.$Easing)
    }

    var n = h.$JssorSlideshowFormations$ = new function () {
        var h = this, d = 0, a = 1, f = 2, e = 3, s = 1, r = 2, t = 4, q = 8, w = 256, x = 512, v = 1024, u = 2048, j = u + s, i = u + r, o = x + s, m = x + r, n = w + t, k = w + q, l = v + t, p = v + q;

        function y(a) {
            return (a & r) == r
        }

        function z(a) {
            return (a & t) == t
        }

        function g(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }

        h.$FormationStraight = function (f) {
            for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.Sb, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)for (a = 0; a < d; a++) {
                switch (s) {
                    case j:
                        c = h - (a * e + (q - b));
                        break;
                    case l:
                        c = h - (b * d + (p - a));
                        break;
                    case o:
                        c = h - (a * e + b);
                    case n:
                        c = h - (b * d + a);
                        break;
                    case i:
                        c = a * e + b;
                        break;
                    case k:
                        c = b * d + (p - a);
                        break;
                    case m:
                        c = a * e + (q - b);
                        break;
                    default:
                        c = b * d + a
                }
                g(r, c, [b, a])
            }
            return r
        };
        h.$FormationSwirl = function (q) {
            var x = q.$Cols, y = q.$Rows, B = q.$Assembly, w = q.Sb, A = [], z = [], u = 0, b = 0, h = 0, r = x - 1, s = y - 1, t, p, v = 0;
            switch (B) {
                case j:
                    b = r;
                    h = 0;
                    p = [f, a, e, d];
                    break;
                case l:
                    b = 0;
                    h = s;
                    p = [d, e, a, f];
                    break;
                case o:
                    b = r;
                    h = s;
                    p = [e, a, f, d];
                    break;
                case n:
                    b = r;
                    h = s;
                    p = [a, e, d, f];
                    break;
                case i:
                    b = 0;
                    h = 0;
                    p = [f, d, e, a];
                    break;
                case k:
                    b = r;
                    h = 0;
                    p = [a, f, d, e];
                    break;
                case m:
                    b = 0;
                    h = s;
                    p = [e, d, f, a];
                    break;
                default:
                    b = 0;
                    h = 0;
                    p = [d, f, a, e]
            }
            u = 0;
            while (u < w) {
                t = h + "," + b;
                if (b >= 0 && b < x && h >= 0 && h < y && !z[t]) {
                    z[t] = c;
                    g(A, u++, [h, b])
                } else switch (p[v++ % p.length]) {
                    case d:
                        b--;
                        break;
                    case f:
                        h--;
                        break;
                    case a:
                        b++;
                        break;
                    case e:
                        h++
                }
                switch (p[v % p.length]) {
                    case d:
                        b++;
                        break;
                    case f:
                        h++;
                        break;
                    case a:
                        b--;
                        break;
                    case e:
                        h--
                }
            }
            return A
        };
        h.$FormationZigZag = function (p) {
            var w = p.$Cols, x = p.$Rows, z = p.$Assembly, v = p.Sb, t = [], u = 0, b = 0, c = 0, q = w - 1, r = x - 1, y, h, s = 0;
            switch (z) {
                case j:
                    b = q;
                    c = 0;
                    h = [f, a, e, a];
                    break;
                case l:
                    b = 0;
                    c = r;
                    h = [d, e, a, e];
                    break;
                case o:
                    b = q;
                    c = r;
                    h = [e, a, f, a];
                    break;
                case n:
                    b = q;
                    c = r;
                    h = [a, e, d, e];
                    break;
                case i:
                    b = 0;
                    c = 0;
                    h = [f, d, e, d];
                    break;
                case k:
                    b = q;
                    c = 0;
                    h = [a, f, d, f];
                    break;
                case m:
                    b = 0;
                    c = r;
                    h = [e, d, f, d];
                    break;
                default:
                    b = 0;
                    c = 0;
                    h = [d, f, a, f]
            }
            u = 0;
            while (u < v) {
                y = c + "," + b;
                if (b >= 0 && b < w && c >= 0 && c < x && typeof t[y] == "undefined") {
                    g(t, u++, [c, b]);
                    switch (h[s % h.length]) {
                        case d:
                            b++;
                            break;
                        case f:
                            c++;
                            break;
                        case a:
                            b--;
                            break;
                        case e:
                            c--
                    }
                } else {
                    switch (h[s++ % h.length]) {
                        case d:
                            b--;
                            break;
                        case f:
                            c--;
                            break;
                        case a:
                            b++;
                            break;
                        case e:
                            c++
                    }
                    switch (h[s++ % h.length]) {
                        case d:
                            b++;
                            break;
                        case f:
                            c++;
                            break;
                        case a:
                            b--;
                            break;
                        case e:
                            c--
                    }
                }
            }
            return t
        };
        h.$FormationStraightStairs = function (q) {
            var u = q.$Cols, v = q.$Rows, e = q.$Assembly, t = q.Sb, r = [], s = 0, c = 0, d = 0, f = u - 1, h = v - 1, x = t - 1;
            switch (e) {
                case j:
                case m:
                case o:
                case i:
                    var a = 0, b = 0;
                    break;
                case k:
                case l:
                case n:
                case p:
                    var a = f, b = 0;
                    break;
                default:
                    e = p;
                    var a = f, b = 0
            }
            c = a;
            d = b;
            while (s < t) {
                if (z(e) || y(e))g(r, x - s++, [d, c]); else g(r, s++, [d, c]);
                switch (e) {
                    case j:
                    case m:
                        c--;
                        d++;
                        break;
                    case o:
                    case i:
                        c++;
                        d--;
                        break;
                    case k:
                    case l:
                        c--;
                        d--;
                        break;
                    case p:
                    case n:
                    default:
                        c++;
                        d++
                }
                if (c < 0 || d < 0 || c > f || d > h) {
                    switch (e) {
                        case j:
                        case m:
                            a++;
                            break;
                        case k:
                        case l:
                        case o:
                        case i:
                            b++;
                            break;
                        case p:
                        case n:
                        default:
                            a--
                    }
                    if (a < 0 || b < 0 || a > f || b > h) {
                        switch (e) {
                            case j:
                            case m:
                                a = f;
                                b++;
                                break;
                            case o:
                            case i:
                                b = h;
                                a++;
                                break;
                            case k:
                            case l:
                                b = h;
                                a--;
                                break;
                            case p:
                            case n:
                            default:
                                a = 0;
                                b++
                        }
                        if (b > h)b = h; else if (b < 0)b = 0; else if (a > f)a = f; else if (a < 0)a = 0
                    }
                    d = b;
                    c = a
                }
            }
            return r
        };
        h.$FormationSquare = function (i) {
            var a = i.$Cols || 1, c = i.$Rows || 1, j = [], d, e, f, h, k;
            f = a < c ? (c - a) / 2 : 0;
            h = a > c ? (a - c) / 2 : 0;
            k = b.round(b.max(a / 2, c / 2)) + 1;
            for (d = 0; d < a; d++)for (e = 0; e < c; e++)g(j, k - b.min(d + 1 + f, e + 1 + h, a - d + f, c - e + h), [e, d]);
            return j
        };
        h.$FormationRectangle = function (f) {
            var d = f.$Cols || 1, e = f.$Rows || 1, h = [], a, c, i;
            i = b.round(b.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++)for (c = 0; c < e; c++)g(h, i - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
            return h
        };
        h.$FormationRandom = function (d) {
            for (var e = [], a, c = 0; c < d.$Rows; c++)for (a = 0; a < d.$Cols; a++)g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
            return e
        };
        h.$FormationCircle = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)for (a = 0; a < f; a++)g(h, b.round(b.sqrt(b.pow(c - i, 2) + b.pow(a - j, 2))), [a, c]);
            return h
        };
        h.$FormationCross = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)for (a = 0; a < f; a++)g(h, b.round(b.min(b.abs(c - i), b.abs(a - j))), [a, c]);
            return h
        };
        h.$FormationRectangleCross = function (f) {
            for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = b.max(d, e) + 1, c = 0; c < h; c++)for (a = 0; a < i; a++)g(j, b.round(k - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);
            return j
        }
    };
    h.$JssorSlideshowRunner$ = function (o, s, q, t, y) {
        var f = this, u, h, e, x = 0, w = t.$TransitionsOrder, r, j = 8;

        function m(h, f) {
            var e = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: g,
                $SlideOut: g,
                $Reverse: g,
                $Formation: n.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {$Column: 0, $Row: 0},
                $Easing: d.$EaseSwing,
                $Round: {},
                Hb: [],
                $During: {}
            };
            a.l(e, h);
            e.Sb = e.$Cols * e.$Rows;
            if (a.Nc(e.$Easing))e.$Easing = {wb: e.$Easing};
            e.Td = b.ceil(e.$Duration / e.$Interval);
            e.Vd = function (b, a) {
                b /= e.$Cols;
                a /= e.$Rows;
                var f = b + "x" + a;
                if (!e.Hb[f]) {
                    e.Hb[f] = {db: b, cb: a};
                    for (var c = 0; c < e.$Cols; c++)for (var d = 0; d < e.$Rows; d++)e.Hb[f][d + "," + c] = {
                        $Top: d * a,
                        $Right: c * b + b,
                        $Bottom: d * a + a,
                        $Left: c * b
                    }
                }
                return e.Hb[f]
            };
            if (e.$Brother) {
                e.$Brother = m(e.$Brother, f);
                e.$SlideOut = c
            }
            return e
        }

        function p(A, i, d, v, n, l) {
            var y = this, t, u = {}, j = {}, m = [], f, e, r, p = d.$ChessMode.$Column || 0, q = d.$ChessMode.$Row || 0, h = d.Vd(n, l), o = B(d), C = o.length - 1, s = d.$Duration + d.$Delay * C, w = v + s, k = d.$SlideOut, x;
            w += 50;
            function B(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b
            }

            y.Hc = w;
            y.Ob = function (c) {
                c -= v;
                var e = c < s;
                if (e || x) {
                    x = e;
                    if (!k)c = s - c;
                    var f = b.ceil(c / d.$Interval);
                    a.e(j, function (c, e) {
                        var d = b.max(f, c.Yd);
                        d = b.min(d, c.length - 1);
                        if (c.md != d) {
                            if (!c.md && !k)a.C(m[e]); else d == c.Zd && k && a.K(m[e]);
                            c.md = d;
                            a.be(m[e], c[d])
                        }
                    })
                }
            };
            i = a.Q(i);
            if (a.R()) {
                var D = !i["no-image"], z = a.of(i);
                a.e(z, function (b) {
                    (D || b["jssor-slider"]) && a.rb(b, a.rb(b), c)
                })
            }
            a.e(o, function (i, m) {
                a.e(i, function (G) {
                    var K = G[0], J = G[1], v = K + "," + J, o = g, s = g, x = g;
                    if (p && J % 2) {
                        if (p & 3)o = !o;
                        if (p & 12)s = !s;
                        if (p & 16)x = !x
                    }
                    if (q && K % 2) {
                        if (q & 3)o = !o;
                        if (q & 12)s = !s;
                        if (q & 16)x = !x
                    }
                    d.$Top = d.$Top || d.$Clip & 4;
                    d.$Bottom = d.$Bottom || d.$Clip & 8;
                    d.$Left = d.$Left || d.$Clip & 1;
                    d.$Right = d.$Right || d.$Clip & 2;
                    var C = s ? d.$Bottom : d.$Top, z = s ? d.$Top : d.$Bottom, B = o ? d.$Right : d.$Left, A = o ? d.$Left : d.$Right;
                    d.$Clip = C || z || B || A;
                    r = {};
                    e = {$Top: 0, $Left: 0, $Opacity: 1, db: n, cb: l};
                    f = a.l({}, e);
                    t = a.l({}, h[v]);
                    if (d.$Opacity)e.$Opacity = 2 - d.$Opacity;
                    if (d.$ZIndex) {
                        e.$ZIndex = d.$ZIndex;
                        f.$ZIndex = 0
                    }
                    var I = d.$Cols * d.$Rows > 1 || d.$Clip;
                    if (d.$Zoom || d.$Rotate) {
                        var H = c;
                        if (a.R())if (d.$Cols * d.$Rows > 1)H = g; else I = g;
                        if (H) {
                            e.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;
                            f.$Zoom = 1;
                            if (a.R() || a.wc())e.$Zoom = b.min(e.$Zoom, 2);
                            var N = d.$Rotate;
                            e.$Rotate = N * 360 * (x ? -1 : 1);
                            f.$Rotate = 0
                        }
                    }
                    if (I) {
                        if (d.$Clip) {
                            var w = d.$ScaleClip || 1, i = t.xb = {};
                            if (C && z) {
                                i.$Top = h.cb / 2 * w;
                                i.$Bottom = -i.$Top
                            } else if (C)i.$Bottom = -h.cb * w; else if (z)i.$Top = h.cb * w;
                            if (B && A) {
                                i.$Left = h.db / 2 * w;
                                i.$Right = -i.$Left
                            } else if (B)i.$Right = -h.db * w; else if (A)i.$Left = h.db * w
                        }
                        r.$Clip = t;
                        f.$Clip = h[v]
                    }
                    var L = o ? 1 : -1, M = s ? 1 : -1;
                    if (d.x)e.$Left += n * d.x * L;
                    if (d.y)e.$Top += l * d.y * M;
                    a.e(e, function (b, c) {
                        if (a.Qc(b))if (b != f[c])r[c] = b - f[c]
                    });
                    u[v] = k ? f : e;
                    var D = d.Td, y = b.round(m * d.$Delay / d.$Interval);
                    j[v] = new Array(y);
                    j[v].Yd = y;
                    j[v].Zd = y + D - 1;
                    for (var F = 0; F <= D; F++) {
                        var E = a.nd(f, r, F / D, d.$Easing, d.$During, d.$Round, {
                            $Move: d.$Move,
                            $OriginalWidth: n,
                            $OriginalHeight: l
                        });
                        E.$ZIndex = E.$ZIndex || 1;
                        j[v].push(E)
                    }
                })
            });
            o.reverse();
            a.e(o, function (b) {
                a.e(b, function (c) {
                    var f = c[0], e = c[1], d = f + "," + e, b = i;
                    if (e || f)b = a.Q(i);
                    a.M(b, u[d]);
                    a.gb(b, "hidden");
                    a.E(b, "absolute");
                    A.Cd(b);
                    m[d] = b;
                    a.C(b, !k)
                })
            })
        }

        function v() {
            var a = this, b = 0;
            k.call(a, 0, u);
            a.Ib = function (c, a) {
                if (a - b > j) {
                    b = a;
                    e && e.Ob(a);
                    h && h.Ob(a)
                }
            };
            a.pb = r
        }

        f.zd = function () {
            var a = 0, c = t.$Transitions, d = c.length;
            if (w)a = x++ % d; else a = b.floor(b.random() * d);
            c[a] && (c[a].W = a);
            return c[a]
        };
        f.Kd = function (w, x, i, k, a) {
            r = a;
            a = m(a, j);
            var g = k.Gc, d = i.Gc;
            g["no-image"] = !k.Ub;
            d["no-image"] = !i.Ub;
            var l = g, n = d, v = a, c = a.$Brother || m({}, j);
            if (!a.$SlideOut) {
                l = d;
                n = g
            }
            var t = c.$Shift || 0;
            h = new p(o, n, c, b.max(t - c.$Interval, 0), s, q);
            e = new p(o, l, v, b.max(c.$Interval - t, 0), s, q);
            h.Ob(0);
            e.Ob(0);
            u = b.max(h.Hc, e.Hc);
            f.W = w
        };
        f.Db = function () {
            o.Db();
            h = i;
            e = i
        };
        f.Od = function () {
            var a = i;
            if (e)a = new v;
            return a
        };
        if (a.R() || a.wc() || y && a.yc() < 537)j = 16;
        l.call(f);
        k.call(f, -1e7, 1e7)
    };
    var f = h.$JssorSlider$ = function (q, ec) {
        var n = this;

        function Dc() {
            var a = this;
            k.call(a, -1e8, 2e8);
            a.Jd = function () {
                var c = a.ub(), d = b.floor(c), f = t(d), e = c - b.floor(c);
                return {W: f, Ed: d, Ab: e}
            };
            a.Ib = function (d, a) {
                var e = b.floor(a);
                if (e != a && a > d)e++;
                Tb(e, c);
                n.i(f.$EVT_POSITION_CHANGE, t(a), t(d), a, d)
            }
        }

        function Cc() {
            var b = this;
            k.call(b, 0, 0, {Kc: r});
            a.e(C, function (a) {
                D & 1 && a.Ld(r);
                b.tc(a);
                a.$Shift(hb / ac)
            })
        }

        function Bc() {
            var a = this, b = Sb.$Elmt;
            k.call(a, -1, 2, {$Easing: d.$EaseLinear, jc: {Ab: Yb}, Kc: r}, b, {Ab: 1}, {Ab: -2});
            a.Gb = b
        }

        function pc(m, l) {
            var a = this, d, e, h, j, b;
            k.call(a, -1e8, 2e8, {vd: 100});
            a.td = function () {
                P = c;
                T = i;
                n.i(f.$EVT_SWIPE_START, t(y.V()), y.V())
            };
            a.wd = function () {
                P = g;
                j = g;
                var a = y.Jd();
                n.i(f.$EVT_SWIPE_END, t(y.V()), y.V());
                !a.Ab && Fc(a.Ed, s)
            };
            a.Ib = function (g, f) {
                var a;
                if (j)a = b; else {
                    a = e;
                    if (h) {
                        var c = f / h;
                        a = p.$SlideEasing(c) * (e - d) + d
                    }
                }
                y.z(a)
            };
            a.Lb = function (b, f, c, g) {
                d = b;
                e = f;
                h = c;
                y.z(b);
                a.z(0);
                a.rd(c, g)
            };
            a.Rd = function (d) {
                j = c;
                b = d;
                a.$Play(d, i, c)
            };
            a.Qd = function (a) {
                b = a
            };
            y = new Dc;
            y.ab(m);
            y.ab(l)
        }

        function qc() {
            var c = this, b = Wb();
            a.F(b, 0);
            a.qb(b, "pointerEvents", "none");
            c.$Elmt = b;
            c.Cd = function (c) {
                a.D(b, c);
                a.C(b)
            };
            c.Db = function () {
                a.K(b);
                a.hc(b)
            }
        }

        function zc(o, e) {
            var d = this, q, x, N, y, j, B = [], H, v, W, K, S, G, h, w, m;
            k.call(d, -u, u + 1, {});
            function F(a) {
                x && x.Wb();
                q && q.Wb();
                V(o, a);
                G = c;
                q = new L.$Class(o, L, 1);
                x = new L.$Class(o, L);
                x.z(0);
                q.z(0)
            }

            function Y() {
                q.vc < L.vc && F()
            }

            function O(o, r, m) {
                if (!K) {
                    K = c;
                    if (j && m) {
                        var h = m.width, b = m.height, l = h, k = b;
                        if (h && b && p.$FillMode) {
                            if (p.$FillMode & 3 && (!(p.$FillMode & 4) || h > J || b > I)) {
                                var i = g, q = J / I * b / h;
                                if (p.$FillMode & 1)i = q > 1; else if (p.$FillMode & 2)i = q < 1;
                                l = i ? h * I / b : J;
                                k = i ? I : b * J / h
                            }
                            a.n(j, l);
                            a.o(j, k);
                            a.B(j, (I - k) / 2);
                            a.A(j, (J - l) / 2)
                        }
                        a.E(j, "absolute");
                        n.i(f.$EVT_LOAD_END, e)
                    }
                }
                a.K(r);
                o && o(d)
            }

            function X(b, c, f, g) {
                if (g == T && s == e && Q)if (!Ec) {
                    var a = t(b);
                    A.Kd(a, e, c, d, f);
                    c.Xe();
                    Z.Jb(a, 1);
                    Z.z(a);
                    z.Lb(b, b, 0)
                }
            }

            function cb(b) {
                if (b == T && s == e) {
                    if (!h) {
                        var a = i;
                        if (A)if (A.W == e)a = A.Od(); else A.Db();
                        Y();
                        h = new xc(o, e, a, d.Te(), d.Le());
                        h.Oc(m)
                    }
                    !h.$IsPlaying() && h.pc()
                }
            }

            function U(f, c, g) {
                if (f == e) {
                    if (f != c)C[c] && C[c].Ue(); else!g && h && h.Ye();
                    m && m.$Enable();
                    var j = T = a.I();
                    d.vb(a.J(i, cb, j))
                } else {
                    var l = b.abs(e - f), k = u + p.$LazyLoading - 1;
                    (!S || l <= k) && d.vb()
                }
            }

            function fb() {
                if (s == e && h) {
                    h.Y();
                    m && m.$Quit();
                    m && m.$Disable();
                    h.Pc()
                }
            }

            function gb() {
                s == e && h && h.Y()
            }

            function bb(a) {
                !M && n.i(f.$EVT_CLICK, e, a)
            }

            function P() {
                m = w.pInstance;
                h && h.Oc(m)
            }

            d.vb = function (d, b) {
                b = b || y;
                if (B.length && !K) {
                    a.C(b);
                    if (!W) {
                        W = c;
                        n.i(f.$EVT_LOAD_START, e);
                        a.e(B, function (b) {
                            if (!a.L(b, "src")) {
                                b.src = a.s(b, "src2");
                                a.S(b, b["display-origin"])
                            }
                        })
                    }
                    a.bf(B, j, a.J(i, O, d, b))
                } else O(d, b)
            };
            d.df = function () {
                var g = e;
                if (p.$AutoPlaySteps < 0)g -= r;
                var c = g + p.$AutoPlaySteps * vc;
                if (D & 2)c = t(c);
                if (!(D & 1))c = b.max(0, b.min(c, r - u));
                if (c != e) {
                    if (A) {
                        var d = A.zd(r);
                        if (d) {
                            var h = T = a.I(), f = C[t(c)];
                            return f.vb(a.J(i, X, c, f, d, h), y)
                        }
                    }
                    ab(c)
                }
            };
            d.ic = function () {
                U(e, e, c)
            };
            d.Ue = function () {
                m && m.$Quit();
                m && m.$Disable();
                d.od();
                h && h.ff();
                h = i;
                F()
            };
            d.Xe = function () {
                a.K(o)
            };
            d.od = function () {
                a.C(o)
            };
            d.ef = function () {
                m && m.$Enable()
            };
            function V(b, e, d) {
                if (a.L(b, "jssor-slider"))return;
                d = d || 0;
                if (!G) {
                    if (b.tagName == "IMG") {
                        B.push(b);
                        if (!a.L(b, "src")) {
                            S = c;
                            b["display-origin"] = a.S(b);
                            a.K(b)
                        }
                    }
                    a.R() && a.F(b, (a.F(b) || 0) + 1);
                    if (p.$HWA && a.yc())(a.yc() < 534 || !eb && !a.ee()) && a.ne(b)
                }
                var f = a.U(b);
                a.e(f, function (f) {
                    var i = f.tagName, k = a.s(f, "u");
                    if (k == "player" && !w) {
                        w = f;
                        if (w.pInstance)P(); else a.c(w, "dataavailable", P)
                    }
                    if (k == "caption") {
                        if (!a.ed() && !e) {
                            var h = a.Q(f, g, c);
                            a.Kb(h, f, b);
                            a.yb(f, b);
                            f = h;
                            e = c
                        }
                    } else if (!G && !d && !j) {
                        if (i == "A") {
                            if (a.s(f, "u") == "image")j = a.cf(f, "IMG"); else j = a.v(f, "image", c);
                            if (j) {
                                H = f;
                                a.M(H, R);
                                v = a.Q(H, c);
                                a.S(v, "block");
                                a.M(v, R);
                                a.rb(v, 0);
                                a.qb(v, "backgroundColor", "#000")
                            }
                        } else if (i == "IMG" && a.s(f, "u") == "image")j = f;
                        if (j) {
                            j.border = 0;
                            a.M(j, R)
                        }
                    }
                    V(f, e, d + 1)
                })
            }

            d.rc = function (c, b) {
                var a = u - b;
                Yb(N, a)
            };
            d.Te = function () {
                return q
            };
            d.Le = function () {
                return x
            };
            d.W = e;
            l.call(d);
            var E = a.v(o, "thumb", c);
            if (E) {
                d.hf = a.Q(E);
                a.Dc(E, "id");
                a.K(E)
            }
            a.C(o);
            y = a.Q(db);
            a.F(y, 1e3);
            a.c(o, "click", bb);
            F(c);
            d.Ub = j;
            d.xd = v;
            d.Gc = o;
            d.Gb = N = o;
            a.D(N, y);
            n.$On(203, U);
            n.$On(28, gb);
            n.$On(24, fb)
        }

        function xc(E, i, p, u, t) {
            var b = this, l = 0, w = 0, m, h, d, e, j, q, v, r, o = C[i];
            k.call(b, 0, 0);
            function x() {
                a.hc(N);
                cc && j && o.xd && a.D(N, o.xd);
                a.C(N, !j && o.Ub)
            }

            function y() {
                if (q) {
                    q = g;
                    n.i(f.$EVT_ROLLBACK_END, i, d, l, h, d, e);
                    b.z(h)
                }
                b.pc()
            }

            function z(a) {
                r = a;
                b.Y();
                b.pc()
            }

            b.pc = function () {
                var a = b.ub();
                if (!B && !P && !r && s == i) {
                    if (!a) {
                        if (m && !j) {
                            j = c;
                            b.Pc(c);
                            n.i(f.$EVT_SLIDESHOW_START, i, l, w, m, e)
                        }
                        x()
                    }
                    var g, p = f.$EVT_STATE_CHANGE;
                    if (a != e)if (a == d)g = e; else if (a == h)g = d; else if (!a)g = h; else if (a > d) {
                        q = c;
                        g = d;
                        p = f.$EVT_ROLLBACK_START
                    } else g = b.Ec();
                    n.i(p, i, a, l, h, d, e);
                    var k = Q && (!G || H);
                    if (a == e)(d != e && !(G & 12) || k) && o.df(); else(k || a != d) && b.rd(g, y)
                }
            };
            b.Ye = function () {
                d == e && d == b.ub() && b.z(h)
            };
            b.ff = function () {
                A && A.W == i && A.Db();
                var a = b.ub();
                a < e && n.i(f.$EVT_STATE_CHANGE, i, -a - 1, l, h, d, e)
            };
            b.Pc = function (b) {
                p && a.gb(jb, b && p.pb.$Outside ? "" : "hidden")
            };
            b.rc = function (b, a) {
                if (j && a >= m) {
                    j = g;
                    x();
                    o.od();
                    A.Db();
                    n.i(f.$EVT_SLIDESHOW_END, i, l, w, m, e)
                }
                n.i(f.$EVT_PROGRESS_CHANGE, i, a, l, h, d, e)
            };
            b.Oc = function (a) {
                if (a && !v) {
                    v = a;
                    a.$On($JssorPlayer$.Hd, z)
                }
            };
            p && b.tc(p);
            m = b.Z();
            b.Z();
            b.tc(u);
            h = u.Z();
            d = h + (a.lc(a.s(E, "idle")) || oc);
            t.$Shift(d);
            b.ab(t);
            e = b.Z()
        }

        function Yb(g, f) {
            var e = w > 0 ? w : ib, c = Bb * f * (e & 1), d = Cb * f * (e >> 1 & 1);
            c = b.round(c);
            d = b.round(d);
            a.A(g, c);
            a.B(g, d)
        }

        function Ob() {
            qb = P;
            Kb = z.Ec();
            E = y.V()
        }

        function fc() {
            Ob();
            if (B || !H && G & 12) {
                z.Y();
                n.i(f.de)
            }
        }

        function dc(e) {
            if (!B && (H || !(G & 12)) && !z.$IsPlaying()) {
                var c = y.V(), a = b.ceil(E);
                if (e && b.abs(F) >= p.$MinDragOffsetToSlide) {
                    a = b.ceil(c);
                    a += gb
                }
                if (!(D & 1))a = b.min(r - u, b.max(a, 0));
                var d = b.abs(a - c);
                d = 1 - b.pow(1 - d, 5);
                if (!M && qb)z.Pd(Kb); else if (c == a) {
                    ub.ef();
                    ub.ic()
                } else z.Lb(c, a, d * Ub)
            }
        }

        function Ib(b) {
            !a.s(a.oc(b), "nodrag") && a.Pb(b)
        }

        function tc(a) {
            Xb(a, 1)
        }

        function Xb(b, d) {
            b = a.Tc(b);
            var k = a.oc(b);
            if (!K && !a.s(k, "nodrag") && uc() && (!d || b.touches.length == 1)) {
                B = c;
                Ab = g;
                T = i;
                a.c(e, d ? "touchmove" : "mousemove", Db);
                a.I();
                M = 0;
                fc();
                if (!qb)w = 0;
                if (d) {
                    var j = b.touches[0];
                    vb = j.clientX;
                    wb = j.clientY
                } else {
                    var h = a.Rc(b);
                    vb = h.x;
                    wb = h.y
                }
                F = 0;
                cb = 0;
                gb = 0;
                n.i(f.$EVT_DRAG_START, t(E), E, b)
            }
        }

        function Db(e) {
            if (B) {
                e = a.Tc(e);
                var f;
                if (e.type != "mousemove") {
                    var l = e.touches[0];
                    f = {x: l.clientX, y: l.clientY}
                } else f = a.Rc(e);
                if (f) {
                    var j = f.x - vb, k = f.y - wb;
                    if (b.floor(E) != E)w = w || ib & K;
                    if ((j || k) && !w) {
                        if (K == 3)if (b.abs(k) > b.abs(j))w = 2; else w = 1; else w = K;
                        if (lb && w == 1 && b.abs(k) - b.abs(j) > 3)Ab = c
                    }
                    if (w) {
                        var d = k, i = Cb;
                        if (w == 1) {
                            d = j;
                            i = Bb
                        }
                        if (!(D & 1)) {
                            if (d > 0) {
                                var g = i * s, h = d - g;
                                if (h > 0)d = g + b.sqrt(h) * 5
                            }
                            if (d < 0) {
                                var g = i * (r - u - s), h = -d - g;
                                if (h > 0)d = -g - b.sqrt(h) * 5
                            }
                        }
                        if (F - cb < -2)gb = 0; else if (F - cb > 2)gb = -1;
                        cb = F;
                        F = d;
                        tb = E - F / i / (Y || 1);
                        if (F && w && !Ab) {
                            a.Pb(e);
                            if (!P)z.Rd(tb); else z.Qd(tb)
                        }
                    }
                }
            }
        }

        function ob() {
            rc();
            if (B) {
                B = g;
                a.I();
                a.H(e, "mousemove", Db);
                a.H(e, "touchmove", Db);
                M = F;
                z.Y();
                var b = y.V();
                n.i(f.$EVT_DRAG_END, t(b), b, t(E), E);
                G & 12 && Ob();
                dc(c)
            }
        }

        function jc(c) {
            if (M) {
                a.af(c);
                var b = a.oc(c);
                while (b && v !== b) {
                    b.tagName == "A" && a.Pb(c);
                    try {
                        b = b.parentNode
                    } catch (d) {
                        break
                    }
                }
            }
        }

        function nc(a) {
            C[s];
            s = t(a);
            ub = C[s];
            Tb(a);
            return s
        }

        function Fc(a, b) {
            w = 0;
            nc(a);
            n.i(f.$EVT_PARK, t(a), b)
        }

        function Tb(b, c) {
            yb = b;
            a.e(O, function (a) {
                a.Zb(t(b), b, c)
            })
        }

        function uc() {
            var b = f.yd || 0, a = X;
            if (lb)a & 1 && (a &= 1);
            f.yd |= a;
            return K = a & ~b
        }

        function rc() {
            if (K) {
                f.yd &= ~X;
                K = 0
            }
        }

        function Wb() {
            var b = a.eb();
            a.M(b, R);
            a.E(b, "absolute");
            return b
        }

        function t(a) {
            return (a % r + r) % r
        }

        function kc(a, c) {
            if (c)if (!D) {
                a = b.min(b.max(a + yb, 0), r - u);
                c = g
            } else if (D & 2) {
                a = t(a + yb);
                c = g
            }
            ab(a, p.$SlideDuration, c)
        }

        function zb() {
            a.e(O, function (a) {
                a.nc(a.Vb.$ChanceToShow <= H)
            })
        }

        function hc() {
            if (!H) {
                H = 1;
                zb();
                if (!B) {
                    G & 12 && dc();
                    G & 3 && C[s].ic()
                }
            }
        }

        function gc() {
            if (H) {
                H = 0;
                zb();
                B || !(G & 12) || fc()
            }
        }

        function ic() {
            R = {db: J, cb: I, $Top: 0, $Left: 0};
            a.e(U, function (b) {
                a.M(b, R);
                a.E(b, "absolute");
                a.gb(b, "hidden");
                a.K(b)
            });
            a.M(db, R)
        }

        function nb(b, a) {
            ab(b, a, c)
        }

        function ab(f, e, k) {
            if (Qb && (!B || p.$NaviQuitDrag)) {
                P = c;
                B = g;
                z.Y();
                if (e == j)e = Ub;
                var d = Eb.ub(), a = f;
                if (k) {
                    a = d + f;
                    if (f > 0)a = b.ceil(a); else a = b.floor(a)
                }
                if (D & 2)a = t(a);
                if (!(D & 1))a = b.max(0, b.min(a, r - u));
                var i = (a - d) % r;
                a = d + i;
                var h = d == a ? 0 : e * b.abs(i);
                h = b.min(h, e * u * 1.5);
                z.Lb(d, a, h || 1)
            }
        }

        n.$PlayTo = ab;
        n.$GoTo = function (a) {
            ab(a, 1)
        };
        n.$Next = function () {
            nb(1)
        };
        n.$Prev = function () {
            nb(-1)
        };
        n.$Pause = function () {
            Q = g
        };
        n.$Play = function () {
            if (!Q) {
                Q = c;
                C[s] && C[s].ic()
            }
        };
        n.$SetSlideshowTransitions = function (a) {
            p.$SlideshowOptions.$Transitions = a
        };
        n.$SetCaptionTransitions = function (b) {
            L.$CaptionTransitions = b;
            L.vc = a.I()
        };
        n.$SlidesCount = function () {
            return U.length
        };
        n.$CurrentIndex = function () {
            return s
        };
        n.$IsAutoPlaying = function () {
            return Q
        };
        n.$IsDragging = function () {
            return B
        };
        n.$IsSliding = function () {
            return P
        };
        n.$IsMouseOver = function () {
            return !H
        };
        n.$LastDragSucceded = function () {
            return M
        };
        function W() {
            return a.n(x || q)
        }

        function kb() {
            return a.o(x || q)
        }

        n.$OriginalWidth = n.$GetOriginalWidth = W;
        n.$OriginalHeight = n.$GetOriginalHeight = kb;
        function Gb(c, d) {
            if (c == j)return a.n(q);
            if (!x) {
                var b = a.eb(e);
                a.Lc(b, a.Lc(q));
                a.Nb(b, a.Nb(q));
                a.S(b, "block");
                a.E(b, "relative");
                a.B(b, 0);
                a.A(b, 0);
                a.gb(b, "visible");
                x = a.eb(e);
                a.E(x, "absolute");
                a.B(x, 0);
                a.A(x, 0);
                a.n(x, a.n(q));
                a.o(x, a.o(q));
                a.le(x, "0 0");
                a.D(x, b);
                var h = a.U(q);
                a.D(q, x);
                a.qb(q, "backgroundImage", "");
                a.e(h, function (c) {
                    a.D(a.s(c, "noscale") ? q : b, c)
                })
            }
            Y = c / (d ? a.o : a.n)(x);
            a.oe(x, Y);
            var g = d ? Y * W() : c, f = d ? c : Y * kb();
            a.n(q, g);
            a.o(q, f);
            a.e(O, function (a) {
                a.xc(g, f)
            })
        }

        n.$ScaleHeight = n.$GetScaleHeight = function (b) {
            if (b == j)return a.o(q);
            Gb(b, c)
        };
        n.$ScaleWidth = n.$SetScaleWidth = n.$GetScaleWidth = Gb;
        n.Yc = function (a) {
            var d = b.ceil(t(hb / ac)), c = t(a - s + d);
            if (c > u) {
                if (a - s > r / 2)a -= r; else if (a - s <= -r / 2)a += r
            } else a = s + c - d;
            return a
        };
        l.call(n);
        n.$Elmt = q = a.fb(q);
        var p = a.l({
            $FillMode: 0,
            $LazyLoading: 1,
            $StartIndex: 0,
            $AutoPlay: g,
            $Loop: 1,
            $HWA: c,
            $NaviQuitDrag: c,
            $AutoPlaySteps: 1,
            $AutoPlayInterval: 3e3,
            $PauseOnHover: 1,
            $SlideDuration: 500,
            $SlideEasing: d.$EaseOutQuad,
            $MinDragOffsetToSlide: 20,
            $SlideSpacing: 0,
            $DisplayPieces: 1,
            $ParkingPosition: 0,
            $UISearchMode: 1,
            $PlayOrientation: 1,
            $DragOrientation: 1
        }, ec);
        if (p.$Idle != j)p.$AutoPlayInterval = p.$Idle;
        if (p.$Cols != j)p.$DisplayPieces = p.$Cols;
        var ib = p.$PlayOrientation & 3, vc = (p.$PlayOrientation & 4) / -4 || 1, fb = p.$SlideshowOptions, L = a.l({
            $Class: o,
            $PlayInMode: 1,
            $PlayOutMode: 1
        }, p.$CaptionSliderOptions), rb = p.$BulletNavigatorOptions, V = p.$ArrowNavigatorOptions, bb = p.$ThumbnailNavigatorOptions, S = !p.$UISearchMode, x, v = a.v(q, "slides", S), db = a.v(q, "loading", S) || a.eb(e), Jb = a.v(q, "navigator", S), bc = a.v(q, "arrowleft", S), Zb = a.v(q, "arrowright", S), Hb = a.v(q, "thumbnavigator", S), mc = a.n(v), lc = a.o(v), R, U = [], wc = a.U(v);
        a.e(wc, function (b) {
            if (b.tagName == "DIV" && !a.s(b, "u"))U.push(b); else a.R() && a.F(b, (a.F(b) || 0) + 1)
        });
        var s = -1, yb, ub, r = U.length, J = p.$SlideWidth || mc, I = p.$SlideHeight || lc, Vb = p.$SlideSpacing, Bb = J + Vb, Cb = I + Vb, ac = ib & 1 ? Bb : Cb, u = b.min(p.$DisplayPieces, r), jb, w, K, Ab, O = [], Pb, Rb, Nb, cc, Ec, Q, G = p.$PauseOnHover, oc = p.$AutoPlayInterval, Ub = p.$SlideDuration, sb, eb, hb, Qb = u < r, D = Qb ? p.$Loop : 0, X, M, H = 1, P, B, T, vb = 0, wb = 0, F, cb, gb, Eb, y, Z, z, Sb = new qc, Y;
        Q = p.$AutoPlay;
        n.Vb = ec;
        ic();
        a.L(q, "jssor-slider", c);
        a.F(v, a.F(v) || 0);
        a.E(v, "absolute");
        jb = a.Q(v, c);
        a.Kb(jb, v);
        if (fb) {
            cc = fb.$ShowLink;
            sb = fb.$Class;
            eb = u == 1 && r > 1 && sb && (!a.ed() || a.bd() >= 8)
        }
        hb = eb || u >= r || !(D & 1) ? 0 : p.$ParkingPosition;
        X = (u > 1 || hb ? ib : -1) & p.$DragOrientation;
        var xb = v, C = [], A, N, Fb = a.he(), lb = Fb.ie, E, qb, Kb, tb;
        Fb.ud && a.qb(xb, Fb.ud, ([i, "pan-y", "pan-x", "none"])[X] || "");
        Z = new Bc;
        if (eb)A = new sb(Sb, J, I, fb, lb);
        a.D(jb, Z.Gb);
        a.gb(v, "hidden");
        N = Wb();
        a.qb(N, "backgroundColor", "#000");
        a.rb(N, 0);
        a.Kb(N, xb.firstChild, xb);
        for (var pb = 0; pb < U.length; pb++) {
            var yc = U[pb], Ac = new zc(yc, pb);
            C.push(Ac)
        }
        a.K(db);
        Eb = new Cc;
        z = new pc(Eb, Z);
        if (X) {
            a.c(v, "mousedown", Xb);
            a.c(v, "touchstart", tc);
            a.c(v, "dragstart", Ib);
            a.c(v, "selectstart", Ib);
            a.c(e, "mouseup", ob);
            a.c(e, "touchend", ob);
            a.c(e, "touchcancel", ob);
            a.c(h, "blur", ob)
        }
        G &= lb ? 10 : 5;
        if (Jb && rb) {
            Pb = new rb.$Class(Jb, rb, W(), kb());
            O.push(Pb)
        }
        if (V && bc && Zb) {
            V.$Loop = D;
            V.$DisplayPieces = u;
            Rb = new V.$Class(bc, Zb, V, W(), kb());
            O.push(Rb)
        }
        if (Hb && bb) {
            bb.$StartIndex = p.$StartIndex;
            Nb = new bb.$Class(Hb, bb);
            O.push(Nb)
        }
        a.e(O, function (a) {
            a.gc(r, C, db);
            a.$On(m.Mb, kc)
        });
        Gb(W());
        a.c(v, "click", jc);
        a.c(q, "mouseout", a.Qb(hc, q));
        a.c(q, "mouseover", a.Qb(gc, q));
        zb();
        p.$ArrowKeyNavigation && a.c(e, "keydown", function (a) {
            if (a.keyCode == 37)nb(-1); else a.keyCode == 39 && nb(1)
        });
        var mb = p.$StartIndex;
        if (!(D & 1))mb = b.max(0, b.min(mb, r - u));
        z.Lb(mb, mb, 0)
    };
    h.$JssorSlideo$ = f;
    f.$EVT_CLICK = 21;
    f.$EVT_DRAG_START = 22;
    f.$EVT_DRAG_END = 23;
    f.$EVT_SWIPE_START = 24;
    f.$EVT_SWIPE_END = 25;
    f.$EVT_LOAD_START = 26;
    f.$EVT_LOAD_END = 27;
    f.de = 28;
    f.$EVT_POSITION_CHANGE = 202;
    f.$EVT_PARK = 203;
    f.$EVT_SLIDESHOW_START = 206;
    f.$EVT_SLIDESHOW_END = 207;
    f.$EVT_PROGRESS_CHANGE = 208;
    f.$EVT_STATE_CHANGE = 209;
    f.$EVT_ROLLBACK_START = 210;
    f.$EVT_ROLLBACK_END = 211;
    var m = {Mb: 1};
    h.$JssorBulletNavigator$ = function (d, D) {
        var f = this;
        l.call(f);
        d = a.fb(d);
        var t, u, s, r, n = 0, e, o, k, y, z, j, h, q, p, C = [], A = [];

        function x(a) {
            a != -1 && A[a].Uc(a == n)
        }

        function v(a) {
            f.i(m.Mb, a * o)
        }

        f.$Elmt = d;
        f.Zb = function (a) {
            if (a != r) {
                var d = n, c = b.floor(a / o);
                n = c;
                r = a;
                x(d);
                x(c)
            }
        };
        f.nc = function (b) {
            a.C(d, b)
        };
        var B;
        f.xc = function (f, b) {
            if (!B || e.$Scale == g) {
                var f = a.zb(d).clientWidth, b = a.zb(d).clientHeight;
                e.$AutoCenter & 1 && a.A(d, (f - u) / 2);
                e.$AutoCenter & 2 && a.B(d, (b - s) / 2);
                B = c
            }
        };
        var w;
        f.gc = function (D) {
            if (!w) {
                t = b.ceil(D / o);
                n = 0;
                var m = q + y, r = p + z, l = b.ceil(t / k) - 1;
                u = q + m * (!j ? l : k - 1);
                s = p + r * (j ? l : k - 1);
                a.n(d, u);
                a.o(d, s);
                for (var f = 0; f < t; f++) {
                    var B = a.Qe();
                    a.gf(B, f + 1);
                    var g = a.Wc(h, "numbertemplate", B, c);
                    a.E(g, "absolute");
                    var x = f % (l + 1);
                    a.A(g, !j ? m * x : f % k * m);
                    a.B(g, j ? r * x : b.floor(f / (l + 1)) * r);
                    a.D(d, g);
                    C[f] = g;
                    e.$ActionMode & 1 && a.c(g, "click", a.J(i, v, f));
                    e.$ActionMode & 2 && a.c(g, "mouseover", a.Qb(a.J(i, v, f), g));
                    A[f] = a.Xb(g)
                }
                w = c
            }
        };
        f.Vb = e = a.l({$SpacingX: 0, $SpacingY: 0, $Orientation: 1, $ActionMode: 1}, D);
        h = a.v(d, "prototype");
        q = a.n(h);
        p = a.o(h);
        a.yb(h, d);
        o = e.$Steps || 1;
        k = e.$Lanes || 1;
        y = e.$SpacingX;
        z = e.$SpacingY;
        j = e.$Orientation - 1;
        e.$Scale == g && a.L(d, "noscale", c)
    };
    h.$JssorArrowNavigator$ = function (b, f, j) {
        var d = this;
        l.call(d);
        var u, t, e, h, k, q = a.n(b), o = a.o(b);

        function n(a) {
            d.i(m.Mb, a, c)
        }

        function r(c) {
            a.C(b, c || !j.$Loop && e == 0);
            a.C(f, c || !j.$Loop && e >= t - j.$DisplayPieces);
            u = c
        }

        d.Zb = function (b, a, c) {
            if (c)e = a; else {
                e = b;
                r(u)
            }
        };
        d.nc = r;
        var s;
        d.xc = function (i, d) {
            if (!s || h.$Scale == g) {
                var e = a.zb(b).clientWidth, d = a.zb(b).clientHeight;
                if (h.$AutoCenter & 1) {
                    a.A(b, (e - q) / 2);
                    a.A(f, (e - q) / 2)
                }
                if (h.$AutoCenter & 2) {
                    a.B(b, (d - o) / 2);
                    a.B(f, (d - o) / 2)
                }
                s = c
            }
        };
        var p;
        d.gc = function (d) {
            t = d;
            e = 0;
            if (!p) {
                a.c(b, "click", a.J(i, n, -k));
                a.c(f, "click", a.J(i, n, k));
                a.Xb(b);
                a.Xb(f);
                p = c
            }
        };
        d.Vb = h = a.l({$Steps: 1}, j);
        k = h.$Steps;
        if (h.$Scale == g) {
            a.L(b, "noscale", c);
            a.L(f, "noscale", c)
        }
    };
    h.$JssorThumbnailNavigator$ = function (k, B) {
        var i = this, y, p, d, v = [], z, x, e, q, r, u, t, o, s, h, n;
        l.call(i);
        k = a.fb(k);
        function A(l, f) {
            var g = this, b, k, j;

            function o() {
                k.Uc(p == f)
            }

            function h() {
                if (!s.$LastDragSucceded()) {
                    var a = e - f % e, b = s.Yc((f + a) / e - 1), c = b * e + e - a;
                    i.i(m.Mb, c)
                }
            }

            g.W = f;
            g.Fc = o;
            j = l.hf || l.Ub || a.eb();
            g.Gb = b = a.Wc(n, "thumbnailtemplate", j, c);
            k = a.Xb(b);
            d.$ActionMode & 1 && a.c(b, "click", h);
            d.$ActionMode & 2 && a.c(b, "mouseover", a.Qb(h, b))
        }

        i.Zb = function (c, d, f) {
            var a = p;
            p = c;
            a != -1 && v[a].Fc();
            v[c].Fc();
            !f && s.$PlayTo(s.Yc(b.floor(d / e)))
        };
        i.nc = function (b) {
            a.C(k, b)
        };
        i.xc = a.dc;
        var w;
        i.gc = function (F, D) {
            if (!w) {
                y = F;
                b.ceil(y / e);
                p = -1;
                o = b.min(o, D.length);
                var i = d.$Orientation & 1, m = u + (u + q) * (e - 1) * (1 - i), l = t + (t + r) * (e - 1) * i, B = m + (m + q) * (o - 1) * i, n = l + (l + r) * (o - 1) * (1 - i);
                a.E(h, "absolute");
                a.gb(h, "hidden");
                d.$AutoCenter & 1 && a.A(h, (z - B) / 2);
                d.$AutoCenter & 2 && a.B(h, (x - n) / 2);
                a.n(h, B);
                a.o(h, n);
                var j = [];
                a.e(D, function (l, f) {
                    var g = new A(l, f), d = g.Gb, c = b.floor(f / e), k = f % e;
                    a.A(d, (u + q) * k * (1 - i));
                    a.B(d, (t + r) * k * i);
                    if (!j[c]) {
                        j[c] = a.eb();
                        a.D(h, j[c])
                    }
                    a.D(j[c], d);
                    v.push(g)
                });
                var E = a.l({
                    $HWA: g,
                    $AutoPlay: g,
                    $NaviQuitDrag: g,
                    $SlideWidth: m,
                    $SlideHeight: l,
                    $SlideSpacing: q * i + r * (1 - i),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: d.$Orientation,
                    $DragOrientation: d.$DisableDrag ? 0 : d.$Orientation
                }, d);
                s = new f(k, E);
                w = c
            }
        };
        i.Vb = d = a.l({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, B);
        if (d.$Rows != j)d.$Lanes = d.$Rows;
        z = a.n(k);
        x = a.o(k);
        h = a.v(k, "slides", c);
        n = a.v(h, "prototype");
        u = a.n(n);
        t = a.o(n);
        a.yb(n, h);
        e = d.$Lanes || 1;
        q = d.$SpacingX;
        r = d.$SpacingY;
        o = d.$DisplayPieces;
        d.$Scale == g && a.L(k, "noscale", c)
    };
    function o() {
        k.call(this, 0, 0);
        this.Wb = a.dc
    }

    h.$JssorCaptionSlider$ = function (p, h, f) {
        var c = this, g, n = f ? h.$PlayInMode : h.$PlayOutMode, e = h.$CaptionTransitions, o = {
            pb: "t",
            $Delay: "d",
            $Duration: "du",
            x: "x",
            y: "y",
            $Rotate: "r",
            $Zoom: "z",
            $Opacity: "f",
            lb: "b"
        }, d = {
            wb: function (b, a) {
                if (!isNaN(a.mb))b = a.mb; else b *= a.ze;
                return b
            }, $Opacity: function (b, a) {
                return this.wb(b - 1, a)
            }
        };
        d.$Zoom = d.$Opacity;
        k.call(c, 0, 0);
        function l(r, m) {
            var k = [], i, j = [], c = [];

            function h(c, d) {
                var b = {};
                a.e(o, function (g, h) {
                    var e = a.s(c, g + (d || ""));
                    if (e) {
                        var f = {};
                        if (g == "t")f.mb = e; else if (e.indexOf("%") + 1)f.ze = a.lc(e) / 100; else f.mb = a.lc(e);
                        b[h] = f
                    }
                });
                return b
            }

            function p() {
                return e[b.floor(b.random() * e.length)]
            }

            function g(f) {
                var h;
                if (f == "*")h = p(); else if (f) {
                    var d = e[a.Me(f)] || e[f];
                    if (a.Yb(d)) {
                        if (f != i) {
                            i = f;
                            c[f] = 0;
                            j[f] = d[b.floor(b.random() * d.length)]
                        } else c[f]++;
                        d = j[f];
                        if (a.Yb(d)) {
                            d = d.length && d[c[f] % d.length];
                            if (a.Yb(d))d = d[b.floor(b.random() * d.length)]
                        }
                    }
                    h = d;
                    if (a.gd(h))h = g(h)
                }
                return h
            }

            var q = a.U(r);
            a.e(q, function (b) {
                var c = [];
                c.$Elmt = b;
                var e = a.s(b, "u") == "caption";
                a.e(f ? [0, 3] : [2], function (k, o) {
                    if (e) {
                        var j, f;
                        if (k != 2 || !a.s(b, "t3")) {
                            f = h(b, k);
                            if (k == 2 && !f.pb) {
                                f.$Delay = f.$Delay || {mb: 0};
                                f = a.l(h(b, 0), f)
                            }
                        }
                        if (f && f.pb) {
                            j = g(f.pb.mb);
                            if (j) {
                                var i = a.l({$Delay: 0}, j);
                                a.e(f, function (c, a) {
                                    var b = (d[a] || d.wb).apply(d, [i[a], f[a]]);
                                    if (!isNaN(b))i[a] = b
                                });
                                if (!o)if (f.lb)i.lb = f.lb.mb || 0; else if (n & 2)i.lb = 0
                            }
                        }
                        c.push(i)
                    }
                    if (m % 2 && !o)c.U = l(b, m + 1)
                });
                k.push(c)
            });
            return k
        }

        function m(w, c, z) {
            var g = {
                $Easing: c.$Easing,
                $Round: c.$Round,
                $During: c.$During,
                $Reverse: f && !z
            }, m = w, r = a.zb(w), l = a.n(m), j = a.o(m), y = a.n(r), x = a.o(r), h = {}, e = {}, i = c.$ScaleClip || 1;
            if (c.$Opacity)e.$Opacity = 1 - c.$Opacity;
            g.$OriginalWidth = l;
            g.$OriginalHeight = j;
            if (c.$Zoom || c.$Rotate) {
                e.$Zoom = (c.$Zoom || 2) - 2;
                if (a.R() || a.wc())e.$Zoom = b.min(e.$Zoom, 1);
                h.$Zoom = 1;
                var B = c.$Rotate || 0;
                e.$Rotate = B * 360;
                h.$Rotate = 0
            } else if (c.$Clip) {
                var s = {
                    $Top: 0,
                    $Right: l,
                    $Bottom: j,
                    $Left: 0
                }, v = a.l({}, s), d = v.xb = {}, u = c.$Clip & 4, p = c.$Clip & 8, t = c.$Clip & 1, q = c.$Clip & 2;
                if (u && p) {
                    d.$Top = j / 2 * i;
                    d.$Bottom = -d.$Top
                } else if (u)d.$Bottom = -j * i; else if (p)d.$Top = j * i;
                if (t && q) {
                    d.$Left = l / 2 * i;
                    d.$Right = -d.$Left
                } else if (t)d.$Right = -l * i; else if (q)d.$Left = l * i;
                g.$Move = c.$Move;
                e.$Clip = v;
                h.$Clip = s
            }
            var n = 0, o = 0;
            if (c.x)n -= y * c.x;
            if (c.y)o -= x * c.y;
            if (n || o || g.$Move) {
                e.$Left = n;
                e.$Top = o
            }
            var A = c.$Duration;
            h = a.l(h, a.ae(m, e));
            g.jc = a.Wd();
            return new k(c.$Delay, A, g, m, h, e)
        }

        function i(b, d) {
            a.e(d, function (a) {
                var e, h = a.$Elmt, d = a[0], k = a[1];
                if (d) {
                    e = m(h, d);
                    b = e.Jb(d.lb == j ? b : d.lb, 1)
                }
                b = i(b, a.U);
                if (k) {
                    var f = m(h, k, 1);
                    f.Jb(b, 1);
                    c.ab(f);
                    g.ab(f)
                }
                e && c.ab(e)
            });
            return b
        }

        c.Wb = function () {
            c.z(c.Z() * (f || 0));
            g.z(0)
        };
        g = new k(0, 0);
        i(0, n ? l(p, 1) : [])
    };
})(window, document, Math, null, true, false)