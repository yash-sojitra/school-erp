import { BadgeIndianRupee } from "lucide-react";
import StudentDetails from "../components/fees/StudentDetails";
import FeesDetails from "../components/fees/FeesDetails";

const FeesPayment = () => {
  return (
    <div className="flex w-full gap-6 mx-6">
      <StudentDetails />
      <FeesDetails />
    </div>
  );
};

export default FeesPayment;
