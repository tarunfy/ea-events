import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";

const NewsDetails = () => {
  const [news, setNews] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getNewsDetails() {
      const res = await fetch(`http://localhost:4000/api/news/${id}`);
      const data = await res.json();
      setNews(data);
    }

    getNewsDetails();
  });

  if (!news) return <div>Loading...</div>;

  return (
    <div className="min-h-screen max-w-[960px] mx-auto mt-12">
      <div className="relative rounded-md">
        <img
          src={news.imgUrl}
          alt={news.title}
          className="w-full h-[300px] object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black/30 rounded-md"></div>
      </div>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold mt-5 mb-2 capitalize">
          {news.title}
        </h1>
        <span className="font-medium">{moment(news.createdAt).calendar()}</span>
      </div>
      <p className="text-xl font-normal text-gray-500">{news.content}</p>
      <div className="flex justify-end w-full">
        <p className="text-lg">
          <span className="text-gray-600 font-medium font-serif">
            ~ {news.author}
          </span>
        </p>
      </div>
    </div>
  );
};

export default NewsDetails;
