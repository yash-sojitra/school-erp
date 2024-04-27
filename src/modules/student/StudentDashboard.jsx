import { useEffect, useRef, useState } from "react";
import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"
import OutsideClick from "./hooks/outsideClick";

const StudentDashboard = () => {

  const [sidebar, setSidebar] = useState(false);
  const boxOutsideClick = OutsideClick(Sidebar);

  useEffect(()=>{
    setSidebar(false);
    console.log(boxOutsideClick);
  },[boxOutsideClick])


  return (
    <div className="flex">
      <Sidebar sidebar = {sidebar}/>
      <Dashboard sidebar = {sidebar} setSidebar = {setSidebar}/>
    </div>
  )
}

export default StudentDashboard
