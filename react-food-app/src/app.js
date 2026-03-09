import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header/Header";
import Content from "./components/Content/Content";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
// import Grocery from "./components/Grocery/Grocery";
import React,{lazy,Suspense} from "react";
import Shimmer from "./components/Shimmer/Shimmer";


const Grocery = lazy(() => import(('./components/Grocery/Grocery')))

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Content />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
            {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
      },
       {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


