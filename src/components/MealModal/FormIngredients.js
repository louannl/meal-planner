import React from 'react';
import { Button, Divider, Form, Input, InputNumber, Select, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const InputGroup = Input.Group;

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
    <React.Fragment>
      <Divider>Ingredients</Divider>
      <Form.List
        name="ingredients"
        initialValue={defaultIngredients}
        rules={[{ required: true, message: 'Please input an ingredient!' }]}
      >
        {(fields, { add, remove }) => {
          return (
            <React.Fragment>
              {fields.map(({ key, name, fieldKey, ...restField }) => {
                return (
                  <Space
                    key={key}
                    style={{
                      display: 'flex',
                    }}
                  >
                    <InputGroup compact style={{ marginBottom: '24px' }}>
                      <Form.Item
                        noStyle
                        {...restField}
                        name={[name, 'name']}
                        fieldKey={[fieldKey, 'name']}
                        rules={[
                          {
                            required: true,
                            message: 'Please enter a name or delete this field',
                          },
                        ]}
                      >
                        <Input
                          placeholder="Ingredient name"
                          style={{ width: '45%' }}
                        />
                      </Form.Item>
                      <Form.Item
                        noStyle
                        {...restField}
                        name={[name, 'amount']}
                        fieldKey={[fieldKey, 'amount']}
                        rules={[
                          {
                            required: true,
                            message: 'Please enter an amount',
                          },
                        ]}
                      >
                        <InputNumber
                          placeholder="100"
                          style={{ width: '25%' }}
                          min={1}
                        />
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
                        <Select
                          placeholder="g"
                          options={unitTypes}
                          style={{ width: '20%' }}
                        />
                      </Form.Item>
                      <Form.Item style={{ marginBottom: '0px' }}>
                        {fields.length > 0 ? (
                          <MinusCircleOutlined
                            style={{
                              fontSize: '24px',
                              width: '10%',
                              marginLeft: '6px',
                            }}
                            onClick={() => remove(name)}
                          />
                        ) : null}
                      </Form.Item>
                    </InputGroup>
                  </Space>
                );
              })}

              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Ingredient
              </Button>
            </React.Fragment>
          );
        }}
      </Form.List>
    </React.Fragment>
  );
};

export default FormIngredients;
