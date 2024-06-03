import { useState } from "react";
import MainSection from "../components/academics/MainSection"
import SideSection from "../components/academics/SideSection"

const Academics = () => {

  const [totalGrade, setTotalGrade] = useState(0);

  return (
    <div className="flex w-full ">
        <MainSection totalGrade={totalGrade}/>
      <SideSection setTotalGrade={setTotalGrade}/>
    </div>
  )
}

export default Academics
