import { MoveRight, StarIcon } from "lucide-react";

const Analytics = () => {
  return (
    <div className="flex flex-wrap gap-6 w-full justify-center">
      <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-full md:w-58 lg:w-64">
        <h1 className="text-xl lg:text-2xl font-bold">Grade Average</h1>
        <p className="text-3xl font-bold my-6 self-center text-gray-600"><span className="text-4xl text-primary-foreground">86.4</span>/100</p>
        <div className="flex gap-2 text-primary-foreground">viewGrades <MoveRight /></div>
      </div>
      <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-full md:w-58 lg:w-64">
        <h1 className="text-xl lg:text-2xl font-bold">Attendance</h1>
        <p className="text-3xl font-bold my-6 self-center text-gray-600"><span className="text-4xl text-primary-foreground">70</span>%</p>
        <div className="flex gap-2 text-primary-foreground">viewGrades <MoveRight /></div>
      </div>
      <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-full md:w-58 lg:w-64">
        <h1 className="text-xl lg:text-2xl font-bold">Student Rating</h1>
        <p className="text-3xl font-bold my-6 self-center text-gray-600"><span className="text-4xl text-primary-foreground">6</span>/30</p>
        <div className="flex gap-2 self-center text-primary-foreground">Top 10 <StarIcon/></div>
      </div>
    </div>
  );
};

export default Analytics;
