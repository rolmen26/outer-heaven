import {
  createLogger,
  format,
  transports,
  Logger as WinstonLogger,
} from "winston";
import * as path from "path";

class Logger {
  private logger: WinstonLogger;

  constructor() {
    this.logger = createLogger({
      level: "info",
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level}]: ${message}`;
        })
      ),
      transports: [
        new transports.Console(),
        new transports.File({
          filename: path.join("storage", "logs", "error.log"),
          level: "error",
        }),
        new transports.File({
          filename: path.join("storage", "logs", "combined.log"),
        }),
      ],
    });
  }

  public info(message: string): void {
    this.logger.info(message);
  }

  public warn(message: string): void {
    this.logger.warn(message);
  }

  public error(message: string): void {
    this.logger.error(message);
  }
}

export default Logger;
