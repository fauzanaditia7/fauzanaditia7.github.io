var tata = function(b) {
    function a(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            i: d,
            l: !1,
            exports: {}
        };
        return b[d].call(e.exports, e, e.exports, a), e.l = !0, e.exports
    }
    var c = {};
    return a.m = b, a.c = c, a.d = function(b, c, d) {
        a.o(b, c) || Object.defineProperty(b, c, {
            configurable: !1,
            enumerable: !0,
            get: d
        })
    }, a.n = function(c) {
        var b = c && c.__esModule ? function() {
            return c.default
        } : function() {
            return c
        };
        return a.d(b, "a", b), b
    }, a.o = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }, a.p = "", a(a.s = 0)
}([function(a, c, b) {
    a.exports = b(1)
}, function(d, a, b) {
    "use strict";

    function e() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "fade",
            b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tr";
        if ("slide" === a) switch (b) {
            case "tr":
            case "mr":
            case "br":
                return "slide-right-out";
            case "tl":
            case "ml":
            case "bl":
                return "slide-left-out";
            case "tm":
                return "slide-top-out";
            case "bm":
                return "slide-bottom-out"
        }
        return "fade-out"
    }

    function f(a) {
        a.target.classList.contains("tata-close") || this.opts.onClick.call(this)
    }

    function g(a) {
        var b = setTimeout(function() {
            "function" == typeof a.remove ? a.remove() : document.body.removeChild(a), clearTimeout(b)
        }, 800)
    }

    function h(h, i, a) {
        var b = "tata-" + Date.now(),
            m = function() {
                switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "text") {
                    case "text":
                        return "chat_bubble";
                    case "log":
                        return "textsms";
                    case "info":
                        return "forum";
                    case "warn":
                        return "info_outline";
                    case "success":
                        return "check";
                    case "error":
                        return "block";
                    case "ask":
                        return "help_outline";
                    default:
                        return ""
                }
            }(a.type),
            n = function() {
                switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "tr") {
                    case "tr":
                    default:
                        return "top-right";
                    case "tm":
                        return "top-mid";
                    case "tl":
                        return "top-left";
                    case "mr":
                        return "mid-right";
                    case "mm":
                        return "mid-mid";
                    case "ml":
                        return "mid-left";
                    case "br":
                        return "bottom-right";
                    case "bm":
                        return "bottom-mid";
                    case "bl":
                        return "bottom-left"
                }
            }(a.position),
            o = function() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "fade",
                    b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tr";
                if ("slide" === a) switch (b) {
                    case "tr":
                    case "mr":
                    case "br":
                        return "slide-right-in";
                    case "tl":
                    case "ml":
                    case "bl":
                        return "slide-left-in";
                    case "tm":
                        return "slide-top-in";
                    case "bm":
                        return "slide-bottom-in"
                }
                return "fade-in"
            }(a.animate, a.position),
            c = {
                title: h,
                text: i,
                opts: a,
                id: b
            },
            j = k.findIndex(function(a) {
                return a.id === b
            }),
            d = 0 === j ? null : k[j - 1];
        k.push(c);
        var p = '\n  <div class="tata ' + a.type + " " + o + " " + n + '" id=' + b + '>\n    <i class="tata-icon material-icons">' + m + '</i>\n    <div class="tata-body">\n      <h4 class="tata-title">' + h + '</h4>\n      <p class="tata-text">' + i + "</p>\n    </div>\n    " + (a.closeBtn || a.holding ? '<button class="tata-close material-icons">clear</button>' : "") + "\n    " + (!a.holding && a.progress ? '<div class="tata-progress"></div>' : "") + "\n  </div>\n ";
        document.body.insertAdjacentHTML("beforeend", p), d && d.opts.position === c.opts.position && g(document.getElementById(d.id));
        var l = document.getElementById(b);
        if (a.onClick && "function" == typeof a.onClick && l.addEventListener("click", f.bind(c), {
                capture: !0,
                once: !0
            }), !a.holding && a.progress) {
            l.querySelector(".tata-progress").style.animation = a.duration / 1e3 + "s reduceWidth linear forwards";
            var q = setTimeout(function() {
                var a = k.findIndex(function(a) {
                    return a == a
                });
                k.splice(a, 1), l.classList.add(e(c.opts.animate, c.opts.position)), g(l), clearTimeout(q), c.opts.onClose && "function" == typeof c.opts.onClose && c.opts.onClose.call(c)
            }, a.duration)
        }
    }

    function c() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\xe4\xbd \xe5\xa5\xbd",
            b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "\xe4\xbb\u0160\xe5\xa4\xa9\xe6\u02DC\xaf" + (new Date).toLocaleString(),
            c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        h(a, b, Object.assign({}, l, c, {
            type: "text"
        }))
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.text = c, a.log = function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\xe4\xbd \xe5\xa5\xbd",
            b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "\xe4\xbb\u0160\xe5\xa4\xa9\xe6\u02DC\xaf" + (new Date).toLocaleString(),
            c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        h(a, b, Object.assign({}, l, c, {
            type: "log"
        }))
    }, a.info = function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\xe4\xbd \xe5\xa5\xbd",
            b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "\xe4\xbb\u0160\xe5\xa4\xa9\xe6\u02DC\xaf" + (new Date).toLocaleString(),
            c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        h(a, b, Object.assign({}, l, c, {
            type: "info"
        }))
    }, a.warn = function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\xe4\xbd \xe5\xa5\xbd",
            b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "\xe4\xbb\u0160\xe5\xa4\xa9\xe6\u02DC\xaf" + (new Date).toLocaleString(),
            c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        h(a, b, Object.assign({}, l, c, {
            type: "warn"
        }))
    }, a.error = function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\xe4\xbd \xe5\xa5\xbd",
            b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "\xe4\xbb\u0160\xe5\xa4\xa9\xe6\u02DC\xaf" + (new Date).toLocaleString(),
            c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        h(a, b, Object.assign({}, l, c, {
            type: "error"
        }))
    }, a.success = function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\xe4\xbd \xe5\xa5\xbd",
            b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "\xe4\xbb\u0160\xe5\xa4\xa9\xe6\u02DC\xaf" + (new Date).toLocaleString(),
            c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        h(a, b, Object.assign({}, l, c, {
            type: "success"
        }))
    }, a.ask = function() {
        var a = Object.assign({}, l, opts, {
            type: "ask"
        });
        h(title, c, a)
    }, a.clear = function() {
        k.forEach(function(a) {
            return g(document.getElementById(a.id))
        }), k.length = 0
    }, b(2), i = "https://fonts.googleapis.com/icon?family=Material+Icons", (j = document.createElement("link")).rel = "stylesheet", j.href = i, document.head.appendChild(j), document.addEventListener("click", function(d) {
        var b = d.target;
        if (b.classList.contains("tata-close")) {
            var f = b.parentNode.getAttribute("id"),
                a = k.find(function(a) {
                    return a.id === f
                }),
                c = document.getElementById(f);
            c.classList.add(e(a.opts.animate, a.opts.position)), g(c), a.opts.onClose && "function" == typeof a.opts.onClose && a.opts.onClose.call(a)
        }
    }, !1);
    var i, j, k = [],
        l = {
            type: "log",
            position: "tr",
            animate: "fade",
            duration: 3e3,
            progress: !0,
            holding: !1,
            closeBtn: !0,
            onClick: null,
            onClose: null
        }
}, function(b, e, c) {
    var a = c(3);
    "string" == typeof a && (a = [
        [b.i, a, ""]
    ]);
    var d = {
        hmr: !0
    };
    d.transform = void 0, c(5)(a, d), a.locals && (b.exports = a.locals)
}, function(a, c, b) {
    (a.exports = b(4)(void 0)).push([a.i, "", ""])
}, function(a, b) {
    a.exports = function(b) {
        var a = [];
        return a.toString = function() {
            return this.map(function(a) {
                var c = function(c, e) {
                    var a = c[1] || "",
                        b = c[3];
                    if (!b) return a;
                    if (e && "function" == typeof btoa) {
                        var d, f = (d = b, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(d)))) + " */");
                        return [a].concat(b.sources.map(function(a) {
                            return "/*# sourceURL=" + b.sourceRoot + a + " */"
                        })).concat([f]).join("\n")
                    }
                    return [a].join("\n")
                }(a, b);
                return a[2] ? "@media " + a[2] + "{" + c + "}" : c
            }).join("")
        }, a.i = function(d, e) {
            "string" == typeof d && (d = [
                [null, d, ""]
            ]);
            for (var f = {}, b = 0; b < this.length; b++) {
                var g = this[b][0];
                "number" == typeof g && (f[g] = !0)
            }
            for (b = 0; b < d.length; b++) {
                var c = d[b];
                "number" == typeof c[0] && f[c[0]] || (e && !c[2] ? c[2] = e : e && (c[2] = "(" + c[2] + ") and (" + e + ")"), a.push(c))
            }
        }, a
    }
}, function(a, d, b) {
    function e(e, f) {
        for (var d = 0; d < e.length; d++) {
            var b = e[d],
                c = o[b.id];
            if (c) {
                c.refs++;
                for (var a = 0; a < c.parts.length; a++) c.parts[a](b.parts[a]);
                for (; a < b.parts.length; a++) c.parts.push(k(b.parts[a], f))
            } else {
                for (var g = [], a = 0; a < b.parts.length; a++) g.push(k(b.parts[a], f));
                o[b.id] = {
                    id: b.id,
                    refs: 1,
                    parts: g
                }
            }
        }
    }

    function f(e, f) {
        for (var g = [], c = {}, d = 0; d < e.length; d++) {
            var a = e[d],
                b = f.base ? a[0] + f.base : a[0],
                i = a[1],
                j = a[2],
                k = a[3],
                h = {
                    css: i,
                    media: j,
                    sourceMap: k
                };
            c[b] ? c[b].parts.push(h) : g.push(c[b] = {
                id: b,
                parts: [h]
            })
        }
        return g
    }

    function g(a, c) {
        var b = q(a.insertInto);
        if (!b) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var d = t[t.length - 1];
        if ("top" === a.insertAt) d ? d.nextSibling ? b.insertBefore(c, d.nextSibling) : b.appendChild(c) : b.insertBefore(c, b.firstChild), t.push(c);
        else if ("bottom" === a.insertAt) b.appendChild(c);
        else {
            if ("object" != typeof a.insertAt || !a.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var e = q(a.insertInto + " " + a.insertAt.before);
            b.insertBefore(c, e)
        }
    }

    function h(a) {
        if (null === a.parentNode) return !1;
        a.parentNode.removeChild(a);
        var b = t.indexOf(a);
        b >= 0 && t.splice(b, 1)
    }

    function i(a) {
        var b = document.createElement("style");
        return a.attrs.type = "text/css", j(b, a.attrs), g(a, b), b
    }

    function j(b, a) {
        Object.keys(a).forEach(function(c) {
            b.setAttribute(c, a[c])
        })
    }

    function k(c, a) {
        if (a.transform && c.css) {
            if (!(p = a.transform(c.css))) return function() {};
            c.css = p
        }
        if (a.singleton) {
            var b, e, k, p, d, f, o = s++;
            b = r || (r = i(a)), e = l.bind(null, b, o, !1), k = l.bind(null, b, o, !0)
        } else c.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (b = (d = a, f = document.createElement("link"), d.attrs.type = "text/css", d.attrs.rel = "stylesheet", j(f, d.attrs), g(d, f), f), e = n.bind(null, b, a), k = function() {
            h(b), b.href && URL.revokeObjectURL(b.href)
        }) : (b = i(a), e = m.bind(null, b), k = function() {
            h(b)
        });
        return e(c),
            function(a) {
                a ? (a.css !== c.css || a.media !== c.media || a.sourceMap !== c.sourceMap) && e(c = a) : k()
            }
    }

    function l(a, b, f, g) {
        var d = f ? "" : g.css;
        if (a.styleSheet) a.styleSheet.cssText = v(b, d);
        else {
            var e = document.createTextNode(d),
                c = a.childNodes;
            c[b] && a.removeChild(c[b]), c.length ? a.insertBefore(e, c[b]) : a.appendChild(e)
        }
    }

    function m(a, b) {
        var c = b.css,
            d = b.media;
        if (d && a.setAttribute("media", d), a.styleSheet) a.styleSheet.cssText = c;
        else {
            for (; a.firstChild;) a.removeChild(a.firstChild);
            a.appendChild(document.createTextNode(c))
        }
    }

    function n(c, d, e) {
        var a = e.css,
            b = e.sourceMap,
            g = void 0 === d.convertToAbsoluteUrls && b;
        (d.convertToAbsoluteUrls || g) && (a = u(a)), b && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(b)))) + " */");
        var h = new Blob([a], {
                type: "text/css"
            }),
            f = c.href;
        c.href = URL.createObjectURL(h), f && URL.revokeObjectURL(f)
    }
    var c, o = {},
        p = function(a) {
            var b;
            return function() {
                return void 0 === b && (b = a.apply(this, arguments)), b
            }
        }(function() {
            return window && document && document.all && !window.atob
        }),
        q = function(a) {
            var b = {};
            return function(d) {
                if (void 0 === b[d]) {
                    var c = a.call(this, d);
                    if (c instanceof window.HTMLIFrameElement) try {
                        c = c.contentDocument.head
                    } catch (e) {
                        c = null
                    }
                    b[d] = c
                }
                return b[d]
            }
        }(function(a) {
            return document.querySelector(a)
        }),
        r = null,
        s = 0,
        t = [],
        u = b(6);
    a.exports = function(b, a) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (a = a || {}).attrs = "object" == typeof a.attrs ? a.attrs : {}, a.singleton || (a.singleton = p()), a.insertInto || (a.insertInto = "head"), a.insertAt || (a.insertAt = "bottom");
        var c = f(b, a);
        return e(c, a),
            function(i) {
                for (var g = [], b = 0; b < c.length; b++) {
                    var d = o[c[b].id];
                    d.refs--, g.push(d)
                }
                i && e(f(i, a), a);
                for (var b = 0; b < g.length; b++) {
                    var d = g[b];
                    if (0 === d.refs) {
                        for (var h = 0; h < d.parts.length; h++) d.parts[h]();
                        delete o[d.id]
                    }
                }
            }
    };
    var v = (c = [], function(a, b) {
        return c[a] = b, c.filter(Boolean).join("\n")
    })
}, function(a, b) {
    a.exports = function(a) {
        var b = "undefined" != typeof window && window.location;
        if (!b) throw new Error("fixUrls requires window.location");
        if (!a || "string" != typeof a) return a;
        var c = b.protocol + "//" + b.host,
            d = c + b.pathname.replace(/\/[^\/]*$/, "/");
        return a.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, f) {
            var b, a = f.trim().replace(/^"(.*)"$/, function(b, a) {
                return a
            }).replace(/^'(.*)'$/, function(b, a) {
                return a
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a) ? e : (b = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? c + a : d + a.replace(/^\.\//, ""), "url(" + JSON.stringify(b) + ")")
        })
    }
}])