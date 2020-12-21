"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function (e) {
  var n = !1;

  if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && (module.exports = e(), n = !0), !n) {
    var o = window.Cookies,
        t = window.Cookies = e();

    t.noConflict = function () {
      return window.Cookies = o, t;
    };
  }
}(function () {
  function e() {
    for (var e = 0, n = {}; e < arguments.length; e++) {
      var o = arguments[e];

      for (var t in o) {
        n[t] = o[t];
      }
    }

    return n;
  }

  return function n(o) {
    function t(n, r, i) {
      var c;

      if ("undefined" != typeof document) {
        if (arguments.length > 1) {
          if ("number" == typeof (i = e({
            path: "/"
          }, t.defaults, i)).expires) {
            var a = new Date();
            a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a;
          }

          i.expires = i.expires ? i.expires.toUTCString() : "";

          try {
            c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c);
          } catch (e) {}

          r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
          var s = "";

          for (var f in i) {
            i[f] && (s += "; " + f, !0 !== i[f] && (s += "=" + i[f]));
          }

          return document.cookie = n + "=" + r + s;
        }

        n || (c = {});

        for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
          var l = p[u].split("="),
              C = l.slice(1).join("=");
          this.json || '"' !== C.charAt(0) || (C = C.slice(1, -1));

          try {
            var g = l[0].replace(d, decodeURIComponent);
            if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
              C = JSON.parse(C);
            } catch (e) {}

            if (n === g) {
              c = C;
              break;
            }

            n || (c[g] = C);
          } catch (e) {}
        }

        return c;
      }
    }

    return t.set = t, t.get = function (e) {
      return t.call(t, e);
    }, t.getJSON = function () {
      return t.apply({
        json: !0
      }, [].slice.call(arguments));
    }, t.defaults = {}, t.remove = function (n, o) {
      t(n, "", e(o, {
        expires: -1
      }));
    }, t.withConverter = n, t;
  }(function () {});
});
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

!function (n, t) {
  "use strict";

  var r = {};
  n.PubSub = r;
  var e = n.define;
  !function (n) {
    var t = {},
        r = -1;

    function e(n) {
      var t;

      for (t in n) {
        if (n.hasOwnProperty(t)) return !0;
      }

      return !1;
    }

    function o(n, t, r) {
      try {
        n(t, r);
      } catch (n) {
        setTimeout(function (n) {
          return function () {
            throw n;
          };
        }(n), 0);
      }
    }

    function i(n, t, r) {
      n(t, r);
    }

    function u(n, r, e, u) {
      var f,
          s = t[r],
          c = u ? i : o;
      if (t.hasOwnProperty(r)) for (f in s) {
        s.hasOwnProperty(f) && c(s[f], n, e);
      }
    }

    function f(n, r, o, i) {
      var f = function (n, t, r) {
        return function () {
          var e = String(n),
              o = e.lastIndexOf(".");

          for (u(n, n, t, r); -1 !== o;) {
            e = e.substr(0, o), o = e.lastIndexOf("."), u(n, e, t, r);
          }
        };
      }(n = "symbol" == _typeof(n) ? n.toString() : n, r, i),
          s = function (n) {
        var r = String(n),
            o = Boolean(t.hasOwnProperty(r) && e(t[r])),
            i = r.lastIndexOf(".");

        for (; !o && -1 !== i;) {
          r = r.substr(0, i), i = r.lastIndexOf("."), o = Boolean(t.hasOwnProperty(r) && e(t[r]));
        }

        return o;
      }(n);

      return !!s && (!0 === o ? f() : setTimeout(f, 0), !0);
    }

    n.publish = function (t, r) {
      return f(t, r, !1, n.immediateExceptions);
    }, n.publishSync = function (t, r) {
      return f(t, r, !0, n.immediateExceptions);
    }, n.subscribe = function (n, e) {
      if ("function" != typeof e) return !1;
      n = "symbol" == _typeof(n) ? n.toString() : n, t.hasOwnProperty(n) || (t[n] = {});
      var o = "uid_" + String(++r);
      return t[n][o] = e, o;
    }, n.subscribeOnce = function (t, r) {
      var e = n.subscribe(t, function () {
        n.unsubscribe(e), r.apply(this, arguments);
      });
      return n;
    }, n.clearAllSubscriptions = function () {
      t = {};
    }, n.clearSubscriptions = function (n) {
      var r;

      for (r in t) {
        t.hasOwnProperty(r) && 0 === r.indexOf(n) && delete t[r];
      }
    }, n.unsubscribe = function (r) {
      var e,
          o,
          i,
          u = "string" == typeof r && (t.hasOwnProperty(r) || function (n) {
        var r;

        for (r in t) {
          if (t.hasOwnProperty(r) && 0 === r.indexOf(n)) return !0;
        }

        return !1;
      }(r)),
          f = !u && "string" == typeof r,
          s = "function" == typeof r,
          c = !1;

      if (!u) {
        for (e in t) {
          if (t.hasOwnProperty(e)) {
            if (o = t[e], f && o[r]) {
              delete o[r], c = r;
              break;
            }

            if (s) for (i in o) {
              o.hasOwnProperty(i) && o[i] === r && (delete o[i], c = !0);
            }
          }
        }

        return c;
      }

      n.clearSubscriptions(r);
    };
  }(r), "function" == typeof e && e.amd ? e(function () {
    return r;
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && (void 0 !== module && module.exports && (exports = module.exports = r), exports.PubSub = r, module.exports = exports = r);
}("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || void 0);

(function () {
  var resizeTimeout = null,
      windowWidthOLd = window.innerWidth;
  window.addEventListener("resize", function () {
    window.requestAnimationFrame(function () {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;

          if (windowWidthOLd !== window.innerWidth) {
            windowWidthOLd = window.innerWidth;
            PubSub.publish('windowWidthResize');
          }
        }, 100);
      }
    });
  }); // btn header

  document.addEventListener('click', function (event) {
    if (event.target.closest('.btn-menu-toggle')) {
      document.body.classList.toggle('menu-show');
    }

    if (event.target.closest('.menu__link')) {
      var href = event.target.closest('.menu__link').getAttribute('href');
      href = href.split('#');

      if (document.querySelector('#' + href[1])) {
        document.body.classList.remove('menu-show');
      }
    }
  });
})();

(function (cookie) {
  if (cookie && Cookies.get('YourPrivacy') !== 'Accept') {
    cookie.classList.remove('hide');
    cookie.addEventListener('submit', function (event) {
      event.preventDefault();
      Cookies.set('YourPrivacy', 'Accept');
      cookie.classList.add('hide');
    });
  }
})(document.querySelector('.cookie'));

(function (form) {
  if (!form) {
    return;
  }

  form.addEventListener('change', function (event) {
    if (event.target.classList.contains('demo-form__drop-input')) {
      if (event.target.value.length) {
        document.body.classList.add('uploading');
        form.classList.add('is-uploading');
      }
    }
  }); // accordion table

  form.addEventListener('click', function (event) {
    if (event.target.closest('.demo-table__open')) {
      event.target.closest('tr').classList.toggle('is-open');
    }
  });
})(document.querySelector('.demo-form'));

(function (modal) {
  if (!modal) {
    return;
  }

  var items = modal.querySelectorAll('.modal__item'),
      btns = document.querySelectorAll('[data-modal]'),
      wrapper = document.querySelector('.wrapper');
  var activeModal = false,
      windowScroll = window.pageYOffset;

  var hideModal = function hideModal() {
    document.body.classList.remove('modal-show');
    wrapper.style.top = 0;
    window.scrollTo(0, windowScroll);
    setTimeout(function () {
      return document.documentElement.classList.remove('scroll-behavior-off');
    });
    activeModal = false;
  };

  var modalShow = function modalShow(selector) {
    if (!activeModal) {
      windowScroll = window.pageYOffset;
    }

    activeModal = modal.querySelector('.modal__item--' + selector);
    Array.from(items, function (el) {
      return el.classList.toggle('visuallyhidden', el !== activeModal);
    });
    document.documentElement.classList.add('scroll-behavior-off');
    setTimeout(function () {
      wrapper.style.top = -windowScroll + 'px';
      document.body.classList.add('modal-show');
      window.scrollTo(0, 0);
      activeModal.focus();
    });
  };

  modal.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal') || event.target.closest('.modal__close')) {
      hideModal();
    }
  });
  modal.addEventListener('modalShow', function (event) {
    return modalShow(event.detail.selector);
  });
  Array.from(btns, function (el) {
    return el.addEventListener('click', function () {
      return modalShow(el.getAttribute('data-modal'));
    });
  });
})(document.querySelector('.modal'));

(function (elems) {
  if (elems.length) {
    window.addEventListener("scroll", function () {
      window.requestAnimationFrame(function () {
        Array.from(elems, function (el) {
          var deg = 0;
          var rect = el.getBoundingClientRect();

          if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
            deg = 360 * (1 - rect.bottom / (rect.bottom - rect.top + window.innerHeight));
          } //	console.log(deg)


          el.querySelector('img').style.transform = "rotate(" + deg + "deg)";
        });
      });
    });
  }
})(document.querySelectorAll('.rotate'));

(function (forms) {
  if (!forms.length) {
    return;
  }

  var eventModalShow = new CustomEvent("modalShow", {
    detail: {
      selector: "done"
    }
  });

  window.readySubscribe = function (data) {
    console.log(data);
    var form = document.querySelector('.form-subscribe.is-send');
    form.reset();
    form.classList.remove('is-send');
    form.querySelector('.form-subscribe__submit').disabled = false;

    if (data.result === "success") {}

    if (data.result === "error") {}

    document.querySelector('#modal-done__messange').innerHTML = data.msg;
    document.querySelector('.modal').dispatchEvent(eventModalShow);
  };

  var getQueryString = function getQueryString(formData) {
    var pairs = [];

    var _iterator = _createForOfIteratorHelper(formData.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return pairs.join('&');
  };

  Array.from(forms, function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var url = form.getAttribute('action');
      url = url.replace("/post?u=", "/post-json?u=");
      url = url + '&c=window.readySubscribe';
      url = url + '&' + getQueryString(new FormData(form));
      form.classList.add('is-send');
      form.querySelector('.form-subscribe__submit').disabled = true;
      var script = document.createElement('script');
      script.async = true;
      script.src = url;
      document.head.appendChild(script);
    });
  });
})(document.querySelectorAll('.form-subscribe'));

(function (swiperContainer) {
  if (!swiperContainer.length) {
    return;
  }

  var swiperInit = window.Swiper;
  Array.from(swiperContainer, function (swipe) {
    var mySwipe = null,
        toggleSwipe = null,
        resetSwipe = null;
    var swipeNav = document.createElement('div'),
        items = swipe.querySelectorAll('.swiper-slide'),
        count = items.length,
        cases = swipe.classList.contains('swiper-container--cases');
    swipeNav.className = 'swiper-pagination';
    swipe.parentNode.appendChild(swipeNav);

    resetSwipe = function resetSwipe() {
      if (mySwipe) {
        mySwipe.destroy(false, true);
        mySwipe = undefined;
      }

      swipeNav.classList.add('hide');
    };

    resetSwipe();

    if (cases) {
      var current = document.querySelector('.cases__process-current');

      toggleSwipe = function toggleSwipe() {
        resetSwipe();
        swipeNav.classList.remove('hide');
        current.parentNode.classList.add('hide');
        swipe.parentNode.classList.remove('swiper-container-style');

        if (window.innerWidth < 768) {
          swipe.parentNode.classList.add('swiper-container-style');
          current.parentNode.classList.remove('hide');
          mySwipe = new Swiper(swipe, {
            loop: true,
            autoHeight: true,
            pagination: {
              el: swipeNav,
              bulletClass: 'button',
              bulletActiveClass: 'is-active'
            },
            on: {
              slideChangeTransitionEnd: function slideChangeTransitionEnd() {
                current.textContent = swipe.swiper.realIndex % count + 1;
              }
            }
          });
        }
      };
    }

    PubSub.subscribe('windowWidthResize', function () {
      if (window.Swiper && toggleSwipe) {
        toggleSwipe();
      }
    });

    if (window.Swiper && toggleSwipe) {
      toggleSwipe();
    } else {
      PubSub.subscribe('swiperJsLoad', toggleSwipe);
    }

    if (!swiperInit) {
      swiperInit = true;
      var script = document.createElement('script');
      script.async = true;
      script.src = '/js/swiper.min.js';

      script.onload = function () {
        return PubSub.publish('swiperJsLoad');
      };

      setTimeout(function () {
        return document.head.appendChild(script);
      }, 1);
    }
  });
})(document.querySelectorAll('.swiper-container'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmNvb2tpZS5taW4uanMiLCJwdWJzdWIubWluLmpzIiwianMuanMiLCJjb29raWUuanMiLCJkZW1vLWZvcm0uanMiLCJtb2RhbC5qcyIsInJvcmF0ZS5qcyIsInN1YnNjcmliZS5qcyIsInN3aXBlci5qcyJdLCJuYW1lcyI6WyJlIiwibiIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJvIiwid2luZG93IiwiQ29va2llcyIsInQiLCJub0NvbmZsaWN0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsImkiLCJjIiwiZG9jdW1lbnQiLCJwYXRoIiwiZGVmYXVsdHMiLCJleHBpcmVzIiwiYSIsIkRhdGUiLCJzZXRNaWxsaXNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJ0b1VUQ1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXN0Iiwid3JpdGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTdHJpbmciLCJyZXBsYWNlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwicyIsImYiLCJjb29raWUiLCJwIiwic3BsaXQiLCJkIiwidSIsImwiLCJDIiwic2xpY2UiLCJqb2luIiwianNvbiIsImNoYXJBdCIsImciLCJyZWFkIiwicGFyc2UiLCJzZXQiLCJnZXQiLCJjYWxsIiwiZ2V0SlNPTiIsImFwcGx5IiwicmVtb3ZlIiwid2l0aENvbnZlcnRlciIsIlB1YlN1YiIsImhhc093blByb3BlcnR5Iiwic2V0VGltZW91dCIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwidG9TdHJpbmciLCJCb29sZWFuIiwicHVibGlzaCIsImltbWVkaWF0ZUV4Y2VwdGlvbnMiLCJwdWJsaXNoU3luYyIsInN1YnNjcmliZSIsInN1YnNjcmliZU9uY2UiLCJ1bnN1YnNjcmliZSIsImNsZWFyQWxsU3Vic2NyaXB0aW9ucyIsImNsZWFyU3Vic2NyaXB0aW9ucyIsImluZGV4T2YiLCJyZXNpemVUaW1lb3V0Iiwid2luZG93V2lkdGhPTGQiLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImJvZHkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwiZm9ybSIsImNvbnRhaW5zIiwidmFsdWUiLCJtb2RhbCIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImJ0bnMiLCJ3cmFwcGVyIiwiYWN0aXZlTW9kYWwiLCJ3aW5kb3dTY3JvbGwiLCJwYWdlWU9mZnNldCIsImhpZGVNb2RhbCIsInN0eWxlIiwidG9wIiwic2Nyb2xsVG8iLCJkb2N1bWVudEVsZW1lbnQiLCJtb2RhbFNob3ciLCJzZWxlY3RvciIsIkFycmF5IiwiZnJvbSIsImVsIiwiZm9jdXMiLCJkZXRhaWwiLCJlbGVtcyIsImRlZyIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJpbm5lckhlaWdodCIsInRyYW5zZm9ybSIsImZvcm1zIiwiZXZlbnRNb2RhbFNob3ciLCJDdXN0b21FdmVudCIsInJlYWR5U3Vic2NyaWJlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXNldCIsImRpc2FibGVkIiwicmVzdWx0IiwiaW5uZXJIVE1MIiwibXNnIiwiZGlzcGF0Y2hFdmVudCIsImdldFF1ZXJ5U3RyaW5nIiwiZm9ybURhdGEiLCJwYWlycyIsImVudHJpZXMiLCJrZXkiLCJwdXNoIiwidXJsIiwiRm9ybURhdGEiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJzcmMiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJzd2lwZXJDb250YWluZXIiLCJzd2lwZXJJbml0IiwiU3dpcGVyIiwic3dpcGUiLCJteVN3aXBlIiwidG9nZ2xlU3dpcGUiLCJyZXNldFN3aXBlIiwic3dpcGVOYXYiLCJjb3VudCIsImNhc2VzIiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImRlc3Ryb3kiLCJ1bmRlZmluZWQiLCJjdXJyZW50IiwibG9vcCIsImF1dG9IZWlnaHQiLCJwYWdpbmF0aW9uIiwiYnVsbGV0Q2xhc3MiLCJidWxsZXRBY3RpdmVDbGFzcyIsIm9uIiwic2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kIiwidGV4dENvbnRlbnQiLCJzd2lwZXIiLCJyZWFsSW5kZXgiLCJvbmxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBT0EsQ0FBQSxVQUFBQSxDQUFBLEVBQUE7QUFBQSxNQUFBQyxDQUFBLEdBQUEsQ0FBQSxDQUFBOztBQUFBLE1BQUEsY0FBQSxPQUFBQyxNQUFBLElBQUFBLE1BQUEsQ0FBQUMsR0FBQSxLQUFBRCxNQUFBLENBQUFGLENBQUEsQ0FBQSxFQUFBQyxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsb0JBQUFHLE9BQUEseUNBQUFBLE9BQUEsT0FBQUMsTUFBQSxDQUFBRCxPQUFBLEdBQUFKLENBQUEsRUFBQSxFQUFBQyxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBQSxDQUFBLEVBQUE7QUFBQSxRQUFBSyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsT0FBQTtBQUFBLFFBQUFDLENBQUEsR0FBQUYsTUFBQSxDQUFBQyxPQUFBLEdBQUFSLENBQUEsRUFBQTs7QUFBQVMsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUEsWUFBQTtBQUFBLGFBQUFILE1BQUEsQ0FBQUMsT0FBQSxHQUFBRixDQUFBLEVBQUFHLENBQUE7QUFBQSxLQUFBO0FBQUE7QUFBQSxDQUFBLENBQUEsWUFBQTtBQUFBLFdBQUFULENBQUEsR0FBQTtBQUFBLFNBQUEsSUFBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQUMsQ0FBQSxHQUFBLEVBQUEsRUFBQUQsQ0FBQSxHQUFBVyxTQUFBLENBQUFDLE1BQUEsRUFBQVosQ0FBQSxFQUFBLEVBQUE7QUFBQSxVQUFBTSxDQUFBLEdBQUFLLFNBQUEsQ0FBQVgsQ0FBQSxDQUFBOztBQUFBLFdBQUEsSUFBQVMsQ0FBQSxJQUFBSCxD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LENBQUFnSSxJQUFBLENBQUFDLFdBQUEsQ0FBQUwsTUFBQSxDQUFBO0FBQUEsT0FBQSxFQUFBLENBQUEsQ0FBQTtBQUVBO0FBRUEsR0F2R0E7QUF5R0EsQ0FuSEEsRUFtSEE1SCxRQUFBLENBQUE4RSxnQkFBQSxDQUFBLG1CQUFBLENBbkhBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEphdmFTY3JpcHQgQ29va2llIHYyLjIuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqXG4gKiBDb3B5cmlnaHQgMjAwNiwgMjAxNSBLbGF1cyBIYXJ0bCAmIEZhZ25lciBCcmFja1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbiFmdW5jdGlvbihlKXt2YXIgbj0hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJihkZWZpbmUoZSksbj0hMCksXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJihtb2R1bGUuZXhwb3J0cz1lKCksbj0hMCksIW4pe3ZhciBvPXdpbmRvdy5Db29raWVzLHQ9d2luZG93LkNvb2tpZXM9ZSgpO3Qubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cuQ29va2llcz1vLHR9fX0oZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7Zm9yKHZhciBlPTAsbj17fTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbz1hcmd1bWVudHNbZV07Zm9yKHZhciB0IGluIG8pblt0XT1vW3RdfXJldHVybiBufXJldHVybiBmdW5jdGlvbiBuKG8pe2Z1bmN0aW9uIHQobixyLGkpe3ZhciBjO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7aWYoYXJndW1lbnRzLmxlbmd0aD4xKXtpZihcIm51bWJlclwiPT10eXBlb2YoaT1lKHtwYXRoOlwiL1wifSx0LmRlZmF1bHRzLGkpKS5leHBpcmVzKXt2YXIgYT1uZXcgRGF0ZTthLnNldE1pbGxpc2Vjb25kcyhhLmdldE1pbGxpc2Vjb25kcygpKzg2NGU1KmkuZXhwaXJlcyksaS5leHBpcmVzPWF9aS5leHBpcmVzPWkuZXhwaXJlcz9pLmV4cGlyZXMudG9VVENTdHJpbmcoKTpcIlwiO3RyeXtjPUpTT04uc3RyaW5naWZ5KHIpLC9eW1xce1xcW10vLnRlc3QoYykmJihyPWMpfWNhdGNoKGUpe31yPW8ud3JpdGU/by53cml0ZShyLG4pOmVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocikpLnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csZGVjb2RlVVJJQ29tcG9uZW50KSxuPShuPShuPWVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcobikpKS5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLGRlY29kZVVSSUNvbXBvbmVudCkpLnJlcGxhY2UoL1tcXChcXCldL2csZXNjYXBlKTt2YXIgcz1cIlwiO2Zvcih2YXIgZiBpbiBpKWlbZl0mJihzKz1cIjsgXCIrZiwhMCE9PWlbZl0mJihzKz1cIj1cIitpW2ZdKSk7cmV0dXJuIGRvY3VtZW50LmNvb2tpZT1uK1wiPVwiK3Irc31ufHwoYz17fSk7Zm9yKHZhciBwPWRvY3VtZW50LmNvb2tpZT9kb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTpbXSxkPS8oJVswLTlBLVpdezJ9KSsvZyx1PTA7dTxwLmxlbmd0aDt1Kyspe3ZhciBsPXBbdV0uc3BsaXQoXCI9XCIpLEM9bC5zbGljZSgxKS5qb2luKFwiPVwiKTt0aGlzLmpzb258fCdcIichPT1DLmNoYXJBdCgwKXx8KEM9Qy5zbGljZSgxLC0xKSk7dHJ5e3ZhciBnPWxbMF0ucmVwbGFjZShkLGRlY29kZVVSSUNvbXBvbmVudCk7aWYoQz1vLnJlYWQ/by5yZWFkKEMsZyk6byhDLGcpfHxDLnJlcGxhY2UoZCxkZWNvZGVVUklDb21wb25lbnQpLHRoaXMuanNvbil0cnl7Qz1KU09OLnBhcnNlKEMpfWNhdGNoKGUpe31pZihuPT09Zyl7Yz1DO2JyZWFrfW58fChjW2ddPUMpfWNhdGNoKGUpe319cmV0dXJuIGN9fXJldHVybiB0LnNldD10LHQuZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiB0LmNhbGwodCxlKX0sdC5nZXRKU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkoe2pzb246ITB9LFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9LHQuZGVmYXVsdHM9e30sdC5yZW1vdmU9ZnVuY3Rpb24obixvKXt0KG4sXCJcIixlKG8se2V4cGlyZXM6LTF9KSl9LHQud2l0aENvbnZlcnRlcj1uLHR9KGZ1bmN0aW9uKCl7fSl9KTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG4hZnVuY3Rpb24obix0KXtcInVzZSBzdHJpY3RcIjt2YXIgcj17fTtuLlB1YlN1Yj1yO3ZhciBlPW4uZGVmaW5lOyFmdW5jdGlvbihuKXt2YXIgdD17fSxyPS0xO2Z1bmN0aW9uIGUobil7dmFyIHQ7Zm9yKHQgaW4gbilpZihuLmhhc093blByb3BlcnR5KHQpKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIG8obix0LHIpe3RyeXtuKHQscil9Y2F0Y2gobil7c2V0VGltZW91dChmdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXt0aHJvdyBufX0obiksMCl9fWZ1bmN0aW9uIGkobix0LHIpe24odCxyKX1mdW5jdGlvbiB1KG4scixlLHUpe3ZhciBmLHM9dFtyXSxjPXU/aTpvO2lmKHQuaGFzT3duUHJvcGVydHkocikpZm9yKGYgaW4gcylzLmhhc093blByb3BlcnR5KGYpJiZjKHNbZl0sbixlKX1mdW5jdGlvbiBmKG4scixvLGkpe3ZhciBmPWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT1TdHJpbmcobiksbz1lLmxhc3RJbmRleE9mKFwiLlwiKTtmb3IodShuLG4sdCxyKTstMSE9PW87KWU9ZS5zdWJzdHIoMCxvKSxvPWUubGFzdEluZGV4T2YoXCIuXCIpLHUobixlLHQscil9fShuPVwic3ltYm9sXCI9PXR5cGVvZiBuP24udG9TdHJpbmcoKTpuLHIsaSkscz1mdW5jdGlvbihuKXt2YXIgcj1TdHJpbmcobiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKDshbyYmLTEhPT1pOylyPXIuc3Vic3RyKDAsaSksaT1yLmxhc3RJbmRleE9mKFwiLlwiKSxvPUJvb2xlYW4odC5oYXNPd25Qcm9wZXJ0eShyKSYmZSh0W3JdKSk7cmV0dXJuIG99KG4pO3JldHVybiEhcyYmKCEwPT09bz9mKCk6c2V0VGltZW91dChmLDApLCEwKX1uLnB1Ymxpc2g9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITEsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5wdWJsaXNoU3luYz1mdW5jdGlvbih0LHIpe3JldHVybiBmKHQsciwhMCxuLmltbWVkaWF0ZUV4Y2VwdGlvbnMpfSxuLnN1YnNjcmliZT1mdW5jdGlvbihuLGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpcmV0dXJuITE7bj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bix0Lmhhc093blByb3BlcnR5KG4pfHwodFtuXT17fSk7dmFyIG89XCJ1aWRfXCIrU3RyaW5nKCsrcik7cmV0dXJuIHRbbl1bb109ZSxvfSxuLnN1YnNjcmliZU9uY2U9ZnVuY3Rpb24odCxyKXt2YXIgZT1uLnN1YnNjcmliZSh0LGZ1bmN0aW9uKCl7bi51bnN1YnNjcmliZShlKSxyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pO3JldHVybiBufSxuLmNsZWFyQWxsU3Vic2NyaXB0aW9ucz1mdW5jdGlvbigpe3Q9e319LG4uY2xlYXJTdWJzY3JpcHRpb25zPWZ1bmN0aW9uKG4pe3ZhciByO2ZvcihyIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShyKSYmMD09PXIuaW5kZXhPZihuKSYmZGVsZXRlIHRbcl19LG4udW5zdWJzY3JpYmU9ZnVuY3Rpb24ocil7dmFyIGUsbyxpLHU9XCJzdHJpbmdcIj09dHlwZW9mIHImJih0Lmhhc093blByb3BlcnR5KHIpfHxmdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikpcmV0dXJuITA7cmV0dXJuITF9KHIpKSxmPSF1JiZcInN0cmluZ1wiPT10eXBlb2YgcixzPVwiZnVuY3Rpb25cIj09dHlwZW9mIHIsYz0hMTtpZighdSl7Zm9yKGUgaW4gdClpZih0Lmhhc093blByb3BlcnR5KGUpKXtpZihvPXRbZV0sZiYmb1tyXSl7ZGVsZXRlIG9bcl0sYz1yO2JyZWFrfWlmKHMpZm9yKGkgaW4gbylvLmhhc093blByb3BlcnR5KGkpJiZvW2ldPT09ciYmKGRlbGV0ZSBvW2ldLGM9ITApfXJldHVybiBjfW4uY2xlYXJTdWJzY3JpcHRpb25zKHIpfX0ociksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZS5hbWQ/ZShmdW5jdGlvbigpe3JldHVybiByfSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJih2b2lkIDAhPT1tb2R1bGUmJm1vZHVsZS5leHBvcnRzJiYoZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1yKSxleHBvcnRzLlB1YlN1Yj1yLG1vZHVsZS5leHBvcnRzPWV4cG9ydHM9cil9KFwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvd3x8dGhpcyk7IiwiXG4oICgpID0+IHtcblxuXHRsZXQgcmVzaXplVGltZW91dCA9IG51bGwsXG5cdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG5cblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG5cblx0XHRcdGlmICghcmVzaXplVGltZW91dCkge1xuXG5cdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XG5cblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcblxuXHRcdFx0XHRcdGlmKHdpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuXG5cdFx0XHRcdFx0XHR3aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG5cdFx0XHRcdFx0XHRQdWJTdWIucHVibGlzaCgnd2luZG93V2lkdGhSZXNpemUnKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9LCAxMDApO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9KTtcblxuXHQvLyBidG4gaGVhZGVyXG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cblx0XHRpZihldmVudC50YXJnZXQuY2xvc2VzdCgnLmJ0bi1tZW51LXRvZ2dsZScpKSB7XG5cblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1zaG93Jyk7XG5cblx0XHR9XG5cblx0XHRpZihldmVudC50YXJnZXQuY2xvc2VzdCgnLm1lbnVfX2xpbmsnKSkge1xuXG5cdFx0XHRsZXQgaHJlZiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubWVudV9fbGluaycpLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXG5cdFx0XHRocmVmID0gaHJlZi5zcGxpdCgnIycpO1xuXG5cdFx0XHRpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJytocmVmWzFdKSkge1xuXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zaG93Jyk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9KTtcblxufSkoKTsiLCIoIGNvb2tpZSA9PiB7XG5cblx0aWYoY29va2llICYmIENvb2tpZXMuZ2V0KCdZb3VyUHJpdmFjeScpICE9PSAnQWNjZXB0Jykge1xuXG5cdFx0Y29va2llLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblxuXHRcdGNvb2tpZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdENvb2tpZXMuc2V0KCdZb3VyUHJpdmFjeScsICdBY2NlcHQnKTtcblxuXHRcdFx0Y29va2llLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZScpKTsiLCIoIGZvcm0gPT4ge1xuXG5cdGlmKCFmb3JtKSB7XG5cblx0XHRyZXR1cm47XG5cblx0fVxuXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVtby1mb3JtX19kcm9wLWlucHV0JykpIHtcblxuXHRcdFx0aWYoZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCkge1xuXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndXBsb2FkaW5nJyk7XG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtdXBsb2FkaW5nJyk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9KTtcblxuXHQvLyBhY2NvcmRpb24gdGFibGVcblxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kZW1vLXRhYmxlX19vcGVuJykpIHtcblxuXHRcdFx0ZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ3RyJykuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xuXG5cdFx0fVxuXG5cdH0pO1xuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVtby1mb3JtJykpOyIsIiggbW9kYWwgPT4ge1xuXG5cdGlmKCFtb2RhbCkge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRjb25zdCBpdGVtcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9faXRlbScpLFxuXHRcdCAgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsXScpLFxuXHRcdCAgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5cblx0bGV0IGFjdGl2ZU1vZGFsID0gZmFsc2UsXG5cdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG5cdGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHtcblxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtc2hvdycpO1xuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gMDtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xuXG5cdFx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKSk7XG5cblx0XHRhY3RpdmVNb2RhbCA9IGZhbHNlO1xuXG5cdH07XG5cblx0Y29uc3QgbW9kYWxTaG93ID0gc2VsZWN0b3IgPT4ge1xuXG5cdFx0aWYoIWFjdGl2ZU1vZGFsKXtcblxuXHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG5cdFx0fVxuXG5cdFx0YWN0aXZlTW9kYWwgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLScgKyBzZWxlY3Rvcik7XG5cblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIGVsICE9PSBhY3RpdmVNb2RhbCkpO1xuXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKTtcblxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblxuXHRcdFx0d3JhcHBlci5zdHlsZS50b3AgPSAtd2luZG93U2Nyb2xsICsgJ3B4Jztcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2hvdycpO1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XG5cblx0XHRcdGFjdGl2ZU1vZGFsLmZvY3VzKCk7XG5cblx0XHR9KTtcblxuXHR9O1xuXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpKXtcblxuXHRcdFx0aGlkZU1vZGFsKCk7XG5cblx0XHR9XG5cblx0fSk7XG5cblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxTaG93JywgZXZlbnQgPT4gbW9kYWxTaG93KGV2ZW50LmRldGFpbC5zZWxlY3RvcikpO1xuXG5cdEFycmF5LmZyb20oYnRucywgZWwgPT5cblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG5cdFx0XHRtb2RhbFNob3coZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJykpKSk7XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKTsiLCIoIGVsZW1zID0+IHtcblxuXHRpZihlbGVtcy5sZW5ndGgpIHtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcblxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG5cdFx0XHRcdEFycmF5LmZyb20oZWxlbXMsIGVsID0+IHtcblxuXHRcdFx0XHRcdGxldCBkZWcgPSAwO1xuXHRcdFx0XHRcdGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdFx0XHRcdGlmIChyZWN0LmJvdHRvbSA+PSAwICYmIHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCl7XG5cblx0XHRcdFx0XHRcdGRlZyA9IDM2MCAqICggMSAtIHJlY3QuYm90dG9tIC8gKHJlY3QuYm90dG9tIC0gcmVjdC50b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQpICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9cdGNvbnNvbGUubG9nKGRlZylcblxuXHRcdFx0XHRcdGVsLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgZGVnICsgXCJkZWcpXCI7XG5cblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucm90YXRlJykpOyIsIiggZm9ybXMgPT4ge1xuXG5cdGlmKCFmb3Jtcy5sZW5ndGgpIHtcblxuXHRcdHJldHVybjtcblxuXHR9XG5cblx0Y29uc3QgZXZlbnRNb2RhbFNob3cgPSBuZXcgQ3VzdG9tRXZlbnQoXCJtb2RhbFNob3dcIiwge1xuXHRcdGRldGFpbDoge1xuXHRcdFx0c2VsZWN0b3I6IFwiZG9uZVwiXG5cdFx0fVxuXHR9KTtcblxuXHR3aW5kb3cucmVhZHlTdWJzY3JpYmUgPSBkYXRhID0+IHtcblxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXN1YnNjcmliZS5pcy1zZW5kJyk7XG5cblx0XHRmb3JtLnJlc2V0KCk7XG5cdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zZW5kJyk7XG5cblx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXN1YnNjcmliZV9fc3VibWl0JykuZGlzYWJsZWQgPSBmYWxzZTtcblxuXHRcdGlmKGRhdGEucmVzdWx0ID09PSBcInN1Y2Nlc3NcIil7XG5cblx0XHR9XG5cblx0XHRpZihkYXRhLnJlc3VsdCA9PT0gXCJlcnJvclwiKXtcblxuXHRcdH1cblxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kb25lX19tZXNzYW5nZScpLmlubmVySFRNTCA9IGRhdGEubXNnO1xuXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuZGlzcGF0Y2hFdmVudChldmVudE1vZGFsU2hvdyk7XG5cblx0fTtcblxuXHRjb25zdCBnZXRRdWVyeVN0cmluZyA9IGZvcm1EYXRhID0+IHtcblxuXHRcdGxldCBwYWlycyA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuXG5cdFx0XHRwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGFpcnMuam9pbignJicpO1xuXG5cdH1cblxuXHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcblxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRsZXQgdXJsID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuXG5cdFx0XHR1cmwgPSB1cmwucmVwbGFjZShcIi9wb3N0P3U9XCIsIFwiL3Bvc3QtanNvbj91PVwiKTtcblx0XHRcdHVybCA9IHVybCArICcmYz13aW5kb3cucmVhZHlTdWJzY3JpYmUnO1xuXHRcdFx0dXJsID0gdXJsICsgJyYnICsgZ2V0UXVlcnlTdHJpbmcobmV3IEZvcm1EYXRhKGZvcm0pKTtcblxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1zZW5kJyk7XG5cdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXN1YnNjcmliZV9fc3VibWl0JykuZGlzYWJsZWQgPSB0cnVlO1xuXG5cdFx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcblx0XHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuXHRcdH0pO1xuXG5cdH0pO1xuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1zdWJzY3JpYmUnKSk7IiwiKCBzd2lwZXJDb250YWluZXIgPT4ge1xuXG5cdGlmKCFzd2lwZXJDb250YWluZXIubGVuZ3RoKSB7XG5cblx0XHRyZXR1cm47XG5cblx0fVxuXG5cdGxldCBzd2lwZXJJbml0ID0gd2luZG93LlN3aXBlcjtcblxuXHRBcnJheS5mcm9tKHN3aXBlckNvbnRhaW5lciwgc3dpcGUgPT4ge1xuXG5cdFx0bGV0IG15U3dpcGUgPSBudWxsLFxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBudWxsLFxuXHRcdFx0cmVzZXRTd2lwZSA9IG51bGw7XG5cblx0XHRjb25zdCBzd2lwZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdFx0aXRlbXMgPSBzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlJyksXG5cdFx0XHRjb3VudCA9IGl0ZW1zLmxlbmd0aCxcblx0XHRcdGNhc2VzID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1jYXNlcycpO1xuXG5cdFx0c3dpcGVOYXYuY2xhc3NOYW1lID0gJ3N3aXBlci1wYWdpbmF0aW9uJztcblx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN3aXBlTmF2KTtcblxuXHRcdHJlc2V0U3dpcGUgPSAoKSA9PiB7XG5cblx0XHRcdGlmKG15U3dpcGUpIHtcblxuXHRcdFx0XHRteVN3aXBlLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XG5cdFx0XHRcdG15U3dpcGUgPSB1bmRlZmluZWQ7XG5cblx0XHRcdH1cblxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG5cdFx0fVxuXG5cdFx0cmVzZXRTd2lwZSgpO1xuXG5cdFx0aWYgKGNhc2VzKSB7XG5cblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZXNfX3Byb2Nlc3MtY3VycmVudCcpO1xuXG5cdFx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcblxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XG5cblx0XHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXHRcdFx0XHRjdXJyZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcblxuXHRcdFx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuXG5cdFx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XG5cdFx0XHRcdFx0Y3VycmVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblxuXHRcdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0YXV0b0hlaWdodDogdHJ1ZSxcblx0XHRcdFx0XHRcdHBhZ2luYXRpb246IHtcblx0XHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxuXHRcdFx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9uOiB7XG5cdFx0XHRcdFx0XHRcdHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnQudGV4dENvbnRlbnQgPSAoc3dpcGUuc3dpcGVyLnJlYWxJbmRleCAlIGNvdW50ICsgMSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1dpZHRoUmVzaXplJywgKCkgPT4ge1xuXG5cdFx0XHRpZiAod2luZG93LlN3aXBlciAmJiB0b2dnbGVTd2lwZSkge1xuXG5cdFx0XHRcdHRvZ2dsZVN3aXBlKCk7XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdFx0aWYod2luZG93LlN3aXBlciAmJiB0b2dnbGVTd2lwZSkge1xuXG5cdFx0XHR0b2dnbGVTd2lwZSgpO1xuXG5cdFx0fVxuXHRcdGVsc2Uge1xuXG5cdFx0XHRQdWJTdWIuc3Vic2NyaWJlKCdzd2lwZXJKc0xvYWQnLCB0b2dnbGVTd2lwZSk7XG5cblx0XHR9XG5cblx0XHRpZighc3dpcGVySW5pdCkge1xuXG5cdFx0XHRzd2lwZXJJbml0ID0gdHJ1ZTtcblxuXHRcdFx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cdFx0XHRzY3JpcHQuc3JjID0gJy9qcy9zd2lwZXIubWluLmpzJztcblxuXHRcdFx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IFB1YlN1Yi5wdWJsaXNoKCdzd2lwZXJKc0xvYWQnKTtcblxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCAxKTtcblxuXHRcdH1cblxuXHR9KTtcblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1jb250YWluZXInKSk7Il19
