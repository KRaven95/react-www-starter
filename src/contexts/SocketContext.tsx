import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";

interface SocketContextValue {
  sendMessage: (message: string) => void;
  receivedMessage: string | null;
}

const SocketContext = createContext(null as any);

interface SocketProviderProps {
  url: string;
  children: ReactNode;
}

export function SocketProvider({ url, children }: SocketProviderProps) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const messageRef = useRef<string | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.addEventListener("open", () => {
      setSocket(ws);
      setIsConnected(true);
    });

    ws.addEventListener("message", (event) => {
      messageRef.current = event.data;
    });

    ws.addEventListener("close", () => {
      setSocket(null);
      setIsConnected(false);
    });

    return () => {
      ws.close();
    };
  }, [url]);

  const sendMessage = (message: string) => {
    if (socket && isConnected) {
      socket.send(message);
    }
  };

  const contextValue: SocketContextValue = {
    sendMessage,
    receivedMessage: messageRef.current
  };

  return <SocketContext.Provider value={contextValue}>{children}</SocketContext.Provider>;
}

export function useSocket() {
  const context: SocketContextValue = useContext(SocketContext);

  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }

  return context;
}
