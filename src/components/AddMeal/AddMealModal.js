import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import FormIngredients from './FormIngredients';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AddMealModal = () => {
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
        <Form name="Edit_Meal_Item" {...layout}>
          <Form.Item label="Day">
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
          <FormIngredients />
          <Form.Item label="Comment">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddMealModal;
