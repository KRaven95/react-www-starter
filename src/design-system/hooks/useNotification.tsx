import { useState, useEffect } from "react";

type NotificationOptions = {
  title: string;
  body: string;
  icon: string;
  requireInteraction: boolean;
};

type PermissionStatus = "default" | "granted" | "denied";

type NotificationState = {
  permission: PermissionStatus;
  requestPermission: () => void;
  showNotification: (options: NotificationOptions) => void;
};

const useNotification = (): NotificationState => {
  const [permission, setPermission] = useState<PermissionStatus>("default");

  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = (): void => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        setPermission(permission);
      });
    }
  };

  const showNotification = (options: NotificationOptions): void => {
    if ("Notification" in window && permission === "granted") {
      const { title, body, icon, requireInteraction } = options;
      const notification = new Notification(title, { body, icon, requireInteraction });
      notification.onclick = (): void => {
        window.focus();
      };
    }
  };

  return {
    permission,
    requestPermission,
    showNotification
  };
};

export default useNotification;
