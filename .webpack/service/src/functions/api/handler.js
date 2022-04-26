/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/api/handler.ts":
/*!**************************************!*\
  !*** ./src/functions/api/handler.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/libs/db */ \"./src/libs/db.ts\");\n\n\n\n\nconst api = async () => {\n    const holdings = await (0,_libs_db__WEBPACK_IMPORTED_MODULE_3__.findHoldings)({});\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n        status: \"success\",\n        data: holdings,\n    });\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2FwaS9oYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2V0cy1jYXBpdGFsLy4vc3JjL2Z1bmN0aW9ucy9hcGkvaGFuZGxlci50cz82NWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlclwiO1xuaW1wb3J0IHsgZm9ybWF0SlNPTlJlc3BvbnNlIH0gZnJvbSBcIkAvbGlicy9hcGlHYXRld2F5XCI7XG5pbXBvcnQgeyBtaWRkeWZ5IH0gZnJvbSBcIkAvbGlicy9sYW1iZGFcIjtcbmltcG9ydCB7IGZpbmRIb2xkaW5ncyB9IGZyb20gXCJAL2xpYnMvZGJcIjtcblxuY29uc3QgYXBpID0gYXN5bmMgKCkgPT4ge1xuICAvLyBncmFiIGRhdGEgZnJvbSBkYiBhbmQgcmV0dXJuIHRvIGNsaWVudFxuICBjb25zdCBob2xkaW5ncyA9IGF3YWl0IGZpbmRIb2xkaW5ncyh7fSk7XG4gIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2Uoe1xuICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXG4gICAgZGF0YTogaG9sZGluZ3MsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBtaWRkeWZ5KGFwaSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/api/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify(response),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3NldHMtY2FwaXRhbC8uL3NyYy9saWJzL2FwaUdhdGV3YXkudHM/NjI1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG4gIEFQSUdhdGV3YXlQcm94eUV2ZW50LFxuICBBUElHYXRld2F5UHJveHlSZXN1bHQsXG4gIEhhbmRsZXIsXG59IGZyb20gXCJhd3MtbGFtYmRhXCI7XG5pbXBvcnQgdHlwZSB7IEZyb21TY2hlbWEgfSBmcm9tIFwianNvbi1zY2hlbWEtdG8tdHNcIjtcblxudHlwZSBWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IE9taXQ8QVBJR2F0ZXdheVByb3h5RXZlbnQsIFwiYm9keVwiPiAmIHtcbiAgYm9keTogRnJvbVNjaGVtYTxTPjtcbn07XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxcbiAgVmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4sXG4gIEFQSUdhdGV3YXlQcm94eVJlc3VsdFxuPjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEpTT05SZXNwb25zZSA9IChyZXNwb25zZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/db.ts":
/*!************************!*\
  !*** ./src/libs/db.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aggregateHoldings\": () => (/* binding */ aggregateHoldings),\n/* harmony export */   \"findHolding\": () => (/* binding */ findHolding),\n/* harmony export */   \"findHoldings\": () => (/* binding */ findHoldings),\n/* harmony export */   \"updateHolding\": () => (/* binding */ updateHolding)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst API_KEY = \"iZifAwUkeQazdSl22SSLmJY6UtUxQArPtfJjUsJN6OW0Vk6knXBrIEO0wVVCAhD6\";\nconst HOLDING_COLLECTION = \"holdings\";\nconst DATABASE = \"assets-capital\";\nconst DB_SOURCE = \"dev\";\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common[\"api-key\"]) = API_KEY;\nconst aggregateHoldings = async (pipeline) => {\n    try {\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"https://data.mongodb-api.com/app/data-mwdrc/endpoint/data/beta/action/aggregate\", {\n            collection: HOLDING_COLLECTION,\n            database: DATABASE,\n            dataSource: DB_SOURCE,\n            pipeline,\n        });\n        return data === null || data === void 0 ? void 0 : data.documents;\n    }\n    catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {\n            console.error(\"ERROR: \", error.message);\n            return error.message;\n        }\n        else {\n            console.error(\"ERROR: \", error);\n            return \"An unexpected error occurred\";\n        }\n    }\n};\nconst findHoldings = async (filter, sort, limit) => {\n    try {\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"https://data.mongodb-api.com/app/data-mwdrc/endpoint/data/beta/action/find\", {\n            collection: HOLDING_COLLECTION,\n            database: DATABASE,\n            dataSource: DB_SOURCE,\n            filter,\n            sort,\n            limit,\n        });\n        return data === null || data === void 0 ? void 0 : data.documents;\n    }\n    catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {\n            console.error(\"ERROR: \", error.message);\n            return error.message;\n        }\n        else {\n            console.error(\"ERROR: \", error);\n            return \"An unexpected error occurred\";\n        }\n    }\n};\nconst findHolding = async (filter) => {\n    try {\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"https://data.mongodb-api.com/app/data-mwdrc/endpoint/data/beta/action/findOne\", {\n            collection: HOLDING_COLLECTION,\n            database: DATABASE,\n            dataSource: DB_SOURCE,\n            filter,\n        });\n        return data === null || data === void 0 ? void 0 : data.documents;\n    }\n    catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {\n            console.error(\"ERROR: \", error.message);\n            return error.message;\n        }\n        else {\n            console.error(\"ERROR: \", error);\n            return \"An unexpected error occurred\";\n        }\n    }\n};\nconst updateHolding = async (filter, update) => {\n    try {\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"https://data.mongodb-api.com/app/data-mwdrc/endpoint/data/beta/action/updateOne\", {\n            collection: HOLDING_COLLECTION,\n            database: DATABASE,\n            dataSource: DB_SOURCE,\n            filter,\n            update,\n        });\n        return data === null || data === void 0 ? void 0 : data.documents;\n    }\n    catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {\n            console.error(\"ERROR: \", error.message);\n            return error.message;\n        }\n        else {\n            console.error(\"ERROR: \", error);\n            return \"An unexpected error occurred\";\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQWVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFrQkE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNzZXRzLWNhcGl0YWwvLi9zcmMvbGlicy9kYi50cz8yZGI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy8gcmVxdWVzdCBleGFtcGxlXG4vLyBjdXJsIC0tbG9jYXRpb24gLS1yZXF1ZXN0IFBPU1QgJ2h0dHBzOi8vZGF0YS5tb25nb2RiLWFwaS5jb20vYXBwL2RhdGEtbXdkcmMvZW5kcG9pbnQvZGF0YS9iZXRhL2FjdGlvbi9maW5kT25lJyBcXFxuLy8gLS1oZWFkZXIgJ0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbicgXFxcbi8vIC0taGVhZGVyICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LUhlYWRlcnM6IConIFxcXG4vLyAtLWhlYWRlciAnYXBpLWtleTogaVppZkF3VWtlUWF6ZFNsMjJTU0xtSlk2VXRVeFFBclB0ZkpqVXNKTjZPVzBWazZrblhCcklFTzB3VlZDQWhENicgXFxcbi8vIC0tZGF0YS1yYXcgJ3tcbi8vICAgICBcImNvbGxlY3Rpb25cIjpcIjxDT0xMRUNUSU9OX05BTUU+XCIsXG4vLyAgICAgXCJkYXRhYmFzZVwiOlwiYXNzZXRzLWNhcGl0YWxcIixcbi8vICAgICBcImRhdGFTb3VyY2VcIjpcImRldlwiLFxuLy8gICAgIFwicHJvamVjdGlvblwiOiB7XCJfaWRcIjogMX1cbi8vIH0nXG5cbi8vIGNvbnN0YW50c1xuY29uc3QgQVBJX0tFWSA9XG4gIFwiaVppZkF3VWtlUWF6ZFNsMjJTU0xtSlk2VXRVeFFBclB0ZkpqVXNKTjZPVzBWazZrblhCcklFTzB3VlZDQWhENlwiO1xuY29uc3QgSE9MRElOR19DT0xMRUNUSU9OID0gXCJob2xkaW5nc1wiO1xuY29uc3QgREFUQUJBU0UgPSBcImFzc2V0cy1jYXBpdGFsXCI7XG5jb25zdCBEQl9TT1VSQ0UgPSBcImRldlwiO1xuXG4vLyBpbml0aWFsaXNlIGF4aW9zIGRlZmF1bHRzXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcImFwaS1rZXlcIl0gPSBBUElfS0VZO1xuXG4vLyBjb25maWd1cmUgdHlwZXNcbmV4cG9ydCB0eXBlIEhvbGRpbmcgPSB7XG4gIF9pZD86IHN0cmluZztcbiAgYWNjb3VudF9pZDogc3RyaW5nO1xuICBpbnZlc3Rvcl9pZDogc3RyaW5nO1xuICBiYWxhbmNlOiBudW1iZXI7XG4gIHJhdGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG59O1xuXG50eXBlIEhvbGRpbmdSZXNwb25zZSA9IHtcbiAgZG9jdW1lbnRzOiBbSG9sZGluZ107XG59O1xuXG4vLyBIb2xkaW5ncyBEQiBmdW5jdGlvbnNcbi8vXG4vLyBhZ2dyZWdhdGlvbiBxdWVyeVxuZXhwb3J0IGNvbnN0IGFnZ3JlZ2F0ZUhvbGRpbmdzID0gYXN5bmMgKFxuICBwaXBlbGluZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXVxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0PEhvbGRpbmdSZXNwb25zZT4oXG4gICAgICBcImh0dHBzOi8vZGF0YS5tb25nb2RiLWFwaS5jb20vYXBwL2RhdGEtbXdkcmMvZW5kcG9pbnQvZGF0YS9iZXRhL2FjdGlvbi9hZ2dyZWdhdGVcIixcbiAgICAgIHtcbiAgICAgICAgY29sbGVjdGlvbjogSE9MRElOR19DT0xMRUNUSU9OLFxuICAgICAgICBkYXRhYmFzZTogREFUQUJBU0UsXG4gICAgICAgIGRhdGFTb3VyY2U6IERCX1NPVVJDRSxcbiAgICAgICAgcGlwZWxpbmUsXG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBkYXRhPy5kb2N1bWVudHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUjogXCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgLy8gRVJST1I6IEF4aW9zRXJyb3I8YW55LCBhbnk+XG4gICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVSUk9SOiBcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgIH1cbiAgfVxufTtcblxuLy8gZmluZCBtdWx0aXBsZVxuZXhwb3J0IGNvbnN0IGZpbmRIb2xkaW5ncyA9IGFzeW5jIChcbiAgZmlsdGVyOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgc29ydD86IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBsaW1pdD86IG51bWJlclxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgXCJodHRwczovL2RhdGEubW9uZ29kYi1hcGkuY29tL2FwcC9kYXRhLW13ZHJjL2VuZHBvaW50L2RhdGEvYmV0YS9hY3Rpb24vZmluZFwiLFxuICAgICAge1xuICAgICAgICBjb2xsZWN0aW9uOiBIT0xESU5HX0NPTExFQ1RJT04sXG4gICAgICAgIGRhdGFiYXNlOiBEQVRBQkFTRSxcbiAgICAgICAgZGF0YVNvdXJjZTogREJfU09VUkNFLFxuICAgICAgICBmaWx0ZXIsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIGxpbWl0LFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gZGF0YT8uZG9jdW1lbnRzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRVJST1I6IFwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIC8vIEVSUk9SOiBBeGlvc0Vycm9yPGFueSwgYW55PlxuICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUjogXCIsIGVycm9yKTtcbiAgICAgIHJldHVybiBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICB9XG4gIH1cbn07XG5cbi8vIGZpbmQgb25lXG5leHBvcnQgY29uc3QgZmluZEhvbGRpbmcgPSBhc3luYyAoZmlsdGVyOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgIFwiaHR0cHM6Ly9kYXRhLm1vbmdvZGItYXBpLmNvbS9hcHAvZGF0YS1td2RyYy9lbmRwb2ludC9kYXRhL2JldGEvYWN0aW9uL2ZpbmRPbmVcIixcbiAgICAgIHtcbiAgICAgICAgY29sbGVjdGlvbjogSE9MRElOR19DT0xMRUNUSU9OLFxuICAgICAgICBkYXRhYmFzZTogREFUQUJBU0UsXG4gICAgICAgIGRhdGFTb3VyY2U6IERCX1NPVVJDRSxcbiAgICAgICAgZmlsdGVyLFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gZGF0YT8uZG9jdW1lbnRzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRVJST1I6IFwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIC8vIEVSUk9SOiBBeGlvc0Vycm9yPGFueSwgYW55PlxuICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUjogXCIsIGVycm9yKTtcbiAgICAgIHJldHVybiBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICB9XG4gIH1cbn07XG5cbi8vIHVwZGF0ZSBvbmVcbmV4cG9ydCBjb25zdCB1cGRhdGVIb2xkaW5nID0gYXN5bmMgKFxuICBmaWx0ZXI6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICB1cGRhdGU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBcImh0dHBzOi8vZGF0YS5tb25nb2RiLWFwaS5jb20vYXBwL2RhdGEtbXdkcmMvZW5kcG9pbnQvZGF0YS9iZXRhL2FjdGlvbi91cGRhdGVPbmVcIixcbiAgICAgIHtcbiAgICAgICAgY29sbGVjdGlvbjogSE9MRElOR19DT0xMRUNUSU9OLFxuICAgICAgICBkYXRhYmFzZTogREFUQUJBU0UsXG4gICAgICAgIGRhdGFTb3VyY2U6IERCX1NPVVJDRSxcbiAgICAgICAgZmlsdGVyLFxuICAgICAgICB1cGRhdGUsXG4gICAgICB9XG4gICAgKTtcbiAgICBcbiAgICByZXR1cm4gZGF0YT8uZG9jdW1lbnRzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRVJST1I6IFwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIC8vIEVSUk9SOiBBeGlvc0Vycm9yPGFueSwgYW55PlxuICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUjogXCIsIGVycm9yKTtcbiAgICAgIHJldHVybiBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/db.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNzZXRzLWNhcGl0YWwvLi9zcmMvbGlicy9sYW1iZGEudHM/NmIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWlkZHkgZnJvbSBcIkBtaWRkeS9jb3JlXCI7XG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tIFwiQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlclwiO1xuXG5leHBvcnQgY29uc3QgbWlkZHlmeSA9IChoYW5kbGVyKSA9PiB7XG4gIHJldHVybiBtaWRkeShoYW5kbGVyKS51c2UobWlkZHlKc29uQm9keVBhcnNlcigpKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/api/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;