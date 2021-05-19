import React from 'react';
import { Row, Col } from 'antd';

import PlannerDays from './PlannerDays';
import ShoppingList from '../ShoppingList/ShoppingList';
import MealModal from '../MealModal/MealModal';

const Planner = (props) => {
  return (
    <div className="">
      <Row gutter={8}>
        <MealModal
          days={props.data.days}
          tags={props.data.tags}
          unitTypes={props.data.unitTypes}
          visible={props.data.visible}
          toggleModal={props.toggleModal}
        />
        <Col span={18}>
          <PlannerDays data={props.data} toggleModal={props.toggleModal} />
        </Col>
        <Col span={5} offset={1}>
          <ShoppingList data={props.data.ingredients} />
        </Col>
      </Row>
    </div>
  );
};

export default Planner;
