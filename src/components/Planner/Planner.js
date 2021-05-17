import React from 'react';
import { Row, Col } from 'antd';

import PlannerDays from './PlannerDays';
import ShoppingList from '../ShoppingList/ShoppingList';

const Planner = (props) => {
  return (
    <div className="">
      <Row gutter={8}>
        <Col span={18}>
          <PlannerDays data={props.data} />
        </Col>
        <Col span={5} offset={1}>
          <ShoppingList data={props.data.ingredients} />
        </Col>
      </Row>
    </div>
  );
};

export default Planner;
