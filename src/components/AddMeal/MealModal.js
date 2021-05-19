import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import FormIngredients from './FormIngredients';
import FormDays from './FormDays';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const MealModal = (props) => {
  const [mealTagState, setMealTagState] = useState({
    items: [''],
    name: '',
  });

  const onCreate = (values) => {
    //TODO: Call Put/Post method
    console.log('Received values of form: ', values);
    // setVisible(false);
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
  //TODO: And clear form button

  return (
    <>
      <Modal
        title="Add Meal"
        visible={props.visible}
        onOk={handleOk}
        onCancel={props.toggleModal}
        footer={[
          <Button key="back" onClick={props.toggleModal}>
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
          <FormDays data={props.days} />
          <Form.Item
            label="Meal Name"
            name="mealName"
            required
            tooltip="This is a required field"
            rules={[{ required: true, message: 'Please enter a name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Meal Tags"
            name="mealTags"
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
              {props.tags.map((tag) => (
                <Option value={tag.id} key={tag}>
                  {tag.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <FormIngredients data={props.unitTypes} />
          {/* FIXME: <Form.Item label="Comment" name="comment">
            <Input.TextArea />
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
};

export default MealModal;
