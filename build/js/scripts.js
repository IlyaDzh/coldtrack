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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmNvb2tpZS5taW4uanMiLCJwdWJzdWIubWluLmpzIiwianMuanMiLCJjb29raWUuanMiLCJkZW1vLWZvcm0uanMiLCJtb2RhbC5qcyIsInJvcmF0ZS5qcyIsInN1YnNjcmliZS5qcyIsInN3aXBlci5qcyJdLCJuYW1lcyI6WyJlIiwibiIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJvIiwid2luZG93IiwiQ29va2llcyIsInQiLCJub0NvbmZsaWN0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsImkiLCJjIiwiZG9jdW1lbnQiLCJwYXRoIiwiZGVmYXVsdHMiLCJleHBpcmVzIiwiYSIsIkRhdGUiLCJzZXRNaWxsaXNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJ0b1VUQ1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXN0Iiwid3JpdGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTdHJpbmciLCJyZXBsYWNlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwicyIsImYiLCJjb29raWUiLCJwIiwic3BsaXQiLCJkIiwidSIsImwiLCJDIiwic2xpY2UiLCJqb2luIiwianNvbiIsImNoYXJBdCIsImciLCJyZWFkIiwicGFyc2UiLCJzZXQiLCJnZXQiLCJjYWxsIiwiZ2V0SlNPTiIsImFwcGx5IiwicmVtb3ZlIiwid2l0aENvbnZlcnRlciIsIlB1YlN1YiIsImhhc093blByb3BlcnR5Iiwic2V0VGltZW91dCIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwidG9TdHJpbmciLCJCb29sZWFuIiwicHVibGlzaCIsImltbWVkaWF0ZUV4Y2VwdGlvbnMiLCJwdWJsaXNoU3luYyIsInN1YnNjcmliZSIsInN1YnNjcmliZU9uY2UiLCJ1bnN1YnNjcmliZSIsImNsZWFyQWxsU3Vic2NyaXB0aW9ucyIsImNsZWFyU3Vic2NyaXB0aW9ucyIsImluZGV4T2YiLCJyZXNpemVUaW1lb3V0Iiwid2luZG93V2lkdGhPTGQiLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImJvZHkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwiZm9ybSIsIk1vZGFsIiwibW9kYWwiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5zIiwid3JhcHBlciIsImFjdGl2ZU1vZGFsIiwid2luZG93U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJoaWRlTW9kYWwiLCJzdHlsZSIsInRvcCIsInNjcm9sbFRvIiwiZG9jdW1lbnRFbGVtZW50IiwibW9kYWxTaG93Iiwic2VsZWN0b3IiLCJtZXNzYWdlIiwic2Vjb25kTWVzc2FnZSIsImlubmVyVGV4dCIsInNlY29uZE1lc3NhZ2VFbCIsImlubmVySFRNTCIsIkFycmF5IiwiZnJvbSIsImVsIiwiZm9jdXMiLCJjb250YWlucyIsImRldGFpbCIsImVsZW1zIiwiZGVnIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwidHJhbnNmb3JtIiwiZm9ybXMiLCJldmVudE1vZGFsU2hvdyIsIkN1c3RvbUV2ZW50IiwicmVhZHlTdWJzY3JpYmUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc2V0IiwiZGlzYWJsZWQiLCJyZXN1bHQiLCJtc2ciLCJkaXNwYXRjaEV2ZW50IiwiZ2V0UXVlcnlTdHJpbmciLCJmb3JtRGF0YSIsInBhaXJzIiwiZW50cmllcyIsImtleSIsInZhbHVlIiwicHVzaCIsInVybCIsIkZvcm1EYXRhIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsImFzeW5jIiwic3JjIiwiaGVhZCIsImFwcGVuZENoaWxkIiwic3dpcGVyQ29udGFpbmVyIiwic3dpcGVySW5pdCIsIlN3aXBlciIsInN3aXBlIiwibXlTd2lwZSIsInRvZ2dsZVN3aXBlIiwicmVzZXRTd2lwZSIsInN3aXBlTmF2IiwiY291bnQiLCJjYXNlcyIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJkZXN0cm95IiwidW5kZWZpbmVkIiwiY3VycmVudCIsImxvb3AiLCJhdXRvSGVpZ2h0IiwicGFnaW5hdGlvbiIsImJ1bGxldENsYXNzIiwiYnVsbGV0QWN0aXZlQ2xhc3MiLCJvbiIsInNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCIsInRleHRDb250ZW50Iiwic3dpcGVyIiwicmVhbEluZGV4Iiwib25sb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQU9BLENBQUEsVUFBQUEsQ0FBQSxFQUFBO0FBQUEsTUFBQUMsQ0FBQSxHQUFBLENBQUEsQ0FBQTs7QUFBQSxNQUFBLGNBQUEsT0FBQUMsTUFBQSxJQUFBQSxNQUFBLENBQUFDLEdBQUEsS0FBQUQsTUFBQSxDQUFBRixDQUFBLENBQUEsRUFBQUMsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLG9CQUFBRyxPQUFBLHlDQUFBQSxPQUFBLE9BQUFDLE1BQUEsQ0FBQUQsT0FBQSxHQUFBSixDQUFBLEVBQUEsRUFBQUMsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQUEsQ0FBQSxFQUFBO0FBQUEsUUFBQUssQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE9BQUE7QUFBQSxRQUFBQyxDQUFBLEdBQUFGLE1BQUEsQ0FBQUMsT0FBQSxHQUFBUixDQUFBLEVBQUE7O0FBQUFTLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBLFlBQUE7QUFBQSxhQUFBSCxNQUFBLENBQUFDLE9BQUEsR0FBQUYsQ0FBQSxFQUFBRyxDQUFBO0FBQUEsS0FBQTtBQUFBO0FBQUEsQ0FBQSxDQUFBLFlBQUE7QUFBQSxXQUFBVCxDQUFBLEdBQUE7QUFBQSxTQUFBLElBQUFBLENBQUEsR0FBQSxDQUFBLEVBQUFDLENBQUEsR0FBQSxFQUFBLEVBQUFELENBQUEsR0FBQVcsU0FBQSxDQUFBQyxNQUFBLEVBQUFaLENBQUEsRUFBQSxFQUFBO0FBQUEsVUFB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QUUsS0FBQSxHQUFBLElBQUE7QUFDQUYsTUFBQUEsTUFBQSxDQUFBRyxHQUFBLEdBQUEsbUJBQUE7O0FBRUFILE1BQUFBLE1BQUEsQ0FBQStCLE1BQUEsR0FBQTtBQUFBLGVBQUF2SCxNQUFBLENBQUFPLE9BQUEsQ0FBQSxjQUFBLENBQUE7QUFBQSxPQUFBOztBQUVBTCxNQUFBQSxVQUFBLENBQUE7QUFBQSxlQUFBM0MsUUFBQSxDQUFBcUksSUFBQSxDQUFBQyxXQUFBLENBQUFMLE1BQUEsQ0FBQTtBQUFBLE9BQUEsRUFBQSxDQUFBLENBQUE7QUFFQTtBQUVBLEdBdkdBO0FBeUdBLENBbkhBLEVBbUhBakksUUFBQSxDQUFBNkUsZ0JBQUEsQ0FBQSxtQkFBQSxDQW5IQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBKYXZhU2NyaXB0IENvb2tpZSB2Mi4yLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKlxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTUgS2xhdXMgSGFydGwgJiBGYWduZXIgQnJhY2tcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG4hZnVuY3Rpb24oZSl7dmFyIG49ITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiYoZGVmaW5lKGUpLG49ITApLFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiYobW9kdWxlLmV4cG9ydHM9ZSgpLG49ITApLCFuKXt2YXIgbz13aW5kb3cuQ29va2llcyx0PXdpbmRvdy5Db29raWVzPWUoKTt0Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LkNvb2tpZXM9byx0fX19KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2Zvcih2YXIgZT0wLG49e307ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG89YXJndW1lbnRzW2VdO2Zvcih2YXIgdCBpbiBvKW5bdF09b1t0XX1yZXR1cm4gbn1yZXR1cm4gZnVuY3Rpb24gbihvKXtmdW5jdGlvbiB0KG4scixpKXt2YXIgYztpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpe2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7aWYoXCJudW1iZXJcIj09dHlwZW9mKGk9ZSh7cGF0aDpcIi9cIn0sdC5kZWZhdWx0cyxpKSkuZXhwaXJlcyl7dmFyIGE9bmV3IERhdGU7YS5zZXRNaWxsaXNlY29uZHMoYS5nZXRNaWxsaXNlY29uZHMoKSs4NjRlNSppLmV4cGlyZXMpLGkuZXhwaXJlcz1hfWkuZXhwaXJlcz1pLmV4cGlyZXM/aS5leHBpcmVzLnRvVVRDU3RyaW5nKCk6XCJcIjt0cnl7Yz1KU09OLnN0cmluZ2lmeShyKSwvXltcXHtcXFtdLy50ZXN0KGMpJiYocj1jKX1jYXRjaChlKXt9cj1vLndyaXRlP28ud3JpdGUocixuKTplbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHIpKS5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLGRlY29kZVVSSUNvbXBvbmVudCksbj0obj0obj1lbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKG4pKSkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZyxkZWNvZGVVUklDb21wb25lbnQpKS5yZXBsYWNlKC9bXFwoXFwpXS9nLGVzY2FwZSk7dmFyIHM9XCJcIjtmb3IodmFyIGYgaW4gaSlpW2ZdJiYocys9XCI7IFwiK2YsITAhPT1pW2ZdJiYocys9XCI9XCIraVtmXSkpO3JldHVybiBkb2N1bWVudC5jb29raWU9bitcIj1cIityK3N9bnx8KGM9e30pO2Zvcih2YXIgcD1kb2N1bWVudC5jb29raWU/ZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik6W10sZD0vKCVbMC05QS1aXXsyfSkrL2csdT0wO3U8cC5sZW5ndGg7dSsrKXt2YXIgbD1wW3VdLnNwbGl0KFwiPVwiKSxDPWwuc2xpY2UoMSkuam9pbihcIj1cIik7dGhpcy5qc29ufHwnXCInIT09Qy5jaGFyQXQoMCl8fChDPUMuc2xpY2UoMSwtMSkpO3RyeXt2YXIgZz1sWzBdLnJlcGxhY2UoZCxkZWNvZGVVUklDb21wb25lbnQpO2lmKEM9by5yZWFkP28ucmVhZChDLGcpOm8oQyxnKXx8Qy5yZXBsYWNlKGQsZGVjb2RlVVJJQ29tcG9uZW50KSx0aGlzLmpzb24pdHJ5e0M9SlNPTi5wYXJzZShDKX1jYXRjaChlKXt9aWYobj09PWcpe2M9QzticmVha31ufHwoY1tnXT1DKX1jYXRjaChlKXt9fXJldHVybiBjfX1yZXR1cm4gdC5zZXQ9dCx0LmdldD1mdW5jdGlvbihlKXtyZXR1cm4gdC5jYWxsKHQsZSl9LHQuZ2V0SlNPTj1mdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KHtqc29uOiEwfSxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfSx0LmRlZmF1bHRzPXt9LHQucmVtb3ZlPWZ1bmN0aW9uKG4sbyl7dChuLFwiXCIsZShvLHtleHBpcmVzOi0xfSkpfSx0LndpdGhDb252ZXJ0ZXI9bix0fShmdW5jdGlvbigpe30pfSk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuIWZ1bmN0aW9uKG4sdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9e307bi5QdWJTdWI9cjt2YXIgZT1uLmRlZmluZTshZnVuY3Rpb24obil7dmFyIHQ9e30scj0tMTtmdW5jdGlvbiBlKG4pe3ZhciB0O2Zvcih0IGluIG4paWYobi5oYXNPd25Qcm9wZXJ0eSh0KSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBvKG4sdCxyKXt0cnl7bih0LHIpfWNhdGNoKG4pe3NldFRpbWVvdXQoZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7dGhyb3cgbn19KG4pLDApfX1mdW5jdGlvbiBpKG4sdCxyKXtuKHQscil9ZnVuY3Rpb24gdShuLHIsZSx1KXt2YXIgZixzPXRbcl0sYz11P2k6bztpZih0Lmhhc093blByb3BlcnR5KHIpKWZvcihmIGluIHMpcy5oYXNPd25Qcm9wZXJ0eShmKSYmYyhzW2ZdLG4sZSl9ZnVuY3Rpb24gZihuLHIsbyxpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9U3RyaW5nKG4pLG89ZS5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKHUobixuLHQscik7LTEhPT1vOyllPWUuc3Vic3RyKDAsbyksbz1lLmxhc3RJbmRleE9mKFwiLlwiKSx1KG4sZSx0LHIpfX0obj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bixyLGkpLHM9ZnVuY3Rpb24obil7dmFyIHI9U3RyaW5nKG4pLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpO2Zvcig7IW8mJi0xIT09aTspcj1yLnN1YnN0cigwLGkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpO3JldHVybiBvfShuKTtyZXR1cm4hIXMmJighMD09PW8/ZigpOnNldFRpbWVvdXQoZiwwKSwhMCl9bi5wdWJsaXNoPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCExLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4ucHVibGlzaFN5bmM9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITAsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5zdWJzY3JpYmU9ZnVuY3Rpb24obixlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXJldHVybiExO249XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4sdC5oYXNPd25Qcm9wZXJ0eShuKXx8KHRbbl09e30pO3ZhciBvPVwidWlkX1wiK1N0cmluZygrK3IpO3JldHVybiB0W25dW29dPWUsb30sbi5zdWJzY3JpYmVPbmNlPWZ1bmN0aW9uKHQscil7dmFyIGU9bi5zdWJzY3JpYmUodCxmdW5jdGlvbigpe24udW5zdWJzY3JpYmUoZSksci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KTtyZXR1cm4gbn0sbi5jbGVhckFsbFN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24oKXt0PXt9fSxuLmNsZWFyU3Vic2NyaXB0aW9ucz1mdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikmJmRlbGV0ZSB0W3JdfSxuLnVuc3Vic2NyaWJlPWZ1bmN0aW9uKHIpe3ZhciBlLG8saSx1PVwic3RyaW5nXCI9PXR5cGVvZiByJiYodC5oYXNPd25Qcm9wZXJ0eShyKXx8ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdClpZih0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pKXJldHVybiEwO3JldHVybiExfShyKSksZj0hdSYmXCJzdHJpbmdcIj09dHlwZW9mIHIscz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByLGM9ITE7aWYoIXUpe2ZvcihlIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShlKSl7aWYobz10W2VdLGYmJm9bcl0pe2RlbGV0ZSBvW3JdLGM9cjticmVha31pZihzKWZvcihpIGluIG8pby5oYXNPd25Qcm9wZXJ0eShpKSYmb1tpXT09PXImJihkZWxldGUgb1tpXSxjPSEwKX1yZXR1cm4gY31uLmNsZWFyU3Vic2NyaXB0aW9ucyhyKX19KHIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUuYW1kP2UoZnVuY3Rpb24oKXtyZXR1cm4gcn0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiYodm9pZCAwIT09bW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9ciksZXhwb3J0cy5QdWJTdWI9cixtb2R1bGUuZXhwb3J0cz1leHBvcnRzPXIpfShcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3d8fHRoaXMpOyIsIlxuKCAoKSA9PiB7XG5cblx0bGV0IHJlc2l6ZVRpbWVvdXQgPSBudWxsLFxuXHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG5cdFx0XHRpZiAoIXJlc2l6ZVRpbWVvdXQpIHtcblxuXHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xuXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XG5cblx0XHRcdFx0XHRpZih3aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcblxuXHRcdFx0XHRcdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuXHRcdFx0XHRcdFx0UHViU3ViLnB1Ymxpc2goJ3dpbmRvd1dpZHRoUmVzaXplJyk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSwgMTAwKTtcblxuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0fSk7XG5cblx0Ly8gYnRuIGhlYWRlclxuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idG4tbWVudS10b2dnbGUnKSkge1xuXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtc2hvdycpO1xuXG5cdFx0fVxuXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tZW51X19saW5rJykpIHtcblxuXHRcdFx0bGV0IGhyZWYgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1lbnVfX2xpbmsnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuXHRcdFx0aHJlZiA9IGhyZWYuc3BsaXQoJyMnKTtcblxuXHRcdFx0aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycraHJlZlsxXSkpIHtcblxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2hvdycpO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fSk7XG5cbn0pKCk7IiwiKCBjb29raWUgPT4ge1xuXG5cdGlmKGNvb2tpZSAmJiBDb29raWVzLmdldCgnWW91clByaXZhY3knKSAhPT0gJ0FjY2VwdCcpIHtcblxuXHRcdGNvb2tpZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cblx0XHRjb29raWUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRDb29raWVzLnNldCgnWW91clByaXZhY3knLCAnQWNjZXB0Jyk7XG5cblx0XHRcdGNvb2tpZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWUnKSk7IiwiKCBmb3JtID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuICBcclxuICAvKlxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbW8tZm9ybV9fZHJvcC1pbnB1dCcpKSB7XHJcblxyXG5cdFx0XHRpZihldmVudC50YXJnZXQudmFsdWUubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndXBsb2FkaW5nJyk7XHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy11cGxvYWRpbmcnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG4gICovXHJcblxyXG5cdC8vIGFjY29yZGlvbiB0YWJsZVxyXG5cclxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZGVtby10YWJsZV9fb3BlbicpKSB7XHJcblxyXG5cdFx0XHRldmVudC50YXJnZXQuY2xvc2VzdCgndHInKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZW1vLWZvcm0nKSk7XHJcbiIsIndpbmRvdy5Nb2RhbCA9ICggbW9kYWwgPT4ge1xyXG5cclxuXHRpZighbW9kYWwpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgaXRlbXMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2l0ZW0nKSxcclxuXHRcdCAgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsPXNlbGVjdC13YWxsZXRdJyksXHJcblx0XHQgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG5cclxuXHRsZXQgYWN0aXZlTW9kYWwgPSBmYWxzZSxcclxuXHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0Y29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAwO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpKTtcclxuXHJcblx0XHRhY3RpdmVNb2RhbCA9IGZhbHNlO1xyXG5cclxuXHR9O1xyXG5cclxuXHRjb25zdCBtb2RhbFNob3cgPSAoc2VsZWN0b3IsIG1lc3NhZ2UsIHNlY29uZE1lc3NhZ2UpID0+IHtcclxuXHJcblx0XHRpZighYWN0aXZlTW9kYWwpe1xyXG5cclxuXHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRhY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcbiAgICBcclxuICAgIGlmKG1lc3NhZ2Upe1xyXG4gICAgICBhY3RpdmVNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWluZm9fX3RleHRcIikuaW5uZXJUZXh0ID0gbWVzc2FnZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlY29uZE1lc3NhZ2VFbCA9IGFjdGl2ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtaW5mb19fdGV4dC1zZWNvbmRcIilcclxuICAgIGlmKHNlY29uZE1lc3NhZ2Upe1xyXG4gICAgICBzZWNvbmRNZXNzYWdlRWwuaW5uZXJIVE1MID0gc2Vjb25kTWVzc2FnZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYoc2Vjb25kTWVzc2FnZUVsICE9IG51bGwpe1xyXG4gICAgICAgIHNlY29uZE1lc3NhZ2VFbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBlbCAhPT0gYWN0aXZlTW9kYWwpKTtcclxuXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2hvdycpO1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRcdGFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKSl7XHJcblxyXG5cdFx0XHRoaWRlTW9kYWwoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbFNob3cnLCBldmVudCA9PiBtb2RhbFNob3coZXZlbnQuZGV0YWlsLnNlbGVjdG9yKSk7XHJcblxyXG5cdEFycmF5LmZyb20oYnRucywgZWwgPT5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuXHRcdFx0bW9kYWxTaG93KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSkpO1xyXG4gIFxyXG4gIHJldHVybiB7bW9kYWxTaG93LCBoaWRlTW9kYWx9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7XHJcbiIsIiggZWxlbXMgPT4ge1xuXG5cdGlmKGVsZW1zLmxlbmd0aCkge1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG5cblx0XHRcdFx0QXJyYXkuZnJvbShlbGVtcywgZWwgPT4ge1xuXG5cdFx0XHRcdFx0bGV0IGRlZyA9IDA7XG5cdFx0XHRcdFx0Y29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0XHRcdFx0aWYgKHJlY3QuYm90dG9tID49IDAgJiYgcmVjdC50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0KXtcblxuXHRcdFx0XHRcdFx0ZGVnID0gMzYwICogKCAxIC0gcmVjdC5ib3R0b20gLyAocmVjdC5ib3R0b20gLSByZWN0LnRvcCArIHdpbmRvdy5pbm5lckhlaWdodCkgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvL1x0Y29uc29sZS5sb2coZGVnKVxuXG5cdFx0XHRcdFx0ZWwucXVlcnlTZWxlY3RvcignaW1nJykuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyBkZWcgKyBcImRlZylcIjtcblxuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSk7XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3RhdGUnKSk7IiwiKCBmb3JtcyA9PiB7XG5cblx0aWYoIWZvcm1zLmxlbmd0aCkge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRjb25zdCBldmVudE1vZGFsU2hvdyA9IG5ldyBDdXN0b21FdmVudChcIm1vZGFsU2hvd1wiLCB7XG5cdFx0ZGV0YWlsOiB7XG5cdFx0XHRzZWxlY3RvcjogXCJkb25lXCJcblx0XHR9XG5cdH0pO1xuXG5cdHdpbmRvdy5yZWFkeVN1YnNjcmliZSA9IGRhdGEgPT4ge1xuXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc3Vic2NyaWJlLmlzLXNlbmQnKTtcblxuXHRcdGZvcm0ucmVzZXQoKTtcblx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNlbmQnKTtcblxuXHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tc3Vic2NyaWJlX19zdWJtaXQnKS5kaXNhYmxlZCA9IGZhbHNlO1xuXG5cdFx0aWYoZGF0YS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKXtcblxuXHRcdH1cblxuXHRcdGlmKGRhdGEucmVzdWx0ID09PSBcImVycm9yXCIpe1xuXG5cdFx0fVxuXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRvbmVfX21lc3NhbmdlJykuaW5uZXJIVE1MID0gZGF0YS5tc2c7XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5kaXNwYXRjaEV2ZW50KGV2ZW50TW9kYWxTaG93KTtcblxuXHR9O1xuXG5cdGNvbnN0IGdldFF1ZXJ5U3RyaW5nID0gZm9ybURhdGEgPT4ge1xuXG5cdFx0bGV0IHBhaXJzID0gW107XG5cblx0XHRmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgZm9ybURhdGEuZW50cmllcygpKSB7XG5cblx0XHRcdHBhaXJzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBwYWlycy5qb2luKCcmJyk7XG5cblx0fVxuXG5cdEFycmF5LmZyb20oZm9ybXMsIGZvcm0gPT4ge1xuXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGxldCB1cmwgPSBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyk7XG5cblx0XHRcdHVybCA9IHVybC5yZXBsYWNlKFwiL3Bvc3Q/dT1cIiwgXCIvcG9zdC1qc29uP3U9XCIpO1xuXHRcdFx0dXJsID0gdXJsICsgJyZjPXdpbmRvdy5yZWFkeVN1YnNjcmliZSc7XG5cdFx0XHR1cmwgPSB1cmwgKyAnJicgKyBnZXRRdWVyeVN0cmluZyhuZXcgRm9ybURhdGEoZm9ybSkpO1xuXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLXNlbmQnKTtcblx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tc3Vic2NyaWJlX19zdWJtaXQnKS5kaXNhYmxlZCA9IHRydWU7XG5cblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXHRcdFx0c2NyaXB0LnNyYyA9IHVybDtcblxuXHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG5cdFx0fSk7XG5cblx0fSk7XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLXN1YnNjcmliZScpKTsiLCIoIHN3aXBlckNvbnRhaW5lciA9PiB7XG5cblx0aWYoIXN3aXBlckNvbnRhaW5lci5sZW5ndGgpIHtcblxuXHRcdHJldHVybjtcblxuXHR9XG5cblx0bGV0IHN3aXBlckluaXQgPSB3aW5kb3cuU3dpcGVyO1xuXG5cdEFycmF5LmZyb20oc3dpcGVyQ29udGFpbmVyLCBzd2lwZSA9PiB7XG5cblx0XHRsZXQgbXlTd2lwZSA9IG51bGwsXG5cdFx0XHR0b2dnbGVTd2lwZSA9IG51bGwsXG5cdFx0XHRyZXNldFN3aXBlID0gbnVsbDtcblxuXHRcdGNvbnN0IHN3aXBlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0XHRpdGVtcyA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKSxcblx0XHRcdGNvdW50ID0gaXRlbXMubGVuZ3RoLFxuXHRcdFx0Y2FzZXMgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWNhc2VzJyk7XG5cblx0XHRzd2lwZU5hdi5jbGFzc05hbWUgPSAnc3dpcGVyLXBhZ2luYXRpb24nO1xuXHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3dpcGVOYXYpO1xuXG5cdFx0cmVzZXRTd2lwZSA9ICgpID0+IHtcblxuXHRcdFx0aWYobXlTd2lwZSkge1xuXG5cdFx0XHRcdG15U3dpcGUuZGVzdHJveShmYWxzZSx0cnVlKTtcblx0XHRcdFx0bXlTd2lwZSA9IHVuZGVmaW5lZDtcblxuXHRcdFx0fVxuXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cblx0XHR9XG5cblx0XHRyZXNldFN3aXBlKCk7XG5cblx0XHRpZiAoY2FzZXMpIHtcblxuXHRcdFx0Y29uc3QgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlc19fcHJvY2Vzcy1jdXJyZW50Jyk7XG5cblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xuXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcblxuXHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0XHRcdGN1cnJlbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xuXG5cdFx0XHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG5cblx0XHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcblx0XHRcdFx0XHRjdXJyZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG5cdFx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRcdFx0XHRhdXRvSGVpZ2h0OiB0cnVlLFxuXHRcdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXG5cdFx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcblx0XHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b246IHtcblx0XHRcdFx0XHRcdFx0c2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudC50ZXh0Q29udGVudCA9IChzd2lwZS5zd2lwZXIucmVhbEluZGV4ICUgY291bnQgKyAxKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnd2luZG93V2lkdGhSZXNpemUnLCAoKSA9PiB7XG5cblx0XHRcdGlmICh3aW5kb3cuU3dpcGVyICYmIHRvZ2dsZVN3aXBlKSB7XG5cblx0XHRcdFx0dG9nZ2xlU3dpcGUoKTtcblxuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0XHRpZih3aW5kb3cuU3dpcGVyICYmIHRvZ2dsZVN3aXBlKSB7XG5cblx0XHRcdHRvZ2dsZVN3aXBlKCk7XG5cblx0XHR9XG5cdFx0ZWxzZSB7XG5cblx0XHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3N3aXBlckpzTG9hZCcsIHRvZ2dsZVN3aXBlKTtcblxuXHRcdH1cblxuXHRcdGlmKCFzd2lwZXJJbml0KSB7XG5cblx0XHRcdHN3aXBlckluaXQgPSB0cnVlO1xuXG5cdFx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcblx0XHRcdHNjcmlwdC5zcmMgPSAnL2pzL3N3aXBlci5taW4uanMnO1xuXG5cdFx0XHRzY3JpcHQub25sb2FkID0gKCkgPT4gUHViU3ViLnB1Ymxpc2goJ3N3aXBlckpzTG9hZCcpO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCksIDEpO1xuXG5cdFx0fVxuXG5cdH0pO1xuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNvbnRhaW5lcicpKTsiXX0=
