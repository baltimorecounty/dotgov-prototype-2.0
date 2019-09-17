import React from "react";
import NewsGroup from "./NewsGroup";

const news = [
  {
    id: 1,
    date: "07/29/2019",
    headline: "Baltimore County Marks Progress in Rehabilitation",
    snippet: "Today Baltimore County officials joined with community and...",
    link: "//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
  },
  {
    id: 2,
    date: "07/29/2019",
    headline:
      "Baltimore County Marks Progress in Rehabilitation of Winters lane Homes",
    snippet: "Today Baltimore County officials joined with community and...",
    link: "//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
  },
  {
    id: 3,
    date: "07/29/2019",
    headline:
      "Baltimore County Marks Progress in Rehabilitation of Winters lane Homes",
    snippet: "Today...",
    link: "//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
  },
  {
    id: 4,
    date: "07/29/2019",
    headline:
      "Baltimore County Marks Progress in Rehabilitation of Winters lane Homes",
    snippet: "Today Baltimore County officials joined with community and...",
    link: "//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
  }
];

const NewsRoom = () => <NewsGroup newsItems={news} />;

export default NewsRoom;
