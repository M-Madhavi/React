import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header/Header";
import Content from "./components/Content/Content";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
// import Grocery from "./components/Grocery/Grocery";
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer/Shimmer";
import UserContext from "../utils/UserContex";
import {Provider} from 'react-redux'
import appStore from "../utils/appStore";

const Grocery = lazy(() => import(('./components/Grocery/Grocery')))

const AppLayout = () => {

  const [userName, setUserName] = useState("")
  useEffect(() => {
    const data = {
      name: "your Name"
    }
    setUserName(data.name)
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <HeaderComponent />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
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
        element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
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


