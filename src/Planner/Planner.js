import React from 'react';
import { Row, Col } from 'antd';

import PlannerDays from './PlannerDays/PlannerDays';
import ShoppingList from './ShoppingList/ShoppingList';

const Planner = () => {
  return (
    <div className="">
      <Row>
        <Col span={18}>
          <PlannerDays />
        </Col>
        <Col span={6}>
          <ShoppingList />
        </Col>
      </Row>
    </div>
  );
};

export default Planner;
