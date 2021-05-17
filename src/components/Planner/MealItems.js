import React from 'react';
import { List } from 'antd';
import MealTags from './MealTags';

const MealItems = (props) => {
  return (
    <List
      dataSource={props.meals}
      renderItem={(meal) => {
        return (
          <List.Item key={meal?.meal}>
            <List.Item.Meta title={<a href="/">{meal?.meal}</a>} />
            <MealTags tags={meal?.tags} />
            <div>x</div>
          </List.Item>
        );
      }}
    ></List>
  );
};

export default MealItems;
