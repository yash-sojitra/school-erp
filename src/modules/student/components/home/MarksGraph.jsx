import { AuthContext } from "@/auth/context/AuthContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const MarksGraph = () => {
  const { data } = useContext(AuthContext);
  const [result, setResult] = useState([]);

  async function fetchResult() {
    try {
      const response = await axios.get(
        `https://erp-system-backend.onrender.com/api/v1/results/campus/student/${data.id}`
      );
      // console.log(response.data.data.results);
      setResult(response.data.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchResult()
  }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={result}>
          <Bar dataKey="scoredMarks" fill="#141414" label={{ position: "center", fontSize:"1.4rem" }}
            onClick={(e)=>{
              console.log(e);
            }}
          />
          <XAxis dataKey="subjectName" />
          <YAxis/>
        </BarChart>
      </ResponsiveContainer>
      <div className="w-full rounded-lg bg-black">hlw</div>
    </>
  );
};

export default MarksGraph;
