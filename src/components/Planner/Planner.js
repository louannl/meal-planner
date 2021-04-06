import React from 'react';
import { Row, Col } from 'antd';

import PlannerDays from './PlannerDays';
import ShoppingList from '../ShoppingList/ShoppingList';

const data = [
  {
    day: 'Monday',
    meals: [
      {
        name: 'Porridge',
        note: 'made with oat milk',
      },
      {
        name: 'Oreos',
        note: 'made with oat milk',
      },
    ],
  },
  {
    day: 'Tuesday',
    meals: [
      {
        name: 'Chicken and veg',
        note: 'made with oat milk',
      },
    ],
  },
  {
    day: 'Wednesday',
    meals: [
      {
        name: 'Porridge',
        note: 'made with oat milk',
      },
    ],
  },
  {
    day: 'Thursday',
    meals: [
      {
        name: 'Porridge',
        note: 'made with oat milk',
      },
    ],
  },
  {
    day: 'Friday',
    meals: [
      {
        name: 'Porridge',
        note: 'made with oat milk',
      },
    ],
  },
  {
    day: 'Saturday',
    content: 'something something',
    meals: [
      {
        name: 'Porridge',
        note: 'made with oat milk',
        ingredients: {
          oats: {
            ing_name: 'oats',
            ing_amount: '100',
            ing_amount_type: 'grams',
          },
          milk: {
            ing_name: 'oats',
            ing_amount: '100',
            ing_amount_type: 'mililetres',
          },
        },
      },
    ],
  },
  {
    day: 'Sunday',
  },
];

const Planner = () => {
  return (
    <div className="">
      <Row gutter={8}>
        <Col span={18}>
          <PlannerDays data={data} />
        </Col>
        <Col span={5} offset={1}>
          <ShoppingList data={data} />
        </Col>
      </Row>
    </div>
  );
};

export default Planner;
