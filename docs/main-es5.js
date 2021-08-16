(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\tiedostot\koulu\Portfolio\portfolio\ammatilliset-tutkinnon-osat\ohjelmiston-tuotantoversion-toteuttaminen\angular-projekts\success-and-warning-ilmoitus\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "R1/F":
    /*!**********************************************************!*\
      !*** ./src/app/warning-alert/warning-alert.component.ts ***!
      \**********************************************************/

    /*! exports provided: WarningAlertComponent */

    /***/
    function R1F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WarningAlertComponent", function () {
        return WarningAlertComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WarningAlertComponent = /*#__PURE__*/function () {
        function WarningAlertComponent() {
          _classCallCheck(this, WarningAlertComponent);
        }

        _createClass(WarningAlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WarningAlertComponent;
      }();

      WarningAlertComponent.ɵfac = function WarningAlertComponent_Factory(t) {
        return new (t || WarningAlertComponent)();
      };

      WarningAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WarningAlertComponent,
        selectors: [["app-warning-alert"]],
        decls: 10,
        vars: 0,
        consts: [[1, "mw-50", "mt-3", "me-3", "p-3", "bg-warning"], [1, "d-flex", "flex-row"], [1, "fas", "fa-exclamation", "fs-1", "pe-2", "d-flex", "align-items-center"], [1, "fs-1", "mb-0"]],
        template: function WarningAlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Warning Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet maiores officia neque obcaecati. Dolor facere ducimus magnam modi nobis incidunt voluptates, ut exercitationem reprehenderit facilis veritatis tenetur quaerat obcaecati doloremque laboriosam libero est molestiae accusantium. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJuaW5nLWFsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningAlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-warning-alert',
            templateUrl: './warning-alert.component.html',
            styleUrls: ['./warning-alert.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _success_alert_success_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./success-alert/success-alert.component */
      "q/SR");
      /* harmony import */


      var _warning_alert_warning_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./warning-alert/warning-alert.component */
      "R1/F");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'success-and-warning-ilmoitus';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [[1, "d-flex", "container", "justify-content-center", "mt-5"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-success-alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-warning-alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_success_alert_success_alert_component__WEBPACK_IMPORTED_MODULE_1__["SuccessAlertComponent"], _warning_alert_warning_alert_component__WEBPACK_IMPORTED_MODULE_2__["WarningAlertComponent"]],
        styles: [".container[_ngcontent-%COMP%]{\r\n    flex-direction: row;\r\n}\r\n\r\n@media only screen and (max-width:750px){\r\n    .container[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    app-warning-alert[_ngcontent-%COMP%], app-success-alert[_ngcontent-%COMP%]{\r\n        margin-bottom: 1.5rem;\r\n    }\r\n}\r\n\r\napp-warning-alert[_ngcontent-%COMP%], app-success-alert[_ngcontent-%COMP%]{\r\n    max-width: 458px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NTBweCl7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICBhcHAtd2FybmluZy1hbGVydCwgYXBwLXN1Y2Nlc3MtYWxlcnR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgfVxyXG59XHJcbmFwcC13YXJuaW5nLWFsZXJ0LCBhcHAtc3VjY2Vzcy1hbGVydHtcclxuICAgIG1heC13aWR0aDogNDU4cHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _success_alert_success_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./success-alert/success-alert.component */
      "q/SR");
      /* harmony import */


      var _warning_alert_warning_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./warning-alert/warning-alert.component */
      "R1/F");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _success_alert_success_alert_component__WEBPACK_IMPORTED_MODULE_3__["SuccessAlertComponent"], _warning_alert_warning_alert_component__WEBPACK_IMPORTED_MODULE_4__["WarningAlertComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _success_alert_success_alert_component__WEBPACK_IMPORTED_MODULE_3__["SuccessAlertComponent"], _warning_alert_warning_alert_component__WEBPACK_IMPORTED_MODULE_4__["WarningAlertComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "q/SR":
    /*!**********************************************************!*\
      !*** ./src/app/success-alert/success-alert.component.ts ***!
      \**********************************************************/

    /*! exports provided: SuccessAlertComponent */

    /***/
    function qSR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessAlertComponent", function () {
        return SuccessAlertComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SuccessAlertComponent = /*#__PURE__*/function () {
        function SuccessAlertComponent() {
          _classCallCheck(this, SuccessAlertComponent);
        }

        _createClass(SuccessAlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SuccessAlertComponent;
      }();

      SuccessAlertComponent.ɵfac = function SuccessAlertComponent_Factory(t) {
        return new (t || SuccessAlertComponent)();
      };

      SuccessAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SuccessAlertComponent,
        selectors: [["app-success-alert"]],
        decls: 10,
        vars: 0,
        consts: [[1, "mw-50", "mt-3", "me-3", "p-3", "bg-success"], [1, "d-flex", "flex-row"], [1, "fas", "fa-check-square", "fs-1", "pe-2", "d-flex", "align-items-center"], [1, "fs-1", "mb-0"]],
        template: function SuccessAlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Success Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet maiores officia neque obcaecati. Dolor facere ducimus magnam modi nobis incidunt voluptates, ut exercitationem reprehenderit facilis veritatis tenetur quaerat obcaecati doloremque laboriosam libero est molestiae accusantium. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzLWFsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessAlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-success-alert',
            templateUrl: './success-alert.component.html',
            styleUrls: ['./success-alert.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map