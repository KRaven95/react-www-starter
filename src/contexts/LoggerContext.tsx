import { ReactNode, createContext, useContext } from "react";
import winston, { format, transports } from "winston";
import WinstonPapertrail from "winston-papertrail";

const papertrailTransport = new WinstonPapertrail({
  host: "your.papertrail.host",
  port: 12345, // Replace with your Papertrail port
  colorize: true
});

const logger = winston.createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [new transports.Console(), papertrailTransport]
});

interface LogContextValue {
  log: (data: any) => void;
}

interface ILogProvider {
  children: ReactNode;
}

const LogContext = createContext(null as any);

export const LogProvider = ({ children }: ILogProvider) => {
  const log = (data: any) => {
    const stringified = JSON.stringify(data);
    logger.info(stringified);
  };

  const contextValue: LogContextValue = { log };

  return <LogContext.Provider value={contextValue}>{children}</LogContext.Provider>;
};

export const useLog = (): LogContextValue => {
  const context = useContext(LogContext);

  if (!context) {
    throw new Error("useLog must be used within a LogProvider");
  }

  return context;
};
