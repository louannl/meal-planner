import React, { useContext } from 'react';
import { Form, Select } from 'antd';
import MealContext from '../../store/meal-context';

const { Option } = Select;

const FormDays = (props) => {
  const mealCtx = useContext(MealContext);

  const options = [];

  props.data.forEach((day) => {
    options.push(<Option value={day.day_id}>{day.name}</Option>);
  });

  return (
    <Form.Item
      name="dayIds"
      label="Day"
      rules={[{ required: true, message: 'Please select a day' }]}
    >
      <Select
        mode="multiple"
        defaultValue={mealCtx.default.meal.days}
        allowClear
      >
        {options}
      </Select>
    </Form.Item>
  );
};

export default FormDays;
