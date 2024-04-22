import { BadgeIndianRupee, CalendarClock, GraduationCap, Info, LayoutDashboard, LibraryBig, LogOut, MessageCircleMore, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar z-[1] h-screen w-60 py-6 px-8 flex flex-col justify-between rounded-r-2xl shadow-xl bg-white">
        <div>
          <div className="text-4xl font-bold py-4">logo</div>
          <ul className="text-lg font-semibold">
            <li className="flex gap-4 my-6 items-center"><LayoutDashboard/> Dashboard</li>
            <li className="flex gap-4 my-6 items-center"><GraduationCap />Academics</li>
            <li className="flex gap-4 my-6 items-center"><CalendarClock />Notices/Events</li>
            <li className="flex gap-4 my-6 items-center"><LibraryBig />Library</li>
            <li className="flex gap-4 my-6 items-center"><BadgeIndianRupee />Fee Payment</li>
            <li className="flex gap-4 my-6 items-center"><MessageCircleMore />Chat</li>
            <li className="flex gap-4 my-6 items-center"><Info />Support/help</li>
          </ul>
        </div>
        <div>
        <ul className="text-lg font-semibold">
            <li className="flex gap-4 my-6 items-center"><Settings /> Settings</li>
            <li className="flex gap-4 my-6 items-center"><LogOut /> Logout</li>
        </ul>
        </div>
    </div>
  );
};

export default Sidebar;
