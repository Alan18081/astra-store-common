import { TCPClient, TCPConfig } from 'geteventstore-promise';
export declare class EventStore {
    private readonly type;
    private readonly eventFactory;
    private client;
    constructor();
    connect(config: TCPConfig): EventStore;
    getClient(): TCPClient;
    newEvent(entityId: string, name: string, event: any): import("geteventstore-promise").NewEvent;
    close(): EventStore;
}
