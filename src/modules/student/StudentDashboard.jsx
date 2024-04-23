import { useState } from "react";
import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"

const StudentDashboard = () => {

  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="flex">
      <Sidebar sidebar={sidebar}/>
      <Dashboard sidebar={sidebar} set/>
    </div>
  )
}

export default StudentDashboard
