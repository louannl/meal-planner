import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const FormDays = () => {
  return (
    <Form.Item name="day" label="Day" required>
      <Select defaultValue="">
        <Option value="Monday">Monday</Option>
        <Option value="Tuesday">Tuesday</Option>
        <Option value="Wednesday">Wednesday</Option>
        <Option value="Thursday">Thursday</Option>
        <Option value="Friday">Friday</Option>
        <Option value="Saturday">Saturday</Option>
        <Option value="Sunday">Sunday</Option>
      </Select>
    </Form.Item>
  );
};

export default FormDays;
