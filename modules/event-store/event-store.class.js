"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const geteventstore_promise_1 = require("geteventstore-promise");
class EventStore {
    constructor() {
        this.type = 'event-store';
        this.eventFactory = new geteventstore_promise_1.EventFactory();
    }
    connect(config) {
        this.client = new geteventstore_promise_1.TCPClient(config);
        return this;
    }
    getClient() {
        return this.client;
    }
    newEvent(entityId, name, event) {
        return this.eventFactory.newEvent(name, event, null, entityId);
    }
    close() {
        return this.client.close();
    }
}
exports.EventStore = EventStore;
