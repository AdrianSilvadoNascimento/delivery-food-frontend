(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AngularMaterial.module.ts":
/*!*******************************************!*\
  !*** ./src/app/AngularMaterial.module.ts ***!
  \*******************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");






let AngularMaterialModule = /*@__PURE__*/ (() => {
    class AngularMaterialModule {
    }
    AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
    AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [[],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"]] });
    return AngularMaterialModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { exports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"]] });
})();



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/auth/auth.guard */ "./src/app/shared/auth/auth.guard.ts");
/* harmony import */ var _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/main-page/main-page.component */ "./src/app/shared/main-page/main-page.component.ts");






const routes = [
    { path: '', component: _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = /*@__PURE__*/ (() => {
    class AppRoutingModule {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let AppComponent = /*@__PURE__*/ (() => {
    class AppComponent {
        constructor() {
            this.title = 'nosso-tempero';
        }
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            }
        }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
})();



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/auth/auth.module */ "./src/app/shared/auth/auth.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _AngularMaterial_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AngularMaterial.module */ "./src/app/AngularMaterial.module.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/main-page/main-page.component */ "./src/app/shared/main-page/main-page.component.ts");












let AppModule = /*@__PURE__*/ (() => {
    class AppModule {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _shared_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _AngularMaterial_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ]] });
    return AppModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]], imports: [_shared_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
            _AngularMaterial_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]] });
})();



/***/ }),

/***/ "./src/app/shared/Models/user-model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/Models/user-model.ts ***!
  \*********************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
class UserModel {
}



/***/ }),

/***/ "./src/app/shared/Services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/Services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let AuthService = /*@__PURE__*/ (() => {
    class AuthService {
        constructor(http, router) {
            this.http = http;
            this.router = router;
            this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + '/user';
        }
        /**
         * To register a new user
         *
         * @param user - Is the user data
         * @returns The register of the user
         */
        register(user) {
            return this.http.post(`${this.API_URL}/register`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => console.log('User registrado')));
        }
        /**
         * To loggin the user
         *
         * @param user - Is the user data
         * @returns The user data with time to expire session and the id
         */
        login(user) {
            return this.http.post(`${this.API_URL}/login`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
                console.log(res.token);
                console.log(res.userId);
                console.log(res.expiresIn);
                this.token = res.token;
                this.userId = res.userId;
                const expiresInDuration = res.expiresIn;
                const now = new Date();
                this.setAuthTimer(expiresInDuration);
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                this.saveAuth(this.token, this.userId, expirationDate);
            }));
        }
        /**
         * Verify if there's a token on the localStorage
         *
         * @returns Boolean if there's a token on the localStorage
         */
        loggedIn() {
            return !!localStorage.getItem('token');
        }
        /**
         * To get the token on the localStorage
         *
         * @returns The token on the localStorage
         */
        getToken() {
            return localStorage.getItem('token');
        }
        /**
         * To finish the user's session
         */
        logout() {
            clearTimeout(this.tokenTimer);
            this.router.navigate(['/auth/login']);
            this.clearAuthData();
        }
        /**
         * To save user data on localStorage
         *
         * @param token - Is the token of the user
         * @param userId - Is the user id
         * @param expiration - Is the time to close the session
         */
        saveAuth(token, userId, expiration) {
            localStorage.setItem('token', this.token);
            localStorage.setItem('userId', this.userId);
            localStorage.setItem('expiration', expiration.toISOString());
        }
        /**
         * To clear the localStorage
         */
        clearAuthData() {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('expiration');
        }
        /**
         * To set the session duration
         *
         * @param timer - Is the time number of the counter
         */
        setAuthTimer(timer) {
            this.tokenTimer = setTimeout(() => {
                this.logout();
            }, timer * 1000);
        }
    }
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    return AuthService;
})();



/***/ }),

/***/ "./src/app/shared/auth/auth-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/auth/auth-routing.module.ts ***!
  \****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/shared/auth/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/shared/auth/login/login.component.ts");






const routes = [
    { path: 'auth/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'auth/register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
];
let AuthRoutingModule = /*@__PURE__*/ (() => {
    class AuthRoutingModule {
    }
    AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
    AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AuthRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "./src/app/shared/auth/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/auth/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Services/auth.service */ "./src/app/shared/Services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let AuthGuard = /*@__PURE__*/ (() => {
    class AuthGuard {
        constructor(authService, router) {
            this.authService = authService;
            this.router = router;
        }
        canActivate(route, state) {
            const isAuth = this.authService.loggedIn();
            if (!isAuth) {
                this.router.navigate(['/auth/login']);
                return false;
            }
            return isAuth;
        }
    }
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
    return AuthGuard;
})();



/***/ }),

/***/ "./src/app/shared/auth/auth.module.ts":
/*!********************************************!*\
  !*** ./src/app/shared/auth/auth.module.ts ***!
  \********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/shared/auth/login/login.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/shared/auth/auth-routing.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/shared/auth/register/register.component.ts");
/* harmony import */ var _AngularMaterial_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../AngularMaterial.module */ "./src/app/AngularMaterial.module.ts");








let AuthModule = /*@__PURE__*/ (() => {
    class AuthModule {
    }
    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _AngularMaterial_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"]]] });
    return AuthModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _AngularMaterial_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"]] }); })();



/***/ }),

/***/ "./src/app/shared/auth/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/auth/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/user-model */ "./src/app/shared/Models/user-model.ts");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/auth.service */ "./src/app/shared/Services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/register"]; };
let LoginComponent = /*@__PURE__*/ (() => {
    class LoginComponent {
        constructor(authService, router) {
            this.authService = authService;
            this.router = router;
            this.userModel = new _Models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
        }
        onLogin() {
            this.authService.login(this.userModel).subscribe(() => {
                this.router.navigate(['/']);
            });
        }
    }
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 6, consts: [[1, "auth-section"], [1, "button-back", 3, "routerLink"], [1, "fas", "fa-long-arrow-alt-left"], [1, "form"], [3, "ngSubmit"], ["matInput", "", "type", "email", "name", "email", 1, "bringForm", 3, "ngModel", "ngModelChange"], ["emailInput", "ngModel"], ["matInput", "", "type", "password", "name", "password", 1, "bringForm", 3, "ngModel", "ngModelChange"], ["passwordInput", "ngModel"], ["type", "submit", "mat-button", ""], [1, "rota"], [3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.onLogin(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5, 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.userModel.email = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Senha");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.userModel.password = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Entrar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ainda n\u00E3o possui conta?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.email);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.password);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@font-face {\n  font-family: \"Ginsthies\";\n  src: local(\"Ginsthies\"), url('Ginchiest.ttf');\n}\nsection.auth-section[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30vh;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 540px;\n  height: 520px;\n  border: 2px solid #fff;\n  background-color: #3d405b;\n}\nsection.auth-section[_ngcontent-%COMP%]   button.button-back[_ngcontent-%COMP%] {\n  top: 5vh;\n  left: -10;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  background-color: #fff;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  -webkit-animation: scrollButton 1.5s ease-out;\n          animation: scrollButton 1.5s ease-out;\n  transition: 0.2s;\n  border: none;\n}\nsection.auth-section[_ngcontent-%COMP%]   button.button-back[_ngcontent-%COMP%] {\n  top: 5vh;\n  left: -10;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  background-color: #fff;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  -webkit-animation: scrollButton 1.5s ease-out;\n          animation: scrollButton 1.5s ease-out;\n  transition: 0.2s;\n  border: none;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%], section.auth-section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], section.auth-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], section.auth-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section.auth-section[_ngcontent-%COMP%]   button.button-back[_ngcontent-%COMP%] {\n  position: relative;\n}\nsection.auth-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Ginsthies\";\n  display: none;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%] {\n  width: 282px;\n  top: 5vh;\n  left: 50%;\n  transform: translate(-50%);\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Ginsthies\";\n  text-align: center;\n  font-size: 3em;\n  letter-spacing: 10px;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   div.rota[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   div.rota[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: underline;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  border: 2px solid #fff;\n  padding: 0 7vw;\n  margin-top: 3vh;\n  margin-bottom: 5vh;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n  border: none !important;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  color: #fff;\n  border: none;\n  padding-left: 5px;\n  padding-bottom: 5px;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input.bringForm[_ngcontent-%COMP%] {\n  -webkit-animation: bringForm 1.5s ease-out;\n          animation: bringForm 1.5s ease-out;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n@-webkit-keyframes scrollButton {\n  from {\n    padding: 0 0 0 100px;\n  }\n  to {\n    padding: 0 0 0 0;\n  }\n}\n@keyframes scrollButton {\n  from {\n    padding: 0 0 0 100px;\n  }\n  to {\n    padding: 0 0 0 0;\n  }\n}\n@-webkit-keyframes bringForm {\n  from {\n    padding: 0 0 0 100px;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    padding: 0 0 0 0;\n  }\n}\n@keyframes bringForm {\n  from {\n    padding: 0 0 0 100px;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    padding: 0 0 0 0;\n  }\n}\n@media screen and (max-width: 480px) {\n  section.auth-section[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 0;\n    transform: translateX(-50%);\n    border: 10px solid #fff;\n    width: 100vw;\n    height: 100vh;\n  }\n  section.auth-section[_ngcontent-%COMP%]   button.button-back[_ngcontent-%COMP%] {\n    top: 5vh;\n    left: -10;\n    width: 50px;\n    height: 50px;\n    background-color: #fff;\n    border-top-right-radius: 50px;\n    border-bottom-right-radius: 50px;\n    -webkit-animation: scrollButton 2.5s ease-out;\n            animation: scrollButton 2.5s ease-out;\n    transition: 0.2s;\n    border: none;\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 40%;\n    transform: translate(-50%, -40%);\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n    text-align: center;\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 320px;\n    left: 50%;\n    transform: translateX(-50%);\n    margin-bottom: 3vh;\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input.bringForm[_ngcontent-%COMP%] {\n    -webkit-animation: bringForm 2s ease-out;\n            animation: bringForm 2s ease-out;\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    left: 50%;\n    transform: translateX(-50%);\n    border: 2px solid #fff;\n    padding: 0 20vw;\n    margin-top: 3vh;\n    margin-bottom: 5vh;\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   div.rota[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   div.rota[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n    text-decoration: underline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2F1dGgvQzpcXFVzZXJzXFxBZHJpYVxcT25lRHJpdmVcXMOBcmVhIGRlIFRyYWJhbGhvXFxkZWxpdmVyeS1mb29kLWZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGF1dGhcXGF1dGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLDZDQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0FGO0FERUU7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNBSjtBREdFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2Q0FBQTtVQUFBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDREo7QURJRTtFQUNFLGtCQUFBO0FDRko7QURLRTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtBQ0hKO0FETUU7RUFDRSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQ0pKO0FETUk7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDSk47QURPSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0xOO0FETU07RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUNKUjtBRFFJO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTk47QURTSTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtBQ1BOO0FEU007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNQUjtBRFVNO0VBQ0UsMENBQUE7VUFBQSxrQ0FBQTtBQ1JSO0FEV007RUFDRSxZQUFBO0FDVFI7QURlQTtFQUNFO0lBQ0Usb0JBQUE7RUNaRjtFRGNBO0lBQ0UsZ0JBQUE7RUNaRjtBQUNGO0FETUE7RUFDRTtJQUNFLG9CQUFBO0VDWkY7RURjQTtJQUNFLGdCQUFBO0VDWkY7QUFDRjtBRGVBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLFVBQUE7RUNiRjtFRGVBO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VDYkY7QUFDRjtBREtBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLFVBQUE7RUNiRjtFRGVBO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VDYkY7QUFDRjtBRGdCQTtFQUdFO0lBQ0UsU0FBQTtJQUNBLE1BQUE7SUFDQSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUNoQkY7RURrQkU7SUFDRSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSw2QkFBQTtJQUNBLGdDQUFBO0lBQ0EsNkNBQUE7WUFBQSxxQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQ2hCSjtFRG1CRTtJQUNFLFNBQUE7SUFDQSxRQUFBO0lBQ0EsZ0NBQUE7RUNqQko7RURtQkk7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VDakJOO0VEb0JJO0lBQ0UsWUFBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtJQUNBLGtCQUFBO0VDbEJOO0VEb0JNO0lBQ0Usd0NBQUE7WUFBQSxnQ0FBQTtFQ2xCUjtFRHNCSTtJQUNFLFNBQUE7SUFDQSwyQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ3BCTjtFRHVCSTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQ3JCTjtFRHNCTTtJQUNFLFdBQUE7SUFDQSwwQkFBQTtFQ3BCUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnR2luc3RoaWVzJztcclxuICBzcmM6IGxvY2FsKCdHaW5zdGhpZXMnKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvR2luY2hpZXN0LnR0ZicpO1xyXG59XHJcblxyXG5zZWN0aW9uLmF1dGgtc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzB2aDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHdpZHRoOiA1NDBweDtcclxuICBoZWlnaHQ6IDUyMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNDA1YjtcclxuXHJcbiAgYnV0dG9uLmJ1dHRvbi1iYWNrIHtcclxuICAgIHRvcDogNXZoO1xyXG4gICAgbGVmdDogLTEwO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICAgIGFuaW1hdGlvbjogc2Nyb2xsQnV0dG9uIDEuNXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBidXR0b24uYnV0dG9uLWJhY2sge1xyXG4gICAgdG9wOiA1dmg7XHJcbiAgICBsZWZ0OiAtMTA7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYW5pbWF0aW9uOiBzY3JvbGxCdXR0b24gMS41cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIGFydGljbGUuZm9ybSwgbWF0LWZvcm0tZmllbGQsIGJ1dHRvbiwgYSwgYnV0dG9uLmJ1dHRvbi1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2luc3RoaWVzJztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBhcnRpY2xlLmZvcm0ge1xyXG4gICAgd2lkdGg6IDI4MnB4O1xyXG4gICAgdG9wOiA1dmg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2luc3RoaWVzJztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnJvdGEge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDAgN3Z3O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgIH1cclxuXHJcbiAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIG1hdC1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0LmJyaW5nRm9ybSB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBicmluZ0Zvcm0gMS41cyBlYXNlLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzY3JvbGxCdXR0b24ge1xyXG4gIGZyb20ge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMTAwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJyaW5nRm9ybSB7XHJcbiAgZnJvbSB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAxMDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcblxyXG4gIHNlY3Rpb24uYXV0aC1zZWN0aW9uIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBidXR0b24uYnV0dG9uLWJhY2sge1xyXG4gICAgICB0b3A6IDV2aDtcclxuICAgICAgbGVmdDogLTEwO1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGFuaW1hdGlvbjogc2Nyb2xsQnV0dG9uIDIuNXMgZWFzZS1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGFydGljbGUuZm9ybSB7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOiA0MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpO1xyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xyXG5cclxuICAgICAgICBpbnB1dC5icmluZ0Zvcm0ge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBicmluZ0Zvcm0gMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwdnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2LnJvdGEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdpbnN0aGllc1wiO1xuICBzcmM6IGxvY2FsKFwiR2luc3RoaWVzXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvR2luY2hpZXN0LnR0ZlwiKTtcbn1cbnNlY3Rpb24uYXV0aC1zZWN0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwdmg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogNTQwcHg7XG4gIGhlaWdodDogNTIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDQwNWI7XG59XG5zZWN0aW9uLmF1dGgtc2VjdGlvbiBidXR0b24uYnV0dG9uLWJhY2sge1xuICB0b3A6IDV2aDtcbiAgbGVmdDogLTEwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgYW5pbWF0aW9uOiBzY3JvbGxCdXR0b24gMS41cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYm9yZGVyOiBub25lO1xufVxuc2VjdGlvbi5hdXRoLXNlY3Rpb24gYnV0dG9uLmJ1dHRvbi1iYWNrIHtcbiAgdG9wOiA1dmg7XG4gIGxlZnQ6IC0xMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XG4gIGFuaW1hdGlvbjogc2Nyb2xsQnV0dG9uIDEuNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnNlY3Rpb24uYXV0aC1zZWN0aW9uIGFydGljbGUuZm9ybSwgc2VjdGlvbi5hdXRoLXNlY3Rpb24gbWF0LWZvcm0tZmllbGQsIHNlY3Rpb24uYXV0aC1zZWN0aW9uIGJ1dHRvbiwgc2VjdGlvbi5hdXRoLXNlY3Rpb24gYSwgc2VjdGlvbi5hdXRoLXNlY3Rpb24gYnV0dG9uLmJ1dHRvbi1iYWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuc2VjdGlvbi5hdXRoLXNlY3Rpb24gaDEge1xuICBmb250LWZhbWlseTogXCJHaW5zdGhpZXNcIjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbnNlY3Rpb24uYXV0aC1zZWN0aW9uIGFydGljbGUuZm9ybSB7XG4gIHdpZHRoOiAyODJweDtcbiAgdG9wOiA1dmg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG59XG5zZWN0aW9uLmF1dGgtc2VjdGlvbiBhcnRpY2xlLmZvcm0gaDIge1xuICBmb250LWZhbWlseTogXCJHaW5zdGhpZXNcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDNlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG59XG5zZWN0aW9uLmF1dGgtc2VjdGlvbiBhcnRpY2xlLmZvcm0gZGl2LnJvdGEge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuc2VjdGlvbi5hdXRoLXNlY3Rpb24gYXJ0aWNsZS5mb3JtIGRpdi5yb3RhIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5zZWN0aW9uLmF1dGgtc2VjdGlvbiBhcnRpY2xlLmZvcm0gYnV0dG9uIHtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmc6IDAgN3Z3O1xuICBtYXJnaW4tdG9wOiAzdmg7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbn1cbnNlY3Rpb24uYXV0aC1zZWN0aW9uIGFydGljbGUuZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbnNlY3Rpb24uYXV0aC1zZWN0aW9uIGFydGljbGUuZm9ybSBtYXQtZm9ybS1maWVsZCBtYXQtbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbnNlY3Rpb24uYXV0aC1zZWN0aW9uIGFydGljbGUuZm9ybSBtYXQtZm9ybS1maWVsZCBpbnB1dC5icmluZ0Zvcm0ge1xuICBhbmltYXRpb246IGJyaW5nRm9ybSAxLjVzIGVhc2Utb3V0O1xufVxuc2VjdGlvbi5hdXRoLXNlY3Rpb24gYXJ0aWNsZS5mb3JtIG1hdC1mb3JtLWZpZWxkIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIHNjcm9sbEJ1dHRvbiB7XG4gIGZyb20ge1xuICAgIHBhZGRpbmc6IDAgMCAwIDEwMHB4O1xuICB9XG4gIHRvIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJyaW5nRm9ybSB7XG4gIGZyb20ge1xuICAgIHBhZGRpbmc6IDAgMCAwIDEwMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgc2VjdGlvbi5hdXRoLXNlY3Rpb24ge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIHNlY3Rpb24uYXV0aC1zZWN0aW9uIGJ1dHRvbi5idXR0b24tYmFjayB7XG4gICAgdG9wOiA1dmg7XG4gICAgbGVmdDogLTEwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xuICAgIGFuaW1hdGlvbjogc2Nyb2xsQnV0dG9uIDIuNXMgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgc2VjdGlvbi5hdXRoLXNlY3Rpb24gYXJ0aWNsZS5mb3JtIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA0MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQwJSk7XG4gIH1cbiAgc2VjdGlvbi5hdXRoLXNlY3Rpb24gYXJ0aWNsZS5mb3JtIGgyIHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBzZWN0aW9uLmF1dGgtc2VjdGlvbiBhcnRpY2xlLmZvcm0gbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcbiAgfVxuICBzZWN0aW9uLmF1dGgtc2VjdGlvbiBhcnRpY2xlLmZvcm0gbWF0LWZvcm0tZmllbGQgaW5wdXQuYnJpbmdGb3JtIHtcbiAgICBhbmltYXRpb246IGJyaW5nRm9ybSAycyBlYXNlLW91dDtcbiAgfVxuICBzZWN0aW9uLmF1dGgtc2VjdGlvbiBhcnRpY2xlLmZvcm0gYnV0dG9uIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZzogMCAyMHZ3O1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIH1cbiAgc2VjdGlvbi5hdXRoLXNlY3Rpb24gYXJ0aWNsZS5mb3JtIGRpdi5yb3RhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgc2VjdGlvbi5hdXRoLXNlY3Rpb24gYXJ0aWNsZS5mb3JtIGRpdi5yb3RhIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59Il19 */"] });
    return LoginComponent;
})();



/***/ }),

/***/ "./src/app/shared/auth/register/register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/auth/register/register.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Models/user-model */ "./src/app/shared/Models/user-model.ts");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/auth.service */ "./src/app/shared/Services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/login"]; };
let RegisterComponent = /*@__PURE__*/ (() => {
    class RegisterComponent {
        constructor(authService, router) {
            this.authService = authService;
            this.router = router;
            this.userModel = new _Models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
        }
        ngOnInit() {
        }
        onRegister() {
            console.log(this.userModel);
            this.authService.register(this.userModel).subscribe(() => {
                this.router.navigate(['/']);
            });
        }
    }
    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 28, vars: 7, consts: [[1, "auth-section"], [1, "button-back", 3, "routerLink"], [1, "fas", "fa-long-arrow-alt-left"], [1, "form"], [3, "ngSubmit"], ["name", "username", "matInput", "", "type", "text", 1, "bringForm", 3, "ngModel", "ngModelChange"], ["userInput", "ngModel"], ["name", "email", "matInput", "", "type", "email", 1, "bringForm", 3, "ngModel", "ngModelChange"], ["emailInput", "ngModel"], ["name", "password", "matInput", "", "type", "password", 1, "bringForm", 3, "ngModel", "ngModelChange"], ["passwordInput", "ngModel"], ["type", "submit", "mat-button", ""], [1, "rota"], [3, "routerLink"]], template: function RegisterComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.onRegister(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cadastro");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Usu\u00E1rio");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5, 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.userModel.username = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.userModel.email = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Senha");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9, 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) { return ctx.userModel.password = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cadastrar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "J\u00E1 possui conta?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.username);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.email);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.password);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@font-face {\n  font-family: \"Ginsthies\";\n  src: local(\"Ginsthies\"), url('Ginchiest.ttf');\n}\nsection.auth-section[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30vh;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 540px;\n  height: 520px;\n  border: 2px solid #fff;\n  background-color: #3d405b;\n}\nsection.auth-section[_ngcontent-%COMP%]   button.button-back[_ngcontent-%COMP%] {\n  top: 5vh;\n  left: -10;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  background-color: #fff;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  -webkit-animation: scrollButton 1.5s ease-out;\n          animation: scrollButton 1.5s ease-out;\n  transition: 0.2s;\n  border: none;\n}\nsection.auth-section[_ngcontent-%COMP%]   button.button-back[_ngcontent-%COMP%] {\n  top: 5vh;\n  left: -10;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  background-color: #fff;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  -webkit-animation: scrollButton 1.5s ease-out;\n          animation: scrollButton 1.5s ease-out;\n  transition: 0.2s;\n  border: none;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%], section.auth-section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], section.auth-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], section.auth-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section.auth-section[_ngcontent-%COMP%]   button.button-back[_ngcontent-%COMP%] {\n  position: relative;\n}\nsection.auth-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Ginsthies\";\n  display: none;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%] {\n  width: 282px;\n  top: 5vh;\n  left: 50%;\n  transform: translate(-50%);\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Ginsthies\";\n  text-align: center;\n  font-size: 3em;\n  letter-spacing: 10px;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   div.rota[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   div.rota[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: underline;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  border: 2px solid #fff;\n  padding: 0 7vw;\n  margin-top: 3vh;\n  margin-bottom: 5vh;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n  border: none !important;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  color: #fff;\n  border: none;\n  padding-left: 5px;\n  padding-bottom: 5px;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input.bringForm[_ngcontent-%COMP%] {\n  -webkit-animation: bringForm 1.5s ease-out;\n          animation: bringForm 1.5s ease-out;\n}\nsection.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n@-webkit-keyframes scrollButton {\n  from {\n    padding: 0 0 0 100px;\n  }\n  to {\n    padding: 0 0 0 0;\n  }\n}\n@keyframes scrollButton {\n  from {\n    padding: 0 0 0 100px;\n  }\n  to {\n    padding: 0 0 0 0;\n  }\n}\n@-webkit-keyframes bringForm {\n  from {\n    padding: 0 0 0 100px;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    padding: 0 0 0 0;\n  }\n}\n@keyframes bringForm {\n  from {\n    padding: 0 0 0 100px;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    padding: 0 0 0 0;\n  }\n}\n@media screen and (max-width: 480px) {\n  section.auth-section[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 0;\n    transform: translateX(-50%);\n    border: 10px solid #fff;\n    width: 100vw;\n    height: 100vh;\n  }\n  section.auth-section[_ngcontent-%COMP%]   button.button-back[_ngcontent-%COMP%] {\n    top: 5vh;\n    left: -10;\n    width: 50px;\n    height: 50px;\n    background-color: #fff;\n    border-top-right-radius: 50px;\n    border-bottom-right-radius: 50px;\n    -webkit-animation: scrollButton 2.5s ease-out;\n            animation: scrollButton 2.5s ease-out;\n    transition: 0.2s;\n    border: none;\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 40%;\n    transform: translate(-50%, -40%);\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n    text-align: center;\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 320px;\n    left: 50%;\n    transform: translateX(-50%);\n    margin-bottom: 3vh;\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input.bringForm[_ngcontent-%COMP%] {\n    -webkit-animation: bringForm 2s ease-out;\n            animation: bringForm 2s ease-out;\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    left: 50%;\n    transform: translateX(-50%);\n    border: 2px solid #fff;\n    padding: 0 20vw;\n    margin-top: 3vh;\n    margin-bottom: 5vh;\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   div.rota[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  section.auth-section[_ngcontent-%COMP%]   article.form[_ngcontent-%COMP%]   div.rota[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n    text-decoration: underline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2F1dGgvQzpcXFVzZXJzXFxBZHJpYVxcT25lRHJpdmVcXMOBcmVhIGRlIFRyYWJhbGhvXFxkZWxpdmVyeS1mb29kLWZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGF1dGhcXGF1dGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLDZDQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0FGO0FERUU7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNBSjtBREdFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2Q0FBQTtVQUFBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDREo7QURJRTtFQUNFLGtCQUFBO0FDRko7QURLRTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtBQ0hKO0FETUU7RUFDRSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQ0pKO0FETUk7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDSk47QURPSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0xOO0FETU07RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUNKUjtBRFFJO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTk47QURTSTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtBQ1BOO0FEU007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNQUjtBRFVNO0VBQ0UsMENBQUE7VUFBQSxrQ0FBQTtBQ1JSO0FEV007RUFDRSxZQUFBO0FDVFI7QURlQTtFQUNFO0lBQ0Usb0JBQUE7RUNaRjtFRGNBO0lBQ0UsZ0JBQUE7RUNaRjtBQUNGO0FETUE7RUFDRTtJQUNFLG9CQUFBO0VDWkY7RURjQTtJQUNFLGdCQUFBO0VDWkY7QUFDRjtBRGVBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLFVBQUE7RUNiRjtFRGVBO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VDYkY7QUFDRjtBREtBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLFVBQUE7RUNiRjtFRGVBO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VDYkY7QUFDRjtBRGdCQTtFQUdFO0lBQ0UsU0FBQTtJQUNBLE1BQUE7SUFDQSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUNoQkY7RURrQkU7SUFDRSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSw2QkFBQTtJQUNBLGdDQUFBO0lBQ0EsNkNBQUE7WUFBQSxxQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQ2hCSjtFRG1CRTtJQUNFLFNBQUE7SUFDQSxRQUFBO0lBQ0EsZ0NBQUE7RUNqQko7RURtQkk7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VDakJOO0VEb0JJO0lBQ0UsWUFBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtJQUNBLGtCQUFBO0VDbEJOO0VEb0JNO0lBQ0Usd0NBQUE7WUFBQSxnQ0FBQTtFQ2xCUjtFRHNCSTtJQUNFLFNBQUE7SUFDQSwyQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ3BCTjtFRHVCSTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQ3JCTjtFRHNCTTtJQUNFLFdBQUE7SUFDQSwwQkFBQTtFQ3BCUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnR2luc3RoaWVzJztcclxuICBzcmM6IGxvY2FsKCdHaW5zdGhpZXMnKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvR2luY2hpZXN0LnR0ZicpO1xyXG59XHJcblxyXG5zZWN0aW9uLmF1dGgtc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzB2aDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHdpZHRoOiA1NDBweDtcclxuICBoZWlnaHQ6IDUyMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNDA1YjtcclxuXHJcbiAgYnV0dG9uLmJ1dHRvbi1iYWNrIHtcclxuICAgIHRvcDogNXZoO1xyXG4gICAgbGVmdDogLTEwO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICAgIGFuaW1hdGlvbjogc2Nyb2xsQnV0dG9uIDEuNXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBidXR0b24uYnV0dG9uLWJhY2sge1xyXG4gICAgdG9wOiA1dmg7XHJcbiAgICBsZWZ0OiAtMTA7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYW5pbWF0aW9uOiBzY3JvbGxCdXR0b24gMS41cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIGFydGljbGUuZm9ybSwgbWF0LWZvcm0tZmllbGQsIGJ1dHRvbiwgYSwgYnV0dG9uLmJ1dHRvbi1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2luc3RoaWVzJztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBhcnRpY2xlLmZvcm0ge1xyXG4gICAgd2lkdGg6IDI4MnB4O1xyXG4gICAgdG9wOiA1dmg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2luc3RoaWVzJztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnJvdGEge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDAgN3Z3O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgIH1cclxuXHJcbiAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIG1hdC1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0LmJyaW5nRm9ybSB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBicmluZ0Zvcm0gMS41cyBlYXNlLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzY3JvbGxCdXR0b24ge1xyXG4gIGZyb20ge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMTAwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJyaW5nRm9ybSB7XHJcbiAgZnJvbSB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAxMDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcblxyXG4gIHNlY3Rpb24uYXV0aC1zZWN0aW9uIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBidXR0b24uYnV0dG9uLWJhY2sge1xyXG4gICAgICB0b3A6IDV2aDtcclxuICAgICAgbGVmdDogLTEwO1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGFuaW1hdGlvbjogc2Nyb2xsQnV0dG9uIDIuNXMgZWFzZS1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGFydGljbGUuZm9ybSB7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOiA0MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpO1xyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xyXG5cclxuICAgICAgICBpbnB1dC5icmluZ0Zvcm0ge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBicmluZ0Zvcm0gMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwdnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2LnJvdGEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdpbnN0aGllc1wiO1xuICBzcmM6IGxvY2FsKFwiR2luc3RoaWVzXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvR2luY2hpZXN0LnR0ZlwiKTtcbn1cbnNlY3Rpb24uYXV0aC1zZWN0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwdmg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogNTQwcHg7XG4gIGhlaWdodDogNTIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDQwNWI7XG59XG5zZWN0aW9uLmF1dGgtc2VjdGlvbiBidXR0b24uYnV0dG9uLWJhY2sge1xuICB0b3A6IDV2aDtcbiAgbGVmdDogLTEwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgYW5pbWF0aW9uOiBzY3JvbGxCdXR0b24gMS41cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYm9yZGVyOiBub25lO1xufVxuc2VjdGlvbi5hdXRoLXNlY3Rpb24gYnV0dG9uLmJ1dHRvbi1iYWNrIHtcbiAgdG9wOiA1dmg7XG4gIGxlZnQ6IC0xMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XG4gIGFuaW1hdGlvbjogc2Nyb2xsQnV0dG9uIDEuNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnNlY3Rpb24uYXV0aC1zZWN0aW9uIGFydGljbGUuZm9ybSwgc2VjdGlvbi5hdXRoLXNlY3Rpb24gbWF0LWZvcm0tZmllbGQsIHNlY3Rpb24uYXV0aC1zZWN0aW9uIGJ1dHRvbiwgc2VjdGlvbi5hdXRoLXNlY3Rpb24gYSwgc2VjdGlvbi5hdXRoLXNlY3Rpb24gYnV0dG9uLmJ1dHRvbi1iYWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuc2VjdGlvbi5hdXRoLXNlY3Rpb24gaDEge1xuICBmb250LWZhbWlseTogXCJHaW5zdGhpZXNcIjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbnNlY3Rpb24uYXV0aC1zZWN0aW9uIGFydGljbGUuZm9ybSB7XG4gIHdpZHRoOiAyODJweDtcbiAgdG9wOiA1dmg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG59XG5zZWN0aW9uLmF1dGgtc2VjdGlvbiBhcnRpY2xlLmZvcm0gaDIge1xuICBmb250LWZhbWlseTogXCJHaW5zdGhpZXNcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDNlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG59XG5zZWN0aW9uLmF1dGgtc2VjdGlvbiBhcnRpY2xlLmZvcm0gZGl2LnJvdGEge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuc2VjdGlvbi5hdXRoLXNlY3Rpb24gYXJ0aWNsZS5mb3JtIGRpdi5yb3RhIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5zZWN0aW9uLmF1dGgtc2VjdGlvbiBhcnRpY2xlLmZvcm0gYnV0dG9uIHtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmc6IDAgN3Z3O1xuICBtYXJnaW4tdG9wOiAzdmg7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbn1cbnNlY3Rpb24uYXV0aC1zZWN0aW9uIGFydGljbGUuZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbnNlY3Rpb24uYXV0aC1zZWN0aW9uIGFydGljbGUuZm9ybSBtYXQtZm9ybS1maWVsZCBtYXQtbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbnNlY3Rpb24uYXV0aC1zZWN0aW9uIGFydGljbGUuZm9ybSBtYXQtZm9ybS1maWVsZCBpbnB1dC5icmluZ0Zvcm0ge1xuICBhbmltYXRpb246IGJyaW5nRm9ybSAxLjVzIGVhc2Utb3V0O1xufVxuc2VjdGlvbi5hdXRoLXNlY3Rpb24gYXJ0aWNsZS5mb3JtIG1hdC1mb3JtLWZpZWxkIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIHNjcm9sbEJ1dHRvbiB7XG4gIGZyb20ge1xuICAgIHBhZGRpbmc6IDAgMCAwIDEwMHB4O1xuICB9XG4gIHRvIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJyaW5nRm9ybSB7XG4gIGZyb20ge1xuICAgIHBhZGRpbmc6IDAgMCAwIDEwMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgc2VjdGlvbi5hdXRoLXNlY3Rpb24ge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIHNlY3Rpb24uYXV0aC1zZWN0aW9uIGJ1dHRvbi5idXR0b24tYmFjayB7XG4gICAgdG9wOiA1dmg7XG4gICAgbGVmdDogLTEwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xuICAgIGFuaW1hdGlvbjogc2Nyb2xsQnV0dG9uIDIuNXMgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgc2VjdGlvbi5hdXRoLXNlY3Rpb24gYXJ0aWNsZS5mb3JtIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA0MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQwJSk7XG4gIH1cbiAgc2VjdGlvbi5hdXRoLXNlY3Rpb24gYXJ0aWNsZS5mb3JtIGgyIHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBzZWN0aW9uLmF1dGgtc2VjdGlvbiBhcnRpY2xlLmZvcm0gbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcbiAgfVxuICBzZWN0aW9uLmF1dGgtc2VjdGlvbiBhcnRpY2xlLmZvcm0gbWF0LWZvcm0tZmllbGQgaW5wdXQuYnJpbmdGb3JtIHtcbiAgICBhbmltYXRpb246IGJyaW5nRm9ybSAycyBlYXNlLW91dDtcbiAgfVxuICBzZWN0aW9uLmF1dGgtc2VjdGlvbiBhcnRpY2xlLmZvcm0gYnV0dG9uIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZzogMCAyMHZ3O1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIH1cbiAgc2VjdGlvbi5hdXRoLXNlY3Rpb24gYXJ0aWNsZS5mb3JtIGRpdi5yb3RhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgc2VjdGlvbi5hdXRoLXNlY3Rpb24gYXJ0aWNsZS5mb3JtIGRpdi5yb3RhIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59Il19 */"] });
    return RegisterComponent;
})();



/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Services/auth.service */ "./src/app/shared/Services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/register"]; };
const _c2 = function () { return ["/login"]; };
let HeaderComponent = /*@__PURE__*/ (() => {
    class HeaderComponent {
        constructor(authService) {
            this.authService = authService;
        }
        ngOnInit() {
        }
    }
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 59, vars: 11, consts: [[1, "header-text"], [1, "d-flex"], [1, "p-2"], ["href", ""], [1, "direita", "p-2"], [3, "routerLink"], [1, "esquerda", "p-2"], [1, "user-section"], [1, "d-flex", "justify-content-end"], [1, "fas", "fa-user-circle"], [1, "menu-mobile"], ["appMenu", "matMenu"], [1, "buttons-mobile"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "routerLink"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "fas", "fa-bars", "fa-lg"]], template: function HeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nosso Tempero");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ofertas do Dia");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Os Mais Pedidos");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nossa Marca");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fale Conosco");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Card\u00E1pio");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ol\u00E1, Usu\u00E1rio ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "u");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Register");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "u");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Login");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Logout");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-menu", null, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ofertas do Dia");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Os Mais Pedidos");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Fale Conosco");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Card\u00E1pio");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Register");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Login");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Logout");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"]], styles: ["@font-face {\n  font-family: \"Ginsthies\";\n  src: local(\"Ginsthies\"), url('Ginchiest.ttf');\n}\n@font-face {\n  font-family: \"BlackWay\";\n  src: local(\"BlackWay\"), url('BlackWay.otf');\n}\nsection[_ngcontent-%COMP%] {\n  position: relative;\n  height: 20vh;\n  border: 10px solid #FFF;\n  border-bottom: none;\n  background-color: #001219;\n}\nsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n  top: 4vh;\n  font-family: \"Ginsthies\";\n  font-size: 4em;\n}\nsection[_ngcontent-%COMP%]   div.header-text[_ngcontent-%COMP%] {\n  display: none;\n}\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  right: 15%;\n  bottom: 48.5%;\n  font-family: \"BlackWay\";\n  font-size: 5em;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  right: 26%;\n  bottom: 60%;\n}\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"BlackWay\";\n  position: absolute;\n}\nsection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nsection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\nsection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFF;\n  text-decoration: underline;\n}\nsection[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 5vh;\n  margin-left: -8vw;\n}\nsection[_ngcontent-%COMP%]   button.order[_ngcontent-%COMP%] {\n  border: 2px solid #FFF;\n  width: 275px;\n  height: 76px;\n  color: #FFF;\n  position: absolute;\n  bottom: 30%;\n  right: 20%;\n  background-color: transparent;\n}\nsection[_ngcontent-%COMP%]   button.scroll[_ngcontent-%COMP%] {\n  height: 145px;\n  width: 135px;\n  position: absolute;\n  bottom: 9px;\n  right: 9px;\n  border-top-left-radius: 25px;\n  border: none;\n  outline: none;\n  background-color: #FFF;\n  cursor: pointer;\n  -webkit-animation: scrollButton 2.5s ease-out;\n          animation: scrollButton 2.5s ease-out;\n}\nsection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\nsection[_ngcontent-%COMP%]   div.menu-mobile[_ngcontent-%COMP%] {\n  display: none;\n  width: 45px;\n}\n@-webkit-keyframes scrollButton {\n  from {\n    padding-bottom: 100px;\n  }\n  to {\n    padding-bottom: 0;\n  }\n}\n@keyframes scrollButton {\n  from {\n    padding-bottom: 100px;\n  }\n  to {\n    padding-bottom: 0;\n  }\n}\n@media screen and (max-width: 480px) {\n  section[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: 20%;\n  }\n  section[_ngcontent-%COMP%]   div.header-text[_ngcontent-%COMP%] {\n    display: block;\n  }\n  section[_ngcontent-%COMP%]   div.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3em;\n    text-align: center;\n    position: relative;\n    top: 10vh;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  section[_ngcontent-%COMP%]   div.menu-mobile[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    left: 85%;\n    top: 5vh;\n  }\n  section[_ngcontent-%COMP%]   div.menu-mobile[_ngcontent-%COMP%]   div.buttons-mobile[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  section[_ngcontent-%COMP%]   div.user-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n  section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    border: 1px solid red;\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9DOlxcVXNlcnNcXEFkcmlhXFxPbmVEcml2ZVxcw4FyZWEgZGUgVHJhYmFsaG9cXGRlbGl2ZXJ5LWZvb2QtZnJvbnRlbmQvc3JjXFxhcHBcXHNoYXJlZFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSw2Q0FBQTtBQ0NGO0FERUE7RUFDRSx1QkFBQTtFQUNBLDJDQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0RGO0FER0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtBQ0ZKO0FES0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0hKO0FETUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0pKO0FET0U7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FDTEo7QURTRTtFQUNFLGdCQUFBO0FDUEo7QURRSTtFQUNFLGlCQUFBO0FDTk47QURPTTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQ0xSO0FEVUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFdFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUNUSjtBRFlFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7QUNWSjtBRGFFO0VBQ0UsY0FBQTtBQ1hKO0FEY0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ1pKO0FEZ0JBO0VBQ0U7SUFDRSxxQkFBQTtFQ2JGO0VEZUE7SUFDRSxpQkFBQTtFQ2JGO0FBQ0Y7QURPQTtFQUNFO0lBQ0UscUJBQUE7RUNiRjtFRGVBO0lBQ0UsaUJBQUE7RUNiRjtBQUNGO0FEZ0JBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VDZEY7RURnQkU7SUFDRyxjQUFBO0VDZEw7RURlSztJQUNDLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtFQ2JOO0VEaUJFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7RUNmSjtFRGlCSTtJQUNFLGtCQUFBO0VDZk47RURvQkU7SUFDRSxhQUFBO0VDbEJKO0VEcUJFO0lBQ0UscUJBQUE7SUFDQSxhQUFBO0VDbkJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnR2luc3RoaWVzJztcclxuICBzcmM6IGxvY2FsKCdHaW5zdGhpZXMnKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvR2luY2hpZXN0LnR0ZicpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0JsYWNrV2F5JztcclxuICBzcmM6IGxvY2FsKCdCbGFja1dheScpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9CbGFja1dheS5vdGYnKTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjB2aDtcclxuICBib3JkZXI6IDEwcHggc29saWQgI0ZGRjtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDEyMTk7XHJcblxyXG4gIGgxIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNHZoO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaW5zdGhpZXMnO1xyXG4gICAgZm9udC1zaXplOiA0ZW07XHJcbiAgfVxyXG5cclxuICBkaXYuaGVhZGVyLXRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIHJpZ2h0OiAxNSU7XHJcbiAgICBib3R0b206IDQ4LjUlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCbGFja1dheSc7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIHJpZ2h0OiAyNiU7XHJcbiAgICBib3R0b206IDYwJTtcclxuICB9XHJcblxyXG4gIGgyLCBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0JsYWNrV2F5JztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTh2dztcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5vcmRlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGO1xyXG4gICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgaGVpZ2h0OiA3NnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDMwJTtcclxuICAgIHJpZ2h0OiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5zY3JvbGwge1xyXG4gICAgaGVpZ2h0OiAxNDVweDtcclxuICAgIHdpZHRoOiAxMzVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogOXB4O1xyXG4gICAgcmlnaHQ6IDlweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGFuaW1hdGlvbjogc2Nyb2xsQnV0dG9uIDIuNXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICBidXR0b24gaSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcblxyXG4gIGRpdi5tZW51LW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjcm9sbEJ1dHRvbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcblxyXG4gICAgZGl2LmhlYWRlci10ZXh0IHtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAxMHZoO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICB9XHJcbiAgIH1cclxuXHJcbiAgICBkaXYubWVudS1tb2JpbGUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA4NSU7XHJcbiAgICAgIHRvcDogNXZoO1xyXG5cclxuICAgICAgZGl2LmJ1dHRvbnMtbW9iaWxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnVzZXItc2VjdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwNykge1xyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMCkge1xyXG5cclxufVxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR2luc3RoaWVzXCI7XG4gIHNyYzogbG9jYWwoXCJHaW5zdGhpZXNcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9HaW5jaGllc3QudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrV2F5XCI7XG4gIHNyYzogbG9jYWwoXCJCbGFja1dheVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL0JsYWNrV2F5Lm90ZlwiKTtcbn1cbnNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjB2aDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICNGRkY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDEyMTk7XG59XG5zZWN0aW9uIGgxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDR2aDtcbiAgZm9udC1mYW1pbHk6IFwiR2luc3RoaWVzXCI7XG4gIGZvbnQtc2l6ZTogNGVtO1xufVxuc2VjdGlvbiBkaXYuaGVhZGVyLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuc2VjdGlvbiBoMiB7XG4gIHJpZ2h0OiAxNSU7XG4gIGJvdHRvbTogNDguNSU7XG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrV2F5XCI7XG4gIGZvbnQtc2l6ZTogNWVtO1xufVxuc2VjdGlvbiBoMyB7XG4gIHJpZ2h0OiAyNiU7XG4gIGJvdHRvbTogNjAlO1xufVxuc2VjdGlvbiBoMiwgc2VjdGlvbiBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrV2F5XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbnNlY3Rpb24gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuc2VjdGlvbiB1bCBsaSB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuc2VjdGlvbiB1bCBsaSBhIHtcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuc2VjdGlvbiBuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBtYXJnaW4tbGVmdDogLTh2dztcbn1cbnNlY3Rpb24gYnV0dG9uLm9yZGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcbiAgd2lkdGg6IDI3NXB4O1xuICBoZWlnaHQ6IDc2cHg7XG4gIGNvbG9yOiAjRkZGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzAlO1xuICByaWdodDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbnNlY3Rpb24gYnV0dG9uLnNjcm9sbCB7XG4gIGhlaWdodDogMTQ1cHg7XG4gIHdpZHRoOiAxMzVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDlweDtcbiAgcmlnaHQ6IDlweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFuaW1hdGlvbjogc2Nyb2xsQnV0dG9uIDIuNXMgZWFzZS1vdXQ7XG59XG5zZWN0aW9uIGJ1dHRvbiBpIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5zZWN0aW9uIGRpdi5tZW51LW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiA0NXB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNjcm9sbEJ1dHRvbiB7XG4gIGZyb20ge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxuICB0byB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxuICBzZWN0aW9uIGRpdi5oZWFkZXItdGV4dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgc2VjdGlvbiBkaXYuaGVhZGVyLXRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHZoO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cbiAgc2VjdGlvbiBkaXYubWVudS1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA4NSU7XG4gICAgdG9wOiA1dmg7XG4gIH1cbiAgc2VjdGlvbiBkaXYubWVudS1tb2JpbGUgZGl2LmJ1dHRvbnMtbW9iaWxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgc2VjdGlvbiBkaXYudXNlci1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIHNlY3Rpb24gbmF2IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"] });
    return HeaderComponent;
})();



/***/ }),

/***/ "./src/app/shared/main-page/main-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/main-page/main-page.component.ts ***!
  \*********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



let MainPageComponent = /*@__PURE__*/ (() => {
    class MainPageComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
    MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 9, vars: 0, consts: [["mat-button", "", 1, "order"], [1, "scroll"], [1, "fas", "fa-long-arrow-alt-down"]], template: function MainPageComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nossa Marca");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ofertas Especiais");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fazer Pedido");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: ["@font-face {\n  font-family: \"BlackWay\";\n  src: local(\"BlackWay\"), url('BlackWay.otf');\n}\nsection[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: 10px solid #FFF;\n  background-image: url('fundo-frango.jpg');\n  background-size: cover;\n  transition: 0.5s;\n}\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  right: 15%;\n  bottom: 48.5%;\n  font-family: \"BlackWay\";\n  font-size: 5em;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 3em;\n  right: 26%;\n  bottom: 60%;\n}\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  position: relative;\n  width: 30%;\n  text-align: center;\n  left: 58%;\n  font-family: \"BlackWay\";\n  position: absolute;\n}\nsection[_ngcontent-%COMP%]   button.order[_ngcontent-%COMP%] {\n  border: 2px solid #FFF;\n  width: 275px;\n  height: 76px;\n  color: #FFF;\n  position: absolute;\n  bottom: 30%;\n  right: 20%;\n  background-color: transparent;\n}\nsection[_ngcontent-%COMP%]   button.scroll[_ngcontent-%COMP%] {\n  height: 145px;\n  width: 135px;\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  border-top-left-radius: 25px;\n  border: none;\n  outline: none;\n  background-color: #FFF;\n  cursor: pointer;\n  -webkit-animation: scrollButton 2.5s ease-out;\n          animation: scrollButton 2.5s ease-out;\n}\nsection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n@-webkit-keyframes scrollButton {\n  from {\n    padding-bottom: 100px;\n  }\n  to {\n    padding-bottom: 0;\n  }\n}\n@keyframes scrollButton {\n  from {\n    padding-bottom: 100px;\n  }\n  to {\n    padding-bottom: 0;\n  }\n}\n@media screen and (max-width: 480px) {\n  section[_ngcontent-%COMP%] {\n    background-image: url('fundo-pratos.jpg');\n    background-position: center;\n  }\n  section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    top: 40%;\n    left: 50%;\n    transform: translate(-50%, -40%);\n  }\n  section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3.2em;\n  }\n  section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    display: none;\n  }\n  section[_ngcontent-%COMP%]   button.order[_ngcontent-%COMP%] {\n    position: relative;\n    top: 55vh;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  section[_ngcontent-%COMP%]   button.scroll[_ngcontent-%COMP%] {\n    bottom: -2px;\n    left: 50%;\n    width: 74px;\n    height: 52px;\n    transform: translateX(-50%);\n    border-top-left-radius: 50px;\n    border-top-right-radius: 50px;\n  }\n  section[_ngcontent-%COMP%]   button.scroll[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21haW4tcGFnZS9DOlxcVXNlcnNcXEFkcmlhXFxPbmVEcml2ZVxcw4FyZWEgZGUgVHJhYmFsaG9cXGRlbGl2ZXJ5LWZvb2QtZnJvbnRlbmQvc3JjXFxhcHBcXHNoYXJlZFxcbWFpbi1wYWdlXFxtYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSwyQ0FBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNBSjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQ0hKO0FETUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7VUFBQSxxQ0FBQTtBQ0pKO0FET0U7RUFDRSxjQUFBO0FDTEo7QURTQTtFQUNFO0lBQ0UscUJBQUE7RUNORjtFRFFBO0lBQ0UsaUJBQUE7RUNORjtBQUNGO0FEQUE7RUFDRTtJQUNFLHFCQUFBO0VDTkY7RURRQTtJQUNFLGlCQUFBO0VDTkY7QUFDRjtBRFNBO0VBQ0U7SUFDRSx5Q0FBQTtJQUNBLDJCQUFBO0VDUEY7RURTRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsZ0NBQUE7RUNQSjtFRFVFO0lBQ0UsZ0JBQUE7RUNSSjtFRFdFO0lBQ0UsYUFBQTtFQ1RKO0VEWUU7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7RUNWSjtFRGFFO0lBQ0UsWUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtFQ1hKO0VEYUk7SUFDRSxnQkFBQTtFQ1hOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2tXYXknO1xyXG4gIHNyYzogbG9jYWwoJ0JsYWNrV2F5JyksIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL0JsYWNrV2F5Lm90ZicpO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjRkZGO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mdW5kby1mcmFuZ28uanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG5cclxuICBoMiB7XHJcbiAgICByaWdodDogMTUlO1xyXG4gICAgYm90dG9tOiA0OC41JTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmxhY2tXYXknO1xyXG4gICAgZm9udC1zaXplOiA1ZW07XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIHJpZ2h0OiAyNiU7XHJcbiAgICBib3R0b206IDYwJTtcclxuICB9XHJcblxyXG4gIGgyLCBoMyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGVmdDogNTglO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCbGFja1dheSc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ub3JkZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcclxuICAgIHdpZHRoOiAyNzVweDtcclxuICAgIGhlaWdodDogNzZweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzMCU7XHJcbiAgICByaWdodDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBidXR0b24uc2Nyb2xsIHtcclxuICAgIGhlaWdodDogMTQ1cHg7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhbmltYXRpb246IHNjcm9sbEJ1dHRvbiAyLjVzIGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIGkge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjcm9sbEJ1dHRvbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mdW5kby1wcmF0b3MuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0b3A6IDQwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDAlKTtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMy4yZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5vcmRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiA1NXZoO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24uc2Nyb2xsIHtcclxuICAgICAgYm90dG9tOiAtMnB4O1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDA3KSB7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTIwKSB7XHJcblxyXG59XHJcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJCbGFja1dheVwiO1xuICBzcmM6IGxvY2FsKFwiQmxhY2tXYXlcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9CbGFja1dheS5vdGZcIik7XG59XG5zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDEwcHggc29saWQgI0ZGRjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mdW5kby1mcmFuZ28uanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuc2VjdGlvbiBoMiB7XG4gIHJpZ2h0OiAxNSU7XG4gIGJvdHRvbTogNDguNSU7XG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrV2F5XCI7XG4gIGZvbnQtc2l6ZTogNWVtO1xufVxuc2VjdGlvbiBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzZW07XG4gIHJpZ2h0OiAyNiU7XG4gIGJvdHRvbTogNjAlO1xufVxuc2VjdGlvbiBoMiwgc2VjdGlvbiBoMyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZWZ0OiA1OCU7XG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrV2F5XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbnNlY3Rpb24gYnV0dG9uLm9yZGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcbiAgd2lkdGg6IDI3NXB4O1xuICBoZWlnaHQ6IDc2cHg7XG4gIGNvbG9yOiAjRkZGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzAlO1xuICByaWdodDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbnNlY3Rpb24gYnV0dG9uLnNjcm9sbCB7XG4gIGhlaWdodDogMTQ1cHg7XG4gIHdpZHRoOiAxMzVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFuaW1hdGlvbjogc2Nyb2xsQnV0dG9uIDIuNXMgZWFzZS1vdXQ7XG59XG5zZWN0aW9uIGJ1dHRvbiBpIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbkBrZXlmcmFtZXMgc2Nyb2xsQnV0dG9uIHtcbiAgZnJvbSB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG4gIHRvIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mdW5kby1wcmF0b3MuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuICBzZWN0aW9uIGgyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpO1xuICB9XG4gIHNlY3Rpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMy4yZW07XG4gIH1cbiAgc2VjdGlvbiBoMyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBzZWN0aW9uIGJ1dHRvbi5vcmRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTV2aDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG4gIHNlY3Rpb24gYnV0dG9uLnNjcm9sbCB7XG4gICAgYm90dG9tOiAtMnB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogNzRweDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XG4gIH1cbiAgc2VjdGlvbiBidXR0b24uc2Nyb2xsIGkge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbn0iXX0= */"] });
    return MainPageComponent;
})();



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
const environment = {
    production: false,
    URL: ''
};



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Adria\OneDrive\Área de Trabalho\delivery-food-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map