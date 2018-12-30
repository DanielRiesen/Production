(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routeConfig, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeConfig", function() { return routeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _google_login_google_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-login/google-login.component */ "./src/app/google-login/google-login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _permission_permission_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permission/permission.component */ "./src/app/permission/permission.component.ts");
/* harmony import */ var _register_classes_register_classes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-classes/register-classes.component */ "./src/app/register-classes/register-classes.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _enrolled_enrolled_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./enrolled/enrolled.component */ "./src/app/enrolled/enrolled.component.ts");
/* harmony import */ var _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tutorials/tutorials.component */ "./src/app/tutorials/tutorials.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./course-detail/course-detail.component */ "./src/app/course-detail/course-detail.component.ts");
/* harmony import */ var _register_school_register_school_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register-school/register-school.component */ "./src/app/register-school/register-school.component.ts");
/* harmony import */ var _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./public-profile/public-profile.component */ "./src/app/public-profile/public-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routeConfig = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"], outlet: 'aux' },
    { path: 'login', component: _google_login_google_login_component__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'permisson', component: _permission_permission_component__WEBPACK_IMPORTED_MODULE_4__["PermissionComponent"] },
    { path: 'reg-classes', component: _register_classes_register_classes_component__WEBPACK_IMPORTED_MODULE_5__["RegisterClassesComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"] },
    { path: 'enrolled', component: _enrolled_enrolled_component__WEBPACK_IMPORTED_MODULE_8__["EnrolledComponent"] },
    { path: 'Tutorials', component: _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_9__["TutorialsComponent"] },
    { path: 'Course_Details/:course', component: _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_11__["CourseDetailComponent"] },
    { path: 'school-reg', component: _register_school_register_school_component__WEBPACK_IMPORTED_MODULE_12__["RegisterSchoolComponent"] },
    { path: 'View_Profile/:id', component: _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_13__["PublicProfileComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routeConfig)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" *ngIf=\"router.url !== '/'\">\r\n  <div id=\"side_bar\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n\r\n  <div id=\"right-side\">\r\n    <app-top-nav></app-top-nav>\r\n    <div id=\"content\">\r\n\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n<router-outlet name='aux' *ngIf=\"router.url === '/'\"></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: 280px auto;\n  height: 100%;\n  background-color: #F8F8F8; }\n\n#right-side {\n  height: 100%; }\n\n#content {\n  height: calc(100% - 6vh- 20px);\n  background-color: #F8F8F8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXEFuZ3VsYXItVHhlclxcVHhlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVTtFQUNWLFVBQVM7RUFFVCxjQUFhO0VBQ2Isa0NBQWlDO0VBQ2pDLGFBQVk7RUFDWiwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSwrQkFBOEI7RUFDOUIsMEJBQXlCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG59XHJcblxyXG4jcmlnaHQtc2lkZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNnZoLSAyMHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbn0gICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(router) {
        this.router = router;
        this.title = 'Txer';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _google_login_google_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google-login/google-login.component */ "./src/app/google-login/google-login.component.ts");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./django.service */ "./src/app/django.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-gapi */ "./node_modules/ng-gapi/lib/index.js");
/* harmony import */ var _user_services_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-services.service */ "./src/app/user-services.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _permission_permission_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./permission/permission.component */ "./src/app/permission/permission.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_classes_register_classes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register-classes/register-classes.component */ "./src/app/register-classes/register-classes.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "./src/app/top-nav/top-nav.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _enrolled_enrolled_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./enrolled/enrolled.component */ "./src/app/enrolled/enrolled.component.ts");
/* harmony import */ var _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tutorials/tutorials.component */ "./src/app/tutorials/tutorials.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./course-detail/course-detail.component */ "./src/app/course-detail/course-detail.component.ts");
/* harmony import */ var _register_school_register_school_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./register-school/register-school.component */ "./src/app/register-school/register-school.component.ts");
/* harmony import */ var _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./public-profile/public-profile.component */ "./src/app/public-profile/public-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var gapiClientConfig = {
    client_id: '962650220393-o5upillndnmij30pdsgktb58fnmm3b4o.apps.googleusercontent.com',
    discoveryDocs: ['https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.profile.photos https://www.googleapis.com/auth/classroom.announcements https://www.googleapis.com/auth/classroom.coursework.students https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/classroom.rosters'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _google_login_google_login_component__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _permission_permission_component__WEBPACK_IMPORTED_MODULE_11__["PermissionComponent"],
                _register_classes_register_classes_component__WEBPACK_IMPORTED_MODULE_13__["RegisterClassesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_15__["TopNavComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"],
                _enrolled_enrolled_component__WEBPACK_IMPORTED_MODULE_17__["EnrolledComponent"],
                _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_18__["TutorialsComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_19__["IndexComponent"],
                _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_20__["CourseDetailComponent"],
                _register_school_register_school_component__WEBPACK_IMPORTED_MODULE_21__["RegisterSchoolComponent"],
                _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_22__["PublicProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                ng_gapi__WEBPACK_IMPORTED_MODULE_8__["GoogleApiModule"].forRoot({
                    provide: ng_gapi__WEBPACK_IMPORTED_MODULE_8__["NG_GAPI_CONFIG"],
                    useValue: gapiClientConfig
                }),
            ],
            providers: [_django_service__WEBPACK_IMPORTED_MODULE_6__["DjangoService"], _user_services_service__WEBPACK_IMPORTED_MODULE_9__["UserServicesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/course-detail/course-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-detail/course-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  course-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/course-detail/course-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/course-detail/course-detail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1kZXRhaWwvY291cnNlLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/course-detail/course-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-detail/course-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailComponent", function() { return CourseDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../django.service */ "./src/app/django.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseDetailComponent = /** @class */ (function () {
    function CourseDetailComponent(router, activatedRoute, django) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.django = django;
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (paramsId) {
            _this.id = paramsId.course;
            _this.django.getCourseDetails(_this.id).subscribe(function (data) {
                return console.log(data);
            });
        });
    };
    CourseDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-detail',
            template: __webpack_require__(/*! ./course-detail.component.html */ "./src/app/course-detail/course-detail.component.html"),
            styles: [__webpack_require__(/*! ./course-detail.component.scss */ "./src/app/course-detail/course-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _django_service__WEBPACK_IMPORTED_MODULE_2__["DjangoService"]])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label\">\r\n        <img src=\"assets/upcoming_tutorials.svg\" class=\"label_icon\">\r\n        <p *ngIf=\"user_data.teacher\" class=\"label_text\">Teaching Courses</p>\r\n        <p *ngIf=\"!user_data.teacher\" class=\"label_text\">Enrolled Courses</p>\r\n        <div class=\"view_all\" routerLink=\"/enrolled\">\r\n            <p class=\"view_all_text\">View All</p>\r\n            <img src=\"assets/view_all.svg\" class=\"view_all_img\">\r\n        </div>\r\n    </div>\r\n    \r\n    <div id=\"enrolled\" class=\"columns\" *ngIf=\"not_reg !== true\">\r\n\r\n        <td *ngFor=\"let course of courses\">\r\n            <div class=\"classcard\">\r\n    \r\n                <div>\r\n                    <h2 class=\"course_name\">\r\n                        {{course.name}}\r\n                    </h2>\r\n                    <p class=\"course_teacher\">\r\n                        {{course.teacher_name}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"icon_links\">\r\n                    <a href=\"{{course.url}}\" class=\"link_icon\"><img src=\"assets/classroom.svg\"></a>\r\n                    <a routerLink=\"/View_Profile/{{course.teacher[0].id}}/\" class=\"link_icon\"><img class=\"link_icon\" src=\"assets/teacher.svg\"></a>\r\n                    <a routerLink=\"/Course_Details/{{course.class_id}}\" class=\"link_icon\"><img class=\"link_icon\" src=\"assets/details.svg\"></a>\r\n                </div>\r\n    \r\n    \r\n            </div>\r\n    \r\n    \r\n        </td>\r\n    \r\n    \r\n    </div>\r\n    \r\n    <div id=\"enrolled\" class=\"columns\" *ngIf=\"not_reg === true\" style=\"grid-template-columns: 100%; text-align: center;\">\r\n        <div class=\"no_courses\">\r\n            <p class=\"no_reg_clas\">You currently aren’t registered or teaching any classes</p>\r\n            <div class=\"teacher_button\">\r\n                <p class=\"teacher_button_text\">Teacher?<br>Entroll your classes</p>\r\n                <div class=\"teacher_button_div\">\r\n                    <p>Register Class</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n<div class=\"label\">\r\n        <img src=\"assets/classes.svg\" class=\"label_icon\">\r\n        <p class=\"label_text\">Upcoming Tutorials</p>\r\n        <div class=\"view_all\">\r\n            <p class=\"view_all_text\">View All</p>\r\n            <img src=\"assets/view_all.svg\" class=\"view_all_img\">\r\n        </div>\r\n    </div>\r\n    \r\n    <div id=\"upcoming\" class=\"columns\" *ngIf=\"no_tut === false\">\r\n    \r\n        <td *ngFor=\"let tutorial of tutorials\">\r\n            <div class=\"tutorial_card\" *ngIf=\"not_reg === false\">\r\n    \r\n                <div class=\"name\">\r\n                    <h2 class=\"tutorial_name\">\r\n                        Tutorial\r\n                        <!-- Replace with class name when finished -->\r\n                    </h2>\r\n                </div>\r\n                <div class=\"tutorial_details\">\r\n                    <div class=\"tutorial_text\">\r\n                        <p class=\"class_name\">{{tutorial.classes[0].name}}</p>\r\n                        <p class=\"time\">{{tutorial.Start_Date}}</p>\r\n                        <p class=\"time\">{{tutorial.Start_Time}} - {{tutorial.End_Time}}</p>\r\n                        <div class=tutorial_details_text>  \r\n\r\n                            <p>Room {{tutorial.Location}}</p>\r\n                            <p *ngIf=\"tutorial.mandatory\">Mandatory</p>\r\n                            <p *ngIf=\"!tutorial.mandatory\">Not Mandatory</p>\r\n                        </div>  \r\n                        <p class=\"hint\"><br>Hover Mouse For More Details</p>\r\n                    </div>\r\n                    <div class=\"icons\">\r\n                        <div class=\"icon\">\r\n                            <img src=\"assets/checkin_white.svg\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <img src=\"assets/upcoming_white.svg\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <img src=\"assets/teacher_white.svg\" alt=\"\" class=\"icon\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    \r\n    \r\n            </div>\r\n        </td>\r\n    </div>\r\n    \r\n    <div id=\"upcoming\" class=\"columns\" *ngIf=\"no_tut === true\" style=\"grid-template-columns: 100%; text-align: center;\">\r\n        <div class=\"no_tutorials\">\r\n            <p class=\"no_reg_clas\">No upcoming tutorials</p>\r\n            <div class=\"teacher_button\">\r\n                <p class=\"teacher_button_text\">Teacher?<br>Create a tutorial</p>\r\n                <div class=\"teacher_button_div\">\r\n                    <p>Create Tutorial</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label {\n  display: grid;\n  grid-template-columns: 30px auto 100px;\n  margin: 26px 42px 0;\n  height: 30px; }\n\n.view_all {\n  background-color: #27A7CF;\n  display: grid;\n  grid-template-columns: auto 30px;\n  padding: 0 8px;\n  border-radius: 2px; }\n\n.view_all_img {\n  width: 30px;\n  height: 30px; }\n\n.view_all_text {\n  color: white;\n  margin: 0;\n  font-size: 12px;\n  margin-top: 8px; }\n\n.label_text {\n  margin-top: 4px;\n  margin-left: 10px;\n  font-size: 20px;\n  margin-bottom: 0; }\n\n.label_icon {\n  width: 30px;\n  height: 30px; }\n\n#enrolled {\n  box-shadow: inset 8px 8px 10px rgba(0, 0, 0, 0.06);\n  margin: 5px 42px 55px;\n  padding: 38px 40px 38px 40px;\n  display: grid;\n  overflow: hidden;\n  background-color: white; }\n\n@media screen and (min-width: 2000px) {\n  #enrolled td:nth-child(n+6) {\n    display: none; }\n  #upcoming td:nth-child(n+6) {\n    display: none; }\n  .columns {\n    grid-template-columns: calc(100%/5) calc(100%/5) calc(100%/5) calc(100%/5) calc(100%/5); } }\n\n@media screen and (min-width: 1620px) and (max-width: 2000px) {\n  #enrolled td:nth-child(n+5) {\n    display: none; }\n  #upcoming td:nth-child(n+5) {\n    display: none; }\n  .columns {\n    grid-template-columns: calc(100%/4) calc(100%/4) calc(100%/4) calc(100%/4); } }\n\n@media screen and (min-width: 1240px) and (max-width: 1620px) {\n  #enrolled td:nth-child(n+4) {\n    display: none; }\n  #upcoming td:nth-child(n+4) {\n    display: none; }\n  .columns {\n    grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3); } }\n\n@media screen and (max-width: 1239px) {\n  #enrolled td:nth-child(n+3) {\n    display: none; }\n  #upcoming td:nth-child(n+3) {\n    display: none; }\n  .columns {\n    grid-template-columns: calc(100%/2) calc(100%/2); } }\n\n.link_icon {\n  width: 40px;\n  height: 40px;\n  -webkit-filter: brightness(50%);\n          filter: brightness(50%);\n  margin: auto; }\n\n.icon_links {\n  vertical-align: middle;\n  text-align: center;\n  background-color: #FAFAFA;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: auto 15% auto; }\n\n.course_name {\n  margin: 150px 0 0 30px;\n  color: #FFFFFF;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 30px;\n  font-size: 24px; }\n\n.course_teacher {\n  margin: 0 0 0 30px;\n  color: #D7D7D7;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 24px;\n  font-size: 16px; }\n\n.classcard {\n  -webkit-animation: tutorial_card_animation 0.5s;\n          animation: tutorial_card_animation 0.5s;\n  display: grid;\n  grid-template-rows: auto 64px;\n  background-color: #27A7CF;\n  width: 250px;\n  height: 280px;\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);\n  margin: auto; }\n\n#upcoming {\n  box-shadow: inset 8px 8px 10px rgba(0, 0, 0, 0.06);\n  margin: 5px 42px;\n  padding: 38px 40px 38px 40px;\n  display: grid;\n  background-color: #FBFBFB; }\n\n.tutorial_card {\n  -webkit-animation: tutorial_card_animation 0.5s;\n          animation: tutorial_card_animation 0.5s;\n  z-index: -1;\n  display: grid;\n  grid-template-columns: 56px auto;\n  background-color: #27A7CF;\n  width: 250px;\n  height: 182px;\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);\n  margin: auto; }\n\n.tutorial_name {\n  display: inline-block;\n  position: relative;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 0px;\n  font-size: 28px;\n  bottom: -82px;\n  left: -20px;\n  color: #D7D7D7;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.name {\n  background: white; }\n\n.no_courses {\n  display: grid;\n  grid-template-rows: 45% 55%;\n  width: 250px;\n  height: 280px;\n  margin: auto; }\n\n.no_reg_clas {\n  margin: 30px auto 0;\n  font-size: 24px; }\n\n.teacher_button {\n  margin: 10px auto; }\n\n.teacher_button_text {\n  color: #C4C4C4; }\n\n.teacher_button_div {\n  background-color: #27A7CF;\n  width: 164px;\n  height: 36px;\n  border-radius: 3px; }\n\n.teacher_button_div p {\n  padding: 7px;\n  color: white;\n  margin: auto; }\n\n.no_tutorials {\n  display: grid;\n  grid-template-rows: 30% auto;\n  width: 250px;\n  height: 162px;\n  margin: auto; }\n\n.tutorial_text p {\n  margin: 0; }\n\n.tutorial_details {\n  padding: 16px 0 0 20px;\n  color: #D8D8D8;\n  font-size: 14px;\n  display: grid;\n  grid-template-rows: auto 50px; }\n\n.class_name {\n  font-size: 30px;\n  color: white;\n  padding-top: 6px;\n  padding-bottom: 8px;\n  width: 100%;\n  display: grid;\n  grid-auto-columns: 18px auto; }\n\n.icons {\n  margin-top: auto;\n  margin-bottom: 11px;\n  display: grid;\n  grid-template-columns: 44px 44px 44px; }\n\n.tutorial_details_text {\n  color: #D8D8D8;\n  font-size: 0; }\n\n@-webkit-keyframes example {\n  from {\n    margin-left: 40%;\n    font-size: 14px; }\n  to {\n    margin-left: 0;\n    font-size: 14px; } }\n\n@keyframes example {\n  from {\n    margin-left: 40%;\n    font-size: 14px; }\n  to {\n    margin-left: 0;\n    font-size: 14px; } }\n\n@-webkit-keyframes shadow {\n  from {\n    width: 250px;\n    height: 182px; }\n  to {\n    width: calc(250px * 1.3);\n    height: calc(182px * 1.3); } }\n\n@keyframes shadow {\n  from {\n    width: 250px;\n    height: 182px; }\n  to {\n    width: calc(250px * 1.3);\n    height: calc(182px * 1.3); } }\n\n@-webkit-keyframes tutorial_card_animation {\n  from {\n    position: relative;\n    left: -70px; }\n  to {\n    position: relative;\n    left: 0px; } }\n\n@keyframes tutorial_card_animation {\n  from {\n    position: relative;\n    left: -70px; }\n  to {\n    position: relative;\n    left: 0px; } }\n\n@-webkit-keyframes class_name_animation {\n  from {\n    font-size: 30px; }\n  to {\n    font-size: 20px; } }\n\n@keyframes class_name_animation {\n  from {\n    font-size: 30px; }\n  to {\n    font-size: 20px; } }\n\n.hint {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.5); }\n\n.tutorial_card:hover .tutorial_card {\n  -webkit-animation: shadow 0.4s forwards;\n          animation: shadow 0.4s forwards; }\n\n.tutorial_card:hover .tutorial_details_text {\n  -webkit-animation: example 0.4s forwards;\n          animation: example 0.4s forwards; }\n\n.tutorial_card:hover .class_name {\n  -webkit-animation: class_name_animation 0.4s forwards;\n          animation: class_name_animation 0.4s forwards; }\n\n.tutorial_card:hover .hint {\n  display: none; }\n\n.time {\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0U6XFxBbmd1bGFyLVR4ZXJcXFR4ZXIvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVDQUFzQztFQUN0QyxvQkFBbUI7RUFDbkIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLGNBQWE7RUFDYixpQ0FBZ0M7RUFDaEMsZUFBYztFQUNkLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osVUFBUztFQUNULGdCQUFlO0VBQ2YsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtREFBa0Q7RUFDbEQsc0JBQXFCO0VBQ3JCLDZCQUE0QjtFQUM1QixjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJO0lBQ0ksY0FBYSxFQUNoQjtFQUNEO0lBQ0ksY0FBYSxFQUNoQjtFQUNEO0lBQ0ksd0ZBQXVGLEVBQzFGLEVBQUE7O0FBR0w7RUFDSTtJQUNJLGNBQWEsRUFDaEI7RUFDRDtJQUNJLGNBQWEsRUFDaEI7RUFDRDtJQUNJLDJFQUEwRSxFQUM3RSxFQUFBOztBQUdMO0VBQ0k7SUFDSSxjQUFhLEVBQ2hCO0VBQ0Q7SUFDSSxjQUFhLEVBQ2hCO0VBQ0Q7SUFDSSw4REFBNkQsRUFDaEUsRUFBQTs7QUFHTDtFQUNJO0lBQ0ksY0FBYSxFQUNoQjtFQUNEO0lBQ0ksY0FBYSxFQUNoQjtFQUNEO0lBQ0ksaURBQWdELEVBQ25ELEVBQUE7O0FBSUw7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGdDQUF1QjtVQUF2Qix3QkFBdUI7RUFDdkIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLG1CQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsWUFBVztFQUNYLGFBQVk7RUFDWixjQUFZO0VBQ1oscUNBQW9DLEVBRXZDOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLGVBQWM7RUFFZCxvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUVkLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNsQjs7QUFHRDtFQUNJLGdEQUF1QztVQUF2Qyx3Q0FBdUM7RUFDdkMsY0FBYTtFQUNiLDhCQUE2QjtFQUM3QiwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLGNBQWE7RUFDYiw2Q0FBNEM7RUFDNUMsYUFBWSxFQUNmOztBQUVEO0VBQ0ksbURBQWtEO0VBQ2xELGlCQUFnQjtFQUNoQiw2QkFBNEI7RUFDNUIsY0FBYTtFQUNiLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGdEQUF1QztVQUF2Qyx3Q0FBdUM7RUFDdkMsWUFBVztFQUNYLGNBQWE7RUFDYixpQ0FBZ0M7RUFDaEMsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixjQUFhO0VBQ2IsNkNBQTRDO0VBQzVDLGFBQVksRUFDZjs7QUFFRDtFQUNJLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLFlBQVc7RUFFWCxlQUFjO0VBRWQsa0NBQXlCO1VBQXpCLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGNBQWE7RUFDYiw0QkFBMkI7RUFDM0IsYUFBWTtFQUNaLGNBQWE7RUFDYixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxvQkFBbUI7RUFDbkIsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxlQUNKLEVBQUM7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osYUFBWTtFQUNaLGFBQVksRUFDZjs7QUFFRDtFQUNJLGNBQWE7RUFDYiw2QkFBNEI7RUFDNUIsYUFBWTtFQUNaLGNBQWE7RUFDYixhQUFZLEVBRWY7O0FBRUQ7RUFDSSxVQUFRLEVBQ1g7O0FBR0Q7RUFDSSx1QkFBc0I7RUFDdEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLDhCQUE2QixFQUNoQzs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsWUFBVztFQUNYLGNBQWE7RUFDYiw2QkFBNEIsRUFDL0I7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLGNBQWE7RUFDYixzQ0FBcUMsRUFDeEM7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsYUFBWSxFQUVmOztBQUVEO0VBQ0k7SUFDSSxpQkFBZ0I7SUFDaEIsZ0JBQWUsRUFBQTtFQUVuQjtJQUNJLGVBQWM7SUFDZCxnQkFBZSxFQUFBLEVBQUE7O0FBUHZCO0VBQ0k7SUFDSSxpQkFBZ0I7SUFDaEIsZ0JBQWUsRUFBQTtFQUVuQjtJQUNJLGVBQWM7SUFDZCxnQkFBZSxFQUFBLEVBQUE7O0FBSXZCO0VBQ0k7SUFDSSxhQUFZO0lBQ1osY0FBYSxFQUFBO0VBRWpCO0lBQ0kseUJBQXdCO0lBQ3hCLDBCQUF5QixFQUFBLEVBQUE7O0FBUGpDO0VBQ0k7SUFDSSxhQUFZO0lBQ1osY0FBYSxFQUFBO0VBRWpCO0lBQ0kseUJBQXdCO0lBQ3hCLDBCQUF5QixFQUFBLEVBQUE7O0FBSWpDO0VBQ0k7SUFDSSxtQkFBa0I7SUFDbEIsWUFBVyxFQUFBO0VBRWY7SUFDSSxtQkFBa0I7SUFDbEIsVUFBUyxFQUFBLEVBQUE7O0FBUGpCO0VBQ0k7SUFDSSxtQkFBa0I7SUFDbEIsWUFBVyxFQUFBO0VBRWY7SUFDSSxtQkFBa0I7SUFDbEIsVUFBUyxFQUFBLEVBQUE7O0FBSWpCO0VBQ0k7SUFDSSxnQkFBZSxFQUFBO0VBRW5CO0lBQ0ksZ0JBQWUsRUFBQSxFQUFBOztBQUx2QjtFQUNJO0lBQ0ksZ0JBQWUsRUFBQTtFQUVuQjtJQUNJLGdCQUFlLEVBQUEsRUFBQTs7QUFJdkI7RUFDSSxnQkFBZTtFQUNmLGdDQUErQixFQUNsQzs7QUFFRDtFQUNJLHdDQUErQjtVQUEvQixnQ0FBK0IsRUFDbEM7O0FBRUQ7RUFDSSx5Q0FBZ0M7VUFBaEMsaUNBQWdDLEVBRW5DOztBQUVEO0VBQ0ksc0RBQTZDO1VBQTdDLDhDQUE2QyxFQUNoRDs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCBhdXRvIDEwMHB4O1xyXG4gICAgbWFyZ2luOiAyNnB4IDQycHggMDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnZpZXdfYWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0E3Q0Y7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLnZpZXdfYWxsX2ltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnZpZXdfYWxsX3RleHQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4ubGFiZWxfdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sYWJlbF9pY29uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4jZW5yb2xsZWQge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgOHB4IDhweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgICBtYXJnaW46IDVweCA0MnB4IDU1cHg7XHJcbiAgICBwYWRkaW5nOiAzOHB4IDQwcHggMzhweCA0MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XHJcbiAgICAjZW5yb2xsZWQgdGQ6bnRoLWNoaWxkKG4rNikge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjdXBjb21pbmcgdGQ6bnRoLWNoaWxkKG4rNikge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY29sdW1ucyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDEwMCUvNSkgY2FsYygxMDAlLzUpIGNhbGMoMTAwJS81KSBjYWxjKDEwMCUvNSkgY2FsYygxMDAlLzUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjIwcHgpIGFuZCAobWF4LXdpZHRoOiAyMDAwcHgpIHtcclxuICAgICNlbnJvbGxlZCB0ZDpudGgtY2hpbGQobis1KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICN1cGNvbWluZyB0ZDpudGgtY2hpbGQobis1KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jb2x1bW5zIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMTAwJS80KSBjYWxjKDEwMCUvNCkgY2FsYygxMDAlLzQpIGNhbGMoMTAwJS80KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI0MHB4KSBhbmQgKG1heC13aWR0aDogMTYyMHB4KSB7XHJcbiAgICAjZW5yb2xsZWQgdGQ6bnRoLWNoaWxkKG4rNCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjdXBjb21pbmcgdGQ6bnRoLWNoaWxkKG4rNCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY29sdW1ucyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDEwMCUvMykgY2FsYygxMDAlLzMpIGNhbGMoMTAwJS8zKVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIHtcclxuICAgICNlbnJvbGxlZCB0ZDpudGgtY2hpbGQobiszKSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICN1cGNvbWluZyB0ZDpudGgtY2hpbGQobiszKSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jb2x1bW5zIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMTAwJS8yKSBjYWxjKDEwMCUvMilcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5saW5rX2ljb24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmljb25fbGlua3Mge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDE1JSBhdXRvO1xyXG5cclxufVxyXG5cclxuLmNvdXJzZV9uYW1lIHtcclxuICAgIG1hcmdpbjogMTUwcHggMCAwIDMwcHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmNvdXJzZV90ZWFjaGVyIHtcclxuICAgIG1hcmdpbjogMCAwIDAgMzBweDtcclxuICAgIGNvbG9yOiAjRDdEN0Q3O1xyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5cclxuLmNsYXNzY2FyZCB7XHJcbiAgICBhbmltYXRpb246IHR1dG9yaWFsX2NhcmRfYW5pbWF0aW9uIDAuNXM7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDY0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBN0NGO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jdXBjb21pbmcge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgOHB4IDhweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgICBtYXJnaW46IDVweCA0MnB4O1xyXG4gICAgcGFkZGluZzogMzhweCA0MHB4IDM4cHggNDBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCO1xyXG59XHJcblxyXG4udHV0b3JpYWxfY2FyZCB7XHJcbiAgICBhbmltYXRpb246IHR1dG9yaWFsX2NhcmRfYW5pbWF0aW9uIDAuNXM7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDU2cHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0E3Q0Y7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MnB4O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi50dXRvcmlhbF9uYW1lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGJvdHRvbTogLTgycHg7XHJcbiAgICBsZWZ0OiAtMjBweDtcclxuICAgIFxyXG4gICAgY29sb3I6ICNEN0Q3RDc7XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ubm9fY291cnNlcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NSUgNTUlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm5vX3JlZ19jbGFzIHtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi50ZWFjaGVyX2J1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuLnRlYWNoZXJfYnV0dG9uX3RleHQge1xyXG4gICAgY29sb3I6ICNDNEM0QzRcclxufVxyXG5cclxuLnRlYWNoZXJfYnV0dG9uX2RpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBN0NGO1xyXG4gICAgd2lkdGg6IDE2NHB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4udGVhY2hlcl9idXR0b25fZGl2IHAge1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubm9fdHV0b3JpYWxzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSBhdXRvO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNjJweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbn1cclxuXHJcbi50dXRvcmlhbF90ZXh0IHAge1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcblxyXG4udHV0b3JpYWxfZGV0YWlscyB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDAgMCAyMHB4O1xyXG4gICAgY29sb3I6ICNEOEQ4RDg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDUwcHg7XHJcbn1cclxuXHJcbi5jbGFzc19uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDE4cHggYXV0bztcclxufVxyXG5cclxuLmljb25zIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDRweCA0NHB4IDQ0cHg7XHJcbn1cclxuXHJcbi50dXRvcmlhbF9kZXRhaWxzX3RleHQge1xyXG4gICAgY29sb3I6ICNEOEQ4RDg7XHJcbiAgICBmb250LXNpemU6IDA7XHJcblxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWRvdyB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODJweDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB3aWR0aDogY2FsYygyNTBweCAqIDEuMyk7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDE4MnB4ICogMS4zKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0dXRvcmlhbF9jYXJkX2FuaW1hdGlvbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogLTcwcHg7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjbGFzc19uYW1lX2FuaW1hdGlvbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGludCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXHJcbn1cclxuXHJcbi50dXRvcmlhbF9jYXJkOmhvdmVyIC50dXRvcmlhbF9jYXJkIHtcclxuICAgIGFuaW1hdGlvbjogc2hhZG93IDAuNHMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi50dXRvcmlhbF9jYXJkOmhvdmVyIC50dXRvcmlhbF9kZXRhaWxzX3RleHQge1xyXG4gICAgYW5pbWF0aW9uOiBleGFtcGxlIDAuNHMgZm9yd2FyZHM7XHJcblxyXG59XHJcblxyXG4udHV0b3JpYWxfY2FyZDpob3ZlciAuY2xhc3NfbmFtZSB7XHJcbiAgICBhbmltYXRpb246IGNsYXNzX25hbWVfYW5pbWF0aW9uIDAuNHMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi50dXRvcmlhbF9jYXJkOmhvdmVyIC5oaW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../django.service */ "./src/app/django.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(django, zone, router) {
        this.django = django;
        this.zone = zone;
        this.router = router;
        this.teacher = false;
        this.user_data = {};
    }
    DashboardComponent.prototype.reRoute = function (route) {
        var _this = this;
        this.zone.run(function () { _this.router.navigate([route]); });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.django.isUserLoggedIn.subscribe(function (data) {
            if (!data) {
                _this.reRoute('login');
            }
            else {
                _this.not_reg = true;
                _this.no_tut = true;
                _this.django.getUserDetails(false).subscribe(function (user_data) {
                    _this.user_data = user_data;
                    _this.django.getRegClasses(user_data['teacher'], 6).subscribe(function (data) {
                        console.log(data);
                        _this.courses = data;
                        if (Object.keys(data).length < 1) {
                            _this.not_reg = true;
                        }
                        else {
                            _this.not_reg = false;
                        }
                    });
                    _this.django.getUpcomingTutorials(user_data['teacher'], 6).subscribe(function (data) {
                        _this.tutorials = data;
                        if (Object.keys(data).length < 1) {
                            _this.no_tut = true;
                        }
                        else {
                            console.log(data);
                            _this.no_tut = false;
                            for (var i = 0; i < Object.keys(_this.tutorials).length; i++) {
                                var newDate = new Date(_this.tutorials[i]['Start_Time']).toUTCString().split(', ')[1].split(' ').slice(0, 3);
                                var newStartTime = new Date(_this.tutorials[i]['Start_Time']).toUTCString().split(', ')[1].split(' ')[3].split(':').slice(0, 2);
                                var newEndTime = new Date(_this.tutorials[i]['End_Time']).toUTCString().split(', ')[1].split(' ')[3].split(':').slice(0, 2);
                                if (newStartTime[0][0] === '0') {
                                    if (Number(newStartTime[0]) > 12) {
                                        _this.tutorials[i]['Start_Time'] = Number(newStartTime[0][1]) - 12 + ":" + newStartTime[1] + "pm";
                                    }
                                    else {
                                        _this.tutorials[i]['Start_Time'] = newStartTime[0][1] + ":" + newStartTime[1] + "am";
                                    }
                                }
                                else {
                                    if (Number(newStartTime[0]) > 12) {
                                        _this.tutorials[i]['Start_Time'] = Number(newStartTime[0]) - 12 + ":" + newStartTime[1] + "pm";
                                    }
                                    else {
                                        _this.tutorials[i]['Start_Time'] = newStartTime[0] + ":" + newStartTime[1] + "am";
                                    }
                                }
                                if (newEndTime[0][0] === '0') {
                                    if (Number(newEndTime[0]) > 12) {
                                        _this.tutorials[i]['End_Time'] = Number(newEndTime[0][1]) - 12 + ":" + newEndTime[1] + "pm";
                                    }
                                    else {
                                        _this.tutorials[i]['End_Time'] = newEndTime[0][1] + ":" + newEndTime[1] + "am";
                                    }
                                }
                                else {
                                    if (Number(newEndTime[0]) > 12) {
                                        _this.tutorials[i]['End_Time'] = Number(newEndTime[0]) - 12 + ":" + newEndTime[1] + "pm";
                                    }
                                    else {
                                        _this.tutorials[i]['End_Time'] = newEndTime[0] + ":" + newEndTime[1] + "am";
                                    }
                                }
                                _this.tutorials[i]['Start_Date'] = newDate[1] + ' ' + newDate[0] + ', ' + newDate[2];
                            }
                        }
                    });
                });
            }
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_django_service__WEBPACK_IMPORTED_MODULE_1__["DjangoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/django.service.ts":
/*!***********************************!*\
  !*** ./src/app/django.service.ts ***!
  \***********************************/
/*! exports provided: DjangoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DjangoService", function() { return DjangoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DjangoService = /** @class */ (function () {
    function DjangoService(http) {
        this.http = http;
        this.api = 'http://40.85.225.124';
        this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.testToken());
        this.currentUserDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ profile_image: 'assets/profile_icon.svg' });
    }
    DjangoService.prototype.getUser = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Token " + sessionStorage.getItem('token')
            })
        };
        return this.http.get(this.api + '/API/userDetials/', httpOptions);
    };
    DjangoService.prototype.getToken = function (code) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.api + '/API/googleAuth/', code, httpOptions);
    };
    DjangoService.prototype.updateProfile = function (info) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token'),
            })
        };
        return this.http.post(this.api + '/API/profile/', JSON.stringify(info), httpOptions);
    };
    DjangoService.prototype.sendGoogleCode = function (code) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token'),
            })
        };
        return this.http.post(this.api + '/API/googleToken/', JSON.stringify({ code: code }), httpOptions);
    };
    DjangoService.prototype.getGoogleCourses = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token'),
            })
        };
        return this.http.get(this.api + '/API/googleCourses/', httpOptions);
    };
    DjangoService.prototype.registerGoogleClasses = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token'),
            })
        };
        return this.http.post(this.api + '/API/googleCourses/', data = { courses: data }, httpOptions);
    };
    DjangoService.prototype.testToken = function () {
        if (sessionStorage.getItem('token')) {
            return true;
        }
        else {
            return false;
        }
    };
    DjangoService.prototype.getRegClasses = function (teacher, num) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token'),
            })
        };
        if (!teacher) {
            return this.http.get(this.api + '/API/courses/' + num, httpOptions);
        }
        else {
            return this.http.get(this.api + '/API/teaching_courses/' + num, httpOptions);
        }
    };
    DjangoService.prototype.getUpcomingTutorials = function (teacher, num) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token'),
            })
        };
        if (!teacher) {
            return this.http.get(this.api + '/API/tutorials/' + num, httpOptions);
        }
        else {
            return this.http.get(this.api + '/API/teacher_tutorials/' + num, httpOptions);
        }
    };
    DjangoService.prototype.getUserDetails = function (teacher) {
        console.log(sessionStorage.getItem('token'));
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token'),
            })
        };
        console.log(httpOptions);
        if (!teacher) {
            console.log('sending');
            return this.http.get(this.api + '/API/userDetials/', httpOptions);
        }
    };
    DjangoService.prototype.getCourseDetails = function (course_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token'),
            })
        };
        return this.http.get(this.api + '/API/course_details/' + course_id, httpOptions);
    };
    DjangoService.prototype.logoutUser = function () {
        this.isUserLoggedIn.next(false);
        sessionStorage.clear();
        this.currentUserDetails.next({ profile_image: 'assets/profile_icon.svg' });
    };
    DjangoService.prototype.registerSchool = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token'),
            })
        };
        console.log(data);
        return this.http.post(this.api + '/API/schools/', data = data, httpOptions);
    };
    DjangoService.prototype.viewProfile = function (id) {
        return this.http.get(this.api + '/API/profilePublic/' + id);
    };
    DjangoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DjangoService);
    return DjangoService;
}());



/***/ }),

/***/ "./src/app/enrolled/enrolled.component.html":
/*!**************************************************!*\
  !*** ./src/app/enrolled/enrolled.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label\">\n  <img src=\"assets/upcoming_tutorials.svg\" class=\"label_icon\">\n  <p *ngIf=\"userData.teacher\" class=\"label_text\">Teaching Courses</p>\n  <p *ngIf=\"!userData.teacher\" class=\"label_text\">Enrolled Courses</p>\n</div>\n\n<div id=\"enrolled\" class=\"columns\" *ngIf=\"not_reg !== true\">\n\n  <td *ngFor=\"let course of upcoming\">\n      <div class=\"classcard\">\n\n          <div>\n              <h2 class=\"course_name\">\n                  {{course.name}}\n              </h2>\n              <p class=\"course_teacher\">\n                  {{course.teacher_name}}\n              </p>\n          </div>\n          <div class=\"icon_links\">\n              <a href=\"{{course.url}}\" class=\"link_icon\"><img src=\"assets/classroom.svg\"></a>\n              <a routerLink=\"course_detail/{{course.id}}\" class=\"link_icon\"><img class=\"link_icon\" src=\"assets/teacher.svg\"></a>\n              <a routerLink=\"/Course_Details/{{course.id}}\" class=\"link_icon\"><img class=\"link_icon\" src=\"assets/details.svg\"></a>\n          </div>\n\n\n      </div>\n\n\n  </td>\n\n\n</div>"

/***/ }),

/***/ "./src/app/enrolled/enrolled.component.scss":
/*!**************************************************!*\
  !*** ./src/app/enrolled/enrolled.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label {\n  display: grid;\n  grid-template-columns: 30px auto 100px;\n  margin: 26px 42px 0;\n  height: 30px; }\n\n.view_all {\n  background-color: #27A7CF;\n  display: grid;\n  grid-template-columns: auto 30px;\n  padding: 0 8px;\n  border-radius: 2px; }\n\n.view_all_img {\n  width: 30px;\n  height: 30px; }\n\n.view_all_text {\n  color: white;\n  margin: 0;\n  font-size: 12px;\n  margin-top: 8px; }\n\n.label_text {\n  margin-top: 4px;\n  margin-left: 10px;\n  font-size: 20px;\n  margin-bottom: 0; }\n\n.label_icon {\n  width: 30px;\n  height: 30px; }\n\n#enrolled {\n  box-shadow: inset 8px 8px 10px rgba(0, 0, 0, 0.06);\n  margin: 5px 42px 55px;\n  padding: 38px 40px 38px 40px;\n  display: grid;\n  overflow: hidden;\n  background-color: white; }\n\n@media screen and (min-width: 2000px) {\n  .columns {\n    grid-template-columns: calc(100%/5) calc(100%/5) calc(100%/5) calc(100%/5) calc(100%/5); } }\n\n@media screen and (min-width: 1620px) and (max-width: 2000px) {\n  .columns {\n    grid-template-columns: calc(100%/4) calc(100%/4) calc(100%/4) calc(100%/4); } }\n\n@media screen and (min-width: 1240px) and (max-width: 1620px) {\n  .columns {\n    grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3); } }\n\n@media screen and (max-width: 1239px) {\n  .columns {\n    grid-template-columns: calc(100%/2) calc(100%/2); } }\n\n.link_icon {\n  width: 40px;\n  height: 40px;\n  -webkit-filter: brightness(50%);\n          filter: brightness(50%);\n  margin: auto; }\n\n.icon_links {\n  vertical-align: middle;\n  text-align: center;\n  background-color: #FAFAFA;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: auto 15% auto; }\n\n.course_name {\n  margin: 150px 0 0 30px;\n  color: #FFFFFF;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 30px;\n  font-size: 24px; }\n\n.course_teacher {\n  margin: 0 0 0 30px;\n  color: #D7D7D7;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 24px;\n  font-size: 16px; }\n\n.classcard {\n  display: grid;\n  grid-template-rows: auto 64px;\n  background-color: #27A7CF;\n  width: 250px;\n  height: 280px;\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);\n  margin: auto;\n  margin-bottom: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5yb2xsZWQvRTpcXEFuZ3VsYXItVHhlclxcVHhlci9zcmNcXGFwcFxcZW5yb2xsZWRcXGVucm9sbGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVDQUFzQztFQUN0QyxvQkFBbUI7RUFDbkIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLGNBQWE7RUFDYixpQ0FBZ0M7RUFDaEMsZUFBYztFQUNkLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osVUFBUztFQUNULGdCQUFlO0VBQ2YsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtREFBa0Q7RUFDbEQsc0JBQXFCO0VBQ3JCLDZCQUE0QjtFQUM1QixjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJO0lBQ0ksd0ZBQXVGLEVBQzFGLEVBQUE7O0FBR0w7RUFDSTtJQUNJLDJFQUEwRSxFQUM3RSxFQUFBOztBQUdMO0VBQ0k7SUFDSSw4REFBNkQsRUFDaEUsRUFBQTs7QUFHTDtFQUNJO0lBQ0ksaURBQWdELEVBQ25ELEVBQUE7O0FBR0w7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGdDQUF1QjtVQUF2Qix3QkFBdUI7RUFDdkIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLG1CQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsWUFBVztFQUNYLGFBQVk7RUFDWixjQUFZO0VBQ1oscUNBQW9DLEVBRXZDOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLGVBQWM7RUFFZCxvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUVkLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNsQjs7QUFHRDtFQUNJLGNBQWE7RUFDYiw4QkFBNkI7RUFDN0IsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixjQUFhO0VBQ2IsNkNBQTRDO0VBQzVDLGFBQVk7RUFDWixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9lbnJvbGxlZC9lbnJvbGxlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG8gMTAwcHg7XHJcbiAgICBtYXJnaW46IDI2cHggNDJweCAwO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4udmlld19hbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QTdDRjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMzBweDtcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4udmlld19hbGxfaW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4udmlld19hbGxfdGV4dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5sYWJlbF90ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmxhYmVsX2ljb24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiNlbnJvbGxlZCB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCA4cHggOHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICAgIG1hcmdpbjogNXB4IDQycHggNTVweDtcclxuICAgIHBhZGRpbmc6IDM4cHggNDBweCAzOHB4IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcclxuICAgIC5jb2x1bW5zIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMTAwJS81KSBjYWxjKDEwMCUvNSkgY2FsYygxMDAlLzUpIGNhbGMoMTAwJS81KSBjYWxjKDEwMCUvNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MjBweCkgYW5kIChtYXgtd2lkdGg6IDIwMDBweCkge1xyXG4gICAgLmNvbHVtbnMge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygxMDAlLzQpIGNhbGMoMTAwJS80KSBjYWxjKDEwMCUvNCkgY2FsYygxMDAlLzQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjQwcHgpIGFuZCAobWF4LXdpZHRoOiAxNjIwcHgpIHtcclxuICAgIC5jb2x1bW5zIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMTAwJS8zKSBjYWxjKDEwMCUvMykgY2FsYygxMDAlLzMpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzlweCkge1xyXG4gICAgLmNvbHVtbnMge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygxMDAlLzIpIGNhbGMoMTAwJS8yKVxyXG4gICAgfVxyXG59XHJcblxyXG4ubGlua19pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pY29uX2xpbmtzIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxNSUgYXV0bztcclxuXHJcbn1cclxuXHJcbi5jb3Vyc2VfbmFtZSB7XHJcbiAgICBtYXJnaW46IDE1MHB4IDAgMCAzMHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5jb3Vyc2VfdGVhY2hlciB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDMwcHg7XHJcbiAgICBjb2xvcjogI0Q3RDdENztcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuXHJcbi5jbGFzc2NhcmQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byA2NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QTdDRjtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/enrolled/enrolled.component.ts":
/*!************************************************!*\
  !*** ./src/app/enrolled/enrolled.component.ts ***!
  \************************************************/
/*! exports provided: EnrolledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrolledComponent", function() { return EnrolledComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../django.service */ "./src/app/django.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnrolledComponent = /** @class */ (function () {
    function EnrolledComponent(django) {
        this.django = django;
        this.not_reg = true;
    }
    EnrolledComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.django.currentUserDetails.subscribe(function (userData) {
            _this.userData = userData;
            _this.django.getRegClasses(_this.userData['teacher'], 100).subscribe(function (data) {
                _this.upcoming = data;
                console.log(data);
                if (Object.keys(data).length < 1) {
                    _this.not_reg = true;
                }
                else {
                    _this.not_reg = false;
                }
            });
        });
    };
    EnrolledComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enrolled',
            template: __webpack_require__(/*! ./enrolled.component.html */ "./src/app/enrolled/enrolled.component.html"),
            styles: [__webpack_require__(/*! ./enrolled.component.scss */ "./src/app/enrolled/enrolled.component.scss")]
        }),
        __metadata("design:paramtypes", [_django_service__WEBPACK_IMPORTED_MODULE_1__["DjangoService"]])
    ], EnrolledComponent);
    return EnrolledComponent;
}());



/***/ }),

/***/ "./src/app/google-login/google-login.component.html":
/*!**********************************************************!*\
  !*** ./src/app/google-login/google-login.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login-indent\">\n  <div id=\"login_or_signup\">\n    <div id='title'><p>Login or Signup</p></div>\n    <div id=\"login_buttons\">\n      <img id=\"signin_google\" style=\"cursor: pointer;\" src=\"assets/google_signin.svg\" alt=\"\" (click)=\"signInUser()\">\n      <p>Or</p>\n      <button routerLink=\"/profile\" id=\"signup\">Signup</button>\n    </div>\n    <div id=\"info\">\n      <h3>Did you know?</h3>\n      <ul>\n        <li>All authorization- is handled through google</li>\n        <li>Txer can never see your raw password</li>\n        <li>Have any security concerns? <a href=\"/support\">Contact us.</a></li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/google-login/google-login.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/google-login/google-login.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-indent {\n  background-color: #FBFBFB;\n  margin: 60px;\n  padding: 30px;\n  box-shadow: inset 8px 8px 10px rgba(0, 0, 0, 0.06); }\n\n#login_or_signup {\n  border-radius: 4px;\n  display: grid;\n  grid-template-rows: 106px 314px auto;\n  background-color: #656565;\n  width: 380px;\n  height: 620px;\n  margin: auto;\n  box-shadow: 12px 12px 20px rgba(91, 91, 91, 0.72); }\n\n#title {\n  background-color: #27A7CF;\n  color: white;\n  font-size: 28px;\n  height: 100%; }\n\n#title p {\n  text-align: center;\n  margin: 37px 0; }\n\n#info {\n  background-color: #939393;\n  color: white; }\n\n#login_buttons {\n  display: grid;\n  grid-template-rows: 137px 40px 137px; }\n\n#info h3 {\n  padding-left: 22px;\n  padding-top: 20px;\n  font-size: 18px;\n  font-weight: normal; }\n\n#info ul li {\n  font-size: 14px;\n  padding: 3px 0; }\n\n#info ul li a {\n  color: white; }\n\n#signup {\n  width: 250px;\n  height: 60px;\n  margin: auto;\n  border-radius: 4px;\n  background-color: white;\n  font-size: 18px;\n  color: #757575;\n  margin-top: 20px;\n  cursor: pointer; }\n\n#login_buttons p {\n  text-align: center;\n  font-size: 18px;\n  color: #999999;\n  margin: auto;\n  cursor: context-menu; }\n\n#signin_google {\n  width: 250px;\n  height: 60px;\n  margin: auto;\n  margin-bottom: 20px;\n  border-radius: 4px;\n  background-color: white;\n  font-size: 26px;\n  color: #757575; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZ2xlLWxvZ2luL0U6XFxBbmd1bGFyLVR4ZXJcXFR4ZXIvc3JjXFxhcHBcXGdvb2dsZS1sb2dpblxcZ29vZ2xlLWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixjQUFhO0VBQ2IsbURBQWtELEVBQ3JEOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixxQ0FBb0M7RUFDcEMsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixjQUFhO0VBQ2IsYUFBWTtFQUNaLGtEQUFpRCxFQUVwRDs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osZ0JBQWU7RUFDZixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxjQUFhO0VBQ2IscUNBQW9DLEVBQ3ZDOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLGFBQVk7RUFDWixhQUFZO0VBQ1osYUFBWTtFQUNaLG1CQUFrQjtFQUNsQix3QkFBdUI7RUFDdkIsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGFBQVk7RUFDWixxQkFBb0IsRUFDdkI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osYUFBWTtFQUNaLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9nb29nbGUtbG9naW4vZ29vZ2xlLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luLWluZGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCO1xyXG4gICAgbWFyZ2luOiA2MHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDhweCA4cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG59XHJcblxyXG4jbG9naW5fb3Jfc2lnbnVwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwNnB4IDMxNHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU2NTY1O1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgaGVpZ2h0OiA2MjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAyMHB4IHJnYmEoOTEsIDkxLCA5MSwgMC43Mik7XHJcblxyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QTdDRjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3RpdGxlIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzN3B4IDA7XHJcbn1cclxuXHJcbiNpbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MzkzOTM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNsb2dpbl9idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzN3B4IDQwcHggMTM3cHg7XHJcbn1cclxuXHJcbiNpbmZvIGgzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjJweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuI2luZm8gdWwgbGkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogM3B4IDA7XHJcbn1cclxuXHJcbiNpbmZvIHVsIGxpIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jc2lnbnVwIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbG9naW5fYnV0dG9ucyBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XHJcbn1cclxuXHJcbiNzaWduaW5fZ29vZ2xlIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/google-login/google-login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/google-login/google-login.component.ts ***!
  \********************************************************/
/*! exports provided: GoogleLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginComponent", function() { return GoogleLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../django.service */ "./src/app/django.service.ts");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-gapi */ "./node_modules/ng-gapi/lib/index.js");
/* harmony import */ var _user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-services.service */ "./src/app/user-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GoogleLoginComponent = /** @class */ (function () {
    function GoogleLoginComponent(userService, authService, gapiService, django, router, zone) {
        this.userService = userService;
        this.authService = authService;
        this.gapiService = gapiService;
        this.django = django;
        this.router = router;
        this.zone = zone;
        // First make sure gapi is loaded can be in AppInitilizer
        gapiService.onLoad().subscribe(function () {
        });
    }
    GoogleLoginComponent.prototype.ngOnInit = function () {
    };
    GoogleLoginComponent.prototype.test = function (auth) {
        return Promise.resolve(auth.currentUser.get().grantOfflineAccess());
    };
    GoogleLoginComponent.prototype.isLoggedIn = function () {
        return this.userService.isUserSignedIn();
    };
    GoogleLoginComponent.prototype.reRoute = function (route) {
        var _this = this;
        this.zone.run(function () { _this.router.navigate([route]); });
    };
    GoogleLoginComponent.prototype.signInUser = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            auth.signIn().then(function (response) {
                _this.django.getToken(response).subscribe(function (data) {
                    if (data['created']) {
                        _this.reRoute('/profile');
                    }
                    else {
                        sessionStorage.setItem("token", data['token']);
                        _this.django.isUserLoggedIn.next(true);
                        _this.django.getUserDetails(false).subscribe(function (data) {
                            _this.django.currentUserDetails.next(data);
                        });
                        _this.reRoute('/dashboard');
                    }
                });
            });
        });
    };
    GoogleLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-google-login',
            template: __webpack_require__(/*! ./google-login.component.html */ "./src/app/google-login/google-login.component.html"),
            styles: [__webpack_require__(/*! ./google-login.component.scss */ "./src/app/google-login/google-login.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_services_service__WEBPACK_IMPORTED_MODULE_3__["UserServicesService"],
            ng_gapi__WEBPACK_IMPORTED_MODULE_2__["GoogleAuthService"],
            ng_gapi__WEBPACK_IMPORTED_MODULE_2__["GoogleApiService"],
            _django_service__WEBPACK_IMPORTED_MODULE_1__["DjangoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], GoogleLoginComponent);
    return GoogleLoginComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"top\">\n  <p id=\"Logo\">Txer</p>\n</div>\n\n<div id='content'>\n  <div id='indent'>\n    <div class='row1'>\n      <div class='column'>\n        <h1>Txer</h1>\n        <p id=\"desc\">Exellerate your classes tutorial schedule</p>\n      </div>\n      <div class='column'>\n        <img src=\"assets/rocket.svg\" id='rocket'>\n      </div>\n      <div id=\"call_to_action_div\">\n        <button id=\"cta\" routerLink=\"/profile\">Start Free</button>\n        <p>Already have an account?</p>\n        <a routerLink=\"/login\">Sign in to Txer</a>\n      </div>\n    </div>\n    <div class='row2'>\n      <nav>\n        <table>\n          <tr>\n            <td class=\"nav_links\">\n              Txer:\n            </td>\n            <td class=\"nav_links\">\n              About\n            </td>\n            <td class=\"nav_links\">\n              Contact\n            </td>\n            <td class=\"nav_links\">\n              Pricing\n            </td>\n          </tr>\n        </table>\n      </nav>\n    </div>\n    <div class='row3'>\n      <h2 class=\"section_title\">About:</h2>\n      <h3 class=\"section_desc\">Txer is an education tutorial scheduler built with\n        teachers in mind to include tools such as:</h3>\n      <div class=\"section1\">\n        <div class=\"card\">\n          <img src=\"assets/google-icon.svg\" alt=\"\">\n          <h3>Google Classroom</h3>\n          <p>Txer is build along side Google Classroom with tutorial creation intergrated with Classroom</p>\n        </div>\n        <div class=\"card\">\n          <img src=\"assets/person_blue.svg\" alt=\"\">\n          <h3>Individual assignnment</h3>\n          <p>Asign certain students to a mandatory Tutorial through classroom or </p>\n        </div>\n        <div class=\"card\">\n          <img src=\"assets/check_blue.svg\" alt=\"\">\n          <h3>Attendence</h3>\n          <p>Optional attendance with students sign in or teacher side attendance.</p>\n        </div>\n      </div>\n    </div>\n    <div class='row4'>\n      <h2 class=\"section_title\">Contact:</h2>\n      <h3 class=\"section_desc\">Questions? Reach out to our support team at:</h3>\n      <div class=\"contact\">\n        <div class='contact_div'>\n          <img src=\"assets/mail.svg\" alt=\"\">\n          <p>support@txer.ca</p>\n        </div>\n        <div class='contact_div'>\n          <img src=\"assets/Phone.svg\" alt=\"\">\n          <p>587.566.0375</p>\n        </div>\n      </div>\n\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#top {\n  display: table;\n  height: 72px;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.07);\n  width: 100%;\n  background-color: white; }\n\n#top p {\n  display: table-cell;\n  vertical-align: middle;\n  height: 60px;\n  font-size: 35px;\n  padding-left: 46px; }\n\n#content {\n  width: 100%;\n  height: calc(100% - 72px); }\n\n#indent {\n  position: relative;\n  margin: 60px;\n  box-shadow: inset 8px 8px 10px rgba(0, 0, 0, 0.06);\n  padding: 100px 100px 100px 100px;\n  background: #FBFBFB; }\n\n#indent h1 {\n  color: #27A7CF;\n  line-height: 24px;\n  font-size: 60px;\n  letter-spacing: 0.2em;\n  font-weight: normal;\n  margin-bottom: 70px;\n  margin-bottom: 60px; }\n\n#desc {\n  width: 560px;\n  height: 163px;\n  margin: 0;\n  font-family: Lato;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 40px;\n  margin-right: 0;\n  color: #000000; }\n\n#rocket {\n  position: relative;\n  bottom: -90px;\n  left: -100px; }\n\n#cta {\n  margin-top: -20px;\n  cursor: pointer;\n  margin-bottom: 72px;\n  width: 246px;\n  height: 62px;\n  border: none;\n  border-radius: 4px;\n  background: #27A7CF;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  font-size: 25px;\n  text-align: center;\n  letter-spacing: 0.0357143em;\n  color: #FFFFFF; }\n\n#call_to_action_div p {\n  color: #b2b2b2; }\n\n#call_to_action_div a {\n  color: rgba(39, 167, 207, 0.64);\n  margin-top: 24px;\n  text-decoration: none; }\n\n.row1 {\n  display: grid;\n  position: relative;\n  grid-template-columns: 60% 352px; }\n\n@media only screen and (max-width: 1130px) {\n  #rocket {\n    position: relative;\n    bottom: -120px;\n    left: -60px;\n    width: 90%;\n    height: 90%; } }\n\n.nav_links:nth-child(1) {\n  color: #27A7CF;\n  font-size: 30px;\n  letter-spacing: 0.2em; }\n\n.row2 {\n  margin-top: 80px;\n  width: 100%;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.22); }\n\n.nav_links {\n  padding-right: 20px;\n  font-size: 24px;\n  color: #949494;\n  padding-bottom: 5px; }\n\n.section1 {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 33.3% 33.3% auto;\n  margin-top: 100px;\n  width: auto; }\n\n.section_title {\n  font-weight: normal;\n  font-size: 40px;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.22);\n  width: 300px;\n  text-align: center;\n  margin: auto;\n  margin-top: 140px;\n  padding-bottom: 20px; }\n\n.section_desc {\n  width: 600px;\n  text-align: center;\n  margin: auto;\n  font-size: 24px;\n  margin-top: 80px;\n  font-weight: normal;\n  color: #4d4d4d;\n  margin-bottom: 40px; }\n\n.card {\n  margin: 0 50px; }\n\n.card h3 {\n  font-size: 26px;\n  font-weight: normal;\n  color: #27A7CF;\n  padding-top: 10px; }\n\n.card p {\n  font-size: 18px; }\n\n.contact_div {\n  display: grid;\n  grid-template-columns: -webkit-max-content auto;\n  grid-template-columns: max-content auto; }\n\n.contact_div p {\n  font-size: 24px; }\n\n.contact_div img {\n  margin: auto;\n  padding-right: 14px; }\n\n.contact {\n  margin: auto;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content; }\n\n.contact_div {\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvRTpcXEFuZ3VsYXItVHhlclxcVHhlci9zcmNcXGFwcFxcaW5kZXhcXGluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBYztFQUNkLGFBQVk7RUFDWiw4Q0FBNkM7RUFDN0MsWUFBVztFQUNYLHdCQUF1QixFQUMxQjs7QUFFRDtFQUVJLG9CQUFtQjtFQUNuQix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksWUFBVztFQUNYLDBCQUF5QixFQUU1Qjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osbURBQWtEO0VBQ2xELGlDQUFnQztFQUNoQyxvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2Ysc0JBQXFCO0VBQ3JCLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYixVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixnQkFBZTtFQUVmLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGFBQVksRUFDZjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osYUFBWTtFQUNaLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBRW5CLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLDRCQUEyQjtFQUUzQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGdDQUErQjtFQUMvQixpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3hCOztBQUdEO0VBQ0ksY0FBYTtFQUNiLG1CQUFrQjtFQUVsQixpQ0FBZ0MsRUFDbkM7O0FBRUQ7RUFDSTtJQUNJLG1CQUFrQjtJQUNsQixlQUFjO0lBQ2QsWUFBVztJQUNYLFdBQVU7SUFDVixZQUFXLEVBQ2QsRUFBQTs7QUFPTDtFQUNJLGVBQWM7RUFDZCxnQkFBZTtFQUNmLHNCQUFxQixFQUN4Qjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsNkNBQTRDLEVBQy9DOztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsZUFBYztFQUNkLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2Isd0NBQXVDO0VBQ3ZDLGtCQUFpQjtFQUNqQixZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZiw2Q0FBNEM7RUFDNUMsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLHFCQUFvQixFQUN2Qjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixlQUFjO0VBQ2Qsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLGVBQWM7RUFDZCxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGNBQWE7RUFDYixnREFBdUM7RUFBdkMsd0NBQXVDLEVBQzFDOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLDJCQUFrQjtFQUFsQix3QkFBa0I7RUFBbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiN0b3Age1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jdG9wIHAge1xyXG5cclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NnB4O1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNzJweCk7XHJcblxyXG59XHJcblxyXG4jaW5kZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogNjBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDhweCA4cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gICAgcGFkZGluZzogMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG59XHJcblxyXG4jaW5kZW50IGgxIHtcclxuICAgIGNvbG9yOiAjMjdBN0NGO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbiNkZXNjIHtcclxuICAgIHdpZHRoOiA1NjBweDtcclxuICAgIGhlaWdodDogMTYzcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcblxyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbiNyb2NrZXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAtOTBweDtcclxuICAgIGxlZnQ6IC0xMDBweDtcclxufVxyXG5cclxuI2N0YSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDcycHg7XHJcbiAgICB3aWR0aDogMjQ2cHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdBN0NGO1xyXG5cclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDM1NzE0M2VtO1xyXG5cclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4jY2FsbF90b19hY3Rpb25fZGl2IHAge1xyXG4gICAgY29sb3I6ICNiMmIyYjI7XHJcbn1cclxuXHJcbiNjYWxsX3RvX2FjdGlvbl9kaXYgYSB7XHJcbiAgICBjb2xvcjogcmdiYSgzOSwgMTY3LCAyMDcsIDAuNjQpO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4gXHJcblxyXG4ucm93MSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDM1MnB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMzBweCkge1xyXG4gICAgI3JvY2tldCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvdHRvbTogLTEyMHB4O1xyXG4gICAgICAgIGxlZnQ6IC02MHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hdiB7XHJcblxyXG59XHJcblxyXG4ubmF2X2xpbmtzOm50aC1jaGlsZCgxKSB7XHJcbiAgICBjb2xvcjogIzI3QTdDRjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcclxufVxyXG5cclxuLnJvdzIge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbn1cclxuXHJcbi5uYXZfbGlua3Mge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNlY3Rpb24xIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMuMyUgMzMuMyUgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uX3RpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uX2Rlc2Mge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzRkNGQ0ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbjogMCA1MHB4O1xyXG59XHJcblxyXG4uY2FyZCBoMyB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMyN0E3Q0Y7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQgcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jb250YWN0X2RpdiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBhdXRvO1xyXG59XHJcblxyXG4uY29udGFjdF9kaXYgcCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5jb250YWN0X2RpdiBpbWcge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTRweDtcclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG59XHJcblxyXG4uY29udGFjdF9kaXYge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(router) {
        this.router = router;
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../django.service */ "./src/app/django.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(django, zone, router) {
        this.django = django;
        this.zone = zone;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.django.logoutUser();
        this.zone.run(function () { _this.router.navigate(['dashboard']); });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [_django_service__WEBPACK_IMPORTED_MODULE_1__["DjangoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/permission/permission.component.html":
/*!******************************************************!*\
  !*** ./src/app/permission/permission.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"indent\">\r\n    <div class=\"card\">\r\n        <div id=\"title_div\">\r\n            <h1 id=\"title\">Permissions</h1>\r\n        </div>\r\n        <div id=authorize>\r\n            <p id=\"authorize_label\">Authroize offline access:</p>\r\n            <img id=\"signin_google\" style=\"cursor: pointer;\" src=\"assets/google_signin.svg\" id=\"perm_btn\" (click)=\"mpApp()\">\r\n        </div>\r\n        <div id=\"info\">\r\n            <p>Why? <br>\r\n                    <br>\r\n                    <br>\r\n                    • Txer needs to be able to update your tutorials along with classes with your not online <br>\r\n                    <br>\r\n                    • Want more info? Contact us on our support page</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/permission/permission.component.scss":
/*!******************************************************!*\
  !*** ./src/app/permission/permission.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".indent {\n  box-shadow: inset 8px 8px 10px rgba(0, 0, 0, 0.06);\n  margin: 5px 42px 55px;\n  padding: 38px 40px 38px 40px;\n  display: grid;\n  overflow: hidden;\n  background-color: white;\n  margin-top: 60px; }\n\n.card {\n  width: 360px;\n  height: 600px;\n  background: #656565;\n  margin: auto; }\n\n#title_div {\n  background: #27A7CF;\n  height: 90px;\n  display: table;\n  width: 100%; }\n\n#title {\n  text-align: center;\n  vertical-align: middle;\n  display: table-cell;\n  font-size: 32px;\n  color: white; }\n\n#perm_btn {\n  margin: 0 55px; }\n\n#authorize {\n  width: 100%;\n  height: 270px; }\n\n#authorize_label {\n  margin: 20px 55px;\n  color: white;\n  font-size: 12px;\n  padding-top: 50px;\n  padding-bottom: 10px; }\n\n#info {\n  height: 160px;\n  background: #939393;\n  padding: 30px 55px; }\n\n#info p {\n  color: #FFFFFF;\n  font-size: 14px;\n  margin-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVybWlzc2lvbi9FOlxcQW5ndWxhci1UeGVyXFxUeGVyL3NyY1xcYXBwXFxwZXJtaXNzaW9uXFxwZXJtaXNzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbURBQWtEO0VBQ2xELHNCQUFxQjtFQUNyQiw2QkFBNEI7RUFDNUIsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQix3QkFBdUI7RUFDdkIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixlQUFhO0VBQ2IsWUFBVyxFQUNkOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLHVCQUFxQjtFQUNyQixvQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsYUFBWTtFQUNaLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLHFCQUFvQixFQUN2Qjs7QUFFRDtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksZUFBYztFQUNkLGdCQUFlO0VBQ2YsY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Blcm1pc3Npb24vcGVybWlzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmRlbnQge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgOHB4IDhweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgICBtYXJnaW46IDVweCA0MnB4IDU1cHg7XHJcbiAgICBwYWRkaW5nOiAzOHB4IDQwcHggMzhweCA0MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjU2NTY1O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jdGl0bGVfZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMyN0E3Q0Y7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNwZXJtX2J0biB7XHJcbiAgICBtYXJnaW46IDAgNTVweDsgXHJcbn1cclxuXHJcbiNhdXRob3JpemUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI3MHB4O1xyXG59XHJcblxyXG4jYXV0aG9yaXplX2xhYmVsIHtcclxuICAgIG1hcmdpbjogMjBweCA1NXB4OyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNpbmZvIHtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTM5MzkzO1xyXG4gICAgcGFkZGluZzogMzBweCA1NXB4O1xyXG59XHJcblxyXG4jaW5mbyBwIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/permission/permission.component.ts":
/*!****************************************************!*\
  !*** ./src/app/permission/permission.component.ts ***!
  \****************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-gapi */ "./node_modules/ng-gapi/lib/index.js");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../django.service */ "./src/app/django.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PermissionComponent = /** @class */ (function () {
    function PermissionComponent(authService, gapiService, django, router, zone) {
        this.authService = authService;
        this.gapiService = gapiService;
        this.django = django;
        this.router = router;
        this.zone = zone;
    }
    PermissionComponent.prototype.test = function (auth) {
        return Promise.resolve(auth.currentUser.get().grantOfflineAccess());
    };
    PermissionComponent.prototype.reRoute = function (route) {
        var _this = this;
        this.zone.run(function () { _this.router.navigate([route]); });
    };
    PermissionComponent.prototype.mpApp = function () {
        var _this = this;
        console.log('nice');
        // this.gapiService.onLoad().subscribe(()=> {
        //   gap
        // })
        // this.auth2.currentUser.get().grantOfflineAccess().then(function (code) {
        //   console.log(code)})
        this.authService.getAuth().subscribe(function (auth) {
            var temp = _this.test(auth);
            Promise.resolve(temp).then(function (response) {
                _this.django.sendGoogleCode(response).subscribe(function (token) {
                    sessionStorage.setItem('token', token['token']);
                    _this.django.updateProfile({ username: sessionStorage.getItem('username'), desc: sessionStorage.getItem('desc'), school: sessionStorage.getItem("school"), teacher: sessionStorage.getItem('teacher') }).subscribe(function (data) {
                        if (data['user_type'] == 'teacher') {
                            _this.django.isUserLoggedIn.next(true);
                            console.log('/reg-classes');
                            _this.reRoute('/reg-classes');
                        }
                        else {
                            console.log('/');
                            _this.django.isUserLoggedIn.next(true);
                            _this.reRoute('/');
                        }
                    });
                });
            });
        });
    };
    PermissionComponent.prototype.ngOnInit = function () {
    };
    PermissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permission',
            template: __webpack_require__(/*! ./permission.component.html */ "./src/app/permission/permission.component.html"),
            styles: [__webpack_require__(/*! ./permission.component.scss */ "./src/app/permission/permission.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_gapi__WEBPACK_IMPORTED_MODULE_1__["GoogleAuthService"],
            ng_gapi__WEBPACK_IMPORTED_MODULE_1__["GoogleApiService"],
            _django_service__WEBPACK_IMPORTED_MODULE_2__["DjangoService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], PermissionComponent);
    return PermissionComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login-indent\" *ngIf=\"!userState\">\n\n  <form name=\"form\" class=\"noLogin\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" novalidate>\n\n    <div id=\"header\">\n      <h2>Account Information</h2>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username: <br></label>\n      <input placeholder=\"Username\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"model.username\"\n        #username=\"ngModel\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"desc\">Description: <br></label>\n      <input placeholder=\"Description\" type=\"text\" class=\"form-control\" name=\"desc\" [(ngModel)]=\"model.desc\" #desc=\"ngModel\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"desc\">School Code: <br></label>\n      <input placeholder=\"School Code\" type=\"text\" class=\"form-control\" name=\"school\" [(ngModel)]=\"model.school\"\n        #school=\"ngModel\" />\n    </div>\n\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"submit-btn\">Submit</button>\n    </div>\n\n  </form>\n</div>\n\n<div id=\"login-indent\" *ngIf=\"userState\" class=\"loggedInDiv\">\n\n  <div class=\"card\">\n\n    <div id=\"header\">\n      <h2>Update Profile</h2>\n    </div>\n\n    <form name=\"form\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" novalidate>\n\n      <div class=\"loggedIn\">\n\n        <div class=\"left_column\">\n\n          <div class=\"form-group\">\n            <label for=\"username\">Username: <br></label>\n            <input placeholder=\"Username\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"model.username\"\n              #username=\"ngModel\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"desc\">Description: <br></label>\n            <input placeholder=\"Description\" type=\"text\" class=\"form-control\" name=\"desc\" [(ngModel)]=\"model.bio\" #desc=\"ngModel\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"desc\">School Code: <br></label>\n            <input placeholder=\"School Code\" type=\"password\" class=\"form-control\" name=\"school\" [(ngModel)]=\"model.school_code\"\n              #school=\"ngModel\" />\n          </div>\n\n        </div>\n        <div class=\"right_column\" style=\"text-align: center\">\n          <div>\n            <label id=\"profile_image_label\">Profile Picture: <br>\n              <p style=\"font-size: 12px; color: grey;\">Change here: <a class=\"link\" href=\"https://aboutme.google.com/u/0/?referer=gplus\">Google\n                  +</a></p>\n            </label>\n            <img src=\"{{ userData.profile_image }}\" class=\"profile_image\">\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"form-group submit-btn-div\">\n        <button type=\"submit\" class=\"submit-btn\">Submit</button>\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-indent {\n  background-color: #FBFBFB;\n  margin: 60px;\n  padding: 30px;\n  box-shadow: inset 8px 8px 10px rgba(0, 0, 0, 0.06); }\n\nform {\n  display: grid;\n  grid-template-rows: 106px 20% 20% 20% 20%;\n  width: 420px;\n  height: 620px;\n  box-shadow: 12px 12px 20px rgba(91, 91, 91, 0.72);\n  background-color: #656565;\n  margin: auto; }\n\ninput {\n  width: 330px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  background-color: #909090;\n  border-style: none;\n  height: 50px; }\n\nform #username:focus {\n  outline: none; }\n\nform input {\n  color: white;\n  font-size: 18px; }\n\nform input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.23);\n  font-size: 18px; }\n\nform input::-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.23);\n  font-size: 18px; }\n\nform input::placeholder {\n  color: rgba(255, 255, 255, 0.23);\n  font-size: 18px; }\n\n.form-group {\n  margin: 40px auto 0; }\n\nlabel {\n  color: white; }\n\n#header {\n  background: #27A7CF;\n  height: 100%;\n  display: table; }\n\n#header h2 {\n  text-align: center;\n  vertical-align: middle;\n  display: table-cell;\n  font-size: 32px;\n  color: white; }\n\nform button {\n  width: 194px;\n  height: 56px;\n  background-color: #27A7CF;\n  border-style: none;\n  border-radius: 4px;\n  font-size: 24px;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9FOlxcQW5ndWxhci1UeGVyXFxUeGVyL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixjQUFhO0VBQ2IsbURBQWtELEVBQ3JEOztBQUVEO0VBQ0ksY0FBYTtFQUNiLDBDQUF5QztFQUN6QyxhQUFZO0VBQ1osY0FBYTtFQUNiLGtEQUFpRDtFQUNqRCwwQkFBeUI7RUFDekIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixhQUFZLEVBRWY7O0FBRUQ7RUFDSSxjQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxpQ0FBZ0M7RUFDaEMsZ0JBQWUsRUFDbEI7O0FBSEQ7RUFDSSxpQ0FBZ0M7RUFDaEMsZ0JBQWUsRUFDbEI7O0FBSEQ7RUFDSSxpQ0FBZ0M7RUFDaEMsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLGVBQWEsRUFDaEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXFCO0VBQ3JCLG9CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGFBQVksRUFDZjs7QUFFRDtFQUNJLGFBQVk7RUFDWixhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9naW4taW5kZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkI7XHJcbiAgICBtYXJnaW46IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgOHB4IDhweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTA2cHggMjAlIDIwJSAyMCUgMjAlO1xyXG4gICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgaGVpZ2h0OiA2MjBweDtcclxuICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAyMHB4IHJnYmEoOTEsIDkxLCA5MSwgMC43Mik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU2NTY1O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwOTA5MDtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuXHJcbn1cclxuXHJcbmZvcm0gI3VzZXJuYW1lOmZvY3VzIHtcclxuICAgIG91dGxpbmU6bm9uZTtcclxufVxyXG5cclxuZm9ybSBpbnB1dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjMpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7IFxyXG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyN0E3Q0Y7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG59XHJcblxyXG4jaGVhZGVyIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuZm9ybSBidXR0b24ge1xyXG4gICAgd2lkdGg6IDE5NHB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3QTdDRjtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../django.service */ "./src/app/django.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(django, router, zone) {
        this.django = django;
        this.router = router;
        this.zone = zone;
        this.userData = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.django.isUserLoggedIn.subscribe(function (data) {
            _this.userState = data;
        });
        this.django.currentUserDetails.subscribe(function (data) {
            _this.userData = data;
            _this.model = data;
        });
    };
    ProfileComponent.prototype.reRoute = function (route) {
        var _this = this;
        this.zone.run(function () { _this.router.navigate([route]); });
    };
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        for (var cur in this.model) {
            sessionStorage.setItem(cur, this.model[cur]);
        }
        if (this.userState === true) {
            this.django.updateProfile({ username: sessionStorage.getItem('username'), desc: sessionStorage.getItem('bio'), school: sessionStorage.getItem("school_code"), teacher: sessionStorage.getItem('teacher') }).subscribe(function (data) {
                return _this.django.currentUserDetails.next({ username: sessionStorage.getItem('username'),
                    desc: sessionStorage.getItem('bio'),
                    school: sessionStorage.getItem("school_code"),
                    teacher: sessionStorage.getItem('teacher'),
                    profile_image: _this.userData['profile_image']
                });
            });
            this.reRoute('/dashboard');
        }
        else {
            this.reRoute('/permisson');
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")],
        }),
        __metadata("design:paramtypes", [_django_service__WEBPACK_IMPORTED_MODULE_1__["DjangoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/public-profile/public-profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/public-profile/public-profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  public-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/public-profile/public-profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/public-profile/public-profile.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy1wcm9maWxlL3B1YmxpYy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/public-profile/public-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/public-profile/public-profile.component.ts ***!
  \************************************************************/
/*! exports provided: PublicProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfileComponent", function() { return PublicProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../django.service */ "./src/app/django.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicProfileComponent = /** @class */ (function () {
    function PublicProfileComponent(zone, router, django, activatedRoute) {
        this.zone = zone;
        this.router = router;
        this.django = django;
        this.activatedRoute = activatedRoute;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (paramsId) {
            _this.id = paramsId.id;
            _this.django.viewProfile(_this.id).subscribe(function (data) {
                console.log("**************");
                console.log(data);
            });
        });
    };
    PublicProfileComponent.prototype.reRoute = function (route) {
        var _this = this;
        this.zone.run(function () { _this.router.navigate([route]); });
    };
    PublicProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__(/*! ./public-profile.component.html */ "./src/app/public-profile/public-profile.component.html"),
            styles: [__webpack_require__(/*! ./public-profile.component.scss */ "./src/app/public-profile/public-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _django_service__WEBPACK_IMPORTED_MODULE_2__["DjangoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PublicProfileComponent);
    return PublicProfileComponent;
}());



/***/ }),

/***/ "./src/app/register-classes/register-classes.component.html":
/*!******************************************************************!*\
  !*** ./src/app/register-classes/register-classes.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" novalidate>\n\n\n  <div class=\"form-group\">\n    <label for=\"Courses\">Courses: <br></label>\n    <select multiple name=\"Courses\" id=\"Courses\" class='form-contro' [(ngModel)]=\"model.Courses\">\n      <option *ngFor=\"let course of courses\" [value]=\"course.id\">{{course.name}}</option>\n    </select>\n  </div>\n\n\n  <div class=\"form-group\">\n  <button type=\"submit\" class=\"submit-btn\">Submit</button>\n</div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/register-classes/register-classes.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/register-classes/register-classes.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWNsYXNzZXMvcmVnaXN0ZXItY2xhc3Nlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register-classes/register-classes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/register-classes/register-classes.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterClassesComponent", function() { return RegisterClassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../django.service */ "./src/app/django.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterClassesComponent = /** @class */ (function () {
    function RegisterClassesComponent(django, router) {
        this.django = django;
        this.router = router;
        this.model = {};
    }
    RegisterClassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.django.getGoogleCourses().subscribe(function (data) { return _this.courses = data['courses']; });
    };
    RegisterClassesComponent.prototype.reRoute = function (route) {
        this.router.navigate([route]);
    };
    RegisterClassesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.django.registerGoogleClasses(this.model['Courses']).subscribe(function (data) { _this.reRoute('/dashboard'); });
    };
    RegisterClassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-classes',
            template: __webpack_require__(/*! ./register-classes.component.html */ "./src/app/register-classes/register-classes.component.html"),
            styles: [__webpack_require__(/*! ./register-classes.component.scss */ "./src/app/register-classes/register-classes.component.scss")]
        }),
        __metadata("design:paramtypes", [_django_service__WEBPACK_IMPORTED_MODULE_1__["DjangoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterClassesComponent);
    return RegisterClassesComponent;
}());



/***/ }),

/***/ "./src/app/register-school/register-school.component.html":
/*!****************************************************************!*\
  !*** ./src/app/register-school/register-school.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"indent\">\n\n  <form name=\"form\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n          <label for=\"Name\">Name: <br></label>\n          <input placeholder=\"Name\" type=\"text\" class=\"form-control\" id=\"name\" name=\"Name\" [(ngModel)]=\"model.name\"\n            #name=\"ngModel\" />\n        </div>\n    \n        <div class=\"form-group\">\n          <label for=\"location\">Address: <br></label>\n          <input placeholder=\"Address\" type=\"text\" class=\"form-control\" name=\"location\" [(ngModel)]=\"model.location\" #location=\"ngModel\" />\n        </div>\n    \n\n\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"submit-btn\">Submit</button>\n          </div>\n      \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/register-school/register-school.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/register-school/register-school.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXNjaG9vbC9yZWdpc3Rlci1zY2hvb2wuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/register-school/register-school.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/register-school/register-school.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisterSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSchoolComponent", function() { return RegisterSchoolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../django.service */ "./src/app/django.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterSchoolComponent = /** @class */ (function () {
    function RegisterSchoolComponent(django, router) {
        this.django = django;
        this.router = router;
        this.model = {};
    }
    RegisterSchoolComponent.prototype.reRoute = function (route) {
        this.router.navigate([route]);
    };
    RegisterSchoolComponent.prototype.ngOnInit = function () {
    };
    RegisterSchoolComponent.prototype.onSubmit = function () {
        var _this = this;
        this.django.registerSchool(this.model).subscribe(function (data) {
            _this.reRoute('/schools/' + data['uuid']);
        });
    };
    RegisterSchoolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-school',
            template: __webpack_require__(/*! ./register-school.component.html */ "./src/app/register-school/register-school.component.html"),
            styles: [__webpack_require__(/*! ./register-school.component.scss */ "./src/app/register-school/register-school.component.scss")]
        }),
        __metadata("design:paramtypes", [_django_service__WEBPACK_IMPORTED_MODULE_1__["DjangoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterSchoolComponent);
    return RegisterSchoolComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n\r\n  <div id=\"profile\">\r\n    <img src=\"{{user.profile_image}}\" id=\"profile_icon\">\r\n    <div id=\"email\">\r\n      <img *ngIf=\"userStatus\" src=\"assets/arrow.svg\" align=\"right\" id=\"arrow\" (click)=\"show()\">\r\n      <a routerLink=\"/profile\" id=\"username\" *ngIf=\"userStatus\">{{user.username}}</a>\r\n      <div *ngIf=\"userStatus\" id=\"dropdown\">\r\n        <img src=\"assets/triangle_white.svg\">\r\n        <a routerLink=\"/logout\">Logout</a><br>\r\n        <a routerLink=\"/profile\">Profile Page</a><br>\r\n        <a routerLink=\"/school\">School</a><br>\r\n      </div>\r\n      <div></div>\r\n      <a routerLink=\"/login\" *ngIf=\"!userStatus\" id=\"username\" class=\"login\">Login</a>\r\n    </div>\r\n  </div>\r\n  <div id=\"links\">\r\n\r\n    <a routerLink=\"/dashboard\" class=\"link\">\r\n      <div class=\"side_link\" id=\"Enrolled\">\r\n        <img src=\"assets/dashboard.svg\" class=\"icon\">\r\n        <p class=\"link_name\" *ngIf=\"user.teacher\">Teacher Dashboard</p>\r\n        <p class=\"link_name\" *ngIf=\"!user.teacher\">Dashboard</p>\r\n        <div [ngClass]=\"router.url === '/dashboard' ? 'active' : 'not_active'\">f </div>\r\n      </div>\r\n    </a>\r\n\r\n  <a routerLink=\"/enrolled\" class=\"link\">\r\n    <div class=\"side_link\" id=\"Enrolled\">\r\n      <img src=\"assets/dashboard.svg\" class=\"icon\">\r\n      <p class=\"link_name\">Enrolled Classes</p>\r\n      <div [ngClass]=\"router.url === '/enrolled' ? 'active' : 'not_active'\">f </div>\r\n    </div>\r\n  </a>\r\n\r\n  <a routerLink=\"/Tutorials\" class=\"link\">\r\n    <div class=\"side_link\" id=\"Enrolled\">\r\n      <img src=\"assets/dashboard.svg\" class=\"icon\">\r\n      <p class=\"link_name\">Upcoming Tutorials</p>\r\n      <div [ngClass]=\"router.url === '/Tutorials' ? 'active' : 'not_active'\">f </div>\r\n    </div>\r\n  </a>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 243px auto;\n  background-color: white; }\n\n#profile {\n  background-color: #D5D5D5;\n  margin-bottom: 20px;\n  padding-left: 16px; }\n\n#profile_icon {\n  margin-top: 56px;\n  width: 80px;\n  height: 80px;\n  margin-bottom: 28px;\n  border-radius: 100%; }\n\n#username {\n  font-size: 15px;\n  margin: 0;\n  text-decoration: none;\n  color: black; }\n\n#email {\n  display: grid;\n  grid-template-columns: 16px auto; }\n\n.login {\n  position: relative;\n  left: -10px; }\n\n#arrow {\n  width: 15px;\n  margin: 0;\n  margin-top: 1;\n  margin-right: 6px; }\n\n.side_link {\n  display: grid;\n  grid-template-columns: 40px auto 8px;\n  height: 50px;\n  background-color: rgba(0, 0, 0, 0.08);\n  width: 220px;\n  margin-top: 2.5vh;\n  color: black; }\n\n.link_name {\n  margin: 0;\n  margin: auto;\n  margin-left: 0px;\n  font-size: 15px;\n  text-decoration: none; }\n\n.link {\n  text-decoration: none; }\n\n.active {\n  background: #27A7CF;\n  color: #27A7CF;\n  font-size: 0; }\n\n.not_active {\n  background: #C4C4C4;\n  color: #C4C4C4;\n  font-size: 0; }\n\n.icon {\n  width: 24px;\n  margin: auto; }\n\n#dropdown {\n  display: block;\n  background-color: white;\n  width: 120px;\n  z-index: 1;\n  display: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin-top: 10px;\n  padding: 20px 0px 10px 10px;\n  border-radius: 4px; }\n\n#dropdown a {\n  display: block;\n  text-decoration: none;\n  color: #A8A8A8;\n  list-style-type: none;\n  margin: auto 3px;\n  padding: 0;\n  margin-bottom: -3px;\n  padding-bottom: -3px; }\n\n#dropdown img {\n  position: relative;\n  bottom: 28px;\n  right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9FOlxcQW5ndWxhci1UeGVyXFxUeGVyL3NyY1xcYXBwXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYiwrQkFBOEI7RUFDOUIsd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFFckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixVQUFTO0VBQ1Qsc0JBQXFCO0VBQ3JCLGFBQVksRUFFZjs7QUFFRDtFQUNJLGNBQWE7RUFDYixpQ0FBZ0MsRUFDbkM7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksWUFBVztFQUNYLFVBQVM7RUFDVCxjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLHFDQUFvQztFQUNwQyxhQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGFBQVk7RUFDWixrQkFBaUI7RUFFakIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksVUFBUztFQUNULGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixzQkFBcUIsRUFDeEI7O0FBRUQ7RUFDSSxzQkFBcUIsRUFDeEI7O0FBR0Q7RUFDSSxvQkFBbUI7RUFDbkIsZUFBYztFQUNkLGFBQVksRUFDZjs7QUFFRDtFQUNJLG9CQUFtQjtFQUNuQixlQUFjO0VBQ2QsYUFBWSxFQUNmOztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBQWE7RUFDYix3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLFdBQVU7RUFDVixjQUFhO0VBQ2IsNENBQTJDO0VBQzNDLGlCQUFnQjtFQUNoQiw0QkFBMkI7RUFDM0IsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksZUFBYTtFQUNiLHNCQUFxQjtFQUNyQixlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLGlCQUFnQjtFQUNoQixXQUFVO0VBQ1Ysb0JBQW1CO0VBQ25CLHFCQUFvQixFQUN2Qjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjQzcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jcHJvZmlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVENUQ1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuXHJcbn1cclxuXHJcbiNwcm9maWxlX2ljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNTZweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbiN1c2VybmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcblxyXG4jZW1haWwge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZweCBhdXRvO1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbn1cclxuXHJcbiNhcnJvdyB7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLnNpZGVfbGluayB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IGF1dG8gOHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjV2aDtcclxuXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5saW5rX25hbWUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdBN0NGO1xyXG4gICAgY29sb3I6ICMyN0E3Q0Y7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbn1cclxuXHJcbi5ub3RfYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNDNEM0QzQ7XHJcbiAgICBjb2xvcjogI0M0QzRDNDtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNkcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4jZHJvcGRvd24gYSB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNBOEE4QTg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IGF1dG8gM3B4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLTNweDtcclxufVxyXG5cclxuI2Ryb3Bkb3duIGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDI4cHg7XHJcbiAgICByaWdodDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../django.service */ "./src/app/django.service.ts");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-gapi */ "./node_modules/ng-gapi/lib/index.js");
/* harmony import */ var _user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-services.service */ "./src/app/user-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery/dist/jquery.min.js */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(userService, authService, gapiService, django, router) {
        this.userService = userService;
        this.authService = authService;
        this.gapiService = gapiService;
        this.django = django;
        this.router = router;
        this.userStatus = false;
        // First make sure gapi is loaded can be in AppInitilizer
        gapiService.onLoad().subscribe(function () {
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.django.isUserLoggedIn.subscribe(function (status) {
            if (status) {
                jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_5__(document).mouseup(function (e) {
                    var container = jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_5__("dropdown");
                    // if the target of the click isn't the container nor a descendant of the container
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        document.getElementById("dropdown").style.display = "none";
                        document.getElementById("arrow").style.transform = "rotate(0deg)";
                    }
                });
            }
        });
        this.user = { profile_image: "assets/profile_icon.svg" };
        this.django.isUserLoggedIn.subscribe(function (status) {
            if (status) {
                console.log(_this.user);
                _this.initUser().then(function (data) { return _this.django.currentUserDetails.next(data); });
                _this.django.currentUserDetails.subscribe(function (data) {
                    console.log(data);
                    _this.user = data;
                });
                _this.userStatus = true;
            }
            else {
                _this.userStatus = false;
            }
        });
    };
    SidebarComponent.prototype.initUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.django.getUserDetails(false).subscribe(function (data) { resolve(data); });
        });
    };
    SidebarComponent.prototype.show = function () {
        if (document.getElementById("dropdown").style.display === "inline") {
            document.getElementById("dropdown").style.display = "none";
            document.getElementById("arrow").style.transform = "rotate(0deg)";
        }
        else {
            document.getElementById("dropdown").style.display = "inline";
            document.getElementById("arrow").style.transform = "rotate(180deg)";
        }
    };
    SidebarComponent.prototype.hide = function () {
        document.getElementById("dropdown").style.display = "none";
        document.getElementById("arrow").style.transform = "rotate(0deg)";
    };
    SidebarComponent.prototype.mpApp = function () {
        // this.gapiService.onLoad().subscribe(()=> {
        //   gap
        // })
        // this.auth2.currentUser.get().grantOfflineAccess().then(function (code) {
        //   
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")],
        }),
        __metadata("design:paramtypes", [_user_services_service__WEBPACK_IMPORTED_MODULE_3__["UserServicesService"],
            ng_gapi__WEBPACK_IMPORTED_MODULE_2__["GoogleAuthService"],
            ng_gapi__WEBPACK_IMPORTED_MODULE_2__["GoogleApiService"],
            _django_service__WEBPACK_IMPORTED_MODULE_1__["DjangoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/top-nav/top-nav.component.html":
/*!************************************************!*\
  !*** ./src/app/top-nav/top-nav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='content'>\n    <h2 id=\"current-location\">{{ currentPath }}</h2>\n<a  id=\"logo\" href=\"app/dashboard\">\n    Txer\n</a>\n</div>"

/***/ }),

/***/ "./src/app/top-nav/top-nav.component.scss":
/*!************************************************!*\
  !*** ./src/app/top-nav/top-nav.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  background-color: white;\n  margin: 0;\n  height: calc(6vh-20px); }\n\n#content {\n  margin: auto;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.07);\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n#logo {\n  text-align: right;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 20px;\n  overflow: hidden;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: 0.2em;\n  font-size: 30px;\n  color: black;\n  text-decoration: none; }\n\nh2 {\n  text-align: left;\n  font-size: 20px;\n  margin: auto 0;\n  padding-left: 20px;\n  overflow: hidden;\n  font-style: normal;\n  font-weight: normal;\n  height: calc(100%-20px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLW5hdi9FOlxcQW5ndWxhci1UeGVyXFxUeGVyL3NyY1xcYXBwXFx0b3AtbmF2XFx0b3AtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXVCO0VBQ3ZCLFVBQVM7RUFDVCx1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxhQUFXO0VBQ1gsOENBQTZDO0VBQzdDLGNBQWE7RUFDYiwrQkFBOEIsRUFDakM7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLHFCQUFvQjtFQUNwQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLHNCQUFxQixFQUN4Qjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixnQkFBYztFQUNkLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogY2FsYyg2dmgtMjBweCk7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUtMjBweCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/top-nav/top-nav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-nav/top-nav.component.ts ***!
  \**********************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _django_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../django.service */ "./src/app/django.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopNavComponent = /** @class */ (function () {
    function TopNavComponent(router, django) {
        var _this = this;
        this.router = router;
        this.django = django;
        this.django.currentUserDetails.subscribe(function (data) {
            _this.userData = data;
            _this.currentPath = _this.prettyUrl(_this.router.url);
        });
        this.router.events.subscribe(function (urll) {
            if (urll instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.currentPath = _this.prettyUrl(urll['url']);
            }
        });
    }
    TopNavComponent.prototype.prettyUrl = function (url) {
        if (url === '/dashboard') {
            if (this.userData['teacher']) {
                url = '/Teacher Dashboard';
            }
        }
        url = "/" + url.replace("_", " ").split('/')[1];
        var newURL = url.slice(1, url.length);
        return newURL.charAt(0).toUpperCase() + newURL.slice(1);
    };
    TopNavComponent.prototype.ngOnInit = function () {
    };
    TopNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-nav',
            template: __webpack_require__(/*! ./top-nav.component.html */ "./src/app/top-nav/top-nav.component.html"),
            styles: [__webpack_require__(/*! ./top-nav.component.scss */ "./src/app/top-nav/top-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _django_service__WEBPACK_IMPORTED_MODULE_2__["DjangoService"]])
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ }),

/***/ "./src/app/tutorials/tutorials.component.html":
/*!****************************************************!*\
  !*** ./src/app/tutorials/tutorials.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tutorials works!\n</p>\n"

/***/ }),

/***/ "./src/app/tutorials/tutorials.component.scss":
/*!****************************************************!*\
  !*** ./src/app/tutorials/tutorials.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFscy90dXRvcmlhbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tutorials/tutorials.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tutorials/tutorials.component.ts ***!
  \**************************************************/
/*! exports provided: TutorialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialsComponent", function() { return TutorialsComponent; });
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

var TutorialsComponent = /** @class */ (function () {
    function TutorialsComponent() {
    }
    TutorialsComponent.prototype.ngOnInit = function () {
    };
    TutorialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorials',
            template: __webpack_require__(/*! ./tutorials.component.html */ "./src/app/tutorials/tutorials.component.html"),
            styles: [__webpack_require__(/*! ./tutorials.component.scss */ "./src/app/tutorials/tutorials.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());



/***/ }),

/***/ "./src/app/user-services.service.ts":
/*!******************************************!*\
  !*** ./src/app/user-services.service.ts ***!
  \******************************************/
/*! exports provided: UserServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServicesService", function() { return UserServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_gapi_lib_GoogleAuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-gapi/lib/GoogleAuthService */ "./node_modules/ng-gapi/lib/GoogleAuthService.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserServicesService = /** @class */ (function () {
    function UserServicesService(googleAuthService, ngZone) {
        this.googleAuthService = googleAuthService;
        this.ngZone = ngZone;
        this.user = undefined;
    }
    UserServicesService_1 = UserServicesService;
    UserServicesService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserServicesService.prototype.getCurrentUser = function () {
        return this.user;
    };
    UserServicesService.prototype.getToken = function () {
        var token = sessionStorage.getItem(UserServicesService_1.SESSION_STORAGE_KEY);
        if (!token) {
            throw new Error("no token set , authentication required");
        }
        return sessionStorage.getItem(UserServicesService_1.SESSION_STORAGE_KEY);
    };
    UserServicesService.prototype.signIn = function () {
        var _this = this;
        this.googleAuthService.getAuth().subscribe(function (auth) {
            auth.signIn().then(function (res) { return _this.signInSuccessHandler(res); }, function (err) { return _this.signInErrorHandler(err); });
        });
    };
    //TODO: Rework
    UserServicesService.prototype.signOut = function () {
        this.googleAuthService.getAuth().subscribe(function (auth) {
            try {
                auth.signOut();
            }
            catch (e) {
                console.error(e);
            }
            sessionStorage.removeItem(UserServicesService_1.SESSION_STORAGE_KEY);
        });
    };
    UserServicesService.prototype.isUserSignedIn = function () {
        return !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](sessionStorage.getItem(UserServicesService_1.SESSION_STORAGE_KEY));
    };
    UserServicesService.prototype.signInSuccessHandler = function (res) {
        var _this = this;
        this.ngZone.run(function () {
            _this.user = res;
            sessionStorage.setItem(UserServicesService_1.SESSION_STORAGE_KEY, res.getAuthResponse().access_token);
        });
    };
    UserServicesService.prototype.signInErrorHandler = function (err) {
        console.warn(err);
    };
    var UserServicesService_1;
    UserServicesService.SESSION_STORAGE_KEY = "accessToken";
    UserServicesService = UserServicesService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ng_gapi_lib_GoogleAuthService__WEBPACK_IMPORTED_MODULE_2__["GoogleAuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], UserServicesService);
    return UserServicesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular-Txer\Txer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map