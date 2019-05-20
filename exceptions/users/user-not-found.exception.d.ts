import { RpcException } from '@nestjs/microservices';
export declare class UserNotFoundException extends RpcException {
    constructor(message: any);
}
