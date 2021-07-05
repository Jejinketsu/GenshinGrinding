import { Request, Response, NextFunction } from 'express';
import HTTPException from '../exceptions/HttpExceptions';
import logger from '../../logger';

function ErrorHandler(error: HTTPException, request: Request, response: Response, next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";

    logger.error(error);

    return response.status(status).send({status, message});
}

export default ErrorHandler;