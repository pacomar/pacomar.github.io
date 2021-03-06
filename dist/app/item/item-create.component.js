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
var angularfire2_1 = require('angularfire2');
var ItemCreateComponent = (function () {
    function ItemCreateComponent(af) {
        this.items = af.database.list('/items');
    }
    ItemCreateComponent.prototype.save = function (newName, newPriority) {
        this.items.push({ name: newName, priority: newPriority });
    };
    ItemCreateComponent = __decorate([
        core_1.Component({
            selector: 'item-create',
            templateUrl: 'app/item/item-create.component.html',
            styleUrls: ['app/item/item-create.component.css']
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], ItemCreateComponent);
    return ItemCreateComponent;
}());
exports.ItemCreateComponent = ItemCreateComponent;
//# sourceMappingURL=item-create.component.js.map