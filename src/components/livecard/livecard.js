var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var LivecardComponent = (function () {
    function LivecardComponent() {
        this.editing = false;
        console.log('Hello LivecardComponent Component');
    }
    LivecardComponent.prototype.ngOnInit = function () {
    };
    return LivecardComponent;
}());
__decorate([
    Input('first_name'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "first_name", void 0);
__decorate([
    Input('last_name'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "last_name", void 0);
__decorate([
    Input('middle_initial'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "middle_initial", void 0);
__decorate([
    Input('picture'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "picture", void 0);
__decorate([
    Input('company'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "company", void 0);
__decorate([
    Input('email'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "email", void 0);
__decorate([
    Input('phone'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "phone", void 0);
__decorate([
    Input('notes'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "notes", void 0);
LivecardComponent = __decorate([
    Component({
        selector: 'livecard',
        templateUrl: 'livecard.html'
    }),
    __metadata("design:paramtypes", [])
], LivecardComponent);
export { LivecardComponent };
//# sourceMappingURL=livecard.js.map