import { Button } from "@/components/ui/button";

const EventPoster = ({event}) => {

   const {title, date, url, description} = event;

  return (
    <div className="bg-primary flex gap-6 items-center my-6 pr-6 rounded-3xl shadow-md overflow-hidden">
      <img src={url} className="h-full"/>
      <div className="py-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500">{date}</p>
        <p className="my-4">{description}</p>
        <Button className="bg-primary-foreground text-white hover:bg-white hover:text-primary-foreground" >Signup now</Button>
      </div>
    </div>
  )
}

export default EventPoster
