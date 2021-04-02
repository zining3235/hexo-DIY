//:鼠标 * 字跟随样式://
(function() {
  function t() {
    i(), a()
  }

  function i() {
    document.addEventListener("mousemove", o), document.addEventListener("touchmove", e), document.addEventListener("touchstart", e), window.addEventListener("resize", n)
  }

  function n(t) {
    d = window.innerWidth, window.innerHeight
  }

  function e(t) {
    if (t.touches.length > 0)
      for (var i = 0; i < t.touches.length; i++) s(t.touches[i].clientX, t.touches[i].clientY, r[Math.floor(Math.random() * r.length)])
  }

  function o(t) {
    u.x = t.clientX, u.y = t.clientY, s(u.x, u.y, r[Math.floor(Math.random() * r.length)])
  }

  function s(t, i, n) {
    var e = new l;
    e.init(t, i, n), f.push(e)
  }

  function h() {
    for (var t = 0; t < f.length; t++) f[t].update();
    for (t = f.length - 1; t >= 0; t--) f[t].lifeSpan < 0 && (f[t].die(), f.splice(t, 1))
  }

  function a() {
    requestAnimationFrame(a), h()
  }

  function l() {
    this.character = "*", this.lifeSpan = 120, this.initialStyles = {
      position: "fixed",
      top: "0",
      display: "block",
      pointerEvents: "none",
      "z-index": "10000000",
      fontSize: "20px",
      "will-change": "transform"
    }, this.init = function(t, i, n) {
      this.velocity = {
        x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
        y: 1
      }, this.position = {
        x: t - 10,
        y: i - 20
      }, this.initialStyles.color = n, console.log(n), this.element = document.createElement("span"), this.element.innerHTML = this.character, c(this.element, this.initialStyles), this.update(), document.body.appendChild(this.element)
    }, this.update = function() {
      this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + this.lifeSpan / 120 + ")"
    }, this.die = function() {
      this.element.parentNode.removeChild(this.element)
    }
  }

  function c(t, i) {
    for (var n in i) t.style[n] = i[n]
  }
  var r = ["#D61C59", "#E7D84B", "#1B8798"],
    d = window.innerWidth,
    u = (window.innerHeight, {
      x: d / 2,
      y: d / 2
    }),
    f = [];
  t()
})();
//:手机侧边栏默认不展开://
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
    "menus_item_child"
);
var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " menus-closed";
}
//:以下CSS暂不使用://
"use strict";
! function(u) {
  function c(e, t) {
    return new c.prototype.init(e, t)
  }
  c.extend = (c.prototype = {
    constructor: c,
    init: function(e, t) {
      return this.changeBanner(e, t), console.log("\n %c 小康蝴蝶主题魔改工具库" + this.version + " %c https://docs.tzki.cn/xkTool/ \n", "color: #fff; background: #4285f4; padding:5px 0;", "background: #66CCFF; padding:5px 0;"), this
    },
    version: "3.1.1",
    selector: "",
    imgList: ["https://ae01.alicdn.com/kf/Uc32240fb1b134adc8b256577bd78b9a3j.jpg"],
    bannerList: ["https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg"]
  }).extend = function(e) {
    for (var t in e) this[t] = e[t]
  }, c.extend({
    randomNum: function(e, t) {
      return Math.floor(Math.random() * (t - e)) + e
    }
  }), c.extend({
    setColor: function(e, t) {
      var n = "--light_bg_color: rgb(255, 255, 255," + t + ");",
        a = "--dark_bg_color: rgba(18,18,18," + t + ");";
      e.setAttribute("style", n + a)
    },
    setBg: function(e) {
      $("#web_bg").css({
        backgroundImage: "url(" + e + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      })
    },
    setBanner: function(e, t) {
      t ? $(".full_page").css({
        backgroundImage: 'url("https://ae01.alicdn.com/kf/H18a4b998752a4ae68b8e85d432a5aef0l.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url(' + e + ")"
      }) : $(".full_page").css({
        backgroundImage: "url(" + e + ")"
      })
    }
  }), c.prototype.extend({
    consoleAnchor: function() {
      return $(".toc-link").click(function(e) {
        console.log(this.href)
      }), this
    },
    codeFull: function() {
      return $(".highlight-tools").append('<i class="fas fa-fingerprint fullScreen"></i>'), $(".highlight-tools").delegate(".fullScreen", "click", function() {
        $(this).parent().parent().toggleClass("code-block-fullscreen")
      }), this
    }
  }), c.prototype.extend({
    changeBanner: function(e, t) {
      var n = 1 < arguments.length && void 0 !== t && t;
      return null != e && -1 != e.search("http") ? c.setBanner(e, n) : "transparent" == e && $(".full_page").css({
        background: "transparent"
      }), this
    },
    randomBanner: function(e, t, n, a, i) {
      var o, r, s = 4 < arguments.length && void 0 !== i && i;
      return (arguments.length = 1 == e) && (s = !0), arguments.length < 4 ? (o = this.bannerList.length, r = c.randomNum(0, o), console.log(this.bannerList[r], r), c.setBanner(this.bannerList[r], s)) : (r = c.randomNum(n, a + 1), c.setBanner(e + r + t, s)), c
    },
    mobileSidebar: function() {
      for (var e = document.getElementById("mobile-sidebar-menus"), t = e.getElementsByClassName("menus_item_child"), n = e.getElementsByClassName("menus-expand"), a = 0; a < t.length; a++) t[a].style.display = "none", n[a].className += " menus-closed";
      return this
    },
    bgPage: function() {
      var e = document.getElementById("web_bg"),
        t = document.getElementById("content-inner"),
        n = Cookies.get("opacity") ? Cookies.get("opacity") : .5,
        a = Cookies.get("bg"),
        i = Cookies.get("animation"),
        o = Cookies.get("type");
      return a && (e.style.background = a, e.setAttribute("data-type", o), i && (e.style.animation = i)), c.setColor(t, n), this
    },
    randomBg: function(e, t, n, a) {
      var i, o;
      return arguments.length < 4 ? (i = this.imgList.length, o = c.randomNum(0, i), c.setBg(this.imgList[o])) : (o = c.randomNum(n, a + 1), c.setBg(e + o + t)), c
    }
  }), c.prototype.extend({
    appendSocial: function(e) {
      for (var t in e) $(".card-info-social-icons").append('<a class="social-icon" href="' + e[t] + '" target="_blank"><svg class="icon" aria-hidden="true" style="width: 1em;height: 1em;vertical-align: -0.15em;fill: currentColor;overflow: hidden;"><use xlink:href="#' + t + '"></use></svg></a>')
    },
    cheatTitle: function(e, t, n, a) {
      var i, o = document.title;
      return document.addEventListener("visibilitychange", function() {
        document.hidden ? ($('[rel="icon"]').attr("href", n || "https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.2.7.1/butterfly/img/favicon.ico"), document.title = e || "！！这里这里 ◕ ں ◕ ", clearTimeout(i)) : ($('[rel="icon"]').attr("href", a || "https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.2.7.1/butterfly/img/favicon.ico"), document.title = t || "(ฅ>ω<*ฅ) 欢迎回来哦！爱你哟~" + o, i = setTimeout(function() {
          document.title = o
        }, 2e3))
      }), this
    },
    magicCirle: function(e, t, n, a) {
      return $(".scroll-down").after('<canvas id="canvas" width="1700px" height="470"></canvas>'), $(""), $.fn.circleMagic = function(e) {
        var o, r, n, a, s, t = !0,
          i = [],
          c = $.extend({
            elem: ".header",
            color: "rgba(255,225,225,.4)",
            radius: 20,
            densety: .3,
            clearOffset: .2
          }, e);

        function l() {
          t = !(document.body.scrollTop > r)
        }

        function d() {
          o = u.innerWidth, r = u.innerHeight, n.style.height = r + "px", a.width = o, a.height = r
        }

        function h() {
          if (t)
            for (var e in s.clearRect(0, 0, o, r), i) i[e].draw();
          requestAnimationFrame(h)
        }

        function g() {
          var i = this;

          function e() {
            var e, t, n, a;
            i.pos.x = Math.random() * o, i.pos.y = r + 100 * Math.random(), i.alpha = .1 + Math.random() * c.clearOffset, i.scale = .1 + .3 * Math.random(), i.speed = Math.random(), "random" === c.color ? i.color = (e = Math.floor(255 * Math.random()), t = Math.floor(255 * Math.random()), n = Math.floor(255 * Math.random()), a = Math.random().toPrecision(2), "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", ").concat(a, ")")) : i.color = c.color
          }
          i.pos = {}, e(), this.draw = function() {
            i.alpha <= 0 && e(), i.pos.y -= i.speed, i.alpha -= 5e-4, s.beginPath(), s.arc(i.pos.x, i.pos.y, i.scale * c.radius, 0, 2 * Math.PI, !1), s.fillStyle = i.color, s.fill(), s.closePath()
          }
        }! function() {
          o = $(u).width(), r = $(u).height(), (n = document.querySelector(c.elem)).style.height = r + "px",
            function() {
              var e = document.createElement("canvas");
              e.id = "canvas", n.append(e)
            }(), (a = document.getElementById("canvas")).width = o, a.height = r, s = a.getContext("2d");
          for (var e = 0; e < o * c.densety; e++) {
            var t = new g;
            i.push(t)
          }
          h()
        }(), u.addEventListener("scroll", l), u.addEventListener("resize", d)
      }, $(".full_page").css({
        overflow: "hidden"
      }).circleMagic({
        elem: ".full_page",
        radius: e || 18,
        densety: t || .1,
        color: n || "random",
        clearOffset: a || .3
      }), this
    },
    footFish: function() {
      return $("#footer-wrap").css({
        position: "absolute",
        "text-align": "center",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        "z-index": 99
      }), $("footer").append('<div class="container" id="jsi-flying-fish-container"></div>'), $("body").append('<script src="https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@master/lib/js/fish.js"><\/script>'), this
    },
    aplayer: function(n) {
      $("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/css/APlayer.min.css" class="aplayer-style-marker">'), $.getScript("https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/js/APlayer.min.js", function() {
        for (var e in $("body").prepend('<div id="xiaokang-aplayer"></div>'), aplayerObj = {
            container: document.getElementById("xiaokang-aplayer")
          }, n) "container" != e && (aplayerObj[e] = n[e]);
        var t = new APlayer(aplayerObj);
        return console.log(aplayerObj), t
      })
    },
    meting: function(e, t, n) {
      $("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/css/APlayer.min.css" class="aplayer-style-marker">');
      var a = $.getScript("https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/js/APlayer.min.js"),
        i = $.getScript("https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js");
      Promise.all([a, i]).then(function() {
        $("body").append("<meting-js id=".concat(e, " server=").concat(t, " type=").concat(n, ' fixed="true" mini="true"></meting-js>'))
      })
    }
  }), c.prototype.init.prototype = c.prototype, u.xkTool = c
}(window);
