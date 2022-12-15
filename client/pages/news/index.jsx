import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NewsCard from "../../components/Cards/NewsCard";
import AddNews from "../../components/Modal/AddNews";
import Navbar from "../../components/Navbar";

const news = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const res = await fetch("http://localhost:4000/api/news/");
      const news = await res.json();

      setNews(news.data);
    }

    fetchNews();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-10 py-10 space-y-5">
        <div className="flex items-center justify-between w-full">
          <Heading>All EA News</Heading>
          <AddNews />
        </div>
        <div className="grid grid-cols-3 gap-10">
          {news.map((n) => (
            <NewsCard key={n.newsId} newsData={n} />
          ))}
        </div>
      </div>
    </>
  );
};

export default news;
