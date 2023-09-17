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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/tokenauth/AuthToken.js":
/*!*******************************************!*\
  !*** ./components/tokenauth/AuthToken.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getToken\": () => (/* binding */ getToken)\n/* harmony export */ });\n/* harmony import */ var _AuthorizationError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthorizationError */ \"./components/tokenauth/AuthorizationError.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var es_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! es-cookie */ \"es-cookie\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AuthorizationError__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_2__, es_cookie__WEBPACK_IMPORTED_MODULE_3__, socket_io_client__WEBPACK_IMPORTED_MODULE_4__]);\n([_AuthorizationError__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_2__, es_cookie__WEBPACK_IMPORTED_MODULE_3__, socket_io_client__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst ENDPOINT = \"https://devgql.maa.care\";\n// async getData(){\n//   const res = await axios('/data');\n//   return await res.json();\n// }\nconst getToken = ()=>{\n    let token = \"\";\n    let userData = \"\";\n    if (false) {}\n    return token ? `Bearer ${token}` : \"\";\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rva2VuYXV0aC9BdXRoVG9rZW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvRTtBQUM1QjtBQUNkO0FBQ1c7QUFDQztBQUN0QyxNQUFNTyxXQUFXQyx5QkFBdUM7QUFFeEQsbUJBQW1CO0FBQ25CLHNDQUFzQztBQUN0Qyw2QkFBNkI7QUFDN0IsSUFBSTtBQUNHLE1BQU1HLFdBQVksSUFBTTtJQUM3QixJQUFJQyxRQUFRO0lBQ1osSUFBSUMsV0FBVztJQUNmLElBQUksS0FBNkIsRUFBRSxFQTJHbEM7SUFDRCxPQUFPRCxRQUFRLENBQUMsT0FBTyxFQUFFQSxNQUFNLENBQUMsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly85MWNhcmVfcmVjZXB0aW9uaXN0Ly4vY29tcG9uZW50cy90b2tlbmF1dGgvQXV0aFRva2VuLmpzPzU1ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aGxvZ291dCwgcmVzb2NrZXQsIHNvY2tldCB9IGZyb20gXCIuL0F1dGhvcml6YXRpb25FcnJvclwiO1xuaW1wb3J0IGpzb253ZWJ0b2tlbiBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgKiBhcyBDb29raWVzIGZyb20gXCJlcy1jb29raWVcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmNvbnN0IEVORFBPSU5UID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVTVF9TRVJWRVJfVVJMO1xuXG4vLyBhc3luYyBnZXREYXRhKCl7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKCcvZGF0YScpO1xuLy8gICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbi8vIH1cbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9ICAoKSA9PiB7XG4gIGxldCB0b2tlbiA9IFwiXCI7XG4gIGxldCB1c2VyRGF0YSA9IFwiXCI7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgLy8gUGVyZm9ybSBsb2NhbFN0b3JhZ2UgYWN0aW9uXG4gICAgLy9jb25zb2xlLmxvZyhcImxvY2FsU3RvcmFnZS5nZXRJdGVtb3V0XCIsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aF90b2tlblwiKSk7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aF90b2tlblwiKSA9PSBcIlwiKSB7XG4gICAgICBhdXRobG9nb3V0KCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aF90b2tlblwiKSAhPSBcIlwiICYmXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhfdG9rZW5cIikgIT0gbnVsbFxuICAgICkge1xuXG4gICAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aF90b2tlblwiKTtcblxuICAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXG4gICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVTVF9TRVJWRVJfVVJMfS9vbGRhdXRoYCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRva2VuOnRva2VuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiBcImpzb25cIixcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oIChyZXNwb25zZTEpID0+IHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzcG9uc2VhdXRoXCIscmVzcG9uc2UxKTtcblxuICAgICAgICAgIGlmIChyZXNwb25zZTEuc3RhdHVzID09IDIwMCkge1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UxLmRhdGEudG9rZW5zdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAvL3RvIGdldCBuZXcgdG9rZW5cbiAgICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGpzb253ZWJ0b2tlbi5kZWNvZGUodG9rZW4pO1xuICAgICAgICAgICAgICBpZiAoIXBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICBhdXRobG9nb3V0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC5yb3VuZChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xuICAgICAgICAgICAgICBpZiAodGltZXN0YW1wID4gcGF5bG9hZC5leHApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZyZXNodG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJyZWZyZXNoVG9rZW5cIik7XG4gICAgICAgICAgICAgICAgaWYgKHJlZnJlc2h0b2tlbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLmdldChcbiAgICAgICAgICAgICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRVNUX1NFUlZFUl9VUkx9L2F1dGhgLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IHJlZnJlc2h0b2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46dG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlYXV0aDJcIixyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEhPVwiSW52YWxpZCB0b2tlblwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXV0aF90b2tlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEudG9rZW4gPyByZXNwb25zZS5kYXRhLnRva2VuIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJyZWZyZXNoVG9rZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLnJlZnJlc2hUb2tlbiA/IHJlc3BvbnNlLmRhdGEucmVmcmVzaFRva2VuIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29ja2V0KHJlc3BvbnNlLmRhdGEudG9rZW4hPW51bGw/cmVzcG9uc2UuZGF0YS50b2tlbjpcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvY2tldC5vbihcImRpc2Nvbm5lY3RcIiwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIlNvY2tldCBkaXNjb25uZWN0ZWQgLSBcIixyZWFzb24pOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhsb2dvdXQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHsgY29uc29sZS5sb2coXCJlcnJvcmF1dGhcIixlcnIpfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vZW5kXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2UgdG9rZW5cIik7XG4gICAgICAgICAgICAgIGF1dGhsb2dvdXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF1dGhsb2dvdXQoKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7IGNvbnNvbGUubG9nKFwiZXJyb3JvbGRhdXRoXCIsZXJyKX0pO1xuXG5cblxuXG4gICAgfVxuICB9XG4gIHJldHVybiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogXCJcIjtcbn07XG4iXSwibmFtZXMiOlsiYXV0aGxvZ291dCIsInJlc29ja2V0Iiwic29ja2V0IiwianNvbndlYnRva2VuIiwiYXhpb3MiLCJDb29raWVzIiwiaW8iLCJFTkRQT0lOVCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19SRVNUX1NFUlZFUl9VUkwiLCJnZXRUb2tlbiIsInRva2VuIiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0IiwiaGVhZGVycyIsInJlc3BvbnNlVHlwZSIsInRoZW4iLCJyZXNwb25zZTEiLCJzdGF0dXMiLCJkYXRhIiwidG9rZW5zdGF0dXMiLCJwYXlsb2FkIiwiZGVjb2RlIiwidGltZXN0YW1wIiwiTWF0aCIsInJvdW5kIiwiRGF0ZSIsImdldFRpbWUiLCJleHAiLCJyZWZyZXNodG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsInJlZnJlc2hUb2tlbiIsImNhdGNoIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tokenauth/AuthToken.js\n");

/***/ }),

/***/ "./components/tokenauth/AuthorizationError.js":
/*!****************************************************!*\
  !*** ./components/tokenauth/AuthorizationError.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authlogout\": () => (/* binding */ authlogout),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"resocket\": () => (/* binding */ resocket),\n/* harmony export */   \"socket\": () => (/* binding */ socket)\n/* harmony export */ });\n/* harmony import */ var es_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es-cookie */ \"es-cookie\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([es_cookie__WEBPACK_IMPORTED_MODULE_0__, socket_io_client__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__]);\n([es_cookie__WEBPACK_IMPORTED_MODULE_0__, socket_io_client__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// import {}socketIOClient from \"socket.io-client\";\nconst ENDPOINT = \"https://devgql.maa.care\";\nvar socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(ENDPOINT, {\n    forceNew: true,\n    transports: [\n        \"websocket\",\n        \"polling\",\n        \"flashsocket\"\n    ],\n    withCredentials: true,\n    extraHeaders: {\n        Authorization: \"Bearer authorization_token_here\",\n        authHeader: \"header\"\n    },\n    auth: {\n        token:  false ? 0 : \"\"\n    }\n});\nconst resocket = (token)=>{\n    socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(ENDPOINT, {\n        forceNew: true,\n        transports: [\n            \"websocket\",\n            \"polling\",\n            \"flashsocket\"\n        ],\n        withCredentials: true,\n        extraHeaders: {\n            Authorization: \"Bearer authorization_token_here\",\n            authHeader: \"header\"\n        },\n        auth: {\n            token: token\n        }\n    });\n    socket.on(\"connect\", ()=>{\n        console.log(\"reconnect.socket\", socket.id);\n    //ssetForm({ ...sform, socket: socket.id });\n    });\n};\nconst authlogout = ()=>{\n    console.log(\"authlogout1\");\n    if (false) {}\n};\nconst logout = ()=>{\n    console.log(\"logout\");\n    if (false) {}\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rva2VuYXV0aC9BdXRob3JpemF0aW9uRXJyb3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0o7QUFDSztBQUNaO0FBQzFCLG1EQUFtRDtBQUNuRCxNQUFNSSxXQUFXQyx5QkFBdUM7QUFHakQsSUFBSUcsU0FBU04sb0RBQUVBLENBQUNFLFVBQVU7SUFDOUJLLFVBQVUsSUFBSTtJQUNmQyxZQUFZO1FBQUM7UUFBYTtRQUFXO0tBQWM7SUFDbkRDLGlCQUFpQixJQUFJO0lBQ3JCQyxjQUFjO1FBQ1pDLGVBQWU7UUFDZkMsWUFBWTtJQUNkO0lBQ0FDLE1BQU07UUFDSkMsT0FBTyxNQUFrQixHQUFhQyxDQUE4RSxHQUFDLEVBQUU7SUFDekg7QUFDRixHQUFHO0FBRUksTUFBTUUsV0FBVSxDQUFDSCxRQUFRO0lBQzlCUixTQUFTTixvREFBRUEsQ0FBQ0UsVUFBVTtRQUNwQkssVUFBVSxJQUFJO1FBQ2ZDLFlBQVk7WUFBQztZQUFhO1lBQVc7U0FBYztRQUNuREMsaUJBQWlCLElBQUk7UUFDckJDLGNBQWM7WUFDWkMsZUFBZTtZQUNmQyxZQUFZO1FBQ2Q7UUFDQUMsTUFBTTtZQUNKQyxPQUFPQTtRQUNUO0lBQ0Y7SUFFQVIsT0FBT1ksRUFBRSxDQUFDLFdBQVcsSUFBTTtRQUMxQkMsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQmQsT0FBT2UsRUFBRTtJQUN6Qyw0Q0FBNEM7SUFDOUM7QUFDQSxFQUFDO0FBRU0sTUFBTUMsYUFBYSxJQUFNO0lBQzlCSCxRQUFRQyxHQUFHLENBQUM7SUFFWixJQUFJLEtBQTZCLEVBQUUsRUE4Q2xDO0FBQ0gsRUFBRTtBQUNLLE1BQU1hLFNBQVMsSUFBTTtJQUMxQmQsUUFBUUMsR0FBRyxDQUFDO0lBQ1osSUFBSSxLQUE2QixFQUFFLEVBMENsQztBQUNILEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly85MWNhcmVfcmVjZXB0aW9uaXN0Ly4vY29tcG9uZW50cy90b2tlbmF1dGgvQXV0aG9yaXphdGlvbkVycm9yLmpzP2FlMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQ29va2llcyBmcm9tIFwiZXMtY29va2llXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IHt9c29ja2V0SU9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmNvbnN0IEVORFBPSU5UID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVTVF9TRVJWRVJfVVJMO1xuXG5cbmV4cG9ydCB2YXIgc29ja2V0ID0gaW8oRU5EUE9JTlQsIHtcbiAgIGZvcmNlTmV3OiB0cnVlICxcbiAgdHJhbnNwb3J0czogW1wid2Vic29ja2V0XCIsIFwicG9sbGluZ1wiLCBcImZsYXNoc29ja2V0XCJdLFxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gIGV4dHJhSGVhZGVyczoge1xuICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIGF1dGhvcml6YXRpb25fdG9rZW5faGVyZVwiLFxuICAgIGF1dGhIZWFkZXI6IFwiaGVhZGVyXCIsXG4gIH0sXG4gIGF1dGg6IHtcbiAgICB0b2tlbjogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgP2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aF90b2tlblwiKSE9bnVsbD9sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhfdG9rZW5cIik6XCJcIjpcIlwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCByZXNvY2tldCA9KHRva2VuKT0+e1xuICBzb2NrZXQgPSBpbyhFTkRQT0lOVCwge1xuICAgIGZvcmNlTmV3OiB0cnVlICxcbiAgIHRyYW5zcG9ydHM6IFtcIndlYnNvY2tldFwiLCBcInBvbGxpbmdcIiwgXCJmbGFzaHNvY2tldFwiXSxcbiAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgIGV4dHJhSGVhZGVyczoge1xuICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBhdXRob3JpemF0aW9uX3Rva2VuX2hlcmVcIixcbiAgICAgYXV0aEhlYWRlcjogXCJoZWFkZXJcIixcbiAgIH0sXG4gICBhdXRoOiB7XG4gICAgIHRva2VuOiB0b2tlbixcbiAgIH0sXG4gfSk7XG5cbiBzb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJyZWNvbm5lY3Quc29ja2V0XCIsIHNvY2tldC5pZCk7XG4gIC8vc3NldEZvcm0oeyAuLi5zZm9ybSwgc29ja2V0OiBzb2NrZXQuaWQgfSk7XG59KTtcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhsb2dvdXQgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiYXV0aGxvZ291dDFcIik7XG4gIFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIFxuICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXG4gICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVTVF9TRVJWRVJfVVJMfS9sb2dvdXRgLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9rZW46bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiBcImpzb25cIixcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oIChyZXNwb25zZTEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlYXV0aFwiLHJlc3BvbnNlMSk7XG5cbiAgICAgICAgICBpZiAocmVzcG9uc2UxLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXV0aGxvZ291dFwiLHJlc3BvbnNlMS5kYXRhLnRva2Vuc3RhdHVzKTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlMS5kYXRhPT1cIkludmFsaWQgdG9rZW5cIil7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlMS5kYXRhLnRva2Vuc3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblx0ICAgICAgXG4gICAgLy9sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhfdG9rZW5cIik7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VycmVmcmVzaFRva2VuXCIpO1xuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGFzdGxvZ2luXCIpO1xuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcmxldmVsXCIpO1xuICAgIC8vc29ja2V0LmNsb3NlKCk7XG4gICAgXG4gICAgLy9zb2NrZXQuZGlzY29ubmVjdCh0cnVlKSA7XG4gICAgLy8gc29ja2V0Lm9uKFwiZGlzY29ubmVjdFwiLCAocmVhc29uKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcIlNvY2tldCBkaXNjb25uZWN0ZWQgLSBcIixyZWFzb24pOyBcbiAgICAvLyB9KTtcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwibG9nb3V0XCIpO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXG4gICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVTVF9TRVJWRVJfVVJMfS9sb2dvdXRgLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9rZW46bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiBcImpzb25cIixcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oIChyZXNwb25zZTEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlYXV0aFwiLHJlc3BvbnNlMSk7XG5cbiAgICAgICAgICBpZiAocmVzcG9uc2UxLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlMS5kYXRhPT1cIkludmFsaWQgdG9rZW5cIil7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlMS5kYXRhLnRva2Vuc3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXHRcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhfdG9rZW5cIik7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VycmVmcmVzaFRva2VuXCIpO1xuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGFzdGxvZ2luXCIpO1xuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcmxldmVsXCIpO1xuICAgIFxuICAgIC8vc29ja2V0LmNsb3NlKCk7XG4gICAgLy9zb2NrZXQuZGlzY29ubmVjdCh0cnVlKSA7XG5cbiAgICAvLyBzb2NrZXQub24oXCJkaXNjb25uZWN0XCIsIChyZWFzb24pID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiU29ja2V0IGRpc2Nvbm5lY3RlZCAtIFwiLHJlYXNvbik7IFxuICAgIC8vIH0pO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIkNvb2tpZXMiLCJSb3V0ZXIiLCJpbyIsImF4aW9zIiwiRU5EUE9JTlQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUkVTVF9TRVJWRVJfVVJMIiwic29ja2V0IiwiZm9yY2VOZXciLCJ0cmFuc3BvcnRzIiwid2l0aENyZWRlbnRpYWxzIiwiZXh0cmFIZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImF1dGhIZWFkZXIiLCJhdXRoIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzb2NrZXQiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImF1dGhsb2dvdXQiLCJnZXQiLCJoZWFkZXJzIiwicmVzcG9uc2VUeXBlIiwidGhlbiIsInJlc3BvbnNlMSIsInN0YXR1cyIsImRhdGEiLCJ0b2tlbnN0YXR1cyIsInB1c2giLCJjbGVhciIsImxvZ291dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tokenauth/AuthorizationError.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fontawesome/css/all.min.css */ \"./fontawesome/css/all.min.css\");\n/* harmony import */ var _fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-pro-sidebar */ \"react-pro-sidebar\");\n/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_tokenauth_AuthToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/tokenauth/AuthToken */ \"./components/tokenauth/AuthToken.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_10__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_tokenauth_AuthToken__WEBPACK_IMPORTED_MODULE_7__]);\n_components_tokenauth_AuthToken__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.createHttpLink)({\n        uri: \"https://devgql.maa.care/graphql\"\n    });\n    const authLink = (0,apollo_link_context__WEBPACK_IMPORTED_MODULE_9__.setContext)((_, { headers  })=>{\n        return {\n            headers: {\n                ...headers,\n                authorization: (0,_components_tokenauth_AuthToken__WEBPACK_IMPORTED_MODULE_7__.getToken)()\n            }\n        };\n    });\n    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_8__.ApolloClient({\n        link: authLink.concat(httpLink),\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_8__.InMemoryCache()\n    });\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setShow(true);\n    }, []);\n    if (!show) {\n        return null;\n    }\n    if (true) {\n        return null;\n    } else {}\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4RDtBQUMvQjtBQUNTO0FBQ0Q7QUFDUTtBQUNRO0FBQ007QUFDZ0M7QUFDNUM7QUFDYjtBQUNyQixTQUFTWSxNQUFNLEVBQUVYLFVBQVMsRUFBRVksVUFBUyxFQUFFLEVBQUU7SUFDdEQsTUFBTUMsV0FBV0wsOERBQWNBLENBQUM7UUFDOUJNLEtBQUtDLGlDQUFrQztJQUN6QztJQUVBLE1BQU1HLFdBQVdULCtEQUFVQSxDQUFDLENBQUNVLEdBQUcsRUFBRUMsUUFBTyxFQUFFLEdBQUs7UUFDOUMsT0FBTztZQUNMQSxTQUFTO2dCQUNQLEdBQUdBLE9BQU87Z0JBQ1ZDLGVBQWVqQix5RUFBUUE7WUFDekI7UUFDRjtJQUNGO0lBRUEsTUFBTWtCLFNBQVMsSUFBSWpCLHdEQUFZQSxDQUFDO1FBQzlCa0IsTUFBTUwsU0FBU00sTUFBTSxDQUFDWDtRQUN0QlksT0FBTyxJQUFJbkIseURBQWFBO0lBQzFCO0lBRUEsTUFBTSxDQUFDb0IsTUFBTUMsUUFBUSxHQUFHMUIsK0NBQVFBLENBQUMsS0FBSztJQUN0Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkeUIsUUFBUSxJQUFJO0lBQ2QsR0FBRyxFQUFFO0lBQ0wsSUFBSSxDQUFDRCxNQUFNO1FBQ1QsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELElBQUksSUFBa0IsRUFBYTtRQUNqQyxPQUFPLElBQUk7SUFDYixPQUFPLEVBVU47QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vOTFjYXJlX3JlY2VwdGlvbmlzdC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIi4uL2ZvbnRhd2Vzb21lL2Nzcy9hbGwubWluLmNzc1wiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3NcIjtcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgeyBQcm9TaWRlYmFyUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcHJvLXNpZGViYXJcIjtcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9rZW5hdXRoL0F1dGhUb2tlblwiO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBBcG9sbG9Qcm92aWRlciwgY3JlYXRlSHR0cExpbmsgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tIFwiYXBvbGxvLWxpbmstY29udGV4dFwiO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcbiAgICB1cmk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUlZFUl9VUkwsXG4gIH0pO1xuXG4gIGNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXywgeyBoZWFkZXJzIH0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgICBhdXRob3JpemF0aW9uOiBnZXRUb2tlbigpLFxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxuICB9KTtcblxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2hvdyh0cnVlKTtcbiAgfSwgW10pO1xuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICA8UmVjb2lsUm9vdD5cbiAgICAgICAgICA8UHJvU2lkZWJhclByb3ZpZGVyPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvUHJvU2lkZWJhclByb3ZpZGVyPlxuICAgICAgICA8L1JlY29pbFJvb3Q+XG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvU2lkZWJhclByb3ZpZGVyIiwiZ2V0VG9rZW4iLCJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiQXBvbGxvUHJvdmlkZXIiLCJjcmVhdGVIdHRwTGluayIsInNldENvbnRleHQiLCJSZWNvaWxSb290IiwiTXlBcHAiLCJwYWdlUHJvcHMiLCJodHRwTGluayIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TRVJWRVJfVVJMIiwiYXV0aExpbmsiLCJfIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJjbGllbnQiLCJsaW5rIiwiY29uY2F0IiwiY2FjaGUiLCJzaG93Iiwic2V0U2hvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./fontawesome/css/all.min.css":
/*!*************************************!*\
  !*** ./fontawesome/css/all.min.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/bootstrap/scss/bootstrap.scss":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/scss/bootstrap.scss ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-link-context");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-pro-sidebar":
/*!************************************!*\
  !*** external "react-pro-sidebar" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-pro-sidebar");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "es-cookie":
/*!****************************!*\
  !*** external "es-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("es-cookie");;

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();