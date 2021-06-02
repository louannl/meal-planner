import React from 'react';
import { List, Tag } from 'antd';

//TODO: cycle through tags and assign specific colours?
const MealTags = (props) => {
  if (!Array.isArray(props?.tags) || !props?.tags.length) {
    return null;
  }

  return (
    <List
      dataSource={props.tags}
      renderItem={(tag) => {
        return <Tag color="cyan">{tag}</Tag>;
      }}
    ></List>
  );
};

export default MealTags;
