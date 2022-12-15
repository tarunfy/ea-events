import moment from "moment/moment";
import { AiOutlineClockCircle } from "react-icons/ai";
import BookTicket from "../Modal/BookTicket";

const EventCard = ({ eventData }) => {
  return (
    <div className="border shadow-lg rounded-md">
      <div className="py-6 px-3 space-y-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl tracking-tighter font-semibold">
            {eventData.title}
          </h1>
          <p className="text-xs font-semibold">
            {moment(eventData.event_date).calendar()}
          </p>
        </div>
        <p className="text-[0.9rem] text-gray-700">{eventData.description}</p>
      </div>

      <div className="flex justify-between items-center py-6 px-3">
        <div className="flex items-center justify-between space-x-3">
          <h4 className="text-green-500 font-medium">${eventData.price}</h4>
          <h4 className="flex items-center font-medium">
            <AiOutlineClockCircle className="mr-1" />
            {eventData.event_from} - {eventData.event_to}
          </h4>
        </div>
        <BookTicket eventData={eventData} />
      </div>
    </div>
  );
};

export default EventCard;
