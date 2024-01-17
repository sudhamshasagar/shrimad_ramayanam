import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Hero from './Components/HomePage/Hero';


const router = createBrowserRouter([{
  path: "/",
  element:<App/>,
  children: [
    {
      path: "",
      element: <Hero/>
    }
  ]

}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
