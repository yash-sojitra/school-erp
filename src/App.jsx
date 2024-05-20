// import { useState } from 'react'
import "./App.css";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";

// ui components export
import Dashboard from "./modules/student/Dashboard";
import Library from "./modules/student/pages/Library";
import HomePage from "./modules/student/pages/HomePage";
import Academics from "./modules/student/pages/Academics";
import EventsPage from "./modules/student/pages/EventsPage";
import Support from "./modules/student/pages/Support";
import ChatPage from "./modules/student/pages/ChatPage";
import FeesPayment from "./modules/student/pages/FeesPayment";
import Login from "./modules/loginSignup/Login";
import Signup from "./modules/loginSignup/Signup";
import ProtectedRoute from "./auth/ProtectedRoute/ProtectedRoute";
import { useEffect } from "react";
// import Sidebar from "./components/Sidebar";
// import OutsideClick from "./hooks/outsideClick";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),

    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/library",
        element: (
          <ProtectedRoute>
            <Library />
          </ProtectedRoute>
        ),
      },
      {
        path: "/academics",
        element: (
          <ProtectedRoute>
            <Academics />
          </ProtectedRoute>
        ),
      },
      {
        path: "/events",
        element: (
          <ProtectedRoute>
            <EventsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/support",
        element: (
          <ProtectedRoute>
            <Support />
          </ProtectedRoute>
        ),
      },
      {
        path: "/chat",
        element: (
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/fees",
        element: (
          <ProtectedRoute>
            <FeesPayment />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {

  return (
    <div className="flex">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
