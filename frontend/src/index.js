import ReactDOM from "react-dom/client";
import { DashboardProvider } from "components/context/Dashboard";
import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <DashboardProvider>
        <App />

    </DashboardProvider>
    
);
