export interface EventStoreMessage {
    streamId: string;
    eventId: string;
    eventNumber: string;
    eventType: string;
    created: Date;
    metadata: object;
    isJson: boolean;
    data: object;
}
