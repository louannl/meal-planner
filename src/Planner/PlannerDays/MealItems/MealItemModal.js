import React, { useState } from 'react';
import { Modal, Button, Form, Input, InputNumber, Select, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const MealItemModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mealTagState, setMealTagState] = useState({
    items: [''],
    name: '',
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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

  const { Option } = Select;

  return (
    <>
      <Button type="primary" shape="circle" onClick={showModal}>
        +
      </Button>
      <Modal
        title="Add Meal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form name="Edit_Meal_Item">
          <Form.Item label="Day">
            <Input />
          </Form.Item>
          <Form.Item label="Meal Name">
            <Input />
          </Form.Item>

          <Form.Item label="Meal Tag">
            <Select
              placeholder="Custom meal tag"
              dropdownRender={(menu) => (
                <div>
                  {menu}
                  <Divider style={{ margin: '4px 0' }} />
                  <div
                    style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}
                  >
                    <Input
                      style={{ flex: 'auto' }}
                      value={mealTagState.name}
                      onChange={onNameChange}
                    />
                    <a
                      style={{
                        flex: 'none',
                        padding: '8px',
                        display: 'block',
                        cursor: 'pointer',
                      }}
                      onClick={addItem}
                    >
                      <PlusOutlined /> Add item
                    </a>
                  </div>
                </div>
              )}
            >
              {mealTagState.items.map((item) => (
                <Option key={item}>{item}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Tag">
            <Select defaultValue="Option1">
              <Option value="Option1">Meal</Option>
              <Option value="Option2">Snack</Option>
              <Option value="Option3">Dessert</Option>
            </Select>
          </Form.Item>
          <Input.Group compact>
            <Input style={{ width: '50%' }} placeholder="ingredient" />
            <InputNumber />
            <Select defaultValue="grams">
              <Option value="grams">g</Option>
              <Option value="milliliters">ml</Option>
            </Select>
          </Input.Group>
          <Form.Item label="Comment">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default MealItemModal;
