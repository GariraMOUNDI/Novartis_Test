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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RuPt");


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

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "RuPt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./src/components/css/MyCss.ts

const Layout = Object(core_["makeStyles"])(() => ({
  root: {
    borderRadius: "20px",
    backgroundColor: "#cfe8fc",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginTop: "10px"
  },
  label: {// textAlign : "center",
    // fontWeight: "900",
    // fontSize: "xx-large",
    // fontFamily: "cursive"
  }
}));
const Select = Object(core_["makeStyles"])(() => ({
  root: {
    width: "80px"
  },
  label: {
    // fontWeight: "900",
    // fontFamily: "cursive",
    // textAlign : "center",
    // fontSize: "large",
    marginTop: "20px",
    marginBottom: "10px"
  }
}));
const Error = Object(core_["makeStyles"])(() => ({
  root: {
    borderRadius: "20px",
    backgroundColor: "#cfe8fc",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginTop: "10px"
  },
  label: {
    textAlign: "center",
    fontWeight: "bold"
  }
}));
const List = Object(core_["makeStyles"])(() => ({
  root: {
    width: "60%"
  },
  label: {
    // fontWeight: "900",
    // fontFamily: "cursive",
    // textAlign : "center",
    // fontSize: "large",
    marginTop: "20px",
    marginBottom: "10px"
  },
  table1: {
    maxHeight: "720px",
    overflowX: "auto"
  },
  table2: {
    overflowX: "auto"
  }
}));
const MyCss = {
  layout: Layout,
  error: Error,
  select: Select,
  list: List
};
// CONCATENATED MODULE: ./src/components/css/index.tsx

// CONCATENATED MODULE: ./src/components/My/MyLayout.tsx
var __jsx = external_react_default.a.createElement;



const MyLayout = ({
  children,
  title
}) => {
  const styles = MyCss.layout();
  return __jsx(core_["Container"], {
    className: styles.root
  }, __jsx(core_["Container"], null, __jsx(core_["InputLabel"], {
    className: styles.label
  }, title)), children);
};
// CONCATENATED MODULE: ./src/components/My/MySelect.tsx
var MySelect_jsx = external_react_default.a.createElement;



const MySelect = ({
  id,
  value,
  placeholder,
  items,
  onHandleChange
}) => {
  const styles = MyCss.select();
  return MySelect_jsx(core_["FormControl"], {
    className: styles.root
  }, MySelect_jsx(core_["InputLabel"], {
    id: id
  }, placeholder), MySelect_jsx(core_["Select"], {
    labelId: id,
    id: id,
    value: value,
    onChange: event => {
      onHandleChange(event.target.value);
    }
  }, items.map(it => MySelect_jsx(core_["MenuItem"], {
    key: it,
    value: it
  }, it))));
};
// CONCATENATED MODULE: ./src/components/My/MyList.tsx
var MyList_jsx = external_react_default.a.createElement;



const MyList = ({
  headers,
  title,
  data,
  genderTable = false
}) => {
  const styles = MyCss.list();
  return MyList_jsx(core_["Container"], {
    className: styles.root
  }, MyList_jsx(core_["InputLabel"], {
    className: styles.label
  }, title), MyList_jsx(core_["TableContainer"], {
    className: genderTable ? styles.table2 : styles.table1,
    component: core_["Paper"]
  }, MyList_jsx(core_["Table"], {
    "aria-label": "simple table"
  }, MyList_jsx(core_["TableHead"], null, MyList_jsx(core_["TableRow"], null, headers.map(head => {
    return MyList_jsx(core_["TableCell"], {
      key: head,
      align: head === headers[0] ? "left" : "right",
      style: {
        fontWeight: "bold"
      }
    }, head);
  }))), MyList_jsx(core_["TableBody"], null, data === null || data === void 0 ? void 0 : data.map(indication => MyList_jsx(core_["TableRow"], {
    key: indication.name
  }, MyList_jsx(core_["TableCell"], {
    component: "th",
    scope: "row"
  }, indication.name), MyList_jsx(core_["TableCell"], {
    align: "right"
  }, indication.count), MyList_jsx(core_["TableCell"], {
    align: "right"
  }, indication.percentage)))))));
};
// CONCATENATED MODULE: ./src/components/My/MySelectBox.tsx
var MySelectBox_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MySelectBox = ({
  items,
  onYearChange
}) => {
  const styles = MyCss.select();
  const {
    0: boxState,
    1: setBoxState
  } = Object(external_react_["useState"])({
    error: false,
    startYear: items[items.length - 1],
    endYear: items[items.length - 1]
  });

  const modifyState = (selected, start) => {
    setBoxState(prev => {
      if (start) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          startYear: selected
        });
      } else {
        return _objectSpread(_objectSpread({}, prev), {}, {
          endYear: selected
        });
      }
    });
  };

  const onChange = (selected, start) => {
    modifyState(selected, start);

    if (boxState.startYear > boxState.endYear) {
      setBoxState(prev => _objectSpread(_objectSpread({}, prev), {}, {
        error: true
      }));
    } else {
      setBoxState(prev => _objectSpread(_objectSpread({}, prev), {}, {
        error: false
      }));
      onYearChange(boxState.startYear, boxState.endYear);
    }
  };

  return MySelectBox_jsx(core_["Container"], {
    style: {
      display: "flex",
      marginBottom: "10px"
    }
  }, MySelectBox_jsx(core_["InputLabel"], null, "Error year"), MySelectBox_jsx(core_["InputLabel"], {
    className: styles.label,
    style: {
      marginRight: "10px"
    }
  }, "Fetch data from"), MySelectBox_jsx(MySelect, {
    id: "start",
    value: boxState.startYear,
    placeholder: "year",
    items: items,
    onHandleChange: selected => {
      onChange(selected, true);
    }
  }), MySelectBox_jsx(core_["InputLabel"], {
    className: styles.label,
    style: {
      width: "80px"
    }
  }, "to"), MySelectBox_jsx(MySelect, {
    id: "end",
    value: boxState.endYear,
    placeholder: "year",
    items: items,
    onHandleChange: selected => {
      onChange(selected, false);
    }
  }));
};
// EXTERNAL MODULE: external "@devexpress/dx-react-chart-material-ui"
var dx_react_chart_material_ui_ = __webpack_require__("f9/h");

// CONCATENATED MODULE: ./src/components/My/MyChart.tsx
var MyChart_jsx = external_react_default.a.createElement;



const MyChart = ({
  data
}) => MyChart_jsx(core_["Paper"], null, MyChart_jsx(dx_react_chart_material_ui_["Chart"], {
  data: data
}, MyChart_jsx(dx_react_chart_material_ui_["ArgumentAxis"], null), MyChart_jsx(dx_react_chart_material_ui_["ValueAxis"], null), MyChart_jsx(dx_react_chart_material_ui_["AreaSeries"], {
  valueField: "count",
  argumentField: "term",
  name: "MyChart"
})));
// CONCATENATED MODULE: ./src/components/My/MyErrorPage.tsx

var MyErrorPage_jsx = external_react_default.a.createElement;


const MyErrorPage = () => {
  const styles = MyCss.error();
  return MyErrorPage_jsx(core_["Container"], {
    className: styles.root
  }, MyErrorPage_jsx(core_["InputLabel"], {
    className: styles.label
  }, "An error occured while fetching data. ", MyErrorPage_jsx("br", null), " Please check your connection !!!"));
};
// CONCATENATED MODULE: ./src/components/index.ts







// EXTERNAL MODULE: ./src/pages/api/index.tsx
var api = __webpack_require__("9kUT");

// CONCATENATED MODULE: ./src/pages/app/index.tsx
var app_jsx = external_react_default.a.createElement;





const IndexPage = props => {
  const getItems = () => {
    let year = new Date().getFullYear() - 1;
    var items = [];

    for (let i = 10; i >= 0; i--) {
      items.push(`${year - i}`);
    }

    return items;
  };

  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(props);

  const onChangeDate = async (startDate, endDate) => {
    console.log(startDate, endDate);
    setState(await Object(api["GlobalState"])(startDate, endDate));
  };

  return state.statistics.sexDivision ? app_jsx(MyLayout, {
    title: "Drug Adverse Events"
  }, app_jsx("hr", null), app_jsx(core_["Container"], {
    style: {
      display: "flex"
    }
  }, app_jsx(MyList, {
    headers: ["Indications", "Count", "Percentage(%)"],
    title: "Drug indications",
    data: state.statistics.drugDivision
  }), app_jsx(core_["Container"], null, app_jsx(MySelectBox, {
    items: getItems(),
    onYearChange: onChangeDate
  }), app_jsx(MyChart, {
    data: state.chartData
  }), app_jsx(MyList, {
    headers: ["Gender", "Count", "Percentage(%)"],
    title: "Gender percentage",
    data: state.statistics.sexDivision,
    genderTable: true
  })))) : app_jsx(MyErrorPage, null);
};

IndexPage.getInitialProps = () => Object(api["GlobalState"])("2002", "2002");

/* harmony default export */ var app = __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "f9/h":
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-chart-material-ui");

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