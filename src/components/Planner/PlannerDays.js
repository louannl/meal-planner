import React from 'react';
import { Card, List, Skeleton } from 'antd';
import MealItems from './MealItems';

const PlannerDays = (props) => {
  if (props.loading) {
    return <Skeleton active />;
  }

  return (
    <div className="week">
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 5,
        }}
        dataSource={props.meals}
        renderItem={(day) => {
          return (
            <List.Item>
              <Card
                hoverable
                loading={props.loading}
                title={day.name}
                headStyle={{ backgroundColor: '#fafafa' }}
              >
                <MealItems
                  meals={day?.meals}
                  dayId={day?.id}
                  toggleModal={props.toggleModal}
                  selectMeal={props.selectMeal}
                  deleteMealOnDay={props.deleteMealOnDay}
                />
              </Card>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default PlannerDays;
