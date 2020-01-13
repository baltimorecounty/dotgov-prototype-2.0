import React from "react";

const DefaultItem = ({ title, description }) => (
  
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const List = ({
  items = [],
  renderItem = props => <DefaultItem {...props} />
}) => <ul>{items.map(renderItem)} </ul> ;

export default List;
