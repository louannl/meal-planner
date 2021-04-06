import React from 'react';
import { Card, List } from 'antd';
import MealItems from './MealItems';
import AddMealModal from '../AddMeal/AddMealModal';

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
        dataSource={props.data}
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
