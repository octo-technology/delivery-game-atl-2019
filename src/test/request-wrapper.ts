import { FastifyAdapter } from '@nestjs/platform-fastify';
import { app } from '../step_definitions/hooks';

export enum RequestMethod {
    PUT = 'put',
    POST = 'post',
    GET = 'get',
}

export class RequestWrapper<T> {
    responseStatus: number = 0;
    responseBody?: T | Array<T> = undefined;

    constructor(private method: RequestMethod, private endpoint: string) {
    }

    async send(payloadSend?: unknown, headers?: object): Promise<void> {
        const { statusCode, payload } = await (app.getHttpAdapter() as FastifyAdapter).inject({
            method: this.method,
            url: this.endpoint,
            payload: payloadSend,
            headers,
        });
        this.responseStatus = statusCode;
        try {
            this.responseBody = JSON.parse(payload);
        } catch (error) {
            this.responseBody = undefined;
        }
    }
}
