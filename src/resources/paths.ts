interface IPath {
  [key: string]: Record<"path" | "linkName", string>;
}

export const paths: IPath = {
  main: {
    path: "/",
    linkName: "Home"
  },
  development: {
    path: "/development",
    linkName: "Development"
  },
  notFound: {
    path: "/*",
    linkName: "Not Found"
  }
};
