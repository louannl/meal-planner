import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';

import FormIngredients from './FormIngredients';
import FormDays from './FormDays';
import FormTags from './FormTags';
import MealContext from '../../store/meal-context';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const MealModal = (props) => {
  const mealCtx = useContext(MealContext);

  const onCreate = (values) => {
    //TODO: Call Put/Post method
    console.log('Received values of form: ', values);
    mealCtx.createMeal(values);
    // setVisible(false);
  };

  const onEdit = (values) => {
    console.log('Received values of form: ', values);
    mealCtx.editMeal(values);
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

  const clearForm = () => {
    form.resetFields();
  };

  const handleEdit = () => {
    form
      .validateFields()
      .then((values, id) => {
        //close model?
        onEdit(values, id);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  const [requiredMark, setRequiredMarkType] = useState('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  let submitBtn = (
    <>
      <Button danger onClick={clearForm}>
        Clear
      </Button>
      <Button
        form="mealForm"
        key="submit"
        htmlType="submit"
        type="primary"
        onClick={handleOk}
      >
        Create
      </Button>
    </>
  );

  if (mealCtx.default.meal.submit === 'edit') {
    submitBtn = (
      <Button
        form="mealForm"
        key="submit"
        htmlType="submit"
        type="primary"
        onClick={handleEdit}
      >
        Edit
      </Button>
    );
  }

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
          submitBtn,
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
            <Input defaultValue={mealCtx.default.meal.mealName} />
          </Form.Item>
          <FormTags tags={props.tags} />
          <FormIngredients data={props.unitTypes} />
        </Form>
      </Modal>
    </>
  );
};

export default MealModal;
