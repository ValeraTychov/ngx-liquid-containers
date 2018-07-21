(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ./demo/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/app/app.component.css":
/*!************************************!*\
  !*** ./demo/app/app.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    position: absolute;\r\n    top: 60px;\r\n    bottom: 0px;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\nmat-button-toggle-group {\r\n    margin-top: 30px;\r\n}\r\n\r\nmat-sidenav {\r\n    background-color: #fafafa;\r\n}\r\n\r\n.title {\r\n    margin-left: 10px; \r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}"

/***/ }),

/***/ "./demo/app/app.component.html":
/*!*************************************!*\
  !*** ./demo/app/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <button \r\n    mat-icon-button (click)=\"snav.toggle()\" \r\n    [ngClass]=\"{invisible: !mobileQuery.matches}\" >\r\n        <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <span class=\"title\">Liquid Containers</span>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container class=\"example-container\">\r\n    <mat-sidenav \r\n    [mode]=\"mobileQuery.matches ? 'over' : 'side'\" \r\n    [opened]=!mobileQuery.matches \r\n    #snav>\r\n        <mat-button-toggle-group vertical #group=\"matButtonToggleGroup\">\r\n            <mat-button-toggle routerLink=\"/example1\">ScrollBox</mat-button-toggle>\r\n            <mat-button-toggle routerLink=\"/example2\">ShiftBox</mat-button-toggle>\r\n            <mat-button-toggle routerLink=\"/example3\">Combination</mat-button-toggle>\r\n        </mat-button-toggle-group> \r\n    </mat-sidenav>\r\n    \r\n    <mat-sidenav-content>\r\n        <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./demo/app/app.component.ts":
/*!***********************************!*\
  !*** ./demo/app/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, media) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./demo/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./demo/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./demo/app/app.module.ts":
/*!********************************!*\
  !*** ./demo/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./demo/app/app.component.ts");
/* harmony import */ var _src_liquid_containers_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/liquid-containers.module */ "./src/liquid-containers.module.ts");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _scroll_box_ex1_scroll_box_ex1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scroll-box-ex1/scroll-box-ex1.component */ "./demo/app/scroll-box-ex1/scroll-box-ex1.component.ts");
/* harmony import */ var _shift_box_ex1_shift_box_ex1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shift-box-ex1/shift-box-ex1.component */ "./demo/app/shift-box-ex1/shift-box-ex1.component.ts");
/* harmony import */ var _combo_ex1_combo_ex1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./combo-ex1/combo-ex1.component */ "./demo/app/combo-ex1/combo-ex1.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Materials

//Animations




var appRoutes = [
    { path: "", component: _scroll_box_ex1_scroll_box_ex1_component__WEBPACK_IMPORTED_MODULE_7__["ScrollBoxEx1Component"] },
    { path: "example1", component: _scroll_box_ex1_scroll_box_ex1_component__WEBPACK_IMPORTED_MODULE_7__["ScrollBoxEx1Component"] },
    { path: "example2", component: _shift_box_ex1_shift_box_ex1_component__WEBPACK_IMPORTED_MODULE_8__["ShiftBoxEx1Component"] },
    { path: "example3", component: _combo_ex1_combo_ex1_component__WEBPACK_IMPORTED_MODULE_9__["ComboEx1Component"] },
    { path: "**", component: _scroll_box_ex1_scroll_box_ex1_component__WEBPACK_IMPORTED_MODULE_7__["ScrollBoxEx1Component"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _scroll_box_ex1_scroll_box_ex1_component__WEBPACK_IMPORTED_MODULE_7__["ScrollBoxEx1Component"],
                _shift_box_ex1_shift_box_ex1_component__WEBPACK_IMPORTED_MODULE_8__["ShiftBoxEx1Component"],
                _combo_ex1_combo_ex1_component__WEBPACK_IMPORTED_MODULE_9__["ComboEx1Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _src_liquid_containers_module__WEBPACK_IMPORTED_MODULE_4__["LiquidContainersModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./demo/app/combo-ex1/combo-ex1.component.css":
/*!****************************************************!*\
  !*** ./demo/app/combo-ex1/combo-ex1.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.scroll-box1 {\r\n    flex: 1 0 auto;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.big-area1 {\r\n    position: absolute; \r\n    width: 3000px; \r\n    height: 3000px; \r\n    background-image: url('/ngx-liquid-containers/assets/grid.png');\r\n}\r\n\r\n.big-area1>p {\r\n    margin: 10px;\r\n}\r\n\r\n.shift-box1 {\r\n    position: absolute;\r\n    left: 50px;\r\n    right: 50px;\r\n    top: 50px;\r\n    bottom: 50px;\r\n    border: 1px solid royalblue; \r\n}\r\n\r\n.child1 {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 50px;\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: blue;\r\n}\r\n\r\n.child2 {\r\n    position: absolute;\r\n    top: 150px;\r\n    left: 50px;\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: red;\r\n}\r\n\r\n.child3 {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 150px;\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: blueviolet;\r\n}\r\n\r\n.scroll-box2 {\r\n    position: absolute;\r\n    margin: 0px;\r\n    height: auto;\r\n    left: 30px;\r\n    right: 30px;\r\n    top: 30px;\r\n    bottom: 30px;\r\n    border: 1px dashed black; \r\n    \r\n}\r\n\r\n.big-area2 {\r\n    position: absolute; \r\n    width: 1000px; \r\n    height: 1000px; \r\n    background-image: url('/ngx-liquid-containers/assets/grid.png');\r\n}\r\n\r\n.shift-box2 {\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    border: 1px solid royalblue; \r\n}"

/***/ }),

/***/ "./demo/app/combo-ex1/combo-ex1.component.html":
/*!*****************************************************!*\
  !*** ./demo/app/combo-ex1/combo-ex1.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n    <lc-scroll-box class=\"scroll-box1\" [sensitivity]=\"2\">\r\n        <div class=\"big-area1\">\r\n            <p>Click and Drag this area</p>\r\n            <lc-shift-box class=\"shift-box1\">\r\n                <div class=\"child1 lc-shift-hook\"></div>\r\n                <div class=\"child2 lc-shift-hook\"></div>\r\n                <div class=\"child3 lc-shift-hook\">\r\n                    <lc-scroll-box class=\"scroll-box2\" [sensitivity]=\"2\">\r\n                        <div class=\"big-area2\">\r\n                            <lc-shift-box class=\"shift-box2\">\r\n                                    <div class=\"child1 lc-shift-hook\"></div>\r\n                            </lc-shift-box>\r\n                        </div>\r\n                    </lc-scroll-box>    \r\n                </div>\r\n            </lc-shift-box>\r\n        </div>\r\n    </lc-scroll-box>\r\n</div>"

/***/ }),

/***/ "./demo/app/combo-ex1/combo-ex1.component.ts":
/*!***************************************************!*\
  !*** ./demo/app/combo-ex1/combo-ex1.component.ts ***!
  \***************************************************/
/*! exports provided: ComboEx1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboEx1Component", function() { return ComboEx1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComboEx1Component = /** @class */ (function () {
    function ComboEx1Component() {
    }
    ComboEx1Component.prototype.ngOnInit = function () {
    };
    ComboEx1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-combo-ex1',
            template: __webpack_require__(/*! ./combo-ex1.component.html */ "./demo/app/combo-ex1/combo-ex1.component.html"),
            styles: [__webpack_require__(/*! ./combo-ex1.component.css */ "./demo/app/combo-ex1/combo-ex1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComboEx1Component);
    return ComboEx1Component;
}());



/***/ }),

/***/ "./demo/app/scroll-box-ex1/scroll-box-ex1.component.css":
/*!**************************************************************!*\
  !*** ./demo/app/scroll-box-ex1/scroll-box-ex1.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\nlc-scroll-box {\r\n    flex: 1 0 auto;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.big-area {\r\n    position: absolute; \r\n    width: 5000px; \r\n    height: 5000px; \r\n    background-image: url('/ngx-liquid-containers/assets/grid.png');\r\n}\r\n\r\n.big-area>p {\r\n    margin: 10px;\r\n}\r\n\r\n.nested-el1 {\r\n    position: absolute;\r\n    border: 1px dashed coral;\r\n    top: 100px; \r\n    left: 200px; \r\n    width: 300px; \r\n    height: 150px; \r\n    background-color: blueviolet;\r\n}\r\n\r\n.nested-el1>p {\r\n    margin: 10px;\r\n}\r\n\r\n.nested-el2 {\r\n    display: block;\r\n    margin: 20px;\r\n    border: 1px dashed black;\r\n    background-color: coral;\r\n    height: 150px;\r\n}\r\n\r\n.nested-el2>p{\r\n    margin: 10px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./demo/app/scroll-box-ex1/scroll-box-ex1.component.html":
/*!***************************************************************!*\
  !*** ./demo/app/scroll-box-ex1/scroll-box-ex1.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n    <lc-scroll-box [sensitivity]=\"2\">\r\n        <div class=\"big-area\">\r\n            <p>Click and Drag this area</p>\r\n            <div class=\"lc-no-scroll nested-el1\">\r\n              <p>This div has class \"lc-no-scroll\"</p>\r\n                <div class=\"nested-el2\" >\r\n                    <p>Nested 2</p>\r\n                </div>\r\n            </div>\r\n    \r\n        </div>\r\n    </lc-scroll-box>\r\n</div>\r\n"

/***/ }),

/***/ "./demo/app/scroll-box-ex1/scroll-box-ex1.component.ts":
/*!*************************************************************!*\
  !*** ./demo/app/scroll-box-ex1/scroll-box-ex1.component.ts ***!
  \*************************************************************/
/*! exports provided: ScrollBoxEx1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollBoxEx1Component", function() { return ScrollBoxEx1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollBoxEx1Component = /** @class */ (function () {
    function ScrollBoxEx1Component() {
    }
    ScrollBoxEx1Component.prototype.ngOnInit = function () {
    };
    ScrollBoxEx1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scroll-box-ex1',
            template: __webpack_require__(/*! ./scroll-box-ex1.component.html */ "./demo/app/scroll-box-ex1/scroll-box-ex1.component.html"),
            styles: [__webpack_require__(/*! ./scroll-box-ex1.component.css */ "./demo/app/scroll-box-ex1/scroll-box-ex1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScrollBoxEx1Component);
    return ScrollBoxEx1Component;
}());



/***/ }),

/***/ "./demo/app/shift-box-ex1/shift-box-ex1.component.css":
/*!************************************************************!*\
  !*** ./demo/app/shift-box-ex1/shift-box-ex1.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\nlc-shift-box {\r\n    flex: 1 0 auto;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    border: 1px solid royalblue; \r\n    overflow: scroll;\r\n}\r\n\r\n.background>p {\r\n    margin: 10px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.background{\r\n    position: absolute; \r\n    width: 2000px; \r\n    height: 1000px; \r\n    background-image: url('/ngx-liquid-containers/assets/grid.png');\r\n}\r\n\r\n.child1 {\r\n    position: absolute;\r\n    border: 1px dashed coral;\r\n    width: 200px;\r\n    height: 100px;\r\n    left: 50px;\r\n    top: 100px;\r\n    background-color: blueviolet;\r\n}\r\n\r\n.child1>p {\r\n    margin: 10px;\r\n}\r\n\r\n.child2 {\r\n    position: absolute;\r\n    border: 1px dashed blueviolet;\r\n    width: 200px;\r\n    height: 200px;\r\n    left: 50px;\r\n    top: 250px;\r\n    background-color: greenyellow;\r\n}\r\n\r\n.child2 .hook {\r\n    margin: 20px;\r\n    background-color: coral;\r\n    border: 1px dashed black;\r\n    height: 40px;\r\n}\r\n\r\n.hook p {\r\n    margin: 10px;\r\n    background-color: yellow;\r\n    border: 1px dashed black;\r\n\r\n}\r\n\r\n.child2 .content {\r\n    position: relative;\r\n    margin: 20px;\r\n    background-color: deepskyblue;\r\n    border: 1px dashed black;\r\n    \r\n}\r\n\r\n.content p {\r\n    margin: 10px;\r\n}\r\n\r\n.child3{\r\n    position: absolute;\r\n    border: 1px dashed greenyellow;\r\n    width: 200px;\r\n    height: 200px;\r\n    left: 300px;\r\n    top: 100px;\r\n    padding: 10px;\r\n    background-color: mediumvioletred;\r\n}\r\n\r\n.child3 p {\r\n    margin: 0px;\r\n    margin-bottom: 10px;\r\n    border: 1px dashed greenyellow;\r\n}"

/***/ }),

/***/ "./demo/app/shift-box-ex1/shift-box-ex1.component.html":
/*!*************************************************************!*\
  !*** ./demo/app/shift-box-ex1/shift-box-ex1.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n    <lc-shift-box>\r\n        <div class=\"background\">\r\n            <p>You can move all lc-shift-box children which has elements with \"lc-shift-hook\" class</p>\r\n        </div>\r\n\r\n        <div class=\"child1\">\r\n            <p>This child hasn't elements with \"lc-shift-hook\" class</p>\r\n        </div>\r\n\r\n        <div class=\"child2\">\r\n            <div class=\"lc-shift-hook hook\">\r\n                <p class=\"lc-shift-hook\">Drag me</p>\r\n            </div>\r\n            <div class=\"content\">\r\n                <p>Div (orange) and p (yellow) elements contain \"lc-shift-hook\" classes</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"child3 lc-shift-hook\">\r\n            <p>This child contains \"lc-shift-hook\" class. But p with this text doesn't.</p>\r\n            This text is innertext of the div element.\r\n        </div>\r\n\r\n    </lc-shift-box>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./demo/app/shift-box-ex1/shift-box-ex1.component.ts":
/*!***********************************************************!*\
  !*** ./demo/app/shift-box-ex1/shift-box-ex1.component.ts ***!
  \***********************************************************/
/*! exports provided: ShiftBoxEx1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftBoxEx1Component", function() { return ShiftBoxEx1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShiftBoxEx1Component = /** @class */ (function () {
    function ShiftBoxEx1Component() {
    }
    ShiftBoxEx1Component.prototype.ngOnInit = function () {
    };
    ShiftBoxEx1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shift-box-ex1',
            template: __webpack_require__(/*! ./shift-box-ex1.component.html */ "./demo/app/shift-box-ex1/shift-box-ex1.component.html"),
            styles: [__webpack_require__(/*! ./shift-box-ex1.component.css */ "./demo/app/shift-box-ex1/shift-box-ex1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShiftBoxEx1Component);
    return ShiftBoxEx1Component;
}());



/***/ }),

/***/ "./demo/environments/environment.ts":
/*!******************************************!*\
  !*** ./demo/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./demo/main.ts":
/*!**********************!*\
  !*** ./demo/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./demo/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./demo/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/components/lc-scroll-box/lc-scroll-box.component.css":
/*!******************************************************************!*\
  !*** ./src/components/lc-scroll-box/lc-scroll-box.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    position: relative;\r\n    display: block;\r\n    overflow: scroll;\r\n}\r\n\r\n:host(.ondrag) {\r\n    cursor: move;\r\n}\r\n\r\n:host /deep/ .lc-no-scroll{\r\n    -webkit-user-select: text;\r\n       -moz-user-select: text;\r\n        -ms-user-select: text;\r\n            user-select: text;\r\n}\r\n"

/***/ }),

/***/ "./src/components/lc-scroll-box/lc-scroll-box.component.html":
/*!*******************************************************************!*\
  !*** ./src/components/lc-scroll-box/lc-scroll-box.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n"

/***/ }),

/***/ "./src/components/lc-scroll-box/lc-scroll-box.component.ts":
/*!*****************************************************************!*\
  !*** ./src/components/lc-scroll-box/lc-scroll-box.component.ts ***!
  \*****************************************************************/
/*! exports provided: LcScrollBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcScrollBox", function() { return LcScrollBox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LcScrollBox = /** @class */ (function () {
    function LcScrollBox(elementRef) {
        this.elementRef = elementRef;
        // Scroll shift to cursor shift ratio. 
        this.sensitivity = 1;
        // HammerJS events can't stopPropagation();
        // We use allowMove for prevent moving parent DOM-elements which use same dirrective.
        // Native browser event onPointerDown sets allowMove true and stops propagation.
        this.allowMove = false;
        this.scrollPosition = { left: 0, top: 0 };
        this.startCursorPosition = { x: 0, y: 0 };
        this.startScrollPosition = { left: 0, top: 0 };
        this.containerElement = elementRef.nativeElement;
    }
    LcScrollBox.prototype.getScrollPositionFromElement = function () {
        var left = this.containerElement.scrollLeft;
        var top = this.containerElement.scrollTop;
        return { left: left, top: top };
    };
    ;
    LcScrollBox.prototype.ngOnInit = function () {
    };
    LcScrollBox.prototype.onPointerDown = function (event) {
        window.getSelection().removeAllRanges();
        var target = event.target;
        while (target != this.containerElement) {
            if (target.classList.contains("lc-no-scroll")) {
                event.stopPropagation();
                return;
            }
            target = target.parentElement;
        }
        // In Mozilla
        // It prevents our event handling when the pointer is on scrollbars of the element.
        if (event.clientX >= this.getVerticalScrollBarOffsetLeft() ||
            event.clientY >= this.getHorizontalScrollBarOffsetTop()) {
            return;
        }
        this.allowMove = true;
        event.stopPropagation();
    };
    LcScrollBox.prototype.getVerticalScrollBarOffsetLeft = function () {
        var elemRect = this.containerElement.getBoundingClientRect();
        return elemRect.left + this.containerElement.clientWidth;
    };
    LcScrollBox.prototype.getHorizontalScrollBarOffsetTop = function () {
        var elemRect = this.containerElement.getBoundingClientRect();
        return elemRect.top + this.containerElement.clientHeight;
    };
    LcScrollBox.prototype.onMoveStart = function (event) {
        if (!this.allowMove)
            return;
        this.isMoving = true;
        this.startScrollPosition = this.getScrollPositionFromElement();
        this.startCursorPosition = { x: event.center.x, y: event.center.y };
    };
    LcScrollBox.prototype.onMove = function (event) {
        if (!this.isMoving)
            return;
        this.updateScrollPosition({ x: event.center.x, y: event.center.y });
    };
    LcScrollBox.prototype.updateScrollPosition = function (cursorPosition) {
        // Quickmath 
        // scrollPosition - startScrollPosition = sensitivity * (cursorPosition - startCursorPosition);
        var deltaX = this.sensitivity * (this.startCursorPosition.x - cursorPosition.x);
        var deltaY = this.sensitivity * (this.startCursorPosition.y - cursorPosition.y);
        var left = this.startScrollPosition.left + deltaX;
        var top = this.startScrollPosition.top + deltaY;
        this.scrollPosition = { left: left, top: top };
    };
    LcScrollBox.prototype.onMoveEnd = function (event) {
        this.isMoving = false;
        this.allowMove = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LcScrollBox.prototype, "sensitivity", void 0);
    LcScrollBox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lc-scroll-box',
            template: __webpack_require__(/*! ./lc-scroll-box.component.html */ "./src/components/lc-scroll-box/lc-scroll-box.component.html"),
            styles: [__webpack_require__(/*! ./lc-scroll-box.component.css */ "./src/components/lc-scroll-box/lc-scroll-box.component.css")],
            host: {
                '(pointerdown)': 'onPointerDown($event)',
                '(drag)': 'onMove($event)',
                '(dragstart)': 'onMoveStart($event)',
                '(dragend)': 'onMoveEnd($event)',
                '[scrollLeft]': 'scrollPosition.left',
                '[scrollTop]': 'scrollPosition.top',
                '[class.ondrag]': 'isMoving'
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LcScrollBox);
    return LcScrollBox;
}());



/***/ }),

/***/ "./src/components/lc-shift-box/lc-shift-box.component.css":
/*!****************************************************************!*\
  !*** ./src/components/lc-shift-box/lc-shift-box.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    position: relative;\r\n    overflow: hidden;\r\n}"

/***/ }),

/***/ "./src/components/lc-shift-box/lc-shift-box.component.html":
/*!*****************************************************************!*\
  !*** ./src/components/lc-shift-box/lc-shift-box.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n"

/***/ }),

/***/ "./src/components/lc-shift-box/lc-shift-box.component.ts":
/*!***************************************************************!*\
  !*** ./src/components/lc-shift-box/lc-shift-box.component.ts ***!
  \***************************************************************/
/*! exports provided: AbstractElement, LcShiftBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractElement", function() { return AbstractElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcShiftBox", function() { return LcShiftBox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AbstractElement = /** @class */ (function () {
    function AbstractElement(nativeElement) {
        this.left = 0;
        this.top = 0;
        this.nativeElement = nativeElement;
        this.getPositionFromElement();
        this.getSizeFromElement();
    }
    AbstractElement.prototype.getPositionFromElement = function () {
        if (!this.nativeElement.style.transform) {
            return;
        }
        var transform = this.nativeElement.style.transform;
        var translate = transform.match(/translate.+?\)/);
        if (!translate) {
            return;
        }
        var position = translate[0].match(/[-\d\.]+/g);
        this.left = parseInt(position[0]);
        this.top = parseInt(position[1]);
    };
    AbstractElement.prototype.getSizeFromElement = function () {
        this.width = this.nativeElement.offsetWidth;
        this.height = this.nativeElement.offsetHeight;
    };
    AbstractElement.prototype.setElementPosition = function (position) {
        this.left = position.left;
        this.top = position.top;
        this.nativeElement.style.transform = "translate(" + position.left + "px," + position.top + "px)";
    };
    return AbstractElement;
}());

var LcShiftBox = /** @class */ (function () {
    function LcShiftBox(elementRef) {
        this.elementRef = elementRef;
        this.pointerOffset = { fromLeft: 0, fromTop: 0 };
        this.allowMove = false;
    }
    LcShiftBox.prototype.ngOnInit = function () {
        this.containerElement = new AbstractElement(this.elementRef.nativeElement);
    };
    LcShiftBox.prototype.onPointerDown = function (event) {
        var target = event.target;
        // Moveable container can cover other elements, like buttons or other containers.
        // If pointerdown event is made directly on movecontainer, we return.
        // It needs to continue propagation of event to other elements.
        if (target == this.containerElement.nativeElement) {
            return;
        }
        if (target.classList.contains("lc-shift-hook")) {
            var element = this.FindMovableElement(target);
            this.movableElement = new AbstractElement(element);
            // Moves element on the foreground.
            this.containerElement.nativeElement.appendChild(element);
            this.setPointerOffset({ x: event.clientX, y: event.clientY });
            this.allowMove = true;
        }
        event.stopPropagation();
    };
    LcShiftBox.prototype.FindMovableElement = function (element) {
        while (element.parentElement != this.containerElement.nativeElement) {
            element = element.parentElement;
        }
        return element;
    };
    LcShiftBox.prototype.setPointerOffset = function (pointerPosition) {
        this.pointerOffset.fromLeft = pointerPosition.x - this.movableElement.left;
        this.pointerOffset.fromTop = pointerPosition.y - this.movableElement.top;
    };
    LcShiftBox.prototype.onPointerMove = function (event) {
        if (!this.allowMove)
            return;
        this.setElementPosition({ x: event.clientX, y: event.clientY });
    };
    LcShiftBox.prototype.setElementPosition = function (pointerPosition) {
        var left = pointerPosition.x - this.pointerOffset.fromLeft;
        var top = pointerPosition.y - this.pointerOffset.fromTop;
        this.movableElement.setElementPosition({ left: left, top: top });
    };
    LcShiftBox.prototype.onPointerEnd = function (event) {
        this.allowMove = false;
    };
    LcShiftBox.prototype.onPointerLeave = function (event) {
        if (this.allowMove) {
            this.allowMove = false;
            window.getSelection().removeAllRanges();
        }
    };
    LcShiftBox.prototype.onTouchMove = function (event) {
        if (this.allowMove) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LcShiftBox.prototype, "options", void 0);
    LcShiftBox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lc-shift-box',
            template: __webpack_require__(/*! ./lc-shift-box.component.html */ "./src/components/lc-shift-box/lc-shift-box.component.html"),
            styles: [__webpack_require__(/*! ./lc-shift-box.component.css */ "./src/components/lc-shift-box/lc-shift-box.component.css")],
            host: {
                '(pointerdown)': 'onPointerDown($event)',
                '(pointermove)': 'onPointerMove($event)',
                '(pointerup)': 'onPointerEnd($event)',
                '(pointerleave)': 'onPointerLeave($event)',
                '(touchmove)': 'onTouchMove($event)'
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LcShiftBox);
    return LcShiftBox;
}());



/***/ }),

/***/ "./src/core/gestures/gesture-config.ts":
/*!*********************************************!*\
  !*** ./src/core/gestures/gesture-config.ts ***!
  \*********************************************/
/*! exports provided: GestureConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestureConfig", function() { return GestureConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * The MIT License
 *
 * @license
 * Copyright (c) 2014-2018 Google, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** Adjusts configuration of our gesture library, Hammer. */
var GestureConfig = /** @class */ (function (_super) {
    __extends(GestureConfig, _super);
    function GestureConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hammer = typeof window !== 'undefined' ? window.Hammer : null;
        /** List of new event names to add to the gesture support list */
        _this.events = _this._hammer ? [
            'longpress',
            'drag',
            'dragstart',
            'dragend',
            'dragright',
            'dragleft'
        ] : [];
        return _this;
    }
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://material.io/design/#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param element Element to which to assign the new HammerJS gestures.
     * @returns Newly-created HammerJS instance.
     */
    GestureConfig.prototype.buildHammer = function (element) {
        var mc = new this._hammer(element);
        // Default Hammer Recognizers.
        var pan = new this._hammer.Pan();
        var swipe = new this._hammer.Swipe();
        var press = new this._hammer.Press();
        // Notice that a HammerJS recognizer can only depend on one other recognizer once.
        // Otherwise the previous `recognizeWith` will be dropped.
        // TODO: Confirm threshold numbers with Material Design UX Team
        var drag = this._createRecognizer(pan, { event: 'drag', threshold: 0 }, swipe);
        var longpress = this._createRecognizer(press, { event: 'longpress', time: 500 });
        // Overwrite the default `pan` event to use the swipe event.
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, press, pan, drag, longpress]);
        return mc;
    };
    /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
    GestureConfig.prototype._createRecognizer = function (base, options) {
        var inheritances = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            inheritances[_i - 2] = arguments[_i];
        }
        var recognizer = new base.constructor(options);
        inheritances.push(base);
        inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
        return recognizer;
    };
    GestureConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GestureConfig);
    return GestureConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]));



/***/ }),

/***/ "./src/liquid-containers.module.ts":
/*!*****************************************!*\
  !*** ./src/liquid-containers.module.ts ***!
  \*****************************************/
/*! exports provided: LiquidContainersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidContainersModule", function() { return LiquidContainersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _core_gestures_gesture_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/gestures/gesture-config */ "./src/core/gestures/gesture-config.ts");
/* harmony import */ var _components_lc_scroll_box_lc_scroll_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/lc-scroll-box/lc-scroll-box.component */ "./src/components/lc-scroll-box/lc-scroll-box.component.ts");
/* harmony import */ var _components_lc_shift_box_lc_shift_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/lc-shift-box/lc-shift-box.component */ "./src/components/lc-shift-box/lc-shift-box.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LiquidContainersModule = /** @class */ (function () {
    function LiquidContainersModule() {
    }
    LiquidContainersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_lc_scroll_box_lc_scroll_box_component__WEBPACK_IMPORTED_MODULE_4__["LcScrollBox"],
                _components_lc_shift_box_lc_shift_box_component__WEBPACK_IMPORTED_MODULE_5__["LcShiftBox"]
            ],
            imports: [],
            exports: [
                _components_lc_scroll_box_lc_scroll_box_component__WEBPACK_IMPORTED_MODULE_4__["LcScrollBox"],
                _components_lc_shift_box_lc_shift_box_component__WEBPACK_IMPORTED_MODULE_5__["LcShiftBox"]
            ],
            providers: [
                { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"],
                    useClass: _core_gestures_gesture_config__WEBPACK_IMPORTED_MODULE_3__["GestureConfig"] }
            ],
            bootstrap: []
        })
    ], LiquidContainersModule);
    return LiquidContainersModule;
}());



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./demo/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Github\ngx-liquid-containers\demo\main.ts */"./demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map