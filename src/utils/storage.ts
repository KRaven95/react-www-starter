export function readSessionStorage(key: string) {
  return JSON.parse(window.sessionStorage.getItem(key) || "null");
}

export function writeSessionStorage(key: string, value: any): void {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

export function readLocalStorage(key: string) {
  return JSON.parse(window.localStorage.getItem(key) || "null");
}

export function writeLocalStorage(key: string, value: any): void {
  window.localStorage.setItem(key, JSON.stringify(value));
}
