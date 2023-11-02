import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Dessert from "../page/Dessert";
import ChildrenMeals from "../page/ChildrenMeals";
import Soups from "../page/Soups";
import SharedLayout from "./SharedLayout";
import SingIn from "../page/SingIn/SingIn";
import SingUp from "../page/SingUp/SingUp";
import Salads from "../page/Salads";
import MainDishes from "../page/MainDishes";

function App() {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/soups" element={<Soups />} />
          <Route path="/children_meals" element={<ChildrenMeals />} />
          <Route path="/main_dishes" element={<MainDishes />} />
          <Route path="/singin" element={<SingIn />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="*" element={<div />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
