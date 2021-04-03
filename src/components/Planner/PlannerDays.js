import React from 'react';
import { Card, List } from 'antd';
import MealItems from './MealItems';
import AddMealModal from '../AddMeal/AddMealModal';

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
      },
    ],
  },
  {
    day: 'Sunday',
  },
];

const PlannerDays = () => {
  return (
    <div className="week">
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={data}
        renderItem={(day) => {
          return (
            <List.Item>
              <Card title={day.day} extra={<AddMealModal />}>
                <MealItems meals={day?.meals} />
              </Card>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default PlannerDays;
