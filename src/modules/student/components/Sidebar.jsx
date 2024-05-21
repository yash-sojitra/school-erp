import { AuthContext } from "@/auth/context/AuthContext";
import { BadgeIndianRupee, CalendarClock, GraduationCap, Info, LayoutDashboard, LibraryBig, LogOut, MessageCircleMore, Settings } from "lucide-react";
import { useContext } from "react";
// import OutsideClick from "../hooks/outsideClick";
import { Outlet, Link } from "react-router-dom";

const Sidebar = ({sidebar, boxRef}) => {

  // const sidebara = OutsideClick();

  const {logout} = useContext(AuthContext);

  return (
    <div ref={boxRef} className={` sidebar z-[1] h-screen w-60 py-6 px-8 flex-col justify-between rounded-r-2xl shadow-xl bg-white ${sidebar? 'flex absolute z-[1]' : 'hidden'} flex absolute z-[1]  lg:flex lg:sticky lg:top-0 `}>
        <div>
          <div ></div>
          <div className="text-4xl font-bold py-4">logo</div>
          <ul className="text-lg font-semibold">
            {/* <li className="flex gap-4 my-6 items-center"><LayoutDashboard/> Dashboard</li> */}
            <li><Link to='/' className="flex gap-4 my-6 items-center"><LayoutDashboard/> Dashboard</Link></li>
            <li><Link to='/academics' className="flex gap-4 my-6 items-center"><GraduationCap />Academics</Link></li>
            <li><Link to='/events' className="flex gap-4 my-6 items-center"><CalendarClock />Notices/Events</Link></li>
            <li><Link to='/library' className="flex gap-4 my-6 items-center"><LibraryBig />Library</Link></li>
            <li><Link to='/fees' className="flex gap-4 my-6 items-center"><BadgeIndianRupee />Fee Payment</Link></li>
            <li><Link to='/chat' className="flex gap-4 my-6 items-center"><MessageCircleMore />Chat</Link></li>
            <li><Link to='/support' className="flex gap-4 my-6 items-center"><Info />Support/help</Link></li>
          </ul>
        </div>
        <div>
        <ul className='text-lg font-semibold' >
            <li className="flex gap-4 my-6 items-center"><Settings /> Settings</li>
            <li className="flex gap-4 my-6 items-center cursor-pointer" onClick={logout}><LogOut /> Logout</li>
        </ul>
        </div>
    </div>
  );
};

export default Sidebar;
