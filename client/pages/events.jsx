import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import EventCard from "../components/Cards/EventCard";
import AddEvent from "../components/Modal/AddEvent";
import Navbar from "../components/Navbar";

const events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch("http://localhost:4000/api/events/");
      const events = await res.json();

      setEvents(events.data);
    }

    fetchEvents();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-10 py-10 space-y-5">
        <div className="flex items-center justify-between w-full">
          <Heading>All EA Events</Heading>
          <AddEvent />
        </div>
        <div className="grid grid-cols-3 gap-8">
          {events.map((e) => (
            <EventCard key={e.eventId} eventData={e} />
          ))}
        </div>
      </div>
    </>
  );
};

export default events;
