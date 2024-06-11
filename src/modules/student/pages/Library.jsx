import { LibraryBig } from "lucide-react";
import Subject from "../components/library/Subject";
import BookList from "../components/library/BookList";
import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Subjects = [
  "Science",
  "Maths",
  "Social Science",
  "Computer Science",
  "Arts",
];

const Library = () => {
  const [filterSubs, setFilterSubs] = useState([]);
  const [notes, setNotes] = useState(true);

  return (
    <div className="flex flex-col w-full gap-8 mx-10 my-6">
      <div className="heading flex gap-2 items-center text-3xl font-bold">
        <LibraryBig className="size-8" /> Library
      </div>
      <ToggleGroup
        type="single"
        defaultValue="notes"
        onValueChange={(value) => {
          console.log("Dwd");
          if (value == "notes") setNotes(true);
          else setNotes(false);
        }}
      >
        <ToggleGroupItem value="notes">Notes</ToggleGroupItem>
        <ToggleGroupItem value="books">Books</ToggleGroupItem>
      </ToggleGroup>
      {notes ? (
        <div className="flex">
          <Subject
            Subjects={Subjects}
            filterSubs={filterSubs}
            setFilterSubs={setFilterSubs}
          />
          <BookList filterSubs={filterSubs} />
        </div>
      ) : (
        <div>library</div>
      )}
    </div>
  );
};

export default Library;
