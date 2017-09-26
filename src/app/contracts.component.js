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
var ContractsComponent = (function () {
    function ContractsComponent() {
        this.contracts = {};
        this.contracts = [
            {
                title: "Договор 1!",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut blanditiis commodi, inventore laudantium magnam molestiae, nemo nobis odit pariatur perferendis possimus quae quo repellat reprehenderit sint sunt tempore! Quia!"
            },
            {
                title: "Договоры на все случаи жизни!",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut blanditiis commodi, inventore laudantium magnam molestiae, nemo nobis odit pariatur perferendis possimus quae quo repellat reprehenderit sint sunt tempore! Quia!"
            },
            {
                title: "Договор 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut blanditiis commodi, inventore laudantium magnam molestiae, nemo nobis odit pariatur perferendis possimus quae quo repellat reprehenderit sint sunt tempore! Quia!"
            }
        ];
    }
    ContractsComponent = __decorate([
        core_1.Component({
            selector: 'contracts',
            templateUrl: './html/contracts.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ContractsComponent);
    return ContractsComponent;
}());
exports.ContractsComponent = ContractsComponent;
//# sourceMappingURL=contracts.component.js.map