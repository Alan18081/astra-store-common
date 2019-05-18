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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../enums");
class BaseEvent {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    typeorm_1.ObjectIdColumn(),
    class_transformer_1.Transform(value => value.toString()),
    __metadata("design:type", String)
], BaseEvent.prototype, "_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BaseEvent.prototype, "entityId", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], BaseEvent.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Generated('increment'),
    __metadata("design:type", Number)
], BaseEvent.prototype, "version", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Object)
], BaseEvent.prototype, "data", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BaseEvent.prototype, "type", void 0);
exports.BaseEvent = BaseEvent;
