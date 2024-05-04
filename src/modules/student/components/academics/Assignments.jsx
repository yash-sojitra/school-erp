import { MoveRight, NotepadText } from "lucide-react";
import { assignments } from "@/assets/data/data.json";

const Assignments = () => {
  return (
    <div className="bg-primary m-6 rounded-xl px-6">
      <div className="heading text-2xl font-bold flex gap-2 items-center justify-center pt-6">
        <NotepadText /> Assignment{" "}
      </div>

      <div className="grid grid-rows-4 divide-y-2 divide-white pb-2 ">
        {assignments.slice(0, 4).map((assignment) => {
          return (
            <Assignment
              subject={assignment.subject}
              obtMarks={assignment.obtMarks}
              totalMarks={assignment.totalMarks}
            />
          );
        })}
      </div>
    </div>
  );
};

const Assignment = ({ subject, obtMarks, totalMarks }) => {
  const diff = totalMarks - obtMarks;

  return (
    <div className="flex justify-between items-center py-3">
      <div>
        <p className="text-xl font-bold pb-1">{subject}</p>
        <p className="text-sm text-primary-foreground font-semibold flex items-center gap-2 text-nowrap">
          view assignment <MoveRight className="size-4" />
        </p>
      </div>
      <div className="text-xl font-bold text-gray-600 ml-10">
        <span
          className={`text-3xl ${diff ? "text-orange-500" : "text-green-600"}`}
        >
          {obtMarks}
        </span>
        /{totalMarks}
      </div>
    </div>
  );
};

export default Assignments;
