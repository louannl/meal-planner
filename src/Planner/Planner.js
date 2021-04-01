import React from 'react';
import { Row, Col } from 'antd';

import PlannerDays from './PlannerDays/PlannerDays';
import ShoppingList from './ShoppingList/ShoppingList';

const Planner = () => {
  return (
    <div className="">
      <Row gutter={8}>
        <Col span={18}>
          <PlannerDays />
        </Col>
        <Col span={5} offset={1}>
          <ShoppingList />
        </Col>
      </Row>
    </div>
  );
};

export default Planner;
