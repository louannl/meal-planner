import React from 'react';
import { List } from 'antd';

const ShoppingIngredients = (props) => {
  return (
    <List
      dataSource={props.data}
      renderItem={(ingredients) => {
        return (
          <List.Item key={ingredients?.ingredient}>
            <List.Item.Meta
              title={
                <a href="/">
                  {ingredients?.ingredient} {ingredients?.total}{' '}
                  {ingredients?.unit}
                </a>
              }
            />
          </List.Item>
        );
      }}
    ></List>
  );
};

export default ShoppingIngredients;
