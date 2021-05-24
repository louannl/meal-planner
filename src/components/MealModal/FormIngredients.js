import React, { useContext } from 'react';
import { Button, Form, Input, InputNumber, Select, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

import MealContext from '../../store/meal-context';

const { Option } = Select;
const InputGroup = Input.Group;

const FormIngredients = (props) => {
  const mealCtx = useContext(MealContext);

  const unitTypes = [];
  props.data.forEach((unit) => {
    unitTypes.push(<Option value={unit.id}>{unit.symbol}</Option>);
  });

  // FIXME: default ingredients come out with no required rule?
  let defaultIngredients = mealCtx.default.meal.ingredients.map((ing) => {
    return {
      name: ing.ingredient,
      amount: ing.amount,
      unitType: ing.unit,
    };
  });

  return (
    <Form.List name="ingredients" initialValue={defaultIngredients}>
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
                    name={[name, 'name']}
                    fieldKey={[fieldKey, 'name']}
                    rules={[{ required: true, message: 'Please enter a name' }]}
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
                    fieldKey={[fieldKey, 'unitType']}
                    rules={[
                      {
                        required: true,
                        message: 'Please enter an amount type',
                      },
                    ]}
                  >
                    <Select style={{ width: '20%' }}>{unitTypes}</Select>
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
