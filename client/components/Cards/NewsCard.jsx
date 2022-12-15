import moment from "moment/moment";
import Link from "next/link";

const NewsCard = ({ newsData }) => {
  return (
    <Link href={`/news/${newsData.newsId}`}>
      <div className="border shadow-lg rounded-md">
        <img
          alt="event banner"
          src={newsData.imgUrl}
          className="w-full h-36 object-cover rounded-tr-md rounded-tl-md"
        />
        <div className="py-2 px-4 space-y-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold max-w-md">
              {newsData.title}
            </h1>
            <p className="text-sm font-semibold">
              {moment(newsData.createdAt).calendar()}
            </p>
          </div>
          <p className="text-sm text-gray-700">{newsData.content}</p>
          <p className="text-right">~{newsData.author}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
