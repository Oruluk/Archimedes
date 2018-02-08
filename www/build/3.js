webpackJsonp([3],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssemblyPlansPageModule", function() { return AssemblyPlansPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assembly_plans__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AssemblyPlansPageModule = (function () {
    function AssemblyPlansPageModule() {
    }
    AssemblyPlansPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__assembly_plans__["a" /* AssemblyPlansPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__assembly_plans__["a" /* AssemblyPlansPage */]),
            ],
        })
    ], AssemblyPlansPageModule);
    return AssemblyPlansPageModule;
}());

//# sourceMappingURL=assembly-plans.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssemblyPlansPage; });
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


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssemblyPlansPage = (function () {
    function AssemblyPlansPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AssemblyPlansPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssemblyPlansPage');
    };
    AssemblyPlansPage.prototype.goWorkPlan = function () {
        this.navCtrl.push("WorkPlanPage");
    };
    AssemblyPlansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assembly-plans',template:/*ion-inline-start:"/home/patrick/IoT/src/pages/assembly-plans/assembly-plans.html"*/'<ion-header padding>\n\n  <div class="headerWrap">\n    <div class="icon"></div>\n      <div class="heading">\n      <h1>\n        Archimedes\n      </h1>\n      <h2>\n        ELABO Table 1\n      </h2>\n    </div>\n\n  </div>\n\n</ion-header>\n\n\n<ion-content>\n  <h1 class="headingInstruction">Construction Plans</h1>\n  <div class="main">\n    <ion-card (click)="goWorkPlan()">\n      <img src="assets/img/toy-car.jpg"/>\n      <div class="card-title">Race Car</div>\n    </ion-card>\n\n    <ion-card (click)="goWorkPlan()">\n      <img src="assets/img/truck.jpg"/>\n      <div class="card-title">Toy Robot</div>\n    </ion-card>\n\n    <ion-card (click)="goWorkPlan()">\n      <img src="assets/img/toy-controller.jpg"/>\n      <div class="card-title">Toy Truck</div>\n    </ion-card>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/patrick/IoT/src/pages/assembly-plans/assembly-plans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AssemblyPlansPage);
    return AssemblyPlansPage;
}());

//# sourceMappingURL=assembly-plans.js.map

/***/ })

});
//# sourceMappingURL=3.js.map