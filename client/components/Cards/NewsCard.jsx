import moment from "moment/moment";

const EventCard = ({ newsData }) => {
  return (
    <div className="border shadow-lg rounded-md">
      <img
        alt="event banner"
        src={newsData.img}
        className="w-full h-36 object-cover rounded-tr-md rounded-tl-md"
      />
      <div className="py-2 px-4 space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold max-w-md">{newsData.title}</h1>
          <p className="text-sm font-semibold">
            {moment(newsData.date).calendar()}
          </p>
        </div>
        <p className="text-sm text-gray-700">{newsData.desc}</p>
        <p className="text-right">~{newsData.author}</p>
      </div>
    </div>
  );
};

export default EventCard;
