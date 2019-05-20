"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
class InvalidAgeException extends microservices_1.RpcException {
    constructor(message) {
        super(message);
    }
}
exports.InvalidAgeException = InvalidAgeException;
