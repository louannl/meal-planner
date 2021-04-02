import React from 'react';
import { Button, Form, Input, InputNumber, Select, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

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
              <Form.Item
                {...restField}
                name={[name, 'Ingredient']}
                fieldKey={[fieldKey, 'Ingredient']}
                label="Ingredient list"
              >
                <Input.Group compact>
                  <Input style={{ width: '50%' }} placeholder="ingredient" />
                  <InputNumber style={{ width: '30%' }} placeholder="100" />
                  <Select defaultValue="grams" style={{ width: '20%' }}>
                    <Option value="grams">g</Option>
                    <Option value="milliliters">ml</Option>
                  </Select>
                </Input.Group>
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
