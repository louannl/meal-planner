import React from 'react';
import { Card, List } from 'antd';
import ShoppingIngredients from './ShoppingIngredients';

const ShoppingList = (props) => {
  return (
    <List>
      <Card title="Shopping List">
        <ShoppingIngredients data={props.data} />
      </Card>
    </List>
  );
};

export default ShoppingList;
