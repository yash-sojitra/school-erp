import Analytics from "./Analytics"
import TimeTable from "./TimeTable"

const MainSection = ({totalGrade}) => {
  return (
    <div className="w-full mx-6 md:ml-6">
      <Analytics totalGrade={totalGrade}/>
      <h1 className="text-4xl my-4 md:mt-10 font-bold">Time Table</h1>
      <TimeTable/>
    </div>
  )
}

export default MainSection
