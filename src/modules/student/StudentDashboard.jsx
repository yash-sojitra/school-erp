import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"

const StudentDashboard = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default StudentDashboard
