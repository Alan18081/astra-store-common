"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BaseEventsRepository {
    constructor(model) {
        this.model = model;
    }
    findMany(query, skip = 0, limit = 10) {
        return this.model.find(query).skip(skip).limit(limit).exec();
    }
    save(entityId, event) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastEvent = yield this.model.find({}).sort({ revision: -1 }).limit(1);
            let revision = 0;
            if (lastEvent) {
                revision = lastEvent.revision + 1;
            }
            const entity = new this.model({
                data: event,
                entityId,
                timestamp: new Date().getTime(),
                revision,
            });
            return entity.save();
        });
    }
}
exports.BaseEventsRepository = BaseEventsRepository;
