/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ki_230_Git_10_horror_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_ki_230_Git_10_horror_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ki_230_Git_10_horror_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_ki_230_Git_10_horror_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ki_230_Git_10_horror_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/index.module.scss */ \"./src/styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/10-horror/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction IndexPage() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),\n      isInit = _useState[0],\n      setIsInit = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),\n      img = _useState2[0],\n      setImg = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),\n      text = _useState3[0],\n      setText = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      href = _useState4[0],\n      setHref = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('一部屋だけ異様に安い'),\n      novel = _useState5[0],\n      setNovel = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),\n      info = _useState6[0],\n      setInfo = _useState6[1];\n\n  var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n  var txtRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n  var WIDTH = 800;\n  var HEIGHT = 450;\n  var TXT_LENGTH = 10;\n  var TXT_SIZE = 80;\n  var SCALE = .9;\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    if (isInit) {\n      return;\n    }\n\n    (0,_Users_ki_230_Git_10_horror_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_ki_230_Git_10_horror_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var headers;\n      return _Users_ki_230_Git_10_horror_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              headers = {\n                'X-API-KEY': '973afc71-353d-4807-8a9e-b518b44d77dc'\n              };\n              _context.next = 3;\n              return Promise.all([axios__WEBPACK_IMPORTED_MODULE_4___default().get('https://10moji.microcms.io/api/v1/novel', {\n                headers: headers\n              }), axios__WEBPACK_IMPORTED_MODULE_4___default().get('https://10moji.microcms.io/api/v1/info', {\n                headers: headers\n              })]).then(function (res) {\n                setNovel(res[0].data.novel);\n                setInfo(res[1].data.contents.reverse());\n              });\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n\n    var imgElm = new Image();\n\n    imgElm.onload = function () {\n      setIsInit(true);\n      setImg(imgElm);\n    };\n\n    imgElm.src = './frame.png';\n    [].slice.call(document.querySelectorAll('[data-ga]')).forEach(function (elm) {\n      elm.addEventListener('click', function () {\n        handleClickGa(elm);\n      });\n    });\n    var txt = txtRef.current;\n    setInterval(function () {\n      setText((0,_Users_ki_230_Git_10_horror_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(txt.innerText.substr(0, TXT_LENGTH)));\n    }, 100);\n  }, [isInit]);\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    if (!img) {\n      return;\n    }\n\n    var canvas = canvasRef.current;\n    var ctx = canvas.getContext('2d');\n    var subCanvas = document.createElement('canvas');\n    var subCtx = subCanvas.getContext('2d');\n    render();\n\n    function render() {\n      subCanvas.width = WIDTH * 2;\n      subCanvas.height = HEIGHT * 2 * SCALE;\n      subCtx.save();\n      subCtx.fillStyle = '#000';\n      subCtx.textAlign = 'center';\n      subCtx.textBaseline = 'middle';\n      subCtx.font = \"\".concat(TXT_SIZE, \"px \\\"Shippori Mincho\\\"\");\n      subCtx.fillText((0,_Users_ki_230_Git_10_horror_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(text).join('  '), subCanvas.width / 2, subCanvas.height / 2);\n      subCtx.restore();\n      canvas.width = WIDTH;\n      canvas.height = HEIGHT;\n      ctx.save();\n      ctx.fillStyle = '#eee';\n      ctx.fillRect(0, 0, canvas.width, canvas.height);\n      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);\n      ctx.drawImage(subCanvas, 0, canvas.height * ((1 - SCALE) / 4) - 16, canvas.width, canvas.height);\n      ctx.restore();\n      setHref(canvas.toDataURL('image/png'));\n    }\n  }, [text]);\n\n  function handleClickGa(elm) {\n    window.gtag('event', String(elm.dataset.ga));\n  }\n\n  function getInfoItem(item, i) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().box),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: item.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        dangerouslySetInnerHTML: {\n          __html: item.html\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, this)]\n    }, i, true, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, this);\n  }\n\n  function getInfo() {\n    return info.map(function (item, i) {\n      return getInfoItem(item, i);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().index),\n    style: {\n      opacity: isInit ? 1 : 0\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: href\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      ref: txtRef,\n      className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().txt),\n      contentEditable: true,\n      suppressContentEditableWarning: true,\n      children: novel\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      id: \"btn-download\",\n      className: \"\".concat((_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().btn), \" \").concat((_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"btn-save\"])),\n      href: href,\n      target: \"_blank\",\n      children: \"\\u753B\\u50CF\\u3092\\u4FDD\\u5B58\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 7\n    }, this), getInfo()]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 129,\n    columnNumber: 5\n  }, this);\n}\n\n_s(IndexPage, \"dJTj0ctQ1q8GS+8PIwkqJTd88NE=\");\n\n_c = IndexPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInVzZVN0YXRlIiwiaXNJbml0Iiwic2V0SXNJbml0IiwiaW1nIiwic2V0SW1nIiwidGV4dCIsInNldFRleHQiLCJocmVmIiwic2V0SHJlZiIsIm5vdmVsIiwic2V0Tm92ZWwiLCJpbmZvIiwic2V0SW5mbyIsImNhbnZhc1JlZiIsInVzZVJlZiIsInR4dFJlZiIsIldJRFRIIiwiSEVJR0hUIiwiVFhUX0xFTkdUSCIsIlRYVF9TSVpFIiwiU0NBTEUiLCJ1c2VFZmZlY3QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsImFsbCIsImF4aW9zIiwidGhlbiIsInJlcyIsImRhdGEiLCJjb250ZW50cyIsInJldmVyc2UiLCJpbWdFbG0iLCJJbWFnZSIsIm9ubG9hZCIsInNyYyIsInNsaWNlIiwiY2FsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbG0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2tHYSIsInR4dCIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsImlubmVyVGV4dCIsInN1YnN0ciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJzdWJDYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic3ViQ3R4IiwicmVuZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJzYXZlIiwiZmlsbFN0eWxlIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZm9udCIsImZpbGxUZXh0Iiwiam9pbiIsInJlc3RvcmUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsInRvRGF0YVVSTCIsIndpbmRvdyIsImd0YWciLCJTdHJpbmciLCJkYXRhc2V0IiwiZ2EiLCJnZXRJbmZvSXRlbSIsIml0ZW0iLCJpIiwic3R5bGVzIiwidGl0bGUiLCJfX2h0bWwiLCJodG1sIiwiZ2V0SW5mbyIsIm1hcCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7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QUEsWUFERjtBQVNEOztBQUVELFdBQVNLLE9BQVQsR0FBbUI7QUFDakIsV0FBT3JFLElBQUksQ0FBQ3NFLEdBQUwsQ0FBUyxVQUFDUCxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUMzQixhQUFPRixXQUFXLENBQUNDLElBQUQsRUFBT0MsQ0FBUCxDQUFsQjtBQUNELEtBRk0sQ0FBUDtBQUdEOztBQUVELHNCQUNFO0FBQ0UsYUFBUyxFQUFHQyx3RUFEZDtBQUVFLFNBQUssRUFBRTtBQUFFTSxhQUFPLEVBQUVqRixNQUFNLEdBQUcsQ0FBSCxHQUFPO0FBQXhCLEtBRlQ7QUFBQSw0QkFJRTtBQUFBLDhCQUNFO0FBQVEsV0FBRyxFQUFHWTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssV0FBRyxFQUFHTjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVFFO0FBQ0UsU0FBRyxFQUFHUSxNQURSO0FBRUUsZUFBUyxFQUFHNkQsc0VBRmQ7QUFHRSxxQkFBZSxFQUFHLElBSHBCO0FBSUUsb0NBQThCLEVBQUcsSUFKbkM7QUFBQSxnQkFLR25FO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBY0U7QUFDRSxRQUFFLEVBQUMsY0FETDtBQUVFLGVBQVMsWUFBTW1FLHNFQUFOLGNBQW9CQSw4RUFBcEIsQ0FGWDtBQUdFLFVBQUksRUFBR3JFLElBSFQ7QUFJRSxZQUFNLEVBQUMsUUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLEVBb0JJeUUsT0FBTyxFQXBCWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0E3SXVCakYsUzs7S0FBQUEsUyIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGd0YWc6IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuICBjb25zdCBbIGlzSW5pdCwgc2V0SXNJbml0IF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgaW1nLCBzZXRJbWcgXSA9IHVzZVN0YXRlPEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbIHRleHQsIHNldFRleHQgXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgWyBocmVmLCBzZXRIcmVmIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgbm92ZWwsIHNldE5vdmVsIF0gPSB1c2VTdGF0ZSgn5LiA6YOo5bGL44Gg44GR55Ww5qeY44Gr5a6J44GEJyk7XG4gIGNvbnN0IFsgaW5mbywgc2V0SW5mbyBdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB0eHRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBXSURUSCA9IDgwMDtcbiAgY29uc3QgSEVJR0hUID0gNDUwO1xuICBjb25zdCBUWFRfTEVOR1RIID0gMTA7XG4gIGNvbnN0IFRYVF9TSVpFID0gODA7XG4gIGNvbnN0IFNDQUxFID0gLjk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNJbml0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7ICdYLUFQSS1LRVknOiAnOTczYWZjNzEtMzUzZC00ODA3LThhOWUtYjUxOGI0NGQ3N2RjJyB9O1xuXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly8xMG1vamkubWljcm9jbXMuaW8vYXBpL3YxL25vdmVsJywge1xuICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgfSksXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly8xMG1vamkubWljcm9jbXMuaW8vYXBpL3YxL2luZm8nLCB7XG4gICAgICAgICAgaGVhZGVyc1xuICAgICAgICB9KVxuICAgICAgXSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldE5vdmVsKHJlc1swXS5kYXRhLm5vdmVsKTtcbiAgICAgICAgc2V0SW5mbyhyZXNbMV0uZGF0YS5jb250ZW50cy5yZXZlcnNlKCkpO1xuICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGltZ0VsbSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgaW1nRWxtLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHNldElzSW5pdCh0cnVlKTtcbiAgICAgIHNldEltZyhpbWdFbG0pO1xuICAgIH07XG4gICAgaW1nRWxtLnNyYyA9ICcuL2ZyYW1lLnBuZyc7XG5cbiAgICAoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1nYV0nKSkpLmZvckVhY2goZnVuY3Rpb24oZWxtOiBIVE1MRWxlbWVudCkge1xuICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoYW5kbGVDbGlja0dhKGVsbSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHR4dCA9IHR4dFJlZi5jdXJyZW50O1xuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VGV4dChbLi4udHh0LmlubmVyVGV4dC5zdWJzdHIoMCwgVFhUX0xFTkdUSCldKTtcbiAgICB9LCAxMDApO1xuICB9LCBbaXNJbml0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWltZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IHN1YkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IHN1YkN0eCA9IHN1YkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgcmVuZGVyKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKTp2b2lkIHtcbiAgICAgIHN1YkNhbnZhcy53aWR0aCA9IFdJRFRIICogMjtcbiAgICAgIHN1YkNhbnZhcy5oZWlnaHQgPSBIRUlHSFQgKiAyICogU0NBTEU7XG5cbiAgICAgIHN1YkN0eC5zYXZlKCk7XG4gICAgICAgIHN1YkN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gICAgICAgIHN1YkN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgc3ViQ3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICBzdWJDdHguZm9udCA9IGAkeyBUWFRfU0laRSB9cHggXCJTaGlwcG9yaSBNaW5jaG9cImA7XG4gICAgICAgIHN1YkN0eC5maWxsVGV4dChbLi4udGV4dF0uam9pbignICAnKSwgc3ViQ2FudmFzLndpZHRoIC8gMiwgc3ViQ2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgc3ViQ3R4LnJlc3RvcmUoKTtcblxuICAgICAgY2FudmFzLndpZHRoID0gV0lEVEg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xuXG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNlZWUnO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3ViQ2FudmFzLCAwLCBjYW52YXMuaGVpZ2h0ICogKCgxIC0gU0NBTEUpIC8gNCkgLSAxNiwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgIHNldEhyZWYoY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJykpO1xuICAgIH1cbiAgfSwgW3RleHRdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbGlja0dhKGVsbTogSFRNTEVsZW1lbnQpIHtcbiAgICB3aW5kb3cuZ3RhZygnZXZlbnQnLCBTdHJpbmcoZWxtLmRhdGFzZXQuZ2EpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluZm9JdGVtKGl0ZW0sIGkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9eyBpIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLmJveCB9XG4gICAgICA+XG4gICAgICAgIDxoMT57IGl0ZW0udGl0bGUgfTwvaDE+XG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0uaHRtbH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICByZXR1cm4gaW5mby5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIHJldHVybiBnZXRJbmZvSXRlbShpdGVtLCBpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLmluZGV4IH1cbiAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IGlzSW5pdCA/IDEgOiAwIH19XG4gICAgPlxuICAgICAgPHA+XG4gICAgICAgIDxjYW52YXMgcmVmPXsgY2FudmFzUmVmIH0gLz5cbiAgICAgICAgPGltZyBzcmM9eyBocmVmIH0gLz5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXsgdHh0UmVmIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLnR4dCB9IFxuICAgICAgICBjb250ZW50RWRpdGFibGU9eyB0cnVlIH1cbiAgICAgICAgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nPXsgdHJ1ZSB9XG4gICAgICA+eyBub3ZlbCB9PC9kaXY+XG4gICAgICA8YVxuICAgICAgICBpZD1cImJ0bi1kb3dubG9hZFwiXG4gICAgICAgIGNsYXNzTmFtZT17IGAke3N0eWxlcy5idG59ICR7c3R5bGVzWydidG4tc2F2ZSddfWAgfVxuICAgICAgICBocmVmPXsgaHJlZiB9XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICA+55S75YOP44KS5L+d5a2YPC9hPlxuICAgICAgeyBnZXRJbmZvKCkgfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});