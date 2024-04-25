import ProfileInfo from "./ProfileInfo";
import Messages from "./Messages";
import DateCalendar from './DateCalendar'

const Stats = () => {
  return (
    <div className="h-full rounded-3xl mx-6 border bg-white shadow-2xl hidden md:inline">
      <ProfileInfo/>
      <Messages/>
      <DateCalendar/>
    </div>
  );
};

export default Stats;
