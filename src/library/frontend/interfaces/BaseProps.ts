export type BaseProps<T extends HTMLElement | void = void> = (T extends HTMLElement
  ? React.HtmlHTMLAttributes<T>
  : React.HtmlHTMLAttributes<HTMLDivElement>) & { byPass?: boolean };
