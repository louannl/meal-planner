import React from 'react';
import { List, Tag } from 'antd';

const MealItems = (props) => {
  console.log(props.meals);
  return (
    <List
      dataSource={props.meals}
      renderItem={(meal) => {
        return (
          <List.Item key={meal?.meal}>
            <List.Item.Meta title={<a href="/">{meal?.meal}</a>} />
            {/* cycle through tags */}
            <Tag color="geekblue">{meal?.tags}</Tag>
            <div>x</div>
          </List.Item>
        );
      }}
    ></List>
  );
};

export default MealItems;
