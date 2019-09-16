import React from 'react';
import {IconHeading} from '@baltimorecounty/dotgov-components';
import NewsGroup from "./NewsGroup";
const News = [
    {
      id: 1,
      date:"07/29/2019",
      headline:"Baltimore County Marks Progress in Rehabilitation of Winters lane Homes",
      snippet:"Today Baltimore County officials joined with community and...",
      link:"//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
    },
    {
      id: 2,
      date:"07/29/2019",
      headline:"Baltimore County Marks Progress in Rehabilitation of Winters lane Homes",
      snippet:"Today Baltimore County officials joined with community and...",
      link:"//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
    },
    {
      id: 3,
      date:"07/29/2019",
      headline:"Baltimore County Marks Progress in Rehabilitation of Winters lane Homes",
      snippet:"Today Baltimore County officials joined with community and...",
      link:"//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
    },
    {
      id: 4,
      date:"07/29/2019",
      headline:"Baltimore County Marks Progress in Rehabilitation of Winters lane Homes",
      snippet:"Today Baltimore County officials joined with community and...",
      link:"//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
    }
  ];

  const NewsRoom = () => (
    <React.Fragment>
    <IconHeading text="Latest Headlines" icon="fa fa-newspaper" />
      <NewsGroup Newsitems={News} />
    </React.Fragment>
  );
  
  
export default NewsRoom;
