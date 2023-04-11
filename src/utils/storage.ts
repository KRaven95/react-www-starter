export function getSessionStorage<R>(key: string): R {
  return window.sessionStorage.getItem(key) as R;
}

export function writeSessionStorage(key: string, value: any): void {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage<R>(key: string): R {
  return window.localStorage.getItem(key) as R;
}

export function writeLocalStorage(key: string, value: any): void {
  window.localStorage.setItem(key, JSON.stringify(value));
}
