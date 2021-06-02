import React from 'react';
import { Card, List, Button, Skeleton } from 'antd';
import MealItems from './MealItems';

const PlannerDays = (props) => {
  if (props.loading) {
    return <Skeleton active />;
  }

  const handleNewMeal = async () => {
    await props.selectMeal();
    await props.toggleModal();
  };

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
        dataSource={props.meals}
        renderItem={(day) => {
          return (
            <List.Item>
              <Card
                title={day.name}
                extra={
                  <Button type="primary" shape="circle" onClick={handleNewMeal}>
                    +
                  </Button>
                }
              >
                <MealItems
                  meals={day?.meals}
                  toggleModal={props.toggleModal}
                  selectMeal={props.selectMeal}
                  deleteMeal={props.deleteMeal}
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
