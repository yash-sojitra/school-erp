import Searchbar from "./components/Searchbar";
import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import OutsideClick from "./hooks/outsideClick";
import Sidebar from "./components/Sidebar";

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

const Dashboard = () => {
  const [sideBar, setSideBar] = useState(false);
  const boxRef = useRef(null);
  const boxOutsideClick = OutsideClick(boxRef);

  useEffect(() => {
    if (boxOutsideClick) {
      setSideBar(false);
    }
  }, [boxOutsideClick]);

  return (
    <div className="flex w-full">
      <Sidebar sidebar={sideBar} boxRef={boxRef} />
      <div className="flex flex-col w-full bg-secondary z-0">
        <Searchbar sidebar={sideBar} setSidebar={setSideBar} />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
