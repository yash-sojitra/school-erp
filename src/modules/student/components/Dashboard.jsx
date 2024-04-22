import MainContent from "./MainContent"
import Searchbar from "./Searchbar"
import Stats from "./Stats"

const Dashboard = () => {
  return (
    <>
       <div className="flex flex-col w-full bg-secondary">
           <Searchbar/>
           <div className="flex">
            <MainContent/>
            <Stats/>
           </div>
       </div>
    </>
  )
}

export default Dashboard