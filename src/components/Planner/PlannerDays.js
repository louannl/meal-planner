import React from 'react';
import { Card, List, Button, Skeleton } from 'antd';
import MealItems from './MealItems';
import { PlusOutlined } from '@ant-design/icons';

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
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 5,
        }}
        dataSource={props.meals}
        renderItem={(day) => {
          return (
            <List.Item>
              <Card
                loading={props.loading}
                title={day.name}
                extra={
                  <Button
                    icon={<PlusOutlined />}
                    type="primary"
                    onClick={handleNewMeal}
                  />
                }
              >
                <MealItems
                  meals={day?.meals}
                  dayId={day?.id}
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
