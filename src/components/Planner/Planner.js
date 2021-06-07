import React from 'react';
import { Row, Col, BackTop } from 'antd';

import styles from './Planner.module.css';
import PlannerDays from './PlannerDays';
import Modal from '../../containers/Modal/Modal';
import ShoppingIngredients from '../ShoppingList/ShoppingIngredients';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import PlannerMenu from './PlannerMenu';

const Planner = (props) => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <PlannerMenu
          selectMeal={props.selectMeal}
          toggleModal={props.toggleModal}
        />
      </Header>
      <Content style={{ marginTop: 64 }}>
        <Row gutter={[8, 8]} className={styles.planner}>
          <Modal
            visible={props.visible}
            days={props.days}
            toggleModal={props.toggleModal}
            mealId={props.selectedMeal}
            updateMeals={props.updateMeals}
          />
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <PlannerDays
              loading={props.loading}
              meals={props.meals}
              error={props.error}
              selectMeal={props.selectMeal}
              toggleModal={props.toggleModal}
              deleteMeal={props.deleteMeal}
            />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <ShoppingIngredients
              listItems={props.ingredients}
              loading={props.loading}
              error={props.error}
            />
          </Col>
        </Row>
        <BackTop />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2021 Created by Louann Loizou using Ant Design
      </Footer>
    </Layout>
  );
};

export default Planner;
