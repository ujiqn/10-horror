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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ki_230_Git_10_horror_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.module.scss */ \"./src/styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/10-horror/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction IndexPage() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isInit = _useState[0],\n      setIsInit = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      img = _useState2[0],\n      setImg = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      text = _useState3[0],\n      setText = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      href = _useState4[0],\n      setHref = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('一部屋だけ異様に安い'),\n      novel = _useState5[0],\n      setNovel = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      news = _useState6[0],\n      setNews = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      books = _useState7[0],\n      setBooks = _useState7[1];\n\n  var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var txtRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var WIDTH = 800;\n  var HEIGHT = 450;\n  var TXT_LENGTH = 10;\n  var TXT_SIZE = 80;\n  var SCALE = .9;\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (isInit) {\n      return;\n    }\n\n    var imgElm = new Image();\n\n    imgElm.onload = function () {\n      setIsInit(true);\n      setImg(imgElm);\n    };\n\n    imgElm.src = './frame.png';\n    [].slice.call(document.querySelectorAll('[data-ga]')).forEach(function (elm) {\n      elm.addEventListener('click', function () {\n        handleClickGa(elm);\n      });\n    });\n    var txt = txtRef.current;\n    setInterval(function () {\n      setText((0,_Users_ki_230_Git_10_horror_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(txt.innerText.substr(0, TXT_LENGTH)));\n    }, 100);\n  }, [isInit]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (!img) {\n      return;\n    }\n\n    var canvas = canvasRef.current;\n    var ctx = canvas.getContext('2d');\n    var subCanvas = document.createElement('canvas');\n    var subCtx = subCanvas.getContext('2d');\n    render();\n\n    function render() {\n      subCanvas.width = WIDTH * 2;\n      subCanvas.height = HEIGHT * 2 * SCALE;\n      subCtx.save();\n      subCtx.fillStyle = '#000';\n      subCtx.textAlign = 'center';\n      subCtx.textBaseline = 'middle';\n      subCtx.font = \"\".concat(TXT_SIZE, \"px \\\"Shippori Mincho\\\"\");\n      subCtx.fillText((0,_Users_ki_230_Git_10_horror_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(text).join('  '), subCanvas.width / 2, subCanvas.height / 2);\n      subCtx.restore();\n      canvas.width = WIDTH;\n      canvas.height = HEIGHT;\n      ctx.save();\n      ctx.fillStyle = '#eee';\n      ctx.fillRect(0, 0, canvas.width, canvas.height);\n      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);\n      ctx.drawImage(subCanvas, 0, canvas.height * ((1 - SCALE) / 4) - 16, canvas.width, canvas.height);\n      ctx.restore();\n      setHref(canvas.toDataURL('image/png'));\n    }\n  }, [text]);\n\n  function handleClickGa(elm) {\n    window.gtag('event', String(elm.dataset.ga));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().index),\n    style: {\n      opacity: isInit ? 1 : 0\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n      ref: canvasRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      ref: txtRef,\n      className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().txt),\n      contentEditable: true,\n      suppressContentEditableWarning: true,\n      children: novel\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      id: \"btn-download\",\n      className: \"\".concat((_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btn), \" \").concat((_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"btn-save\"])) // href={ href }\n      // target=\"_blank\"\n      ,\n      onClick: function onClick() {\n        return window.open(href);\n      },\n      children: \"\\u753B\\u50CF\\u3092\\u4FDD\\u5B58\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 5\n  }, this);\n}\n\n_s(IndexPage, \"2GkaCLkZH50ZAjU9p9JwPHWswbo=\");\n\n_c = IndexPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInVzZVN0YXRlIiwiaXNJbml0Iiwic2V0SXNJbml0IiwiaW1nIiwic2V0SW1nIiwidGV4dCIsInNldFRleHQiLCJocmVmIiwic2V0SHJlZiIsIm5vdmVsIiwic2V0Tm92ZWwiLCJuZXdzIiwic2V0TmV3cyIsImJvb2tzIiwic2V0Qm9va3MiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ0eHRSZWYiLCJXSURUSCIsIkhFSUdIVCIsIlRYVF9MRU5HVEgiLCJUWFRfU0laRSIsIlNDQUxFIiwidXNlRWZmZWN0IiwiaW1nRWxtIiwiSW1hZ2UiLCJvbmxvYWQiLCJzcmMiLCJzbGljZSIsImNhbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrR2EiLCJ0eHQiLCJjdXJyZW50Iiwic2V0SW50ZXJ2YWwiLCJpbm5lclRleHQiLCJzdWJzdHIiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3ViQ2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInN1YkN0eCIsInJlbmRlciIsIndpZHRoIiwiaGVpZ2h0Iiwic2F2ZSIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZvbnQiLCJmaWxsVGV4dCIsImpvaW4iLCJyZXN0b3JlIiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJ3aW5kb3ciLCJndGFnIiwiU3RyaW5nIiwiZGF0YXNldCIsImdhIiwic3R5bGVzIiwib3BhY2l0eSIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFRZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ0pDLCtDQUFRLENBQUMsS0FBRCxDQURKO0FBQUEsTUFDMUJDLE1BRDBCO0FBQUEsTUFDbEJD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QUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaLEVBQXFCQyxNQUFNLENBQUM5QixHQUFHLENBQUMrQixPQUFKLENBQVlDLEVBQWIsQ0FBM0I7QUFDRDs7QUFFRCxzQkFDRTtBQUNFLGFBQVMsRUFBR0Msd0VBRGQ7QUFFRSxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFbEUsTUFBTSxHQUFHLENBQUgsR0FBTztBQUF4QixLQUZUO0FBQUEsNEJBSUU7QUFBUSxTQUFHLEVBQUdjO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFDRSxTQUFHLEVBQUdFLE1BRFI7QUFFRSxlQUFTLEVBQUdpRCxzRUFGZDtBQUdFLHFCQUFlLEVBQUcsSUFIcEI7QUFJRSxvQ0FBOEIsRUFBRyxJQUpuQztBQUFBLGdCQUtHekQ7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFXRTtBQUNFLFFBQUUsRUFBQyxjQURMO0FBRUUsZUFBUyxZQUFNeUQsc0VBQU4sY0FBb0JBLDhFQUFwQixDQUZYLENBR0U7QUFDQTtBQUpGO0FBS0UsYUFBTyxFQUFHO0FBQUEsZUFBTUwsTUFBTSxDQUFDTyxJQUFQLENBQVk3RCxJQUFaLENBQU47QUFBQSxPQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0dBekd1QlIsUzs7S0FBQUEsUyIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGd0YWc6IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuICBjb25zdCBbIGlzSW5pdCwgc2V0SXNJbml0IF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgaW1nLCBzZXRJbWcgXSA9IHVzZVN0YXRlPEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbIHRleHQsIHNldFRleHQgXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgWyBocmVmLCBzZXRIcmVmIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgbm92ZWwsIHNldE5vdmVsIF0gPSB1c2VTdGF0ZSgn5LiA6YOo5bGL44Gg44GR55Ww5qeY44Gr5a6J44GEJyk7XG4gIGNvbnN0IFsgbmV3cywgc2V0TmV3cyBdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbIGJvb2tzLCBzZXRCb29rcyBdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB0eHRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBXSURUSCA9IDgwMDtcbiAgY29uc3QgSEVJR0hUID0gNDUwO1xuICBjb25zdCBUWFRfTEVOR1RIID0gMTA7XG4gIGNvbnN0IFRYVF9TSVpFID0gODA7XG4gIGNvbnN0IFNDQUxFID0gLjk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNJbml0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW1nRWxtID0gbmV3IEltYWdlKCk7XG5cbiAgICBpbWdFbG0ub25sb2FkID0gKCkgPT4ge1xuICAgICAgc2V0SXNJbml0KHRydWUpO1xuICAgICAgc2V0SW1nKGltZ0VsbSk7XG4gICAgfTtcbiAgICBpbWdFbG0uc3JjID0gJy4vZnJhbWUucG5nJztcblxuICAgIChbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWdhXScpKSkuZm9yRWFjaChmdW5jdGlvbihlbG06IEhUTUxFbGVtZW50KSB7XG4gICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGhhbmRsZUNsaWNrR2EoZWxtKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdHh0ID0gdHh0UmVmLmN1cnJlbnQ7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUZXh0KFsuLi50eHQuaW5uZXJUZXh0LnN1YnN0cigwLCBUWFRfTEVOR1RIKV0pO1xuICAgIH0sIDEwMCk7XG4gIH0sIFtpc0luaXRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaW1nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3Qgc3ViQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3Qgc3ViQ3R4ID0gc3ViQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICByZW5kZXIoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpOnZvaWQge1xuICAgICAgc3ViQ2FudmFzLndpZHRoID0gV0lEVEggKiAyO1xuICAgICAgc3ViQ2FudmFzLmhlaWdodCA9IEhFSUdIVCAqIDIgKiBTQ0FMRTtcblxuICAgICAgc3ViQ3R4LnNhdmUoKTtcbiAgICAgICAgc3ViQ3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgc3ViQ3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICBzdWJDdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgIHN1YkN0eC5mb250ID0gYCR7IFRYVF9TSVpFIH1weCBcIlNoaXBwb3JpIE1pbmNob1wiYDtcbiAgICAgICAgc3ViQ3R4LmZpbGxUZXh0KFsuLi50ZXh0XS5qb2luKCcgICcpLCBzdWJDYW52YXMud2lkdGggLyAyLCBzdWJDYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICBzdWJDdHgucmVzdG9yZSgpO1xuXG4gICAgICBjYW52YXMud2lkdGggPSBXSURUSDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBIRUlHSFQ7XG5cbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2VlZSc7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShzdWJDYW52YXMsIDAsIGNhbnZhcy5oZWlnaHQgKiAoKDEgLSBTQ0FMRSkgLyA0KSAtIDE2LCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcblxuICAgICAgc2V0SHJlZihjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSk7XG4gICAgfVxuICB9LCBbdGV4dF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrR2EoZWxtOiBIVE1MRWxlbWVudCkge1xuICAgIHdpbmRvdy5ndGFnKCdldmVudCcsIFN0cmluZyhlbG0uZGF0YXNldC5nYSkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9eyBzdHlsZXMuaW5kZXggfVxuICAgICAgc3R5bGU9e3sgb3BhY2l0eTogaXNJbml0ID8gMSA6IDAgfX1cbiAgICAgPlxuICAgICAgPGNhbnZhcyByZWY9eyBjYW52YXNSZWYgfSAvPlxuICAgICAgPGRpdlxuICAgICAgICByZWY9eyB0eHRSZWYgfVxuICAgICAgICBjbGFzc05hbWU9eyBzdHlsZXMudHh0IH0gXG4gICAgICAgIGNvbnRlbnRFZGl0YWJsZT17IHRydWUgfVxuICAgICAgICBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9eyB0cnVlIH1cbiAgICAgID57IG5vdmVsIH08L2Rpdj5cbiAgICAgIDxhXG4gICAgICAgIGlkPVwiYnRuLWRvd25sb2FkXCJcbiAgICAgICAgY2xhc3NOYW1lPXsgYCR7c3R5bGVzLmJ0bn0gJHtzdHlsZXNbJ2J0bi1zYXZlJ119YCB9XG4gICAgICAgIC8vIGhyZWY9eyBocmVmIH1cbiAgICAgICAgLy8gdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgb25DbGljaz17ICgpID0+IHdpbmRvdy5vcGVuKGhyZWYpIH1cbiAgICAgID7nlLvlg4/jgpLkv53lrZg8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});