import HomePage from "./home/HomePage";
import Searchbar from "./Searchbar";
import Stats from "./home/Stats";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Library from "./library/Library";

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>,
  },
  {
    path:'/library',
    element:<Library/>,
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
