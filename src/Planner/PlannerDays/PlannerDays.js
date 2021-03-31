import React from 'react';
import { Button, Card, Row, List } from 'antd';
import MealItems from './MealItems/MealItems';

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
    <div className="Week">
      <Row>
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
                <Card title={day.day}>
                  <Button type="primary" shape="circle">
                    +
                  </Button>
                  <MealItems meals={day?.meals} />
                </Card>
              </List.Item>
            );
          }}
        />
      </Row>
    </div>
  );
};

export default PlannerDays;
