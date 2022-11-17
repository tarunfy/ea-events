import { Heading } from "@chakra-ui/react";
import EventCard from "../components/Cards/EventCard";
import AddEvent from "../components/Modal/AddEvent";
import Navbar from "../components/Navbar";
import { eventData } from "../data/event";

const events = () => {
  return (
    <>
      <Navbar />
      <div className="mx-10 py-10 space-y-5">
        <div className="flex items-center justify-between w-full">
          <Heading>All EA Events</Heading>
          <AddEvent />
        </div>
        <div className="grid grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((ele) => (
            <EventCard key={ele} eventData={eventData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default events;
