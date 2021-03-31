import React from 'react';
import { Button, Card, Row, List } from 'antd';

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
      <div className="Day">
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
                    <List
                      dataSource={day?.meals}
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
                  </Card>
                </List.Item>
              );
            }}
          />
        </Row>
      </div>
    </div>
  );
};

export default PlannerDays;
