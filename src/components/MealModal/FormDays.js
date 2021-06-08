import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const FormDays = (props) => {
  const options = [];

  props.data.forEach((day) => {
    options.push(<Option value={day.day_id}>{day.name}</Option>);
  });

  let defaultDays = [];

  if (props.default) {
    defaultDays = props.default;
  }

  return (
    <Form.Item
      name="dayIds"
      label="Days"
      initialValue={defaultDays}
      rules={[{ required: true, message: 'Please select a day' }]}
    >
      <Select mode="multiple" allowClear>
        {options}
      </Select>
    </Form.Item>
  );
};

export default FormDays;
