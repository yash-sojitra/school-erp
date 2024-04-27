import Assignments from "./Assignments"
import UpcomingExams from "./UpcomingExams"

const SideSection = () => {
  return (
    <div className="mx-6 shadow-xl rounded-3xl bg-white hidden md:inline">
        <Assignments/>
        <UpcomingExams/>
    </div>
  )
}

export default SideSection
