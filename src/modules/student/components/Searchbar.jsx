import { Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Searchbar = () => {
  return (
    <div className="px-10 py-6 flex gap-10 items-center">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 border rounded-full"
      />

      <div className="icons grid gap-6 grid-cols-2">
        {/* <div className="message size-9 p-4 w-full rounded-full border border-gray-400">
          <Mail />
        </div> */}
          <Mail className="border border-gray-400 p-2 size-10 rounded-full" />
          <Mail className="border border-gray-400 p-2 size-10 rounded-full" />
      </div>
      <div className="profile flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-lg text-nowrap font-medium">Simran Singh</p>
      </div>
    </div>
  );
};

export default Searchbar;
