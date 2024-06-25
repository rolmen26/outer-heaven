import { Request, Response, NextFunction } from "express";
import container from "../providers/app-provider";

type ControllerFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export default function handleRequest(
  controllerName: string,
  methodName: string = "handle"
): ControllerFunction {
  return async (req: Request, res: Response, next: NextFunction) => {
    const controller = container.resolve(controllerName);
    try {
      await controller[methodName](req, res);
    } catch (error) {
      next(error);
    }
  };
}
