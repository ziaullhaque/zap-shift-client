import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import Error from "../pages/Shared/Error/Error";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Registration from "../pages/Auth/Registration/Registration";
import ForgetPassword from "../pages/Auth/ForgetPassword/ForgetPassword";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "/about-us",
        Component: About,
      },
      {
        path: "/be-a-rider",
        element: <PrivateRoute><Rider></Rider></PrivateRoute>,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/reset-password",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
]);
