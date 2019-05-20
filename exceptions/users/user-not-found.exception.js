"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
class UserNotFound extends microservices_1.RpcException {
    constructor(message) {
        super(message);
    }
}
exports.UserNotFound = UserNotFound;
