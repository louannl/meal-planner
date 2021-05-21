import React from 'react';
import { List } from 'antd';
import MealTags from './MealTags';

const MealItems = (props) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={props.meals}
      renderItem={(meal) => {
        return (
          <List.Item value={meal?.id} key={meal?.meal} extra={<div>x</div>}>
            <List.Item.Meta
              style={{ margin: '4px 0' }}
              title={<a href="/">{meal?.meal}</a>}
            />
            <MealTags tags={meal?.tags} />
          </List.Item>
        );
      }}
    ></List>
  );
};

export default MealItems;
