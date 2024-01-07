import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
             {
              path: "/",
              element: <MainLayout></MainLayout>,
              errorElement:<ErrorPage></ErrorPage>,
              children:[
                {
                    path:"/",
                    element:<Home></Home>
                },
                {
                    path:"/services",
                    element:<Services></Services>
                },
                {
                    path:"/login",
                    element:<Login></Login>
                },
                {
                    path:"/register",
                    element:<Register></Register>
                },
              ]
             },
  ]);



export default router