import { AuthContext } from "@/auth/context/AuthContext";
import axios from "axios";
import { MoveRight, StarIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import Attendance from "./Attendance";

const Analytics = ({totalGrade}) => {
  const { data } = useContext(AuthContext);
  const studentID = data.id;
  const [attendanceArr, setAttendanceArr] = useState([]);
  let [totAttendance, setTotAttendance] = useState(0);

  // async function fetchAtt(subjectId){
  //   const response = await axios.get(
  //     `https://erp-system-backend.onrender.com/api/v1/attendance/get-percentage/${studentID}/${subjectId}`
  //   );
  //   console.log(response.data);
  // }

  useEffect(() => {
    console.log(data.attendance);
    data.attendance.forEach(async (subject) => {
      // fetchAtt(subject.subjectId)
      console.log(subject);
      const response = await axios.get(
        `https://erp-system-backend.onrender.com/api/v1/attendance/get-percentage/${studentID}/${subject.subjectId}`
      );
      console.log(response.data.data);
      setTotAttendance((prevAttendance)=> prevAttendance + response.data.data);
      setAttendanceArr((prevState)=>[...prevState,{"subject":response.data.subject, "data":response.data.data}]);
      // attendanceArr.push({"subject":response.data.subject, "data":response.data.data});
    });

    setTotAttendance(totAttendance/attendanceArr.length);
    // console.log("tot",totAttendance);
    // console.log(attendanceArr);

  }, []);

  return (
    <div className="flex flex-wrap gap-6 w-full justify-center">
      <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-full md:w-58 lg:w-64">
        <h1 className="text-xl lg:text-2xl font-bold">Grade Average</h1>
        <p className="text-3xl font-bold my-6 self-center text-gray-600">
          <span className="text-4xl text-primary-foreground">{totalGrade}</span>/100
        </p>
        <div className="flex gap-2 text-primary-foreground">
          viewGrades <MoveRight />
        </div>
      </div>
      <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-full md:w-58 lg:w-64">
        <h1 className="text-xl lg:text-2xl font-bold">Attendance</h1>
        <p className="text-3xl font-bold my-6 self-center text-gray-600">
          <span className="text-4xl text-primary-foreground">{totAttendance}</span>%
        </p>
        <div className="flex gap-2 text-primary-foreground">
          <Attendance attendanceArr={attendanceArr} />
        </div>
      </div>
      <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-full md:w-58 lg:w-64">
        <h1 className="text-xl lg:text-2xl font-bold">Student Rating</h1>
        <p className="text-3xl font-bold my-6 self-center text-gray-600">
          <span className="text-4xl text-primary-foreground">6</span>/30
        </p>
        <div className="flex gap-2 self-center text-primary-foreground">
          Top 10 <StarIcon />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
