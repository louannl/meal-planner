import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const FormDays = (props) => {
  const options = [];
  props.data.forEach((day) => {
    options.push(<Option value={day.id}>{day.name}</Option>);
  });

  return (
    <Form.Item
      name="dayIds"
      label="Day"
      rules={[{ required: true, message: 'Please select a day' }]}
    >
      <Select mode="multiple" allowClear>
        {options}
      </Select>
    </Form.Item>
  );
};

export default FormDays;
