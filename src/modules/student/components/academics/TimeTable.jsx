import { AuthContext } from "@/auth/context/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import axios from "axios";
import { Clock10 } from "lucide-react";
import { useContext, useEffect, useState } from "react";

const initTable = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
};

const TimeTable = () => {
  const { data } = useContext(AuthContext);
  const [timeTable, setTimeTable] = useState(initTable);
  const [error, setError] = useState(false);
  // console.log("timetable");
  async function fetchTimeTable() {
    try {
      const response = await axios.get(
        `https://erp-system-backend.onrender.com/api/v1/timeTable/fetch-byDepartment/${data.departmentId}`
      );
      console.log(response.data);
      response.data.length?setTimeTable(response.data.timeTable[0]):setError("timetable not created")
    } catch (e) {
      console.log(e);
      setError("error", e)
    }
  }

  useEffect(() => {
    setError(false);
    fetchTimeTable();
  }, []);

  return (
    <div className="flex justify-between w-full mt-6">
      {
      !error?
      Object.keys(timeTable).map((key) => {
        return (
          <div key={key} className="w-full">
            <h1 className="p-4 bg-white mb-3 text-center text-xl font-medium">
              {key}
            </h1>
            {timeTable[key] &&
              timeTable[key].map((subject) => {
                return (
                  <Card key={key}>
                    <CardHeader>
                      <CardTitle>{subject.subjectName}</CardTitle>
                      <CardDescription>{subject.teacherName}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-2 items-center text-lg">
                      <Clock10 className="size-6" /> {subject.timeFrom} -{" "}
                      {subject.timeTo}
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        );
      })
      :<div className="text-xl font-bold text-red-600">{error}</div>
    }
    </div>
  );
};

export default TimeTable;
