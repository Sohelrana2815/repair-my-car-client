import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home/Home";
import Checkout from "../Page/Checkout/Checkout";
import SignUp from "../Page/SignUp/SignUp";
import Login from "../Page/Login/Login";
import MyBookings from "../Page/MyBookings/MyBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "checkOut/:id",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "myBooking",
        element: <MyBookings />,
      },
    ],
  },
]);

export default router;
