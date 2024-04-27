import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserDashboard from './pages/UserDashboard.jsx';
import CarsChart from './components/CarsChart.jsx';

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/1",
    element: <App />,
  },{
    path: "/2",
    element: <UserDashboard />
  },{
    path: "/",
    element: <CarsChart />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
