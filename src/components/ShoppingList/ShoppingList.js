import React from 'react';
import { Card, List } from 'antd';
import ShoppingIngredients from './ShoppingIngredients';

const ShoppingList = (props) => {
  return (
    <List>
      <Card title="Shopping List">
        <ShoppingIngredients
          isLoading={props.Loading}
          error={props.error}
          listItems={props.listItems}
        />
      </Card>
    </List>
  );
};

export default ShoppingList;
