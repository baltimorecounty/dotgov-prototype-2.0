import React from "react";
import { DateNewsCard } from "@baltimorecounty/dotgov-components";

const NewsGroup = props => {
  const { newsItems = [] } = props;
  return (
    <React.Fragment>
      {newsItems.map(newsItem => (
        <div key={newsItem.id} className="col-xl-3 col-lg-6">
          <DateNewsCard
            date={newsItem.date}
            headline={newsItem.headline}
            snippet={newsItem.snippet}
            link={newsItem.link}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default NewsGroup;
