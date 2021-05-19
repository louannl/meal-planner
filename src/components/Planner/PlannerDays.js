import React from 'react';
import { Card, List, Button } from 'antd';
import MealItems from './MealItems';

const PlannerDays = (props) => {
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
        dataSource={props.data.meals}
        renderItem={(day) => {
          return (
            <List.Item>
              {/* Basically MEal model needs to be replaced with button only */}
              <Card
                title={day.name}
                extra={
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={props.toggleModal}
                  >
                    +
                  </Button>
                }
              >
                {/* <Card title={day.name} extra={<MealModal />}> */}
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
