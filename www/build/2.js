webpackJsonp([2],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteAssemblyPageModule", function() { return CompleteAssemblyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complete_assembly__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompleteAssemblyPageModule = (function () {
    function CompleteAssemblyPageModule() {
    }
    CompleteAssemblyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__complete_assembly__["a" /* CompleteAssemblyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__complete_assembly__["a" /* CompleteAssemblyPage */]),
            ],
        })
    ], CompleteAssemblyPageModule);
    return CompleteAssemblyPageModule;
}());

//# sourceMappingURL=complete-assembly.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteAssemblyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompleteAssemblyPage = (function () {
    function CompleteAssemblyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CompleteAssemblyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CompleteAssemblyPage');
        setTimeout(function () { _this.navCtrl.push('AssemblyPlansPage'); }, 3000);
    };
    CompleteAssemblyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complete-assembly',template:/*ion-inline-start:"/home/patrick/IoT/src/pages/complete-assembly/complete-assembly.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Congratulation!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n  <section class="root">\n         <h1 class="heading">The assembly is finished.</h1>\n         <h1 class="headingBig"><span class="done">Done</span></h1>\n  </section>\n\n  <div class="checkmark">\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/patrick/IoT/src/pages/complete-assembly/complete-assembly.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CompleteAssemblyPage);
    return CompleteAssemblyPage;
}());

//# sourceMappingURL=complete-assembly.js.map

/***/ })

});
//# sourceMappingURL=2.js.map