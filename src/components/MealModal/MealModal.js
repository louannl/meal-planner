import React, { useState } from 'react';
import { Modal, Button, Form } from 'antd';

import FormIngredients from './FormIngredients';
import FormDays from './FormDays';
import FormTags from './FormTags';
import FormMealName from './FormMealName';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const MealModal = (props) => {
  const [requiredMark, setRequiredMarkType] = useState('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const {
    visible,
    loading,
    tags,
    days,
    units,
    editMode,
    defaultValues,
    //TODO: Handle error,
    toggleModal,
    createMeal,
    editMeal,
    mealId,
  } = props;

  let { mealDays, mealName, mealTags, mealIngredients } = defaultValues;
  //TODO: Fix Defaults as they don't seem to validate when editing
  const [form] = Form.useForm();

  const clearForm = () => {
    form.resetFields();
  };

  if (defaultValues === []) {
    form.resetFields();
  }

  const onCreate = (values) => {
    //TODO: Handle Okay and errors and refresh
    const meal = {
      mealName: values.mealName,
      dayIds: values.dayIds,
      mealTags: values.mealTags ? values.mealTags : [],
      ingredients: values.ingredients.map((ingredient) => {
        return {
          name: ingredient.name,
          amount: ingredient.amount,
          unitType: ingredient.unitType,
        };
      }),
    };
    createMeal(meal);
    toggleModal();
  };

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

  const onEdit = (values) => {
    const meal = {
      mealName: values.mealName,
      dayIds: values.dayIds,
      mealTags: values.mealTags ? values.mealTags : [],
      ingredients: values.ingredients.map((ingredient) => {
        return {
          name: ingredient.name,
          amount: ingredient.amount,
          unitType: ingredient.unitType,
        };
      }),
    };
    //FIXME: BackEnd doesn't take in non integers!
    editMeal(meal, mealId);
    toggleModal();
  };

  const handleEdit = () => {
    form
      .validateFields()
      .then((values) => {
        //TODO: POPUP?
        onEdit(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    clearForm();
    toggleModal();
  };

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  let ModalTitle = 'Add Meal';

  let submitBtn = (
    <React.Fragment>
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
    </React.Fragment>
  );

  if (editMode) {
    ModalTitle = 'Edit Meal';
    submitBtn = (
      <React.Fragment>
        <Button danger onClick={clearForm}>
          Clear
        </Button>
        <Button
          form="mealForm"
          key="submit"
          htmlType="submit"
          type="primary"
          onClick={handleEdit}
        >
          Edit
        </Button>
      </React.Fragment>
    );
  }

  if (loading) {
    return (
      <Modal
        title="Loading"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    );
  }

  return (
    <Modal
      title={ModalTitle}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
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
        //FIXME: DO I NEED onFinish?
        onFinish={onFinish}
        initialValues={{
          requiredMarkValue: requiredMark,
        }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
      >
        <FormDays data={days} default={mealDays} />
        <FormMealName default={mealName} />
        <FormTags tags={tags} default={mealTags} />
        <FormIngredients data={units} default={mealIngredients} />
      </Form>
    </Modal>
  );
};

export default MealModal;
