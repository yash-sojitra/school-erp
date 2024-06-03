import { Button } from "@/components/ui/button";
import { BadgeIndianRupee } from "lucide-react";
import React from "react";

const FeesDetails = () => {
  return (
    <div className="fees w-9/12 flex flex-col gap-6 items-center p-6 ">
      <div className="flex gap-2 text-3xl font-bold items-center">
        <BadgeIndianRupee className="text-primary-foreground size-12" /> Fee
        Details
      </div>
      <div className="bg-white py-10 rounded-xl shadow-lg">
        <div className="py-6 bg-primary text-center px-10">
            <h1 className="text-4xl font-bold text-primary-foreground">Term II</h1>
            <p className="text-xl font-bold">Oct,2023 - Mar,2024</p>
        </div>
        <ul className="mx-10 mt-8 flex flex-col gap-3">
            <li className="flex gap-10 justify-between text-xl"><p>Tution Fee</p><p>₹12,000</p></li>
            <li className="flex gap-10 justify-between text-xl"><p>Development Fee</p><p>₹4,000</p></li>
            <li className="flex gap-10 justify-between text-xl"><p>Maintenance Fee</p><p>₹2,000</p></li>
            <li className="flex gap-10 justify-between text-xl"><p>Books and Materials</p><p>₹8,000</p></li>
            <li className="flex gap-10 justify-between text-xl"><p>Total</p><p>₹26000</p></li>
        </ul>
      </div>
      <div className="text-2xl font-semibold">
        Total Payment: ₹26000
      </div>
      <div><Button variant="outline">Cancel</Button> <Button>Proceed</Button></div>
    </div>
  );
};

export default FeesDetails;
