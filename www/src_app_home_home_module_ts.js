"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _shared_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/skeleton-loader/skeleton-loader.module */ 2498);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 2003);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule,
            _shared_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_1__.SkeletonLoaderModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_bhavik_Documents_OfficeWork_TestSkill_WeatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_weatherData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/weatherData.service */ 8424);
/* harmony import */ var _shared_services_cityList_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/cityList.services */ 9248);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _shared_constant_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/constant/enums */ 1364);










let HomePage = class HomePage {
  constructor(weatherData, cityList) {
    this.weatherData = weatherData;
    this.cityList = cityList;
    this.apiKey = _shared_constant_enums__WEBPACK_IMPORTED_MODULE_6__.Enums.apiKey;
    this.cityApiKey = _shared_constant_enums__WEBPACK_IMPORTED_MODULE_6__.Enums.cityApiKey;
    this.globalVariable = _shared_constant_enums__WEBPACK_IMPORTED_MODULE_6__.Enums;
    this.allCityList = false;
    this.todaysDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(), "EEEE, d MMMM", "en-US");
    this.loaded = false;
  }

  ngOnInit() {
    this.getCurrentCityWeatherByGeoLocation();
  }

  ionViewWillEnter() {
    setInterval(() => {
      this.loaded = true;
    }, _shared_constant_enums__WEBPACK_IMPORTED_MODULE_6__.Enums.loaderTime);
  }

  getCurrentCityWeatherByGeoLocation() {
    var _this = this;

    return (0,_Users_bhavik_Documents_OfficeWork_TestSkill_WeatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_5__.Geolocation.getCurrentPosition();

        _this.getLangLongResposne(coordinates.coords.latitude, coordinates.coords.longitude);
      } catch (e) {
        console.log(e);
      }
    })();
  }

  getCityData(data) {
    this.cityTemprature = Math.floor(data.main.temp);
    this.citypressure = data.main.pressure;
    this.cityHumidity = data.main.humidity;
    this.currentCityName = data.name;
    this.currentCountryName = data.sys.country;
  }

  getLangLongResposne(Latitude, Longitude) {
    let obj = {
      params: {
        lat: Latitude,
        lon: Longitude,
        appid: this.apiKey,
        units: _shared_constant_enums__WEBPACK_IMPORTED_MODULE_6__.Enums.metric
      }
    };
    this.weatherData.getWeatherData(obj).subscribe(res => {
      this.getCityData(res);
      this.getIconUrl(res);
    });
    this.weatherData.getForCastWeatherData(obj).subscribe(res => {
      this.getForecastWeatherData(res);
    });
  }

  getWeatherWithCityName(cityName) {
    this.allCityList = false;
    this.resetSearchBar();
    let obj = {
      params: {
        q: cityName.LocalizedName,
        units: _shared_constant_enums__WEBPACK_IMPORTED_MODULE_6__.Enums.metric,
        appid: this.apiKey
      }
    };
    this.weatherData.getWeatherData(obj).subscribe(result => {
      this.getCityData(result);
      this.getIconUrl(result);
    });
    this.weatherData.getForCastWeatherData(obj).subscribe(res => {
      this.getForecastWeatherData(res);
    });
  }

  getAllCityList($event) {
    this.allCityList = true;
    let obj = {
      params: {
        apikey: this.cityApiKey,
        q: $event.detail.value
      }
    };
    this.cityList.getAllCityList(obj).subscribe(response => {
      this.allCityResult = response;
    });
  }

  getForecastWeatherData(foreCastResult) {
    this.foreCastDateOne = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(foreCastResult.list[3].dt_txt, "EEEE", "en-us");
    this.foreCastTempOne = Math.floor(foreCastResult.list[3].main.temp);
    this.foreCastDateTwo = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(foreCastResult.list[11].dt_txt, "EEEE", "en-us");
    this.foreCastTempTwo = Math.floor(foreCastResult.list[11].main.temp);
    this.foreCastDateThree = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(foreCastResult.list[19].dt_txt, "EEEE", "en-us");
    this.foreCastTempThree = Math.floor(foreCastResult.list[19].main.temp);
  }

  getIconUrl(weatherData) {
    let iconName = weatherData.weather[0].icon + ".png";
    this.iconSrcUrl = _shared_constant_enums__WEBPACK_IMPORTED_MODULE_6__.Enums.iconUrl + iconName;
  }

  resetSearchBar() {
    this.searchbar.value = null;
  }

};

HomePage.ctorParameters = () => [{
  type: _shared_services_weatherData_service__WEBPACK_IMPORTED_MODULE_3__.WeatherDataService
}, {
  type: _shared_services_cityList_services__WEBPACK_IMPORTED_MODULE_4__.CityListService
}];

HomePage.propDecorators = {
  searchbar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['mySearchbar', {
      static: false
    }]
  }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: "app-home",
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 6305:
/*!******************************************!*\
  !*** ./src/shared/constant/api-route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiRoute": () => (/* binding */ ApiRoute)
/* harmony export */ });
const ApiRoute = {
    weatherData: "data/2.5/weather",
    foreCastWeatherData: "data/2.5/forecast",
    allCityList: "locations/v1/cities/autocomplete",
};


/***/ }),

/***/ 1364:
/*!**************************************!*\
  !*** ./src/shared/constant/enums.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Enums": () => (/* binding */ Enums)
/* harmony export */ });
const Enums = {
    AdminDashboard: "Dashboard",
    AdminProfile: "Profile",
    metric: "metric",
    iconUrl: "http://openweathermap.org/img/w/",
    today: "Today",
    appTitle: "Weather Forcast",
    Humidity: "Humidity",
    pressure: "Pressure",
    apiKey: "54176a3accee1999d26bcf28ef5c9af6",
    cityApiKey: "kdepW1WGUtG2kVQcvWgyydSiHTs5KRqc",
    loaderTime: 8000
};


/***/ }),

/***/ 1586:
/*!*****************************************!*\
  !*** ./src/shared/http/http.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);




let HttpService = class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get(serviceName, data) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + serviceName, data);
    }
    getCityList(serviceName, data) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cityListApi + serviceName, data);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], HttpService);



/***/ }),

/***/ 9248:
/*!**************************************************!*\
  !*** ./src/shared/services/cityList.services.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityListService": () => (/* binding */ CityListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/http.service */ 1586);
/* harmony import */ var _constant_api_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant/api-route */ 6305);




let CityListService = class CityListService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getAllCityList(data) {
        return this.httpService.getCityList(_constant_api_route__WEBPACK_IMPORTED_MODULE_1__.ApiRoute.allCityList, data);
    }
};
CityListService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService }
];
CityListService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], CityListService);



/***/ }),

/***/ 8424:
/*!****************************************************!*\
  !*** ./src/shared/services/weatherData.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherDataService": () => (/* binding */ WeatherDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/http.service */ 1586);
/* harmony import */ var _constant_api_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant/api-route */ 6305);




let WeatherDataService = class WeatherDataService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getWeatherData(data) {
        return this.httpService.get(_constant_api_route__WEBPACK_IMPORTED_MODULE_1__.ApiRoute.weatherData, data);
    }
    getForCastWeatherData(data) {
        return this.httpService.get(_constant_api_route__WEBPACK_IMPORTED_MODULE_1__.ApiRoute.foreCastWeatherData, data);
    }
};
WeatherDataService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService }
];
WeatherDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], WeatherDataService);



/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var _Users_bhavik_Documents_OfficeWork_TestSkill_WeatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,_Users_bhavik_Documents_OfficeWork_TestSkill_WeatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,_Users_bhavik_Documents_OfficeWork_TestSkill_WeatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,_Users_bhavik_Documents_OfficeWork_TestSkill_WeatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,_Users_bhavik_Documents_OfficeWork_TestSkill_WeatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,_Users_bhavik_Documents_OfficeWork_TestSkill_WeatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,_Users_bhavik_Documents_OfficeWork_TestSkill_WeatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,_Users_bhavik_Documents_OfficeWork_TestSkill_WeatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,_Users_bhavik_Documents_OfficeWork_TestSkill_WeatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 591:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7621:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 591);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8391)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Poppins\";\n}\n\nion-searchbar {\n  height: 48px;\n  background: #1A1C49;\n  border-radius: 15px;\n}\n\n.icon-size {\n  width: 95px;\n  height: 90px;\n}\n\ninput.searchbar-input.sc-ion-searchbar-md {\n  background: transparent;\n}\n\n.div-background {\n  background: #575A7F;\n  height: 100%;\n}\n\nion-chip {\n  background-color: transparent;\n}\n\nion-card {\n  background: #1a1c49;\n  border-radius: 15px;\n  width: 100%;\n}\n\n.ion-card-main {\n  padding: 10px 16px 0px 16px;\n  color: #fff;\n}\n\n.ion-card-second {\n  padding: 16px;\n}\n\n.degree-img {\n  position: absolute;\n  top: 20%;\n}\n\n.self-center {\n  align-self: center;\n}\n\nlistDiv {\n  position: absolute;\n  z-index: 9;\n}\n\nlistDiv .listPopup {\n  max-height: 210px;\n  border: 2px solid #efefef;\n  border-radius: 10px;\n  overflow: scroll;\n  min-width: 200px;\n  max-width: 250px;\n  min-height: 45px;\n}\n\nlistDiv ion-item {\n  --highlight-color-focused: none;\n  --highlight-color-valid: none;\n  --highlight-color-invalid: none;\n}\n\n.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios {\n  color: #575A7F;\n}\n\n.listDiv {\n  position: relative;\n}\n\n.listDiv .listPopup {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  border-radius: 15px;\n  top: -10px;\n}\n\n.no-wrap {\n  white-space: nowrap;\n}\n\nion-menu-button img {\n  height: 21px;\n  width: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vT2ZmaWNlV29yayUyMC9UZXN0U2tpbGwtV2VhdGhlckFwcC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDREY7O0FERUU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDQUo7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0VKOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRUYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbn1cblxuaW9uLXNlYXJjaGJhcntcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kOiAjMUExQzQ5O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uaWNvbi1zaXple1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG5pbnB1dC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5cbi5kaXYtYmFja2dyb3VuZHtcbiAgYmFja2dyb3VuZDogIzU3NUE3RjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWNoaXB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogIzFhMWM0OTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pb24tY2FyZC1tYWluIHtcbiAgcGFkZGluZzogMTBweCAxNnB4IDBweCAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmlvbi1jYXJkLXNlY29uZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5kZWdyZWUtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbn1cblxuLnNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5cbmxpc3REaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk7XG4gIC5saXN0UG9wdXAge1xuICAgIG1heC1oZWlnaHQ6IDIxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZmVmZWY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICB9XG4gIGlvbi1pdGVtIHtcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiBub25lO1xuICAgIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiBub25lO1xuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IG5vbmU7XG4gIH1cbn1cbi5zZWFyY2hiYXItbGVmdC1hbGlnbmVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gIGNvbG9yOiAjNTc1QTdGO1xufVxuLmxpc3REaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5saXN0UG9wdXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgdG9wOiAtMTBweDtcbiAgfVxufVxuLm5vLXdyYXAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5pb24tbWVudS1idXR0b24gaW1ne1xuICBoZWlnaHQ6IDIxcHg7XG4gIHdpZHRoOiAyMXB4O1xufSIsIioge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQ6ICMxQTFDNDk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5pY29uLXNpemUge1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG5pbnB1dC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZGl2LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjNTc1QTdGO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1jaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogIzFhMWM0OTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pb24tY2FyZC1tYWluIHtcbiAgcGFkZGluZzogMTBweCAxNnB4IDBweCAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmlvbi1jYXJkLXNlY29uZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5kZWdyZWUtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbn1cblxuLnNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5saXN0RGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xufVxubGlzdERpdiAubGlzdFBvcHVwIHtcbiAgbWF4LWhlaWdodDogMjEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZmVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG59XG5saXN0RGl2IGlvbi1pdGVtIHtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogbm9uZTtcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IG5vbmU7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IG5vbmU7XG59XG5cbi5zZWFyY2hiYXItbGVmdC1hbGlnbmVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gIGNvbG9yOiAjNTc1QTdGO1xufVxuXG4ubGlzdERpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5saXN0RGl2IC5saXN0UG9wdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0b3A6IC0xMHB4O1xufVxuXG4ubm8td3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDIxcHg7XG4gIHdpZHRoOiAyMXB4O1xufSJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"pl-23\" slot=\"start\">\n      <ion-menu-button auto-hide=\"false\"\n        ><img src=\"/assets/icon/menu.svg\"\n      /></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"fw-600 fs-24\">{{globalVariable.appTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"padding-25 div-background\">\n    <div class=\"p-b-18\">\n      <app-skeleton-loader\n        *ngIf=\"!loaded\"\n        Cwidth=\"350\"\n        Cheight=\"50\"\n      ></app-skeleton-loader>\n      <ion-searchbar\n        *ngIf=\"loaded\"\n        #mySearchbar\n        placeholder=\"Search your City \"\n        debounce=\"1000\"\n        autocomplete=\"off\"\n        (ionChange)=\"getAllCityList($event)\"\n      ></ion-searchbar>\n    </div>\n    <div class=\"listDiv\">\n      <ion-list\n        *ngIf=\"allCityList && allCityResult && allCityResult.length > 0\"\n        class=\"listPopup\"\n      >\n        <ion-item\n          *ngFor=\"let cityname of allCityResult\"\n          (click)=\"getWeatherWithCityName(cityname)\"\n          >{{ cityname.LocalizedName }}\n        </ion-item>\n      </ion-list>\n    </div>\n    <ion-row class=\"p-b-18\">\n      <app-skeleton-loader\n        *ngIf=\"!loaded\"\n        Cwidth=\"350\"\n        Cheight=\"200\"\n      ></app-skeleton-loader>\n      <ion-card\n        *ngIf=\"loaded\"\n        class=\"ion-no-padding ion-no-margin ion-card-main\"\n      >\n        <ion-card-content class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col class=\"fw-600 fs-16 ion-no-padding\">\n              <div>\n                <span>{{globalVariable.today}}</span>\n              </div>\n            </ion-col>\n            <ion-col class=\"fw-400 fs-12ion-no-padding ion-text-end\">\n              <div class=\"ion-no-padding\">\n                <span class=\"no-wrap\">{{todaysDate}}</span>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-no-padding ion-text-center\">\n              <span class=\"fw-500 fs-58\"\n                >{{cityTemprature}}\n                <img class=\"degree-img\" src=\"/assets/images/oC.svg\"\n              /></span>\n            </ion-col>\n            <ion-col class=\"ion-text-end ion-no-padding\">\n              <img\n                id=\"wicon\"\n                class=\"icon-size\"\n                src=\"{{iconSrcUrl}}\"\n                alt=\"Weather icon\"\n              />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-12 ion-text-center ion-no-padding\">\n              <ion-chip>\n                <img class=\"p-r-13\" src=\"/assets/images/location.svg\" />\n                <ion-label class=\"fw-400 fs-12 color-white\"\n                  >{{currentCityName}}, {{currentCountryName}}</ion-label\n                >\n              </ion-chip>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n    <ion-row class=\"p-b-18\">\n      <ion-col>\n        <app-skeleton-loader\n          *ngIf=\"!loaded\"\n          Cwidth=\"160\"\n          Cheight=\"100\"\n        ></app-skeleton-loader>\n\n        <ion-card\n          *ngIf=\"loaded\"\n          class=\"ion-no-padding ion-no-margin ion-card-second\"\n        >\n          <ion-card-content class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col class=\"ion-text-center ion-no-padding self-center\">\n                <img src=\"/assets/images/humidity.svg\" />\n              </ion-col>\n              <ion-col>\n                <div class=\"fw-700 fs-17\">\n                  <span class=\"color-white\">{{cityHumidity}}%</span>\n                </div>\n                <div>\n                  <span class=\"fw-400 fs-12 color-white\"\n                    >{{globalVariable.Humidity}}</span\n                  >\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <app-skeleton-loader\n          *ngIf=\"!loaded\"\n          Cwidth=\"160\"\n          Cheight=\"100\"\n        ></app-skeleton-loader>\n\n        <ion-card\n          *ngIf=\"loaded\"\n          class=\"ion-no-padding ion-no-margin ion-card-second\"\n        >\n          <ion-card-content class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col class=\"ion-text-center ion-no-padding self-center\">\n                <img src=\"/assets/images/pressure.svg\" />\n              </ion-col>\n              <ion-col>\n                <div class=\"fw-700 fs-17\">\n                  <span class=\"color-white\">{{citypressure}}Hpa</span>\n                </div>\n                <div>\n                  <span class=\"fw-400 fs-12 color-white\"\n                    >{{globalVariable.pressure}}</span\n                  >\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <app-skeleton-loader\n          *ngIf=\"!loaded\"\n          Cwidth=\"100\"\n          Cheight=\"100\"\n          circle=\"true\"\n        ></app-skeleton-loader>\n        <ion-card\n          *ngIf=\"loaded\"\n          class=\"ion-no-padding ion-no-margin card-future\"\n        >\n          <ion-card-content>\n            <ion-row>\n              <ion-col>\n                <div class=\"fw-400 fs-24 ion-text-center\">\n                  <span class=\"color-white\">{{foreCastTempOne}}°C</span>\n                </div>\n                <div class=\"ion-text-center\">\n                  <span class=\"fw-500 fs-14 color-white\"\n                    >{{foreCastDateOne}}</span\n                  >\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <app-skeleton-loader\n          *ngIf=\"!loaded\"\n          Cwidth=\"100\"\n          Cheight=\"100\"\n          circle=\"true\"\n        ></app-skeleton-loader>\n        <ion-card\n          *ngIf=\"loaded\"\n          class=\"ion-no-padding ion-no-margin card-future\"\n        >\n          <ion-card-content>\n            <ion-row>\n              <ion-col>\n                <div class=\"fw-400 fs-24 ion-text-center\">\n                  <span class=\"color-white\">{{foreCastTempTwo}}°C</span>\n                </div>\n                <div class=\"ion-text-center\">\n                  <span class=\"fw-500 fs-14 color-white\"\n                    >{{foreCastDateTwo}}</span\n                  >\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <app-skeleton-loader\n          *ngIf=\"!loaded\"\n          Cwidth=\"100\"\n          Cheight=\"100\"\n          circle=\"true\"\n        ></app-skeleton-loader>\n\n        <ion-card\n          *ngIf=\"loaded\"\n          class=\"ion-no-padding ion-no-margin card-future\"\n        >\n          <ion-card-content>\n            <ion-row>\n              <ion-col>\n                <div class=\"fw-400 fs-24 ion-text-center\">\n                  <span class=\"color-white\">{{foreCastTempThree}}°C</span>\n                </div>\n                <div class=\"ion-text-center\">\n                  <span class=\"fw-500 fs-14 color-white\"\n                    >{{foreCastDateThree}}</span\n                  >\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map