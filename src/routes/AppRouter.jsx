import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";

function RouteViews() {
  return useRoutes(routes);
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <RouteViews />
      </Suspense>
    </BrowserRouter>
  );
}
