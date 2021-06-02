import React, { useState } from 'react';
import { Checkbox, Divider, Skeleton } from 'antd';

const CheckboxGroup = Checkbox.Group;

const ShoppingIngredients = (props) => {
  const plainOptions = props.listItems.map((ingredients) => {
    return `${ingredients.ingredient} ${ingredients.total} ${ingredients.unit}`;
  });
  const defaultCheckedList = [];

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

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
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </React.Fragment>
  );

  if (props.isLoading) {
    content = <Skeleton active />;
  }

  // FIXME: CheckBox group doesn't have much space around it
  return <React.Fragment>{content}</React.Fragment>;
};

export default ShoppingIngredients;
