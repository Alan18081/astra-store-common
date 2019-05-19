"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.BaseEventSchema = new mongoose_1.Schema({
    entityId: String,
    createdAt: Date,
    version: Number,
    data: Object,
    type: String,
});
