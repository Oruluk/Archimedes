webpackJsonp([0],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPlanPageModule", function() { return WorkPlanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_plan__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WorkPlanPageModule = (function () {
    function WorkPlanPageModule() {
    }
    WorkPlanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__work_plan__["a" /* WorkPlanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__work_plan__["a" /* WorkPlanPage */]),
            ],
        })
    ], WorkPlanPageModule);
    return WorkPlanPageModule;
}());

//# sourceMappingURL=work-plan.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkPlanPage; });
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
 * Generated class for the WorkPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkPlanPage = (function () {
    function WorkPlanPage(navCtrl, navParams, plt, cd) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.cd = cd;
        this.requiredFeatures = ['ir'];
        this.counter = true;
        this.onDeviceSupported = function () {
            console.log('a');
        };
        this.onDeviceNotSupported = function () {
            console.log('b');
        };
        plt.ready().then(function () {
            _this.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
            _this.wikitudePlugin._sdkKey = "UeTP9NOygx567LhvQR6JaAer50BXGdAoVhV5SEXOs9o+5F1ookXLdFBGQhs15qrO3suHr3d8piUc5wgzGdj+CjByMEYSwmAJ0z6sbVgUZCWiTmmKbvQN6uUBHKjt6MebncSmamdAQyZlOUP3EL9BWnhZ0lIGPQbf2uQVFtNbYUxTYWx0ZWRfX+EzhW4DK6HYU8X7Xk+SLe2xMzq0XhxcKXlfnIyEzSeimbSqoU6TXkJ051qcKHoCpmPECcfSDGk53S0JyfTUajNRzmIC7K99+bVQKBZB2hzj7SFT90PIoqP6/gTztxMrnumqeMAAF3uzy0XqkiH4ugiaXMjXHb73lBqdiazHIMbg8Ysmnnpbd0VmqWEhLiTfThTmcEw59jxdGGsgz6zqx614HpMFpOFBkugfeWAkzG9C+WkyJuWrYAzdD7zTYftqfmQbuf3lGlocrbC8mOJHH15ZWOXBxONHYMCIfuqArxBRHmK23tNM138I43xDWj+kbByne11DeLAQLBjp1H8/UIdRPtFLGyD30ZG73Hrkpcf/2fOAH2oe1f+f4A/QZVc+ZMvGRna8FBriEyucSPKaK8M/z2mxLMhoua3Q9Qiv03kqooGolielSbqmwORlFudaMoRO8xAtUjmw6ZZg8qk6jwjhPMyLFWQl36I/jdRSTD2F1XuYousEBX8=";
            _this.wikitudePlugin.isDeviceSupported(_this.onDeviceSupported, _this.onDeviceNotSupported, _this.requiredFeatures);
        });
    }
    WorkPlanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkPlanPage');
    };
    WorkPlanPage.prototype.startPreview = function (e) {
        var config = { "camera_position": "back" };
        console.log(e);
        if (e == 1) {
            this.wikitudePlugin.loadARchitectWorld(function (success) {
                console.log("ARchitect World loaded successfully.");
            }, function (fail) {
                console.log("Failed to load ARchitect World!");
                console.log(fail);
            }, "www/assets/experience/Step1/index.html", ['ir'], config);
            this.counter = false;
        }
        else if (e == 2) {
            this.wikitudePlugin.loadARchitectWorld(function (success) {
                console.log("ARchitect World loaded successfully.");
            }, function (fail) {
                console.log("Failed to load ARchitect World!");
                console.log(fail);
            }, "www/assets/experience/Step2/index.html", ['ir'], config);
            this.counter = false;
        }
        else if (e == 3) {
            this.wikitudePlugin.loadARchitectWorld(function (success) {
                console.log("ARchitect World loaded successfully.");
            }, function (fail) {
                console.log("Failed to load ARchitect World!");
                console.log(fail);
            }, "www/assets/experience/Step3/index.html", ['ir'], config);
            this.counter = false;
        }
    };
    WorkPlanPage.prototype.finish = function () {
        this.navCtrl.push("CompleteAssemblyPage");
    };
    WorkPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-work-plan',template:/*ion-inline-start:"/home/patrick/IoT/src/pages/work-plan/work-plan.html"*/'<!--\n  Generated template for the WorkPlanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Assembly</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="image"></div>\n  <h1 class="heading">3D Visualizing</h1>\n\n</ion-content>\n\n\n<ion-footer no-border padding>\n\n  <div>\n    <button ion-button color="grey" large outline (click)="startPreview(1)">\n      <ion-icon class="paddedIcon" name="eye" ></ion-icon>\n      Step 1\n    </button>\n  </div>\n\n  <div>\n    <button ion-button color="grey" large outline (click)="startPreview(2)">\n      <ion-icon class="paddedIcon" name="eye" ></ion-icon>\n      Step 2\n    </button>\n  </div>\n\n  <div>\n    <button ion-button color="grey" large outline (click)="startPreview(3)">\n      <ion-icon class="paddedIcon" name="eye" ></ion-icon>\n      Step 3\n    </button>\n  </div>\n\n    <button ion-button large class="order" color="green" full (click)="finish()">\n      Finish assembly\n    </button>\n\n</ion-footer>\n'/*ion-inline-end:"/home/patrick/IoT/src/pages/work-plan/work-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], WorkPlanPage);
    return WorkPlanPage;
}());

//# sourceMappingURL=work-plan.js.map

/***/ })

});
//# sourceMappingURL=0.js.map