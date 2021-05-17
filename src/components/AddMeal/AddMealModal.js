import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import FormIngredients from './FormIngredients';
import FormDays from './FormDays';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AddMealModal = (props) => {
  const [visible, setVisible] = useState(false);
  const [mealTagState, setMealTagState] = useState({
    items: [''],
    name: '',
  });

  const showModal = () => {
    setVisible(true);
  };

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onCreate(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setVisible(false);
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

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  const [requiredMark, setRequiredMarkType] = useState('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const { Option } = Select;

  return (
    <>
      <Button type="primary" shape="circle" onClick={showModal}>
        +
      </Button>
      <Modal
        title="Add Meal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            form="mealForm"
            key="submit"
            htmlType="submit"
            type="primary"
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <Form
          id="mealForm"
          form={form}
          name="Edit_Meal_Item"
          {...layout}
          onFinish={onFinish}
          initialValues={{
            requiredMarkValue: requiredMark,
          }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          <FormDays data={props.data.days} />
          <Form.Item
            label="Meal Name"
            name="meal_name"
            required
            tooltip="This is a required field"
            rules={[{ required: true, message: 'Please enter a name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Meal Tags"
            name="meal_tags"
            tooltip="Create a custom meal tag to organise your meals by"
          >
            <Select
              mode="multiple"
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
              {props.data.tags.map((tag) => (
                <Option value={tag.id} key={tag}>
                  {tag.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <FormIngredients />
          <Form.Item label="Comment" name="comment">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddMealModal;
