import React from 'react';
import ShoppingIngredients from './ShoppingIngredients';

const ShoppingList = (props) => {
  return (
    <ShoppingIngredients
      loading={props.loading}
      error={props.error}
      listItems={props.listItems}
    />
  );
};

export default ShoppingList;
