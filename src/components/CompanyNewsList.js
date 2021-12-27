import React from "react";
import "../styles/CompanyNewsList.css";
import CompanyNews from "./CompanyNews";

function CompanyNewsList({ news }) {
  return (
    <div className='company-news-list'>
      <h2>News</h2>
      <div className='all-news'>
        {news.map((story) => (
          <CompanyNews key={story.id} story={story} />
        ))}
        {console.log(news)}
      </div>
    </div>
  );
}

export default CompanyNewsList;
