import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import "./assets/css/MainCss.scss";

import Landing from "./view/coming-soon/Landing";
import Eating_resturent from "./view/main-site/Eating_resturent";
import Home from "./view/main-site/Home";
import Nutrition_Fitness from "./view/main-site/Nutrition_Fitness";
import Vegan_Shop from "./view/main-site/Vegan_Shop";
import Vegan_Veganism from "./view/main-site/Vegan_Veganism";

import Vegan_Clothing_Changes from "./view/main-site/Vegan_Clothing_Changes";
import Vegan_Product_Listing from "./view/main-site/Vegan_Product_Listing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/vegan-veganism",
    element: <Vegan_Veganism />,
  },
  {
    path: "/nutrition-fitness",
    element: <Nutrition_Fitness />,
  },
  {
    path: "/vegan-shop",
    element: <Vegan_Shop />,
  },
  {
    path: "/eating-resturent",
    element: <Eating_resturent />,
  },
  {
    path: "/vegan-clothing-changes",
    element: <Vegan_Clothing_Changes />,
  },
  {
    path: "/vegan-product-listing",
    element: <Vegan_Product_Listing />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
