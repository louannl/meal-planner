import React, { useState } from 'react';
import { Form, Select, Input, Divider, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const FormTags = (props) => {
  const mealTags = props.tags.map((tag) => {
    return tag.name;
  });

  const [mealTagState, setMealTagState] = useState({
    items: mealTags,
    name: '',
  });

  const onNameChange = (event) => {
    setMealTagState({
      ...mealTagState,
      name: event.target.value,
    });
  };

  const addItem = () => {
    const { items, name } = mealTagState;
    if (!name) {
      return;
    }
    setMealTagState({
      items: [...items, name],
      name: '',
    });
  };

  let defaultTags = [];

  if (props.default) {
    defaultTags = props.default;
  }

  return (
    <Form.Item
      label="Meal Tags"
      name="mealTags"
      tooltip="Create a custom meal tag to organize your meals by"
      initialValue={defaultTags}
    >
      <Select
        mode="multiple"
        placeholder="Custom meal tag"
        defaultValue={props.default}
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
        {mealTagState.items.map((tag) => (
          <Option key={tag}>{tag}</Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default FormTags;
