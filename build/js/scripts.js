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
  /*
  form.addEventListener('change', event => {
  	if(event.target.classList.contains('demo-form__drop-input')) {
  		if(event.target.value.length) {
  			document.body.classList.add('uploading');
  		form.classList.add('is-uploading');
  		}
  	}
  });
  */
  // accordion table


  form.addEventListener('click', function (event) {
    if (event.target.closest('.demo-table__open')) {
      event.target.closest('tr').classList.toggle('is-open');
    }
  });
})(document.querySelector('.demo-form'));

window.Modal = function (modal) {
  if (!modal) {
    return;
  }

  var items = modal.querySelectorAll('.modal__item'),
      btns = document.querySelectorAll('[data-modal=select-wallet]'),
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

  var modalShow = function modalShow(selector, message, secondMessage) {
    if (!activeModal) {
      windowScroll = window.pageYOffset;
    }

    activeModal = modal.querySelector('.modal__item--' + selector);

    if (message) {
      activeModal.querySelector(".modal-info__text").innerText = message;
    }

    var secondMessageEl = activeModal.querySelector(".modal-info__text-second");

    if (secondMessage) {
      secondMessageEl.innerHTML = secondMessage;
    } else {
      if (secondMessageEl != null) {
        secondMessageEl.innerHTML = '';
      }
    }

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
  return {
    modalShow: modalShow,
    hideModal: hideModal
  };
}(document.querySelector('.modal'));

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmNvb2tpZS5taW4uanMiLCJwdWJzdWIubWluLmpzIiwianMuanMiLCJjb29raWUuanMiLCJkZW1vLWZvcm0uanMiLCJtb2RhbC5qcyIsInJvcmF0ZS5qcyIsInN1YnNjcmliZS5qcyIsInN3aXBlci5qcyJdLCJuYW1lcyI6WyJlIiwibiIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJvIiwid2luZG93IiwiQ29va2llcyIsInQiLCJub0NvbmZsaWN0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsImkiLCJjIiwiZG9jdW1lbnQiLCJwYXRoIiwiZGVmYXVsdHMiLCJleHBpcmVzIiwiYSIsIkRhdGUiLCJzZXRNaWxsaXNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJ0b1VUQ1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXN0Iiwid3JpdGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTdHJpbmciLCJyZXBsYWNlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwicyIsImYiLCJjb29raWUiLCJwIiwic3BsaXQiLCJkIiwidSIsImwiLCJDIiwic2xpY2UiLCJqb2luIiwianNvbiIsImNoYXJBdCIsImciLCJyZWFkIiwicGFyc2UiLCJzZXQiLCJnZXQiLCJjYWxsIiwiZ2V0SlNPTiIsImFwcGx5IiwicmVtb3ZlIiwid2l0aENvbnZlcnRlciIsIlB1YlN1YiIsImhhc093blByb3BlcnR5Iiwic2V0VGltZW91dCIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwidG9TdHJpbmciLCJCb29sZWFuIiwicHVibGlzaCIsImltbWVkaWF0ZUV4Y2VwdGlvbnMiLCJwdWJsaXNoU3luYyIsInN1YnNjcmliZSIsInN1YnNjcmliZU9uY2UiLCJ1bnN1YnNjcmliZSIsImNsZWFyQWxsU3Vic2NyaXB0aW9ucyIsImNsZWFyU3Vic2NyaXB0aW9ucyIsImluZGV4T2YiLCJyZXNpemVUaW1lb3V0Iiwid2luZG93V2lkdGhPTGQiLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImJvZHkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwiZm9ybSIsIk1vZGFsIiwibW9kYWwiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5zIiwid3JhcHBlciIsImFjdGl2ZU1vZGFsIiwid2luZG93U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJoaWRlTW9kYWwiLCJzdHlsZSIsInRvcCIsInNjcm9sbFRvIiwiZG9jdW1lbnRFbGVtZW50IiwibW9kYWxTaG93Iiwic2VsZWN0b3IiLCJtZXNzYWdlIiwic2Vjb25kTWVzc2FnZSIsImlubmVyVGV4dCIsInNlY29uZE1lc3NhZ2VFbCIsImlubmVySFRNTCIsIkFycmF5IiwiZnJvbSIsImVsIiwiZm9jdXMiLCJjb250YWlucyIsImRldGFpbCIsImVsZW1zIiwiZGVnIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwidHJhbnNmb3JtIiwiZm9ybXMiLCJldmVudE1vZGFsU2hvdyIsIkN1c3RvbUV2ZW50IiwicmVhZHlTdWJzY3JpYmUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc2V0IiwiZGlzYWJsZWQiLCJyZXN1bHQiLCJtc2ciLCJkaXNwYXRjaEV2ZW50IiwiZ2V0UXVlcnlTdHJpbmciLCJmb3JtRGF0YSIsInBhaXJzIiwiZW50cmllcyIsImtleSIsInZhbHVlIiwicHVzaCIsInVybCIsIkZvcm1EYXRhIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsImFzeW5jIiwic3JjIiwiaGVhZCIsImFwcGVuZENoaWxkIiwic3dpcGVyQ29udGFpbmVyIiwic3dpcGVySW5pdCIsIlN3aXBlciIsInN3aXBlIiwibXlTd2lwZSIsInRvZ2dsZVN3aXBlIiwicmVzZXRTd2lwZSIsInN3aXBlTmF2IiwiY291bnQiLCJjYXNlcyIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJkZXN0cm95IiwidW5kZWZpbmVkIiwiY3VycmVudCIsImxvb3AiLCJhdXRvSGVpZ2h0IiwicGFnaW5hdGlvbiIsImJ1bGxldENsYXNzIiwiYnVsbGV0QWN0aXZlQ2xhc3MiLCJvbiIsInNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCIsInRleHRDb250ZW50Iiwic3dpcGVyIiwicmVhbEluZGV4Iiwib25sb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUEsVUFBQUEsQ0FBQSxFQUFBO0FBQUEsTUFBQUMsQ0FBQSxHQUFBLENBQUEsQ0FBQTs7QUFBQSxNQUFBLGNBQUEsT0FBQUMsTUFBQSxJQUFBQSxNQUFBLENBQUFDLEdBQUEsS0FBQUQsTUFBQSxDQUFBRixDQUFBLENBQUEsRUFBQUMsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLG9CQUFBRyxPQUFBLHlDQUFBQSxPQUFBLE9BQUFDLE1BQUEsQ0FBQUQsT0FBQSxHQUFBSixDQUFBLEVBQUEsRUFBQUMsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQUEsQ0FBQSxFQUFBO0FBQUEsUUFBQUssQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE9BQUE7QUFBQSxRQUFBQyxDQUFBLEdBQUFGLE1BQUEsQ0FBQUMsT0FBQSxHQUFBUixDQUFBLEVBQUE7O0FBQUFTLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBLFlBQUE7QUFBQSxhQUFBSCxNQUFBLENBQUFDLE9BQUEsR0FBQUYsQ0FBQSxFQUFBRyxDQUFBO0FBQUEsS0FBQTtBQUFBO0FBQUEsQ0FBQSxDQUFBLFlBQUE7QUFBQSxXQUFBVCxDQUFBLEdBQUE7QUFBQSxTQUFBLElBQUFBLENBQUEsR0FBQSxDQUFBLEVBQUFDLENBQUEsR0FBQSxFQUFBLEVBQUFELENBQUEsR0FBQVcsU0FBQSxDQUFBQyxNQUFBLEVBQUFa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QUFBO0FBRUEsVUFBQVAsTUFBQSxHQUFBakksUUFBQSxDQUFBa0ksYUFBQSxDQUFBLFFBQUEsQ0FBQTtBQUVBRCxNQUFBQSxNQUFBLENBQUFFLEtBQUEsR0FBQSxJQUFBO0FBQ0FGLE1BQUFBLE1BQUEsQ0FBQUcsR0FBQSxHQUFBLG1CQUFBOztBQUVBSCxNQUFBQSxNQUFBLENBQUErQixNQUFBLEdBQUE7QUFBQSxlQUFBdkgsTUFBQSxDQUFBTyxPQUFBLENBQUEsY0FBQSxDQUFBO0FBQUEsT0FBQTs7QUFFQUwsTUFBQUEsVUFBQSxDQUFBO0FBQUEsZUFBQTNDLFFBQUEsQ0FBQXFJLElBQUEsQ0FBQUMsV0FBQSxDQUFBTCxNQUFBLENBQUE7QUFBQSxPQUFBLEVBQUEsQ0FBQSxDQUFBO0FBRUE7QUFFQSxHQXZHQTtBQXlHQSxDQW5IQSxFQW1IQWpJLFFBQUEsQ0FBQTZFLGdCQUFBLENBQUEsbUJBQUEsQ0FuSEEiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuIWZ1bmN0aW9uKGUpe3ZhciBuPSExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmKGRlZmluZShlKSxuPSEwKSxcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmKG1vZHVsZS5leHBvcnRzPWUoKSxuPSEwKSwhbil7dmFyIG89d2luZG93LkNvb2tpZXMsdD13aW5kb3cuQ29va2llcz1lKCk7dC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5Db29raWVzPW8sdH19fShmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtmb3IodmFyIGU9MCxuPXt9O2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBvPWFyZ3VtZW50c1tlXTtmb3IodmFyIHQgaW4gbyluW3RdPW9bdF19cmV0dXJuIG59cmV0dXJuIGZ1bmN0aW9uIG4obyl7ZnVuY3Rpb24gdChuLHIsaSl7dmFyIGM7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50KXtpZihhcmd1bWVudHMubGVuZ3RoPjEpe2lmKFwibnVtYmVyXCI9PXR5cGVvZihpPWUoe3BhdGg6XCIvXCJ9LHQuZGVmYXVsdHMsaSkpLmV4cGlyZXMpe3ZhciBhPW5ldyBEYXRlO2Euc2V0TWlsbGlzZWNvbmRzKGEuZ2V0TWlsbGlzZWNvbmRzKCkrODY0ZTUqaS5leHBpcmVzKSxpLmV4cGlyZXM9YX1pLmV4cGlyZXM9aS5leHBpcmVzP2kuZXhwaXJlcy50b1VUQ1N0cmluZygpOlwiXCI7dHJ5e2M9SlNPTi5zdHJpbmdpZnkociksL15bXFx7XFxbXS8udGVzdChjKSYmKHI9Yyl9Y2F0Y2goZSl7fXI9by53cml0ZT9vLndyaXRlKHIsbik6ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhyKSkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnwzQXwzQ3wzRXwzRHwyRnwzRnw0MHw1Qnw1RHw1RXw2MHw3Qnw3RHw3QykvZyxkZWNvZGVVUklDb21wb25lbnQpLG49KG49KG49ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhuKSkpLnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csZGVjb2RlVVJJQ29tcG9uZW50KSkucmVwbGFjZSgvW1xcKFxcKV0vZyxlc2NhcGUpO3ZhciBzPVwiXCI7Zm9yKHZhciBmIGluIGkpaVtmXSYmKHMrPVwiOyBcIitmLCEwIT09aVtmXSYmKHMrPVwiPVwiK2lbZl0pKTtyZXR1cm4gZG9jdW1lbnQuY29va2llPW4rXCI9XCIrcitzfW58fChjPXt9KTtmb3IodmFyIHA9ZG9jdW1lbnQuY29va2llP2RvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpOltdLGQ9LyglWzAtOUEtWl17Mn0pKy9nLHU9MDt1PHAubGVuZ3RoO3UrKyl7dmFyIGw9cFt1XS5zcGxpdChcIj1cIiksQz1sLnNsaWNlKDEpLmpvaW4oXCI9XCIpO3RoaXMuanNvbnx8J1wiJyE9PUMuY2hhckF0KDApfHwoQz1DLnNsaWNlKDEsLTEpKTt0cnl7dmFyIGc9bFswXS5yZXBsYWNlKGQsZGVjb2RlVVJJQ29tcG9uZW50KTtpZihDPW8ucmVhZD9vLnJlYWQoQyxnKTpvKEMsZyl8fEMucmVwbGFjZShkLGRlY29kZVVSSUNvbXBvbmVudCksdGhpcy5qc29uKXRyeXtDPUpTT04ucGFyc2UoQyl9Y2F0Y2goZSl7fWlmKG49PT1nKXtjPUM7YnJlYWt9bnx8KGNbZ109Qyl9Y2F0Y2goZSl7fX1yZXR1cm4gY319cmV0dXJuIHQuc2V0PXQsdC5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2FsbCh0LGUpfSx0LmdldEpTT049ZnVuY3Rpb24oKXtyZXR1cm4gdC5hcHBseSh7anNvbjohMH0sW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKX0sdC5kZWZhdWx0cz17fSx0LnJlbW92ZT1mdW5jdGlvbihuLG8pe3QobixcIlwiLGUobyx7ZXhwaXJlczotMX0pKX0sdC53aXRoQ29udmVydGVyPW4sdH0oZnVuY3Rpb24oKXt9KX0pOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4gKi9cbiFmdW5jdGlvbihuLHQpe1widXNlIHN0cmljdFwiO3ZhciByPXt9O24uUHViU3ViPXI7dmFyIGU9bi5kZWZpbmU7IWZ1bmN0aW9uKG4pe3ZhciB0PXt9LHI9LTE7ZnVuY3Rpb24gZShuKXt2YXIgdDtmb3IodCBpbiBuKWlmKG4uaGFzT3duUHJvcGVydHkodCkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gbyhuLHQscil7dHJ5e24odCxyKX1jYXRjaChuKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3Rocm93IG59fShuKSwwKX19ZnVuY3Rpb24gaShuLHQscil7bih0LHIpfWZ1bmN0aW9uIHUobixyLGUsdSl7dmFyIGYscz10W3JdLGM9dT9pOm87aWYodC5oYXNPd25Qcm9wZXJ0eShyKSlmb3IoZiBpbiBzKXMuaGFzT3duUHJvcGVydHkoZikmJmMoc1tmXSxuLGUpfWZ1bmN0aW9uIGYobixyLG8saSl7dmFyIGY9ZnVuY3Rpb24obix0LHIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPVN0cmluZyhuKSxvPWUubGFzdEluZGV4T2YoXCIuXCIpO2Zvcih1KG4sbix0LHIpOy0xIT09bzspZT1lLnN1YnN0cigwLG8pLG89ZS5sYXN0SW5kZXhPZihcIi5cIiksdShuLGUsdCxyKX19KG49XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4scixpKSxzPWZ1bmN0aW9uKG4pe3ZhciByPVN0cmluZyhuKSxvPUJvb2xlYW4odC5oYXNPd25Qcm9wZXJ0eShyKSYmZSh0W3JdKSksaT1yLmxhc3RJbmRleE9mKFwiLlwiKTtmb3IoOyFvJiYtMSE9PWk7KXI9ci5zdWJzdHIoMCxpKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKTtyZXR1cm4gb30obik7cmV0dXJuISFzJiYoITA9PT1vP2YoKTpzZXRUaW1lb3V0KGYsMCksITApfW4ucHVibGlzaD1mdW5jdGlvbih0LHIpe3JldHVybiBmKHQsciwhMSxuLmltbWVkaWF0ZUV4Y2VwdGlvbnMpfSxuLnB1Ymxpc2hTeW5jPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCEwLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4uc3Vic2NyaWJlPWZ1bmN0aW9uKG4sZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSlyZXR1cm4hMTtuPVwic3ltYm9sXCI9PXR5cGVvZiBuP24udG9TdHJpbmcoKTpuLHQuaGFzT3duUHJvcGVydHkobil8fCh0W25dPXt9KTt2YXIgbz1cInVpZF9cIitTdHJpbmcoKytyKTtyZXR1cm4gdFtuXVtvXT1lLG99LG4uc3Vic2NyaWJlT25jZT1mdW5jdGlvbih0LHIpe3ZhciBlPW4uc3Vic2NyaWJlKHQsZnVuY3Rpb24oKXtuLnVuc3Vic2NyaWJlKGUpLHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfSk7cmV0dXJuIG59LG4uY2xlYXJBbGxTdWJzY3JpcHRpb25zPWZ1bmN0aW9uKCl7dD17fX0sbi5jbGVhclN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pJiZkZWxldGUgdFtyXX0sbi51bnN1YnNjcmliZT1mdW5jdGlvbihyKXt2YXIgZSxvLGksdT1cInN0cmluZ1wiPT10eXBlb2YgciYmKHQuaGFzT3duUHJvcGVydHkocil8fGZ1bmN0aW9uKG4pe3ZhciByO2ZvcihyIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShyKSYmMD09PXIuaW5kZXhPZihuKSlyZXR1cm4hMDtyZXR1cm4hMX0ocikpLGY9IXUmJlwic3RyaW5nXCI9PXR5cGVvZiByLHM9XCJmdW5jdGlvblwiPT10eXBlb2YgcixjPSExO2lmKCF1KXtmb3IoZSBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkoZSkpe2lmKG89dFtlXSxmJiZvW3JdKXtkZWxldGUgb1tyXSxjPXI7YnJlYWt9aWYocylmb3IoaSBpbiBvKW8uaGFzT3duUHJvcGVydHkoaSkmJm9baV09PT1yJiYoZGVsZXRlIG9baV0sYz0hMCl9cmV0dXJuIGN9bi5jbGVhclN1YnNjcmlwdGlvbnMocil9fShyKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLmFtZD9lKGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmKHZvaWQgMCE9PW1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJihleHBvcnRzPW1vZHVsZS5leHBvcnRzPXIpLGV4cG9ydHMuUHViU3ViPXIsbW9kdWxlLmV4cG9ydHM9ZXhwb3J0cz1yKX0oXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93fHx0aGlzKTsiLCJcbiggKCkgPT4ge1xuXG5cdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbCxcblx0XHR3aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcblxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcblxuXHRcdFx0aWYgKCFyZXNpemVUaW1lb3V0KSB7XG5cblx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcblxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xuXG5cdFx0XHRcdFx0aWYod2luZG93V2lkdGhPTGQgIT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XG5cblx0XHRcdFx0XHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XG5cblx0XHRcdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dXaWR0aFJlc2l6ZScpO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0sIDEwMCk7XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdH0pO1xuXG5cdC8vIGJ0biBoZWFkZXJcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYnRuLW1lbnUtdG9nZ2xlJykpIHtcblxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LXNob3cnKTtcblxuXHRcdH1cblxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubWVudV9fbGluaycpKSB7XG5cblx0XHRcdGxldCBocmVmID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tZW51X19saW5rJykuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cblx0XHRcdGhyZWYgPSBocmVmLnNwbGl0KCcjJyk7XG5cblx0XHRcdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnK2hyZWZbMV0pKSB7XG5cblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNob3cnKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH0pO1xuXG59KSgpOyIsIiggY29va2llID0+IHtcblxuXHRpZihjb29raWUgJiYgQ29va2llcy5nZXQoJ1lvdXJQcml2YWN5JykgIT09ICdBY2NlcHQnKSB7XG5cblx0XHRjb29raWUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG5cdFx0Y29va2llLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Q29va2llcy5zZXQoJ1lvdXJQcml2YWN5JywgJ0FjY2VwdCcpO1xuXG5cdFx0XHRjb29raWUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG5cdFx0fSk7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29va2llJykpOyIsIiggZm9ybSA9PiB7XG5cblx0aWYoIWZvcm0pIHtcblxuXHRcdHJldHVybjtcblxuXHR9XG4gIFxuICAvKlxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcblxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbW8tZm9ybV9fZHJvcC1pbnB1dCcpKSB7XG5cblx0XHRcdGlmKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGgpIHtcblxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3VwbG9hZGluZycpO1xuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLXVwbG9hZGluZycpO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fSk7XG4gICovXG5cblx0Ly8gYWNjb3JkaW9uIHRhYmxlXG5cblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZGVtby10YWJsZV9fb3BlbicpKSB7XG5cblx0XHRcdGV2ZW50LnRhcmdldC5jbG9zZXN0KCd0cicpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcblxuXHRcdH1cblxuXHR9KTtcblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbW8tZm9ybScpKTtcbiIsIndpbmRvdy5Nb2RhbCA9ICggbW9kYWwgPT4ge1xuXG5cdGlmKCFtb2RhbCkge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRjb25zdCBpdGVtcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9faXRlbScpLFxuXHRcdCAgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsPXNlbGVjdC13YWxsZXRdJyksXG5cdFx0ICB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcblxuXHRsZXQgYWN0aXZlTW9kYWwgPSBmYWxzZSxcblx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cblx0Y29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xuXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAwO1xuXHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XG5cblx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpKTtcblxuXHRcdGFjdGl2ZU1vZGFsID0gZmFsc2U7XG5cblx0fTtcblxuXHRjb25zdCBtb2RhbFNob3cgPSAoc2VsZWN0b3IsIG1lc3NhZ2UsIHNlY29uZE1lc3NhZ2UpID0+IHtcblxuXHRcdGlmKCFhY3RpdmVNb2RhbCl7XG5cblx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuXHRcdH1cblxuXHRcdGFjdGl2ZU1vZGFsID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS0nICsgc2VsZWN0b3IpO1xuXG4gICAgXG4gICAgaWYobWVzc2FnZSl7XG4gICAgICBhY3RpdmVNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWluZm9fX3RleHRcIikuaW5uZXJUZXh0ID0gbWVzc2FnZVxuICAgIH1cblxuICAgIGNvbnN0IHNlY29uZE1lc3NhZ2VFbCA9IGFjdGl2ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtaW5mb19fdGV4dC1zZWNvbmRcIilcbiAgICBpZihzZWNvbmRNZXNzYWdlKXtcbiAgICAgIHNlY29uZE1lc3NhZ2VFbC5pbm5lckhUTUwgPSBzZWNvbmRNZXNzYWdlXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKHNlY29uZE1lc3NhZ2VFbCAhPSBudWxsKXtcbiAgICAgICAgc2Vjb25kTWVzc2FnZUVsLmlubmVySFRNTCA9ICcnXG4gICAgICB9XG4gICAgfVxuXG5cdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBlbCAhPT0gYWN0aXZlTW9kYWwpKTtcblxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJyk7XG5cblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cblx0XHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xuXG5cdFx0XHRhY3RpdmVNb2RhbC5mb2N1cygpO1xuXG5cdFx0fSk7XG5cblx0fTtcblxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKSl7XG5cblx0XHRcdGhpZGVNb2RhbCgpO1xuXG5cdFx0fVxuXG5cdH0pO1xuXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsU2hvdycsIGV2ZW50ID0+IG1vZGFsU2hvdyhldmVudC5kZXRhaWwuc2VsZWN0b3IpKTtcblxuXHRBcnJheS5mcm9tKGJ0bnMsIGVsID0+XG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuXHRcdFx0bW9kYWxTaG93KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSkpO1xuICBcbiAgcmV0dXJuIHttb2RhbFNob3csIGhpZGVNb2RhbH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykpO1xuIiwiKCBlbGVtcyA9PiB7XG5cblx0aWYoZWxlbXMubGVuZ3RoKSB7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG5cblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcblxuXHRcdFx0XHRBcnJheS5mcm9tKGVsZW1zLCBlbCA9PiB7XG5cblx0XHRcdFx0XHRsZXQgZGVnID0gMDtcblx0XHRcdFx0XHRjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRcdFx0XHRpZiAocmVjdC5ib3R0b20gPj0gMCAmJiByZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpe1xuXG5cdFx0XHRcdFx0XHRkZWcgPSAzNjAgKiAoIDEgLSByZWN0LmJvdHRvbSAvIChyZWN0LmJvdHRvbSAtIHJlY3QudG9wICsgd2luZG93LmlubmVySGVpZ2h0KSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vXHRjb25zb2xlLmxvZyhkZWcpXG5cblx0XHRcdFx0XHRlbC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIGRlZyArIFwiZGVnKVwiO1xuXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvdGF0ZScpKTsiLCIoIGZvcm1zID0+IHtcblxuXHRpZighZm9ybXMubGVuZ3RoKSB7XG5cblx0XHRyZXR1cm47XG5cblx0fVxuXG5cdGNvbnN0IGV2ZW50TW9kYWxTaG93ID0gbmV3IEN1c3RvbUV2ZW50KFwibW9kYWxTaG93XCIsIHtcblx0XHRkZXRhaWw6IHtcblx0XHRcdHNlbGVjdG9yOiBcImRvbmVcIlxuXHRcdH1cblx0fSk7XG5cblx0d2luZG93LnJlYWR5U3Vic2NyaWJlID0gZGF0YSA9PiB7XG5cblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zdWJzY3JpYmUuaXMtc2VuZCcpO1xuXG5cdFx0Zm9ybS5yZXNldCgpO1xuXHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2VuZCcpO1xuXG5cdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zdWJzY3JpYmVfX3N1Ym1pdCcpLmRpc2FibGVkID0gZmFsc2U7XG5cblx0XHRpZihkYXRhLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpe1xuXG5cdFx0fVxuXG5cdFx0aWYoZGF0YS5yZXN1bHQgPT09IFwiZXJyb3JcIil7XG5cblx0XHR9XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZG9uZV9fbWVzc2FuZ2UnKS5pbm5lckhUTUwgPSBkYXRhLm1zZztcblxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLmRpc3BhdGNoRXZlbnQoZXZlbnRNb2RhbFNob3cpO1xuXG5cdH07XG5cblx0Y29uc3QgZ2V0UXVlcnlTdHJpbmcgPSBmb3JtRGF0YSA9PiB7XG5cblx0XHRsZXQgcGFpcnMgPSBbXTtcblxuXHRcdGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcblxuXHRcdFx0cGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcblxuXHR9XG5cblx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XG5cblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0bGV0IHVybCA9IGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcblxuXHRcdFx0dXJsID0gdXJsLnJlcGxhY2UoXCIvcG9zdD91PVwiLCBcIi9wb3N0LWpzb24/dT1cIik7XG5cdFx0XHR1cmwgPSB1cmwgKyAnJmM9d2luZG93LnJlYWR5U3Vic2NyaWJlJztcblx0XHRcdHVybCA9IHVybCArICcmJyArIGdldFF1ZXJ5U3RyaW5nKG5ldyBGb3JtRGF0YShmb3JtKSk7XG5cblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtc2VuZCcpO1xuXHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zdWJzY3JpYmVfX3N1Ym1pdCcpLmRpc2FibGVkID0gdHJ1ZTtcblxuXHRcdFx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cdFx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cblx0XHR9KTtcblxuXHR9KTtcblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tc3Vic2NyaWJlJykpOyIsIiggc3dpcGVyQ29udGFpbmVyID0+IHtcblxuXHRpZighc3dpcGVyQ29udGFpbmVyLmxlbmd0aCkge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRsZXQgc3dpcGVySW5pdCA9IHdpbmRvdy5Td2lwZXI7XG5cblx0QXJyYXkuZnJvbShzd2lwZXJDb250YWluZXIsIHN3aXBlID0+IHtcblxuXHRcdGxldCBteVN3aXBlID0gbnVsbCxcblx0XHRcdHRvZ2dsZVN3aXBlID0gbnVsbCxcblx0XHRcdHJlc2V0U3dpcGUgPSBudWxsO1xuXG5cdFx0Y29uc3Qgc3dpcGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRcdGl0ZW1zID0gc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZScpLFxuXHRcdFx0Y291bnQgPSBpdGVtcy5sZW5ndGgsXG5cdFx0XHRjYXNlcyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tY2FzZXMnKTtcblxuXHRcdHN3aXBlTmF2LmNsYXNzTmFtZSA9ICdzd2lwZXItcGFnaW5hdGlvbic7XG5cdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzd2lwZU5hdik7XG5cblx0XHRyZXNldFN3aXBlID0gKCkgPT4ge1xuXG5cdFx0XHRpZihteVN3aXBlKSB7XG5cblx0XHRcdFx0bXlTd2lwZS5kZXN0cm95KGZhbHNlLHRydWUpO1xuXHRcdFx0XHRteVN3aXBlID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR9XG5cblx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuXHRcdH1cblxuXHRcdHJlc2V0U3dpcGUoKTtcblxuXHRcdGlmIChjYXNlcykge1xuXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2VzX19wcm9jZXNzLWN1cnJlbnQnKTtcblxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XG5cblx0XHRcdFx0cmVzZXRTd2lwZSgpO1xuXG5cdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblx0XHRcdFx0Y3VycmVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XG5cblx0XHRcdFx0aWYod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcblxuXHRcdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xuXHRcdFx0XHRcdGN1cnJlbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cblx0XHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdFx0XHRcdGF1dG9IZWlnaHQ6IHRydWUsXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcblx0XHRcdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxuXHRcdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvbjoge1xuXHRcdFx0XHRcdFx0XHRzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQ6ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50LnRleHRDb250ZW50ID0gKHN3aXBlLnN3aXBlci5yZWFsSW5kZXggJSBjb3VudCArIDEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dXaWR0aFJlc2l6ZScsICgpID0+IHtcblxuXHRcdFx0aWYgKHdpbmRvdy5Td2lwZXIgJiYgdG9nZ2xlU3dpcGUpIHtcblxuXHRcdFx0XHR0b2dnbGVTd2lwZSgpO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHRcdGlmKHdpbmRvdy5Td2lwZXIgJiYgdG9nZ2xlU3dpcGUpIHtcblxuXHRcdFx0dG9nZ2xlU3dpcGUoKTtcblxuXHRcdH1cblx0XHRlbHNlIHtcblxuXHRcdFx0UHViU3ViLnN1YnNjcmliZSgnc3dpcGVySnNMb2FkJywgdG9nZ2xlU3dpcGUpO1xuXG5cdFx0fVxuXG5cdFx0aWYoIXN3aXBlckluaXQpIHtcblxuXHRcdFx0c3dpcGVySW5pdCA9IHRydWU7XG5cblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXHRcdFx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XG5cblx0XHRcdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBQdWJTdWIucHVibGlzaCgnc3dpcGVySnNMb2FkJyk7XG5cblx0XHRcdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgMSk7XG5cblx0XHR9XG5cblx0fSk7XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItY29udGFpbmVyJykpOyJdfQ==
