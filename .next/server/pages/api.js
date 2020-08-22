module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/wgz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
const getTotalRecords = async (startDate, endDate) => {
  try {
    const res = await fetch(`https://api.fda.gov/drug/event.json?search=receivedate:[${startDate}+TO+${endDate}]&limit=1`).catch(error => console.log(error));

    if (res && "json" in res) {
      const json = await res.json();
      return json.meta.results.total;
    }
  } catch (error) {
    console.log("An error occured while fetching data");
    return null;
  }
};

const getSexDivision = async (startDate, endDate) => {
  try {
    const res = await fetch(`https://api.fda.gov/drug/event.json?search=receivedate:[${startDate}+TO+${endDate}]&count=patient.patientsex`).catch(error => console.log(error));

    if (res && "json" in res) {
      const json = await res.json();
      return json.results.map(res => ({
        term: convertSex(res.term),
        count: res.count
      }));
    }
  } catch (error) {
    console.log("An error occured while fetching data");
    return null;
  }
};

const convertSex = sex => {
  switch (sex) {
    case 1:
      return "Male";

    case 2:
      return "Female";

    default:
      return "Unknown";
  }
};

const getDrugIndication = async (startDate, endDate) => {
  try {
    const res = await fetch(`https://api.fda.gov/drug/event.json?search=receivedate:[${startDate}+TO+${endDate}]&count=patient.drug.drugindication`).catch(error => console.log(error));

    if (res && "json" in res) {
      const json = await res.json();
      return json.results;
    }
  } catch (error) {
    console.log("An error occured while fetching data");
    return null;
  }
};

const Data = (startDate, endDate) => ({
  getTotalRecords: getTotalRecords(startDate, endDate),
  getSexDivision: getSexDivision(startDate, endDate),
  getDrugIndication: getDrugIndication(startDate, endDate)
});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9kUT");


/***/ }),

/***/ "9kUT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalState", function() { return GlobalState; });
/* harmony import */ var _query_StatisticsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("snF1");
/* harmony import */ var _query_ChartData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jUqL");


const GlobalState = async (startYear, endYear) => ({
  chartData: await Object(_query_ChartData__WEBPACK_IMPORTED_MODULE_1__["ChartData"])(startYear, endYear),
  statistics: await Object(_query_StatisticsData__WEBPACK_IMPORTED_MODULE_0__["StatisticsData"])(`${startYear}-01-01`, `${endYear}-12-31`)
});

/***/ }),

/***/ "jUqL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartData", function() { return ChartData; });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/wgz");

const ChartData = async (startYear, endYear) => {
  const getData = async (startDate, endDate) => {
    return await Object(_Data__WEBPACK_IMPORTED_MODULE_0__["Data"])(startDate, endDate).getTotalRecords.then(res => res);
  };

  const getMonth = month => {
    switch (month) {
      case 1:
        return "January";

      case 2:
        return "February";

      case 3:
        return "March";

      case 4:
        return "April";

      case 5:
        return "May";

      case 6:
        return "June";

      case 7:
        return "July";

      case 8:
        return "August";

      case 9:
        return "September";

      case 10:
        return "October";

      case 11:
        return "November";

      case 12:
        return "December";

      default:
        return "N/A";
    }
  };

  if (+endYear - +startYear === 0) {
    const result = [];

    for (let i = 1; i <= 12; i++) {
      if (i === 12) {
        result.push({
          term: getMonth(i),
          count: (await getData(`${endYear}-${i}-01`, `${+endYear}-12-31`)) + ""
        });
      } else {
        result.push({
          term: getMonth(i),
          count: (await getData(`${endYear}-${i}-01`, `${endYear}-${i + 1}-01`)) + ""
        });
      }
    }

    return result;
  } else {
    const result = [];

    for (let i = +startYear; i <= +endYear; i++) {
      result.push({
        term: `${i}`,
        count: (await getData(`${i}-01-01`, `${i}-12-31`)) + ""
      });
    }

    return result;
  }
};

/***/ }),

/***/ "snF1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsData", function() { return StatisticsData; });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/wgz");

const StatisticsData = async (startDate, endDate) => {
  const data = Object(_Data__WEBPACK_IMPORTED_MODULE_0__["Data"])(startDate, endDate);
  const sex = await data.getSexDivision;
  const drug = await data.getDrugIndication;

  const getPercentage = list => {
    let totalForPercent = 0;
    list === null || list === void 0 ? void 0 : list.forEach(res => {
      totalForPercent += +res.count;
    });
    return list === null || list === void 0 ? void 0 : list.map(res => ({
      name: res.term,
      count: res.count,
      percentage: `${(+res.count / totalForPercent * 100).toFixed(2)}`
    }));
  };

  return {
    sexDivision: getPercentage(sex),
    drugDivision: getPercentage(drug)
  };
};

/***/ })

/******/ });