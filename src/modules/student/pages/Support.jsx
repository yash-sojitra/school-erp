import { MessageCircleQuestion } from "lucide-react";
import SupportForm from "../components/support/SupportForm";

const Support = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-2 text-4xl items-center font-bold py-6">
        <MessageCircleQuestion className="size-10 text-primary-foreground" />
        Support/Help
      </div>
      <SupportForm />

      <div className="flex items-center gap-6 w-8/12 my-6">
        <div className="line h-px w-full bg-gray-500"></div>
        <h1 className="font-semibold text-nowrap text-gray-800">Or Mail us at logo@schoolerp.com</h1>
        <div className="line h-px w-full bg-gray-500"></div>
      </div>
    </div>
  );
};

export default Support;
