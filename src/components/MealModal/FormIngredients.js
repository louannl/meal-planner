import React from 'react';
import { Button, Form, Input, InputNumber, Select, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

// const { Option } = Select;
const InputGroup = Input.Group;

const wrapperLayout = {
  wrapperCol: {
    xs: { offset: 0 },
    sm: { offset: 8 },
  },
};

const FormIngredients = (props) => {
  const unitTypes = [];
  props.data.forEach((unit) => {
    unitTypes.push({ value: unit.id, label: unit.symbol });
  });

  let defaultIngredients = [];
  if (props.default) {
    defaultIngredients = props.default.map((ing) => {
      return {
        name: ing.ingredient,
        amount: ing.amount,
        unitType: ing.id,
      };
    });
  }
  //IMPROVEMENT: Can I make this less nested or divvy it up?

  return (
    <Form.List name="ingredients" initialValue={defaultIngredients}>
      {(fields, { add, remove }) => {
        return (
          <React.Fragment>
            {fields.map(({ key, name, fieldKey, ...restField }) => {
              return (
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
                        name={[name, 'name']}
                        fieldKey={[fieldKey, 'name']}
                        rules={[
                          { required: true, message: 'Please enter a name' },
                        ]}
                      >
                        <Input style={{ width: '50%' }} />
                      </Form.Item>
                      <Form.Item
                        noStyle
                        {...restField}
                        name={[name, 'amount']}
                        fieldKey={[fieldKey, 'amount']}
                        rules={[
                          { required: true, message: 'Please enter an amount' },
                        ]}
                      >
                        <InputNumber style={{ width: '30%' }} />
                      </Form.Item>
                      <Form.Item
                        noStyle
                        {...restField}
                        name={[name, 'unitType']}
                        fieldKey={[fieldKey, 'unitId']}
                        rules={[
                          {
                            required: true,
                            message: 'Please enter an amount type',
                          },
                        ]}
                      >
                        <Select options={unitTypes} style={{ width: '20%' }} />
                      </Form.Item>
                    </InputGroup>
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              );
            })}

            <Form.Item {...wrapperLayout}>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Ingredient
              </Button>
            </Form.Item>
          </React.Fragment>
        );
      }}
    </Form.List>
  );
};

export default FormIngredients;
