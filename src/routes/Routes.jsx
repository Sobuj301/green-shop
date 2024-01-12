import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Components/PrivateRoute";
import ServiceDetails from "../Components/ServiceDetails";
import BookNow from "../Pages/BookNow";
import AddService from "../Pages/AddService";
import ManageService from "../Pages/ManageService";
import Update from "../Pages/Update";
import Dashboard from "../Pages/Dashboard";
import Schedule from "../Pages/Schedule";


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
                {
                    path:"/service/:id",
                    element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                    loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
                },
                {
                    path:"/book/:id",
                    element:<PrivateRoute><BookNow></BookNow></PrivateRoute>,
                    loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
                },
                
                
              ]
             },

             {
                path:'/dashboard',
                element:<Dashboard></Dashboard>,
                children:[
                    {
                        path:"/dashboard/addService",
                        element:<PrivateRoute><AddService></AddService></PrivateRoute>
                    },
                    {
                        path:"/dashboard/manageService",
                        element:<PrivateRoute><ManageService></ManageService></PrivateRoute>
                    },
                    {
                        path:"/dashboard/schedule",
                        element:<PrivateRoute><Schedule></Schedule></PrivateRoute>,
                    },
                    {
                        path:"/dashboard/update/:id",
                        element:<PrivateRoute><Update></Update></PrivateRoute>,
                        loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
                        
                    },
                   
                    
                ]
                
             }
             
  ]);



export default router