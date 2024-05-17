// // import { useEffect, useRef, useState } from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import HomePage from "./pages/HomePage";
// import { Library } from "lucide-react";
// import Academics from "./pages/Academics";
// import EventsPage from "./pages/EventsPage";
// import Support from "./pages/Support";
// import ChatPage from "./pages/ChatPage";
// import FeesPayment from "./pages/FeesPayment";
// // import Sidebar from "./components/Sidebar";
// // import OutsideClick from "./hooks/outsideClick";

// const router = createBrowserRouter([
//   {
//     element: <Dashboard />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/library",
//         element: <Library />,
//       },
//       {
//         path: "/academics",
//         element: <Academics />,
//       },
//       {
//         path: "/events",
//         element: <EventsPage />,
//       },
//       {
//         path: "/support",
//         element: <Support />,
//       },
//       {
//         path: "/chat",
//         element: <ChatPage />,
//       },
//       {
//         path: "/fees",
//         element: <FeesPayment />,
//       },
//     ],
//   },
// ]);

// const StudentDashboard = () => {
//   // const [sidebar, setSidebar] = useState(false);
//   // const boxRef = useRef(null)
//   // const boxOutsideClick = OutsideClick(boxRef);

//   // useEffect(() => {
//   //   if(boxOutsideClick){
//   //     setSidebar(false)
//   //   }
//   // }, [boxOutsideClick]);

//   return (
//     <div className="flex">
//       <RouterProvider router={router} />
//     </div>
//   );
// };

// export default StudentDashboard;
