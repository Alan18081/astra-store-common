"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const services_1 = require("../services");
const config = new services_1.ConfigService(`${process.env.NODE_ENV}.env`);
exports.createClientOptions = (queue) => ({
    transport: microservices_1.Transport.RMQ,
    options: {
        urls: [config.get('RABBIT_URL')],
        queue,
        queueOptions: { durable: false }
    },
});
