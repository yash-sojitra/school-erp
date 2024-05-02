import { LibraryBig } from "lucide-react";
import Subject from "../components/library/Subject";
import BookList from "../components/library/BookList";
import { useState } from "react";

const Subjects = [
  "Science",
  "Maths",
  "Social Science",
  "Computer Science",
  "Arts",
];

const Library = () => {
  const [filterSubs, setFilterSubs] = useState([]);

  return (
    <div className="flex flex-col gap-8 mx-10 my-6">
      <div className="heading flex gap-2 items-center text-3xl font-bold">
        <LibraryBig className="size-8" /> Library
      </div>
      <div className="flex">
        <Subject
          Subjects={Subjects}
          filterSubs={filterSubs}
          setFilterSubs={setFilterSubs}
        />
        <BookList filterSubs={filterSubs} />
      </div>
    </div>
  );
};

export default Library;
