import { AuthContext } from "@/auth/context/AuthContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MarksGraph = () => {
  const { data } = useContext(AuthContext);
  const [result, setResult] = useState([]);
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchResult() {
    try {
      const response = await axios.get(
        `https://erp-system-backend.onrender.com/api/v1/results/campus/student/${data.id}`
      );
      // console.log(response.data.data.results);
      if (response.data.data.results.length != 0) {
        setResult(response.data.data.results);
        setSubject(response.data.data.results[0]);
      } else {
        setError("no result to show");
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("error fetching data");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <div className="h-64 flex w-5/12 mx-auto flex-col items-center">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={200} data={result} margin={0}>
            <Bar
              dataKey="scoredMarks"
              fill="#000000"
              onClick={(e) => {
                console.log(e);
                setSubject(e);
              }}
            >
              <LabelList
                dataKey="subjectName"
                position="center"
                angle="-90"
                fontSize={20}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      <div className=" rounded-lg w-full bg-black text-white flex gap-6 p-6">
        {loading && <div className="text-white">Loading data...</div>}
        {error && <div>{error}</div>}

        {!error && !loading && (
          <>
            <div>
              <p className="text-4xl pb-6 ml-6 font-bold">
                {subject.scoredMarks}
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="size-16">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-2xl font-bold">Shanaya</p>
                  <p className="text-xl text-gray-300 whitespace-nowrap">
                    {subject.subjectName} Teacher
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-medium pb-4">Feedback</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nam?</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MarksGraph;
