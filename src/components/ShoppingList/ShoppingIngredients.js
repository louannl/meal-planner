import React, { useState } from 'react';
import { Checkbox, Col, Divider, Row, Skeleton } from 'antd';

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
      <Col span={8}>
        <Checkbox value={ingredients.ingredient}>{text}</Checkbox>
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

  let content = (
    <React.Fragment>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup
        value={checkedList}
        onChange={onChange}
        style={{ width: '100%' }}
      >
        <Row gutter={[16, 24]}>{ingredientList}</Row>
      </CheckboxGroup>
    </React.Fragment>
  );

  if (props.loading) {
    content = <Skeleton active />;
  }

  return <React.Fragment>{content}</React.Fragment>;
};

export default ShoppingIngredients;
