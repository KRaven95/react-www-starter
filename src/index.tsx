import ReactDOM from "react-dom/client";

import Router from "@app/frontend/routing/router";

const rootElement = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(rootElement!);

ReactRoot.render(<Router />);
