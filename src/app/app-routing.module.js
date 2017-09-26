"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var contracts_component_1 = require('./contracts.component');
var history_component_1 = require('./history.component');
var history_detail_component_1 = require('./history-detail.component');
var knowledge_component_1 = require('./knowledge.component');
var knowledge_detail_component_1 = require('./knowledge-detail.component');
var main_component_1 = require('./main.component');
var scheduler_component_1 = require('./scheduler.component');
var notfound_component_1 = require('./notfound.component');
var auth_guard_1 = require('./auth.guard');
var routes = [
    { path: '', component: main_component_1.MainComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'contracts', component: contracts_component_1.ContractsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'history', component: history_component_1.HistoryComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'history/:id', component: history_detail_component_1.HistoryDetailComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'knowledge', component: knowledge_component_1.KnowledgeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'knowledge/:id', component: knowledge_detail_component_1.KnowledgeDetailComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'scheduler', component: scheduler_component_1.SchedulerComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: notfound_component_1.NotfoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map