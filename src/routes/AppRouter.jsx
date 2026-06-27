import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";

function RouteViews() {
  return useRoutes(routes);
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="react-page-loader" role="status" aria-label="Loading page">
            <img src="/assets/img/logo-icon.svg" alt="" />
          </div>
        }
      >
        <RouteViews />
      </Suspense>
    </BrowserRouter>
  );
}
