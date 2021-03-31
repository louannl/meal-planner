import React from 'react';
import { List } from 'antd';

const MealItems = (props) => {
  return (
    <List
      dataSource={props.meals}
      renderItem={(meal) => {
        return (
          <List.Item key={meal?.name}>
            <List.Item.Meta
              title={<a href="/">{meal?.name}</a>}
              description={meal?.note}
            />
            <div>x</div>
          </List.Item>
        );
      }}
    ></List>
  );
};

export default MealItems;
