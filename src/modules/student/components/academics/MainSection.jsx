import Analytics from "./Analytics"
import Reviews from "./Reviews"
import TextBox from "./TextBox"
import TimeTable from "./TimeTable"

const MainSection = () => {
  return (
    <div className="w-full mx-6 md:ml-6">
      <Analytics/>
      <TextBox/>
      <h1 className="text-4xl my-4 md:mt-10 font-bold">Time Table</h1>
      <TimeTable/>
      <Reviews/>
    </div>
  )
}

export default MainSection
