var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var Parser = (function () {
    function Parser() {
    }
    Parser.prototype.formatNumber = function (number) {
        if (number == null)
            return null;
        else if (number.indexOf('+1') == 0)
            number = number.substring(2);
        else if (number.indexOf('1') == 0)
            number = number.substring(1);
        var number2 = ("" + number).replace(/\D/g, '');
        var m = number2.match(/^(\d{3})(\d{3})(\d{4})$/);
        return (!m) ? null : '(' + m[1] + ') ' + m[2] + '-' + m[3];
    };
    Parser.prototype.unFormatNumber = function (number) {
        var number2 = ("" + number).replace(/\D/g, '');
        var m = number2.match(/^(\d{3})(\d{3})(\d{4})$/);
        return (!m) ? null : m[1] + m[2] + m[3];
    };
    return Parser;
}());
Parser = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], Parser);
export { Parser };
//# sourceMappingURL=parser.js.map