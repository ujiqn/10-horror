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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ki_230_Git_10_horror_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.module.scss */ \"./src/styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/10-horror/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction IndexPage() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isInit = _useState[0],\n      setIsInit = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      img = _useState2[0],\n      setImg = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      text = _useState3[0],\n      setText = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      href = _useState4[0],\n      setHref = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('一部屋だけ異様に安い'),\n      novel = _useState5[0],\n      setNovel = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      news = _useState6[0],\n      setNews = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      books = _useState7[0],\n      setBooks = _useState7[1];\n\n  var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var txtRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var WIDTH = 800;\n  var HEIGHT = 450;\n  var TXT_LENGTH = 10;\n  var TXT_SIZE = 80;\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (isInit) {\n      return;\n    }\n\n    var imgElm = new Image();\n\n    imgElm.onload = function () {\n      setIsInit(true);\n      setImg(imgElm);\n    };\n\n    imgElm.src = './frame.png'; // ([].slice.call(document.querySelectorAll('[data-ga]'))).forEach(function(elm: HTMLElement) {\n    //   elm.addEventListener('click', () => {\n    //     handleClickGa(elm);\n    //   });\n    // });\n\n    var txt = txtRef.current;\n    setInterval(function () {\n      setText((0,_Users_ki_230_Git_10_horror_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(txt.innerText.substr(0, TXT_LENGTH)));\n    }, 100);\n  }, [isInit]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (!img) {\n      return;\n    }\n\n    var canvas = canvasRef.current;\n    var ctx = canvas.getContext('2d');\n    var subCanvas = document.createElement('canvas');\n    var subCtx = subCanvas.getContext('2d');\n    render();\n\n    function render() {\n      subCanvas.width = WIDTH * 2;\n      subCanvas.height = HEIGHT * 2 * .5; // ctx.save();\n      //   ctx.drawImage(img, 0, 0);\n      // ctx.restore();\n\n      subCtx.save();\n      subCtx.fillStyle = '#eee';\n      subCtx.fillRect(0, 0, subCanvas.width, subCanvas.height);\n      subCtx.restore();\n      subCtx.save();\n      subCtx.fillStyle = '#000';\n      subCtx.textAlign = 'center';\n      subCtx.textBaseline = 'middle';\n      subCtx.font = \"\".concat(TXT_SIZE, \"px \\\"Shippori Mincho\\\"\");\n      subCtx.fillText((0,_Users_ki_230_Git_10_horror_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(text).join('  '), subCanvas.width / 2, subCanvas.height / 2);\n      subCtx.restore();\n      canvas.width = WIDTH;\n      canvas.height = HEIGHT;\n      ctx.drawImage(subCanvas, 0, 0, canvas.width, canvas.height);\n      setHref(canvas.toDataURL('image/png'));\n    }\n  }, [text]);\n\n  function handleClickGa(elm) {\n    window.gtag('event', String(elm.dataset.ga));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().index),\n    style: {\n      opacity: isInit ? 1 : 0\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n      ref: canvasRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      ref: txtRef,\n      className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().txt),\n      contentEditable: true,\n      suppressContentEditableWarning: true,\n      children: novel\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      id: \"btn-download\",\n      className: \"\".concat((_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btn), \" \").concat((_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"btn-save\"])),\n      href: href,\n      download: \"54\",\n      children: \"\\u753B\\u50CF\\u3092\\u4FDD\\u5B58\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 5\n  }, this);\n}\n\n_s(IndexPage, \"2GkaCLkZH50ZAjU9p9JwPHWswbo=\");\n\n_c = IndexPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInVzZVN0YXRlIiwiaXNJbml0Iiwic2V0SXNJbml0IiwiaW1nIiwic2V0SW1nIiwidGV4dCIsInNldFRleHQiLCJocmVmIiwic2V0SHJlZiIsIm5vdmVsIiwic2V0Tm92ZWwiLCJuZXdzIiwic2V0TmV3cyIsImJvb2tzIiwic2V0Qm9va3MiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ0eHRSZWYiLCJXSURUSCIsIkhFSUdIVCIsIlRYVF9MRU5HVEgiLCJUWFRfU0laRSIsInVzZUVmZmVjdCIsImltZ0VsbSIsIkltYWdlIiwib25sb2FkIiwic3JjIiwidHh0IiwiY3VycmVudCIsInNldEludGVydmFsIiwiaW5uZXJUZXh0Iiwic3Vic3RyIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN1YkNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN1YkN0eCIsInJlbmRlciIsIndpZHRoIiwiaGVpZ2h0Iiwic2F2ZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicmVzdG9yZSIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZvbnQiLCJmaWxsVGV4dCIsImpvaW4iLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJoYW5kbGVDbGlja0dhIiwiZWxtIiwid2luZG93IiwiZ3RhZyIsIlN0cmluZyIsImRhdGFzZXQiLCJnYSIsInN0eWxlcyIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFRZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ0pDLCtDQUFRLENBQUMsS0FBRCxDQURKO0FBQUEsTUFDMUJDLE1BRDBCO0FBQUEsTUFDbEJDLFNBRGtCOztBQUFBLG1CQUVWRiwrQ0FBUSxDQUFtQixJQUFuQixDQUZFO0FBQUEsTUFFMUJHLEdBRjBCO0FBQUEsTUFFckJDLE1BRnFC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OEVBQXBCLENBRlg7QUFHRSxVQUFJLEVBQUdyRCxJQUhUO0FBSUUsY0FBUSxFQUFDLElBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7R0F6R3VCUixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2Nzcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgZ3RhZzogKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XG4gIGNvbnN0IFsgaXNJbml0LCBzZXRJc0luaXQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBpbWcsIHNldEltZyBdID0gdXNlU3RhdGU8SFRNTEltYWdlRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFsgdGV4dCwgc2V0VGV4dCBdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbIGhyZWYsIHNldEhyZWYgXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgWyBub3ZlbCwgc2V0Tm92ZWwgXSA9IHVzZVN0YXRlKCfkuIDpg6jlsYvjgaDjgZHnlbDmp5jjgavlronjgYQnKTtcbiAgY29uc3QgWyBuZXdzLCBzZXROZXdzIF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFsgYm9va3MsIHNldEJvb2tzIF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHR4dFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFdJRFRIID0gODAwO1xuICBjb25zdCBIRUlHSFQgPSA0NTA7XG4gIGNvbnN0IFRYVF9MRU5HVEggPSAxMDtcbiAgY29uc3QgVFhUX1NJWkUgPSA4MDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0luaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbWdFbG0gPSBuZXcgSW1hZ2UoKTtcblxuICAgIGltZ0VsbS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzZXRJc0luaXQodHJ1ZSk7XG4gICAgICBzZXRJbWcoaW1nRWxtKTtcbiAgICB9O1xuICAgIGltZ0VsbS5zcmMgPSAnLi9mcmFtZS5wbmcnO1xuXG4gICAgLy8gKFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZ2FdJykpKS5mb3JFYWNoKGZ1bmN0aW9uKGVsbTogSFRNTEVsZW1lbnQpIHtcbiAgICAvLyAgIGVsbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgaGFuZGxlQ2xpY2tHYShlbG0pO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG5cbiAgICBjb25zdCB0eHQgPSB0eHRSZWYuY3VycmVudDtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFRleHQoWy4uLnR4dC5pbm5lclRleHQuc3Vic3RyKDAsIFRYVF9MRU5HVEgpXSk7XG4gICAgfSwgMTAwKTtcbiAgfSwgW2lzSW5pdF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBzdWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBzdWJDdHggPSBzdWJDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHJlbmRlcigpO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCk6dm9pZCB7XG4gICAgICBzdWJDYW52YXMud2lkdGggPSBXSURUSCAqIDI7XG4gICAgICBzdWJDYW52YXMuaGVpZ2h0ID0gSEVJR0hUICogMiAqIC41O1xuXG4gICAgICAvLyBjdHguc2F2ZSgpO1xuICAgICAgLy8gICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAvLyBjdHgucmVzdG9yZSgpO1xuXG4gICAgICBzdWJDdHguc2F2ZSgpO1xuICAgICAgICBzdWJDdHguZmlsbFN0eWxlID0gJyNlZWUnO1xuICAgICAgICBzdWJDdHguZmlsbFJlY3QoMCwgMCwgc3ViQ2FudmFzLndpZHRoLCBzdWJDYW52YXMuaGVpZ2h0KTtcbiAgICAgIHN1YkN0eC5yZXN0b3JlKCk7XG4gICAgICBzdWJDdHguc2F2ZSgpO1xuICAgICAgICBzdWJDdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICAgICAgICBzdWJDdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIHN1YkN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgICAgc3ViQ3R4LmZvbnQgPSBgJHsgVFhUX1NJWkUgfXB4IFwiU2hpcHBvcmkgTWluY2hvXCJgO1xuICAgICAgICBzdWJDdHguZmlsbFRleHQoWy4uLnRleHRdLmpvaW4oJyAgJyksIHN1YkNhbnZhcy53aWR0aCAvIDIsIHN1YkNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgIHN1YkN0eC5yZXN0b3JlKCk7XG5cbiAgICAgIGNhbnZhcy53aWR0aCA9IFdJRFRIO1xuICAgICAgY2FudmFzLmhlaWdodCA9IEhFSUdIVDtcbiAgICAgIGN0eC5kcmF3SW1hZ2Uoc3ViQ2FudmFzLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICBzZXRIcmVmKGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpKTtcbiAgICB9XG4gIH0sIFt0ZXh0XSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tHYShlbG06IEhUTUxFbGVtZW50KSB7XG4gICAgd2luZG93Lmd0YWcoJ2V2ZW50JywgU3RyaW5nKGVsbS5kYXRhc2V0LmdhKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17IHN0eWxlcy5pbmRleCB9XG4gICAgICBzdHlsZT17eyBvcGFjaXR5OiBpc0luaXQgPyAxIDogMCB9fVxuICAgICA+XG4gICAgICA8Y2FudmFzIHJlZj17IGNhbnZhc1JlZiB9IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17IHR4dFJlZiB9XG4gICAgICAgIGNsYXNzTmFtZT17IHN0eWxlcy50eHQgfSBcbiAgICAgICAgY29udGVudEVkaXRhYmxlPXsgdHJ1ZSB9XG4gICAgICAgIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZz17IHRydWUgfVxuICAgICAgPnsgbm92ZWwgfTwvZGl2PlxuICAgICAgPGFcbiAgICAgICAgaWQ9XCJidG4tZG93bmxvYWRcIlxuICAgICAgICBjbGFzc05hbWU9eyBgJHtzdHlsZXMuYnRufSAke3N0eWxlc1snYnRuLXNhdmUnXX1gIH1cbiAgICAgICAgaHJlZj17IGhyZWYgfVxuICAgICAgICBkb3dubG9hZD1cIjU0XCJcbiAgICAgID7nlLvlg4/jgpLkv53lrZg8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});