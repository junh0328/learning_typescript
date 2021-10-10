"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var index_esm = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Header/index.jsx






const HeaderCss = [".header-wrapper.jsx-1922051808{padding:14px 14px;background-color:#24292e;line-height:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header-search-form.jsx-1922051808 input.jsx-1922051808{margin:0px 16px;background-color:hsla(0,0%,100%,0.125);width:300px;height:28px;border:none;border-radius:5px;outline:none;color:white;padding:0px 12px;font-size:14px;font-weight:bold;}", ".header-navagations.jsx-1922051808 a.jsx-1922051808{color:white;margin-right:16px;font-size:14px;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;}"];
HeaderCss.__hash = "1922051808";

const Header = () => {
  const {
    0: username,
    1: setUsername
  } = (0,external_react_.useState)('');
  const router = (0,router_.useRouter)();

  const onSubmit = e => {
    e.preventDefault();
    router.push(`/users/${username}`);
    setUsername('');
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `jsx-${HeaderCss.__hash}`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `jsx-${HeaderCss.__hash}` + " " + "header-wrapper",
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoLogoGithub */.JOq, {
        color: "white",
        size: 36
      }), /*#__PURE__*/jsx_runtime_.jsx("form", {
        onSubmit: onSubmit,
        className: `jsx-${HeaderCss.__hash}` + " " + "header-search-form",
        children: /*#__PURE__*/jsx_runtime_.jsx("input", {
          value: username,
          onChange: e => setUsername(e.target.value),
          className: `jsx-${HeaderCss.__hash}`
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: `jsx-${HeaderCss.__hash}` + " " + "header-navagations",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://github.com/pulls",
          className: `jsx-${HeaderCss.__hash}`,
          children: "Pull requests"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://github.com/issues",
          className: `jsx-${HeaderCss.__hash}`,
          children: "Issues"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://github.com/marketplace",
          className: `jsx-${HeaderCss.__hash}`,
          children: "Marketplace"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://github.com/explore",
          className: `jsx-${HeaderCss.__hash}`,
          children: "Explore"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: HeaderCss.__hash,
      children: HeaderCss
    })]
  });
};

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./pages/_app.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      className: "jsx-903634984" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
    })), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "903634984",
      children: ["body{margin:0;font-family:Noto Sans,Noto Sans KR;}"]
    })]
  });
};

/* harmony default export */ const _app = (MyApp); // font-family: 'Nanum Myeongjo', serif;

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3289:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [127,649], () => (__webpack_exec__(8991)));
module.exports = __webpack_exports__;

})();