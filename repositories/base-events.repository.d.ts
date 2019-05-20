import { Model, Document } from 'mongoose';
import { IEvent } from '@nestjs/cqrs';
export declare class BaseEventsRepository<T extends Document> {
    readonly model: Model<T>;
    constructor(model: Model<T>);
    findMany(query: Partial<T>, skip?: number, limit?: number): Promise<T[]>;
    save(entityId: string, event: IEvent): Promise<T>;
}
