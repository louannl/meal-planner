import React, { useState, useContext } from 'react';
import { Form, Select, Input, Divider, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import MealContext from '../../store/meal-context';

const { Option } = Select;

const FormTags = (props) => {
  const mealCtx = useContext(MealContext);

  const [mealTagState, setMealTagState] = useState({
    items: [''],
    name: '',
  });

  const onNameChange = (event) => {
    const { items } = mealTagState;
    setMealTagState({
      name: event.target.value,
      items,
    });
  };

  const addItem = () => {
    const { items, name } = mealTagState;
    setMealTagState({
      items: [...items, name || 'New item'],
      name: '',
    });
  };

  const TagOptions = props.tags.map((tag) => (
    <Option value={tag.name} key={tag}>
      {tag.name}
    </Option>
  ));

  return (
    <Form.Item
      label="Meal Tags"
      name="mealTags"
      tooltip="Create a custom meal tag to organize your meals by"
    >
      <Select
        mode="multiple"
        placeholder="Custom meal tag"
        defaultValue={mealCtx.default.meal.mealTags}
        dropdownRender={(menu) => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
              <Input
                style={{ flex: 'auto' }}
                value={mealTagState.name}
                onChange={onNameChange}
              />
              <Button
                style={{
                  flex: 'none',
                  padding: '8px',
                  display: 'block',
                  cursor: 'pointer',
                  border: 'none',
                }}
                onClick={addItem}
              >
                <PlusOutlined /> Add item
              </Button>
            </div>
          </div>
        )}
      >
        {TagOptions}
      </Select>
    </Form.Item>
  );
};

export default FormTags;
