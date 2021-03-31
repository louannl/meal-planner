import React from 'react';
import { Button, Card, Row, List } from 'antd';

const data = [
  {
    title: 'Monday',
  },
  {
    title: 'Tuesday',
  },
  {
    title: 'Wednesday',
  },
  {
    title: 'Thursday',
  },
  {
    title: 'Friday',
  },
  {
    title: 'Saturday',
    content: 'something something',
  },
  {
    title: 'Sunday',
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
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>
                  <Button type="primary" shape="circle">
                    +
                  </Button>
                  {item.content}
                </Card>
              </List.Item>
            )}
          />
        </Row>
      </div>
    </div>
  );
};

export default PlannerDays;
