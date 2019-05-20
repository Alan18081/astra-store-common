import { RpcException } from '@nestjs/microservices';
export declare class UserNotFound extends RpcException {
    constructor(message: any);
}
