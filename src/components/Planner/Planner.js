import React from 'react';
import { Row, Col } from 'antd';

import PlannerDays from './PlannerDays';
import Modal from '../../containers/Modal/Modal';
import ShoppingIngredients from '../ShoppingList/ShoppingIngredients';

const Planner = (props) => {
  return (
    <Row gutter={8}>
      <Modal
        visible={props.visible}
        days={props.days}
        toggleModal={props.toggleModal}
        mealId={props.selectedMeal}
        updateMeals={props.updateMeals}
      />
      <Col span={18}>
        <PlannerDays
          loading={props.loading}
          meals={props.meals}
          error={props.error}
          selectMeal={props.selectMeal}
          toggleModal={props.toggleModal}
          deleteMeal={props.deleteMeal}
        />
      </Col>
      <Col span={5} offset={1}>
        <ShoppingIngredients
          listItems={props.ingredients}
          isLoading={props.Loading}
          error={props.error}
        />
      </Col>
    </Row>
  );
};

export default Planner;
