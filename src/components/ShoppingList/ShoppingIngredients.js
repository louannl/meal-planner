import React, { useState } from 'react';
import { Card, Checkbox, Col, Row } from 'antd';

const CheckboxGroup = Checkbox.Group;

const ShoppingIngredients = (props) => {
  const defaultCheckedList = [];

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const plainOptions = props.listItems.map((ingredients) => {
    return ingredients.ingredient;
  });

  const ingredientList = props.listItems.map((ingredients) => {
    let text = `${ingredients.total} ${ingredients.unit} of ${ingredients.ingredient}`;
    if (ingredients.unit === 'Amount') {
      text = `${ingredients.total} ${ingredients.ingredient}`;
    }
    return (
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Checkbox
          style={{ width: '100%', textAlign: 'left' }}
          value={ingredients.ingredient}
        >
          {text}
        </Checkbox>
      </Col>
    );
  });

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <Card
      loading={props.loading}
      title="Shopping List"
      extra={
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Check all
        </Checkbox>
      }
      headStyle={{ backgroundColor: '#fafafa' }}
    >
      <CheckboxGroup value={checkedList} onChange={onChange}>
        <Row gutter={[16, 24]}>{ingredientList}</Row>
      </CheckboxGroup>
    </Card>
  );
};

export default ShoppingIngredients;
