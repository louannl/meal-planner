import React from 'react';
import { Checkbox, Divider } from 'antd';

const CheckboxGroup = Checkbox.Group;

const ShoppingIngredients = (props) => {
  const plainOptions = props.data.map((ingredients) => {
    return `${ingredients.ingredient} ${ingredients.total} ${ingredients.unit}`;
  });
  const defaultCheckedList = [];

  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

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
  // FIXME: CheckBox group doesn't have much space around it
  return (
    <>
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
    </>
  );
};

export default ShoppingIngredients;
