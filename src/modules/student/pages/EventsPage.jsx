import EventCarousel from '../components/events/EventCarousel'
import { events } from '@/assets/data/data.json'
import EventPoster from '../components/events/EventPoster'

const EventsPage = () => {

  return (
    <div className='flex flex-col mx-6 mb-6'>
      <EventCarousel/>
      <h1 className='my-6 text-3xl font-bold'>Upcoming Events</h1>
      <div className=' w-full xl:w-10/12'>
          {events.map((event)=>{
            return <EventPoster event={event} />
          })}
      </div>
    </div>
  )
}

export default EventsPage
