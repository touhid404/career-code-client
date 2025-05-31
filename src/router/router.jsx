import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import LogIn from '../pages/SignIn/LogIn';
import PrivateRoute from '../pages/PrivateRoute/PrivateRoute';
import JobDetails from '../pages/HotJobs/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "login",
        Component: LogIn
      },
      {
        path: 'jobdetails/:id',
        loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`),

        element: <PrivateRoute>
          <JobDetails></JobDetails>
        </PrivateRoute>

       

      }
    ]
  },
]);



export default router;