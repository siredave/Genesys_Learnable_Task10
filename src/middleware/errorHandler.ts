import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error & { statusCode?: number }, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    statusCode,
  });
};

export default errorHandler;
