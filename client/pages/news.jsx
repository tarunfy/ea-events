import { Heading } from "@chakra-ui/react";
import NewsCard from "../components/Cards/NewsCard";
import Navbar from "../components/Navbar";
import { newsData } from "../data/news";

const news = () => {
  return (
    <>
      <Navbar />
      <div className="mx-10 py-10 space-y-5">
        <Heading>All EA News</Heading>
        <div className="grid grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((ele) => (
            <NewsCard key={ele} newsData={newsData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default news;
