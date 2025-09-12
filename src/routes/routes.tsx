import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "@/pages/home/HomePage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
    </>
  )
);

export default routes;
