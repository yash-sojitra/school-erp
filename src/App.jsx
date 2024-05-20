// import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from './modules/student/Dashboard';
import HomePage from './modules/student/pages/HomePage';
import Library from './modules/student/pages/Library';
import Academics from './modules/student/pages/Academics';
import EventsPage from './modules/student/pages/EventsPage';
import Support from './modules/student/pages/Support';
import ChatPage from './modules/student/pages/ChatPage';
import FeesPayment from './modules/student/pages/FeesPayment';


const router = createBrowserRouter([
  {
    path:"/student",
    element: <Dashboard />,
    children: [
      {
        path: "/student/home",
        element: <HomePage />,
      },
      {
        path: "/student/library",
        element: <Library />,
      },
      {
        path: "/student/academics",
        element: <Academics />,
      },
      {
        path: "/student/events",
        element: <EventsPage />,
      },
      {
        path: "/student/support",
        element: <Support />,
      },
      {
        path: "/student/chat",
        element: <ChatPage />,
      },
      {
        path: "/student/fees",
        element: <FeesPayment />,
      },
    ],
  },
]);

function App() {

  return (
    <div className="flex">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
