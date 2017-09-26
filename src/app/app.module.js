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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
var script_service_1 = require('./services/script.service');
var auth_guard_1 = require('./auth.guard');
var app_component_1 = require('./app.component');
var login_component_1 = require('./login.component');
var contracts_component_1 = require('./contracts.component');
var history_component_1 = require('./history.component');
var history_detail_component_1 = require('./history-detail.component');
var knowledge_component_1 = require('./knowledge.component');
var knowledge_detail_component_1 = require('./knowledge-detail.component');
var main_component_1 = require('./main.component');
var scheduler_component_1 = require('./scheduler.component');
var notfound_component_1 = require('./notfound.component');
var auth_service_1 = require("./services/auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                contracts_component_1.ContractsComponent,
                history_component_1.HistoryComponent,
                history_detail_component_1.HistoryDetailComponent,
                knowledge_component_1.KnowledgeComponent,
                knowledge_detail_component_1.KnowledgeDetailComponent,
                main_component_1.MainComponent,
                scheduler_component_1.SchedulerComponent,
                notfound_component_1.NotfoundComponent
            ],
            providers: [
                script_service_1.ScriptService,
                auth_guard_1.AuthGuard,
                auth_service_1.AuthService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map