import { Suspense } from "react";
import { Outlet } from "react-router-dom/dist";
import Header from "../Header";

function SharedLayout() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
