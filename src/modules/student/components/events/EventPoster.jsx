import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {formatDate} from '@/modules/student/utils/dateFormatter'

const EventPoster = ({ event }) => {
  const { title, date, url, description } = event;

  return (
    <div className="bg-primary flex gap-6 items-center my-6 pr-6 rounded-3xl shadow-md overflow-hidden">
      <img src={url} className="h-full" />
      <div className="py-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500">{formatDate(date)}</p>
        <p className="my-4">{description}</p>
        <Dialog>
          <DialogTrigger><Button className="bg-primary-foreground text-white hover:bg-white hover:text-primary-foreground">Open</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>
                {formatDate(date)}
              </DialogDescription>
            </DialogHeader>
            {description}
            <Button>Sign up</Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EventPoster;
