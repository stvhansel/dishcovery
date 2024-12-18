import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AllRecipes from './pages/AllRecipes.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/AllRecipes",
    element: <AllRecipes />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
