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
    const method = controller[methodName];
    try {
      await method(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
