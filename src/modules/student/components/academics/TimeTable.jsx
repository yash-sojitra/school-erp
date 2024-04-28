import { timetable } from "@/assets/data/data.json";
import {
  getTodaysDate,
  getTodaysDay,
} from "@/modules/student/utils/dateFormatter";

const TimeTable = () => {
  return (
    <div className="flex flex-col items-center bg-primary shadow-xl rounded-xl p-6">
      <p className="text-3xl font-bold">{getTodaysDate()}, {getTodaysDay()}</p>
      <div className="w-full flex flex-wrap justify-center gap-6 pt-6">
        {timetable.map((item) => {
          return <Period key={item.id} item={item} />
        })}
      </div>
    </div>
  );
};

const Period = ({ item }) => {
  return (
    <div className="bg-primary-foreground flex flex-col items-center py-4 rounded-lg text-white w-28">
      <p className="text-lg font-medium">{item.timestamp}</p>
      <p className="text-lg">{item.subject}</p>
    </div>
  );
};

export default TimeTable;
