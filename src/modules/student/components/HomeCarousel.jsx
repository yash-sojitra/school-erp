import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import eventsImg from "@/assets/images/events.png";

const MainContent = () => {
  return (
    <Carousel
      className="border rounded-xl w-full md:w-11/12"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="">
        <CarouselItem className="flex justify-center">
          <img src={eventsImg} alt="" className="w-full rounded-xl" />
        </CarouselItem>
        <CarouselItem className="flex justify-center">
          <img src={eventsImg} alt="" className="w-full rounded-xl" />
        </CarouselItem>
        <CarouselItem className="flex justify-center">
          <img src={eventsImg} alt="" className="w-full rounded-xl" />
        </CarouselItem>
        <CarouselItem className="flex justify-center">
          <img src={eventsImg} alt="" className="w-full rounded-xl" />
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
          <CarouselNext /> */}
    </Carousel>
  );
};

export default MainContent;
