import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Catalog from "../page/Catalog";
import SharedLayout from "./SharedLayout";
import SingIn from "../page/SingIn";
import SingUp from "../page/SingUp";

function App() {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/singin" element={<SingIn />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="*" element={<div />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
