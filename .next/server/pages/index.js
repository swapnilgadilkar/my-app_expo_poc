"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/VideoScreen.tsx":
/*!************************************!*\
  !*** ./components/VideoScreen.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VideoScreen)\n/* harmony export */ });\n/* harmony import */ var expo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! expo */ \"./node_modules/expo/src/Expo.ts\");\n/* harmony import */ var expo_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! expo-video */ \"./node_modules/expo-video/build/index.js\");\n/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web/dist/exports/StyleSheet */ \"./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/exports/View */ \"./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_web_dist_exports_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web/dist/exports/Button */ \"./node_modules/react-native-web/dist/exports/Button/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName=\"/Users/swapnilgadilkar/Documents/Swapnil_Mono/my-app/components/VideoScreen.tsx\";const videoSource=\"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4\";function VideoScreen(){const player=(0,expo_video__WEBPACK_IMPORTED_MODULE_1__.useVideoPlayer)(videoSource,player=>{player.loop=true;player.play();});const{isPlaying}=(0,expo__WEBPACK_IMPORTED_MODULE_2__.useEvent)(player,\"playingChange\",{isPlaying:player.playing});return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{style:styles.contentContainer,children:[(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(expo_video__WEBPACK_IMPORTED_MODULE_1__.VideoView,{style:styles.video,player:player,allowsFullscreen:true,allowsPictureInPicture:true},void 0,false,{fileName:_jsxFileName,lineNumber:20,columnNumber:7},this),(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{style:styles.controlsContainer,children:(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web_dist_exports_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{title:isPlaying?\"Pause\":\"Play\",onPress:()=>{if(isPlaying){player.pause();}else{player.play();}}},void 0,false,{fileName:_jsxFileName,lineNumber:27,columnNumber:9},this)},void 0,false,{fileName:_jsxFileName,lineNumber:26,columnNumber:7},this)]},void 0,true,{fileName:_jsxFileName,lineNumber:19,columnNumber:5},this);}const styles=react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_5__[\"default\"].create({contentContainer:{flex:1,padding:10,alignItems:\"center\",justifyContent:\"center\",paddingHorizontal:50},video:{width:350,height:275},controlsContainer:{padding:10}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvU2NyZWVuLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEdBQUksQ0FBQUEsWUFBWSxDQUFDLGlGQUFpRixDQUFpVCxLQUFNLENBQUFTLFdBQVcsQ0FBQyxvRkFBb0YsQ0FBZ0IsUUFBUyxDQUFBQyxXQUFXQSxDQUFBLENBQUUsQ0FBQyxLQUFNLENBQUFDLE1BQU0sQ0FBQ1QsMERBQWMsQ0FBQ08sV0FBVyxDQUFDRSxNQUFNLEVBQUUsQ0FBQ0EsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDRCxNQUFNLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDQyxTQUFTLENBQUMsQ0FBQ2IsOENBQVEsQ0FBQ1UsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDRyxTQUFTLENBQUNILE1BQU0sQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFPLENBQUFQLDZEQUFPLENBQUNILDBFQUFJLENBQUMsQ0FBQ1csS0FBSyxDQUFDQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDQyxRQUFRLENBQUMsQ0FBQ1gsNkRBQU8sQ0FBQ0wsaURBQVMsQ0FBQyxDQUFDYSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0csS0FBSyxDQUFDVCxNQUFNLENBQUNBLE1BQU0sQ0FBQ1UsZ0JBQWdCLENBQUMsSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQ0MsUUFBUSxDQUFDdkIsWUFBWSxDQUFDd0IsVUFBVSxDQUFDLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDakIsNkRBQU8sQ0FBQ0gsMEVBQUksQ0FBQyxDQUFDVyxLQUFLLENBQUNDLE1BQU0sQ0FBQ1MsaUJBQWlCLENBQUNQLFFBQVEsQ0FBQ1gsNkRBQU8sQ0FBQ0YsNEVBQU0sQ0FBQyxDQUFDcUIsS0FBSyxDQUFDYixTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQ2MsT0FBTyxDQUFDQSxDQUFBLEdBQUksQ0FBQyxHQUFHZCxTQUFTLENBQUMsQ0FBQ0gsTUFBTSxDQUFDa0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQ2xCLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUssRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDVSxRQUFRLENBQUN2QixZQUFZLENBQUN3QixVQUFVLENBQUMsRUFBRSxDQUFDQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQ0YsUUFBUSxDQUFDdkIsWUFBWSxDQUFDd0IsVUFBVSxDQUFDLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFLLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0YsUUFBUSxDQUFDdkIsWUFBWSxDQUFDd0IsVUFBVSxDQUFDLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBTSxDQUFBUixNQUFNLENBQUNiLHVGQUFpQixDQUFDLENBQUNjLGdCQUFnQixDQUFDLENBQUNhLElBQUksQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLFVBQVUsQ0FBQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUNDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDZixLQUFLLENBQUMsQ0FBQ2dCLEtBQUssQ0FBQyxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1gsaUJBQWlCLENBQUMsQ0FBQ00sT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL1ZpZGVvU2NyZWVuLnRzeD9mN2NlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfanN4RmlsZU5hbWU9XCIvVXNlcnMvc3dhcG5pbGdhZGlsa2FyL0RvY3VtZW50cy9Td2FwbmlsX01vbm8vbXktYXBwL2NvbXBvbmVudHMvVmlkZW9TY3JlZW4udHN4XCI7aW1wb3J0e3VzZUV2ZW50fWZyb21cImV4cG9cIjtpbXBvcnR7dXNlVmlkZW9QbGF5ZXIsVmlkZW9WaWV3fWZyb21cImV4cG8tdmlkZW9cIjtpbXBvcnQgU3R5bGVTaGVldCBmcm9tXCJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvZXhwb3J0cy9TdHlsZVNoZWV0XCI7aW1wb3J0IFZpZXcgZnJvbVwicmVhY3QtbmF0aXZlLXdlYi9kaXN0L2V4cG9ydHMvVmlld1wiO2ltcG9ydCBCdXR0b24gZnJvbVwicmVhY3QtbmF0aXZlLXdlYi9kaXN0L2V4cG9ydHMvQnV0dG9uXCI7aW1wb3J0e2pzeERFViBhcyBfanN4REVWfWZyb21cInJlYWN0L2pzeC1kZXYtcnVudGltZVwiO2NvbnN0IHZpZGVvU291cmNlPVwiaHR0cHM6Ly9jb21tb25kYXRhc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9ndHYtdmlkZW9zLWJ1Y2tldC9zYW1wbGUvQmlnQnVja0J1bm55Lm1wNFwiO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvU2NyZWVuKCl7Y29uc3QgcGxheWVyPXVzZVZpZGVvUGxheWVyKHZpZGVvU291cmNlLHBsYXllcj0+e3BsYXllci5sb29wPXRydWU7cGxheWVyLnBsYXkoKTt9KTtjb25zdHtpc1BsYXlpbmd9PXVzZUV2ZW50KHBsYXllcixcInBsYXlpbmdDaGFuZ2VcIix7aXNQbGF5aW5nOnBsYXllci5wbGF5aW5nfSk7cmV0dXJuIF9qc3hERVYoVmlldyx7c3R5bGU6c3R5bGVzLmNvbnRlbnRDb250YWluZXIsY2hpbGRyZW46W19qc3hERVYoVmlkZW9WaWV3LHtzdHlsZTpzdHlsZXMudmlkZW8scGxheWVyOnBsYXllcixhbGxvd3NGdWxsc2NyZWVuOnRydWUsYWxsb3dzUGljdHVyZUluUGljdHVyZTp0cnVlfSx2b2lkIDAsZmFsc2Use2ZpbGVOYW1lOl9qc3hGaWxlTmFtZSxsaW5lTnVtYmVyOjIwLGNvbHVtbk51bWJlcjo3fSx0aGlzKSxfanN4REVWKFZpZXcse3N0eWxlOnN0eWxlcy5jb250cm9sc0NvbnRhaW5lcixjaGlsZHJlbjpfanN4REVWKEJ1dHRvbix7dGl0bGU6aXNQbGF5aW5nP1wiUGF1c2VcIjpcIlBsYXlcIixvblByZXNzOigpPT57aWYoaXNQbGF5aW5nKXtwbGF5ZXIucGF1c2UoKTt9ZWxzZXtwbGF5ZXIucGxheSgpO319fSx2b2lkIDAsZmFsc2Use2ZpbGVOYW1lOl9qc3hGaWxlTmFtZSxsaW5lTnVtYmVyOjI3LGNvbHVtbk51bWJlcjo5fSx0aGlzKX0sdm9pZCAwLGZhbHNlLHtmaWxlTmFtZTpfanN4RmlsZU5hbWUsbGluZU51bWJlcjoyNixjb2x1bW5OdW1iZXI6N30sdGhpcyldfSx2b2lkIDAsdHJ1ZSx7ZmlsZU5hbWU6X2pzeEZpbGVOYW1lLGxpbmVOdW1iZXI6MTksY29sdW1uTnVtYmVyOjV9LHRoaXMpO31jb25zdCBzdHlsZXM9U3R5bGVTaGVldC5jcmVhdGUoe2NvbnRlbnRDb250YWluZXI6e2ZsZXg6MSxwYWRkaW5nOjEwLGFsaWduSXRlbXM6XCJjZW50ZXJcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLHBhZGRpbmdIb3Jpem9udGFsOjUwfSx2aWRlbzp7d2lkdGg6MzUwLGhlaWdodDoyNzV9LGNvbnRyb2xzQ29udGFpbmVyOntwYWRkaW5nOjEwfX0pOyJdLCJuYW1lcyI6WyJfanN4RmlsZU5hbWUiLCJ1c2VFdmVudCIsInVzZVZpZGVvUGxheWVyIiwiVmlkZW9WaWV3IiwiU3R5bGVTaGVldCIsIlZpZXciLCJCdXR0b24iLCJqc3hERVYiLCJfanN4REVWIiwidmlkZW9Tb3VyY2UiLCJWaWRlb1NjcmVlbiIsInBsYXllciIsImxvb3AiLCJwbGF5IiwiaXNQbGF5aW5nIiwicGxheWluZyIsInN0eWxlIiwic3R5bGVzIiwiY29udGVudENvbnRhaW5lciIsImNoaWxkcmVuIiwidmlkZW8iLCJhbGxvd3NGdWxsc2NyZWVuIiwiYWxsb3dzUGljdHVyZUluUGljdHVyZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNvbnRyb2xzQ29udGFpbmVyIiwidGl0bGUiLCJvblByZXNzIiwicGF1c2UiLCJjcmVhdGUiLCJmbGV4IiwicGFkZGluZyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdIb3Jpem9udGFsIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/VideoScreen.tsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName=\"/Users/swapnilgadilkar/Documents/Swapnil_Mono/my-app/pages/_app.js\";function App({Component,pageProps}){return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()),{children:(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\",{name:\"viewport\",content:\"width=device-width, initial-scale=1\"},void 0,false,{fileName:_jsxFileName,lineNumber:7,columnNumber:9},this)},void 0,false,{fileName:_jsxFileName,lineNumber:6,columnNumber:7},this),(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component,Object.assign({},pageProps),void 0,false,{fileName:_jsxFileName,lineNumber:9,columnNumber:7},this)]},void 0,true);}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O3NGQUVlLFFBQVMsQ0FBQUssR0FBR0EsQ0FBQyxDQUFFQyxTQUFTLENBQUVDLFNBQVUsQ0FBQyxDQUFFLENBQ3BELE1BQ0UsQ0FBQUwsNkRBQUEsQ0FBQUUsMkRBQUEsRUFBQUksUUFBQSxFQUNFTiw2REFBQSxDQUFDRixrREFBSSxFQUFBUSxRQUFBLENBQ0hOLDZEQUFBLFNBQU1PLElBQUksQ0FBQyxVQUFVLENBQUNDLE9BQU8sQ0FBQyxxQ0FBcUMsZ0JBQUFDLFFBQUEsQ0FBQUMsWUFBQSxDQUFBQyxVQUFBLEdBQUFDLFlBQUEsUUFBRSxDQUFDLGdCQUFBSCxRQUFBLENBQUFDLFlBQUEsQ0FBQUMsVUFBQSxHQUFBQyxZQUFBLFFBQ2xFLENBQUMsQ0FDUFosNkRBQUEsQ0FBQ0ksU0FBUyxDQUFBUyxNQUFBLENBQUFDLE1BQUEsSUFBS1QsU0FBUyxnQkFBQUksUUFBQSxDQUFBQyxZQUFBLENBQUFDLFVBQUEsR0FBQUMsWUFBQSxRQUFHLENBQUMsY0FDNUIsQ0FBQyxDQUVQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwianN4REVWIiwiX2pzeERFViIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2hpbGRyZW4iLCJuYW1lIiwiY29udGVudCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIk9iamVjdCIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web_dist_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/exports/AppRegistry */ \"./node_modules/react-native-web/dist/exports/AppRegistry/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName=\"/Users/swapnilgadilkar/Documents/Swapnil_Mono/my-app/pages/_document.js\";const style=`\nhtml, body, #__next {\n  -webkit-overflow-scrolling: touch;\n}\n#__next {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nhtml {\n  scroll-behavior: smooth;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  /* Allows you to scroll below the viewport; default value is visible */\n  overflow-y: auto;\n  overscroll-behavior-y: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -ms-overflow-style: scrollbar;\n}\n`;class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()){static async getInitialProps({renderPage}){react_native_web_dist_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_3__[\"default\"].registerComponent(\"main\",()=>next_document__WEBPACK_IMPORTED_MODULE_1__.Main);const{getStyleElement}=react_native_web_dist_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getApplication(\"main\");const page=await renderPage();const styles=[(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"style\",{dangerouslySetInnerHTML:{__html:style}},\"react-native-style\",false,{fileName:_jsxFileName,lineNumber:40,columnNumber:7},this),getStyleElement()];return Object.assign({},page,{styles:react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(styles)});}render(){return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html,{style:{height:\"100%\"},children:[(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head,{},void 0,false,{fileName:_jsxFileName,lineNumber:52,columnNumber:9},this),(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"body\",{style:{height:\"100%\",overflow:\"hidden\"},children:[(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main,{},void 0,false,{fileName:_jsxFileName,lineNumber:54,columnNumber:11},this),(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript,{},void 0,false,{fileName:_jsxFileName,lineNumber:55,columnNumber:11},this)]},void 0,true,{fileName:_jsxFileName,lineNumber:53,columnNumber:9},this)]},void 0,true,{fileName:_jsxFileName,lineNumber:51,columnNumber:7},this);}}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7MkZBU0EsS0FBTSxDQUFBUyxLQUFLLENBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBRWMsS0FBTSxDQUFBQyxVQUFVLFFBQVMsQ0FBQVQsc0RBQVMsQ0FDL0MsWUFBYSxDQUFBVSxlQUFlQSxDQUFDLENBQUVDLFVBQVcsQ0FBQyxDQUFFLENBQzNDTixtR0FBNkIsQ0FBQyxNQUFNLENBQUUsSUFBTUYsK0NBQUksQ0FBQyxDQUNqRCxLQUFNLENBQUVVLGVBQWdCLENBQUMsQ0FBR1IsZ0dBQTBCLENBQUMsTUFBTSxDQUFDLENBQzlELEtBQU0sQ0FBQVUsSUFBSSxDQUFHLEtBQU0sQ0FBQUosVUFBVSxDQUFDLENBQUMsQ0FDL0IsS0FBTSxDQUFBSyxNQUFNLENBQUcsQ0FDYlQsNkRBQUEsVUFFRVUsdUJBQXVCLENBQUUsQ0FBRUMsTUFBTSxDQUFFVixLQUFNLENBQUUsRUFEdkMsb0JBQW9CLFFBQUFXLFFBQUEsQ0FBQUMsWUFBQSxDQUFBQyxVQUFBLElBQUFDLFlBQUEsUUFFekIsQ0FBQyxDQUNGVCxlQUFlLENBQUMsQ0FBQyxDQUNsQixDQUNELE9BQUFVLE1BQUEsQ0FBQUMsTUFBQSxJQUFZVCxJQUFJLEVBQUVDLE1BQU0sQ0FBRWpCLDJDQUFRLENBQUMwQixPQUFPLENBQUNULE1BQU0sQ0FBQyxHQUNwRCxDQUVBVSxNQUFNQSxDQUFBLENBQUcsQ0FDUCxNQUNFLENBQUFuQiw2REFBQSxDQUFDTiwrQ0FBSSxFQUFDTyxLQUFLLENBQUUsQ0FBRW1CLE1BQU0sQ0FBRSxNQUFPLENBQUUsQ0FBQUMsUUFBQSxFQUM5QnJCLDZEQUFBLENBQUNMLCtDQUFJLGtCQUFBaUIsUUFBQSxDQUFBQyxZQUFBLENBQUFDLFVBQUEsSUFBQUMsWUFBQSxRQUFFLENBQUMsQ0FDUmYsNkRBQUEsU0FBTUMsS0FBSyxDQUFFLENBQUVtQixNQUFNLENBQUUsTUFBTSxDQUFFRSxRQUFRLENBQUUsUUFBUyxDQUFFLENBQUFELFFBQUEsRUFDbERyQiw2REFBQSxDQUFDSiwrQ0FBSSxrQkFBQWdCLFFBQUEsQ0FBQUMsWUFBQSxDQUFBQyxVQUFBLElBQUFDLFlBQUEsU0FBRSxDQUFDLENBQ1JmLDZEQUFBLENBQUNILHFEQUFVLGtCQUFBZSxRQUFBLENBQUFDLFlBQUEsQ0FBQUMsVUFBQSxJQUFBQyxZQUFBLFNBQUUsQ0FBQyxnQkFBQUgsUUFBQSxDQUFBQyxZQUFBLENBQUFDLFVBQUEsSUFBQUMsWUFBQSxRQUNWLENBQUMsZ0JBQUFILFFBQUEsQ0FBQUMsWUFBQSxDQUFBQyxVQUFBLElBQUFDLFlBQUEsUUFDSCxDQUFDLENBRVgsQ0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL19kb2N1bWVudC5qcz81MzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5pbXBvcnQgeyBBcHBSZWdpc3RyeSB9IGZyb20gXCJyZWFjdC1uYXRpdmUtd2ViXCI7XG5cbi8vIEZvbGxvd3MgdGhlIHNldHVwIGZvciByZWFjdC1uYXRpdmUtd2ViOlxuLy8gaHR0cHM6Ly9uZWNvbGFzLmdpdGh1Yi5pby9yZWFjdC1uYXRpdmUtd2ViL2RvY3Mvc2V0dXAvI3Jvb3QtZWxlbWVudFxuLy8gUGx1cyBhZGRpdGlvbmFsIFJlYWN0IE5hdGl2ZSBzY3JvbGwgYW5kIHRleHQgcGFyaXR5IHN0eWxlcyBmb3IgdmFyaW91c1xuLy8gYnJvd3NlcnMuXG4vLyBGb3JjZSBOZXh0LWdlbmVyYXRlZCBET00gZWxlbWVudHMgdG8gZmlsbCB0aGVpciBwYXJlbnQncyBoZWlnaHRcbmNvbnN0IHN0eWxlID0gYFxuaHRtbCwgYm9keSwgI19fbmV4dCB7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cbiNfX25leHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cbmJvZHkge1xuICAvKiBBbGxvd3MgeW91IHRvIHNjcm9sbCBiZWxvdyB0aGUgdmlld3BvcnQ7IGRlZmF1bHQgdmFsdWUgaXMgdmlzaWJsZSAqL1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IG5vbmU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjtcbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZW5kZXJQYWdlIH0pIHtcbiAgICBBcHBSZWdpc3RyeS5yZWdpc3RlckNvbXBvbmVudChcIm1haW5cIiwgKCkgPT4gTWFpbik7XG4gICAgY29uc3QgeyBnZXRTdHlsZUVsZW1lbnQgfSA9IEFwcFJlZ2lzdHJ5LmdldEFwcGxpY2F0aW9uKFwibWFpblwiKTtcbiAgICBjb25zdCBwYWdlID0gYXdhaXQgcmVuZGVyUGFnZSgpO1xuICAgIGNvbnN0IHN0eWxlcyA9IFtcbiAgICAgIDxzdHlsZVxuICAgICAgICBrZXk9XCJyZWFjdC1uYXRpdmUtc3R5bGVcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlIH19XG4gICAgICAvPixcbiAgICAgIGdldFN0eWxlRWxlbWVudCgpLFxuICAgIF07XG4gICAgcmV0dXJuIHsgLi4ucGFnZSwgc3R5bGVzOiBDaGlsZHJlbi50b0FycmF5KHN0eWxlcykgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWwgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGJvZHkgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNoaWxkcmVuIiwiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiQXBwUmVnaXN0cnkiLCJqc3hERVYiLCJfanN4REVWIiwic3R5bGUiLCJNeURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVuZGVyUGFnZSIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZ2V0U3R5bGVFbGVtZW50IiwiZ2V0QXBwbGljYXRpb24iLCJwYWdlIiwic3R5bGVzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b0FycmF5IiwicmVuZGVyIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJvdmVyZmxvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web/dist/exports/StyleSheet */ \"./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web/dist/exports/Text */ \"./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/exports/View */ \"./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var _components_VideoScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/VideoScreen */ \"./components/VideoScreen.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName=\"/Users/swapnilgadilkar/Documents/Swapnil_Mono/my-app/pages/index.js\";function App(){return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{style:styles.container,children:[(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{style:styles.text,children:\"Welcome to Expo + Next.js \\uD83D\\uDC4B\"},void 0,false,{fileName:_jsxFileName,lineNumber:7,columnNumber:7},this),(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_VideoScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{},void 0,false,{fileName:_jsxFileName,lineNumber:8,columnNumber:7},this)]},void 0,true,{fileName:_jsxFileName,lineNumber:6,columnNumber:5},this);}const styles=react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_5__[\"default\"].create({container:{flex:1,justifyContent:\"center\",alignItems:\"center\"},text:{fontSize:16}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7dUZBR2UsUUFBUyxDQUFBTyxHQUFHQSxDQUFBLENBQUcsQ0FDNUIsTUFDRSxDQUFBRCw2REFBQSxDQUFDSCwwRUFBSSxFQUFDSyxLQUFLLENBQUVDLE1BQU0sQ0FBQ0MsU0FBVSxDQUFBQyxRQUFBLEVBQzVCTCw2REFBQSxDQUFDSiwwRUFBSSxFQUFDTSxLQUFLLENBQUVDLE1BQU0sQ0FBQ0csSUFBSyxDQUFBRCxRQUFBLENBQUMsd0NBQTRCLGdCQUFBRSxRQUFBLENBQUFDLFlBQUEsQ0FBQUMsVUFBQSxHQUFBQyxZQUFBLFFBQU0sQ0FBQyxDQUM3RFYsNkRBQUEsQ0FBQ0YsK0RBQVcsa0JBQUFTLFFBQUEsQ0FBQUMsWUFBQSxDQUFBQyxVQUFBLEdBQUFDLFlBQUEsUUFBRSxDQUFDLGdCQUFBSCxRQUFBLENBQUFDLFlBQUEsQ0FBQUMsVUFBQSxHQUFBQyxZQUFBLFFBQ1gsQ0FBQyxDQUVYLENBRUEsS0FBTSxDQUFBUCxNQUFNLENBQUdSLHVGQUFpQixDQUFDLENBQy9CUyxTQUFTLENBQUUsQ0FDVFEsSUFBSSxDQUFFLENBQUMsQ0FDUEMsY0FBYyxDQUFFLFFBQVEsQ0FDeEJDLFVBQVUsQ0FBRSxRQUNkLENBQUMsQ0FDRFIsSUFBSSxDQUFFLENBQ0pTLFFBQVEsQ0FBRSxFQUNaLENBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBUZXh0LCBWaWV3IH0gZnJvbSBcInJlYWN0LW5hdGl2ZVwiO1xuaW1wb3J0IFZpZGVvU2NyZWVuIGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZGVvU2NyZWVuXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50ZXh0fT5XZWxjb21lIHRvIEV4cG8gKyBOZXh0LmpzIPCfkYs8L1RleHQ+XG4gICAgICA8VmlkZW9TY3JlZW4gLz5cbiAgICA8L1ZpZXc+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZmxleDogMSxcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHlsZVNoZWV0IiwiVGV4dCIsIlZpZXciLCJWaWRlb1NjcmVlbiIsImpzeERFViIsIl9qc3hERVYiLCJBcHAiLCJzdHlsZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwidGV4dCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNyZWF0ZSIsImZsZXgiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./pages/_document.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var _pages_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/index\",\n        pathname: \"/\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: _pages_index_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlMkZpbmRleC5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDaEM7QUFDTDtBQUMxRDtBQUNvRDtBQUNWO0FBQzFDO0FBQzZDO0FBQzdDO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyw0Q0FBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyx1QkFBdUIsd0VBQUssQ0FBQyw0Q0FBUTtBQUNyQyx1QkFBdUIsd0VBQUssQ0FBQyw0Q0FBUTtBQUNyQywyQkFBMkIsd0VBQUssQ0FBQyw0Q0FBUTtBQUN6QyxlQUFlLHdFQUFLLENBQUMsNENBQVE7QUFDN0Isd0JBQXdCLHdFQUFLLENBQUMsNENBQVE7QUFDN0M7QUFDTyxnQ0FBZ0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUM5QyxnQ0FBZ0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUM5QyxpQ0FBaUMsd0VBQUssQ0FBQyw0Q0FBUTtBQUMvQyxnQ0FBZ0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUM5QyxvQ0FBb0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUN6RDtBQUNPLHdCQUF3Qix5R0FBZ0I7QUFDL0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8/MTQzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc1JvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCBEb2N1bWVudCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19kb2N1bWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzL2luZGV4LmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTdGF0aWNQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFN0YXRpY1BhdGhzXCIpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFNlcnZlclNpZGVQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsIFwicmVwb3J0V2ViVml0YWxzXCIpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUHJvcHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXRoc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHNcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvaW5kZXhcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFwcCxcbiAgICAgICAgRG9jdW1lbnRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "fbjs/lib/invariant":
/*!*************************************!*\
  !*** external "fbjs/lib/invariant" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("fbjs/lib/invariant");

/***/ }),

/***/ "inline-style-prefixer/lib/createPrefixer":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/createPrefixer" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/createPrefixer");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/backgroundClip":
/*!*******************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/backgroundClip" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/backgroundClip");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/crossFade":
/*!**************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/crossFade" ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/crossFade");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/cursor":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/cursor" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/cursor");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/filter":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/filter" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/filter");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/imageSet":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/imageSet" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/imageSet");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/logical":
/*!************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/logical" ***!
  \************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/logical");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/position":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/position" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/position");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/sizing":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/sizing" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/sizing");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/transition":
/*!***************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/transition" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/transition");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("invariant");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "postcss-value-parser":
/*!***************************************!*\
  !*** external "postcss-value-parser" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("postcss-value-parser");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/client":
/*!***********************************!*\
  !*** external "react-dom/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styleq":
/*!*************************!*\
  !*** external "styleq" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("styleq");

/***/ }),

/***/ "styleq/transform-localize-style":
/*!**************************************************!*\
  !*** external "styleq/transform-localize-style" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("styleq/transform-localize-style");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/react-native-web","vendor-chunks/next","vendor-chunks/@babel","vendor-chunks/@swc","vendor-chunks/expo-modules-core","vendor-chunks/expo","vendor-chunks/expo-video","vendor-chunks/@react-native"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();