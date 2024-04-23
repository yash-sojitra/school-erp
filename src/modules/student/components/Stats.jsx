import ProfileInfo from "./ProfileInfo";
import Messages from "../Messages";

const Stats = () => {
  return (
    <div className="h-full rounded-3xl m-6 border bg-white shadow-2xl hidden md:inline">
      <ProfileInfo/>
      <Messages/>
    </div>
  );
};

export default Stats;
