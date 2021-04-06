import React from 'react';
import { List } from 'antd';

const ShoppingIngredients = (props) => {
  const check = () => {
    console.log(props);
  };

  check();
  return (
    <List
      dataSource={props.ingredients}
      renderItem={(ingredients) => {
        return (
          <List.Item key={ingredients?.ing_name}>
            <List.Item.Meta title={<a href="/">{ingredients?.ing_name}</a>} />
            <div>x</div>
          </List.Item>
        );
      }}
    ></List>
  );
};

export default ShoppingIngredients;
