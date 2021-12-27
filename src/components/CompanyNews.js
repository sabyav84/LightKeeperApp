import React from "react";
import "../styles/CompanyNewsList.css";

function CompanyNews({ story }) {
  return (
    <div className='story'>
      <a href={story.url} target='_blank'>
        <div>
          {story.image !== "" ? (
            <img src={story.image} alt='logo' />
          ) : (
            <img src='http://via.placeholder.com/640x360' />
          )}
        </div>
        <div>
          <div className='story-header'>
            <p>{story.source}</p>
            <p>{story.date}</p>
          </div>
          <div>
            <p>{story.summary}</p>{" "}
          </div>
        </div>
      </a>
    </div>
  );
}

export default CompanyNews;
