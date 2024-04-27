import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileInfo = () => {
  return (
    <>
      <div className="profile flex gap-4 lg:gap-8 justify-center items-center m-8">
        <Avatar className="size-24 lg:size-32">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <div className="info">
          <div className="text-primary-foreground font-bold text-lg lg:text-xl text-nowrap">Good Morning,</div>
          <div className="font-bold text-lg lg:text-xl">Simran</div>
          <div className="text-gray-400 font-bold text-lg lg:text-xl">Class V</div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
