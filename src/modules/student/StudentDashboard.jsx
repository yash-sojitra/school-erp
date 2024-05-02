import { useEffect, useRef, useState } from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./components/Sidebar";
import OutsideClick from "./hooks/outsideClick";

const StudentDashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const boxRef = useRef(null)
  const boxOutsideClick = OutsideClick(boxRef);

  useEffect(() => {
    if(boxOutsideClick){
      setSidebar(false)
    }
  }, [boxOutsideClick]);

  return (
    <div className="flex">
      <Sidebar sidebar={sidebar} boxRef={boxRef} />
      <Dashboard sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
};

export default StudentDashboard;
