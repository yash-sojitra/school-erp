import HomePage from "./pages/HomePage";
import Searchbar from "./components/Searchbar";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Library from "./pages/Library";
import Academics from "./pages/Academics";
import EventsPage from "./pages/EventsPage";

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>,
  },
  {
    path:'/library',
    element:<Library/>,
  },
  {
    path:'/academics',
    element:<Academics/>,
  },
  {
    path:'/events',
    element:<EventsPage/>
  }
]);

const Dashboard = ({ sidebar, setSidebar }) => {
  return (
    <>
      <div className="flex flex-col w-full bg-secondary z-0">
        <Searchbar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex">
          <RouterProvider router={router}/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
