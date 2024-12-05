import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Integradora from './compontentes/integradora';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart } from './Charts';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Integradora />,
  },
  {
    path: "/charts",
    element: <Chart/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

