import { Route, Routes as ReactRouterRoutes } from "react-router-dom";

import SubscribePage from "../pages/subscribe/subscribe";
import HomePage from "../pages/home/home";

export default function Routes() {
  return (
    <>
      <ReactRouterRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
      </ReactRouterRoutes>
    </>
  );
}
