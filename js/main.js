!function(){var __webpack_modules__={"./src/js/main.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){eval('const sum = __webpack_require__(/*! ./module/sum.js */ "./src/js/module/sum.js");\r\nconsole.log("Функция суммы");\r\nconsole.log(sum(2, 10));\r\nconsole.log(sum(12, 110));\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?')},"./src/js/module/sum.js":function(module){eval("module.exports = (a, b) => a + b;\n\n//# sourceURL=webpack://gulp-start/./src/js/module/sum.js?")}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var s=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](s,s.exports,__webpack_require__),s.exports}var __webpack_exports__=__webpack_require__("./src/js/main.js")}();