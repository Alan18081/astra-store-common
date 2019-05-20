"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseEventsRepository {
    constructor(model) {
        this.model = model;
    }
    findMany(query, skip = 0, limit = 10) {
        return this.model.find(query).skip(skip).limit(limit).exec();
    }
    save(event) {
        const entity = new this.model(event);
        return entity.save();
    }
}
exports.BaseEventsRepository = BaseEventsRepository;
