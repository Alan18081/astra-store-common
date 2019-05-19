import { EventsCodes } from '../enums';
export declare class BaseEvent {
    _id: string;
    entityId: string;
    createdAt: Date;
    version: number;
    data: object;
    type: EventsCodes;
}
