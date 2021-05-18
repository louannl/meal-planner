import React from 'react';
import { Card, List } from 'antd';
import MealItems from './MealItems';
import { MealModal } from '../../containers/MealModal/MealModal';

//FIXME: Doesn't seem right to have MealModal in here, structure wise
//FIXME: Modal state is called 7 times for 7 days, this shouldn't need to happen
//Solution? Use a button instead and have a listener so onclick is used?

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
              <Card title={day.name} extra={<MealModal />}>
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
