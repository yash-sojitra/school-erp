import { AuthContext } from "@/auth/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useContext } from "react";

const details = {
    name : "Simran Singh",
    class: 5,
    roll: 2564,
    year: '2023-2024',
    fatherName: "Harjeet Singh",
    motherName:"Saroj Kaur",
    Contact: 9234919312,
}

const StudentDetails = () => {

  const {data} = useContext(AuthContext)

  return (
    <div className="details w-3/12 bg-white rounded-xl shadow-lg">
      <Avatar className="size-36 m-auto mt-10">
        <AvatarImage src={data.photo} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="text-center my-4">
        <h1 className="text-2xl font-bold text-primary-foreground">{details.name}</h1>
        <p className="text-2xl font-bold ">Class: {details.class}</p>
      </div>
      <div className="text-center text-xl font-medium pb-10">
        <p>enrollment Id: <span className="text-primary-foreground">{details.roll}</span></p>
        <p>academic year: <span className="text-primary-foreground">{details.year}</span></p>
        <p>Father Name: <span className="text-primary-foreground">{details.fatherName}</span></p>
        <p>Mother Name: <span className="text-primary-foreground">{details.motherName}</span></p>
        <p>Contact No: <span className="text-primary-foreground">{details.Contact}</span></p>
      </div>
    </div>
  );
};

export default StudentDetails;
