import React from 'react';
import { Button, Form, Input, InputNumber, Select, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const InputGroup = Input.Group;

const FormIngredients = () => {
  return (
    <Form.List name="ingredients">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, fieldKey, ...restField }) => (
            <Space
              key={key}
              style={{
                display: 'flex',
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item label="Ingredient list">
                <InputGroup compact>
                  <Form.Item
                    noStyle
                    {...restField}
                    name={[name, 'ing_name"']}
                    fieldKey={[fieldKey, 'ing_name"']}
                    rules={[{ required: true, message: 'Please enter a name' }]}
                  >
                    <Input style={{ width: '50%' }} />
                  </Form.Item>
                  <Form.Item
                    noStyle
                    {...restField}
                    name={[name, 'ing_amount"']}
                    fieldKey={[fieldKey, 'ing_amount"']}
                    rules={[
                      { required: true, message: 'Please enter an amount' },
                    ]}
                  >
                    <InputNumber style={{ width: '30%' }} />
                  </Form.Item>
                  <Form.Item
                    noStyle
                    {...restField}
                    name={[name, 'ing_amount_type"']}
                    fieldKey={[fieldKey, 'ing_amount_type"']}
                    rules={[
                      {
                        required: true,
                        message: 'Please enter an amount type',
                      },
                    ]}
                  >
                    <Select style={{ width: '20%' }}>
                      <Option value="grams">g</Option>
                      <Option value="milliliters">ml</Option>
                      <Option value="amount">Amo.</Option>
                    </Select>
                  </Form.Item>
                </InputGroup>
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add Ingredient
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default FormIngredients;
