import React from 'react';
import { Modal, Button, Form, Spin } from 'antd';

import FormIngredients from './FormIngredients';
import FormDays from './FormDays';
import FormTags from './FormTags';
import FormMealName from './FormMealName';

const layout = {
  labelCol: {
    xs: { span: 0 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 22 },
    sm: { span: 16 },
  },
};

const MealModal = (props) => {
  const {
    visible,
    loading,
    tags,
    days,
    units,
    editMode,
    defaultValues,
    error,
    toggleModal,
    createMeal,
    editMeal,
    deleteMeal,
    mealId,
  } = props;

  let { mealDays, mealName, mealTags, mealIngredients } = defaultValues;

  const [form] = Form.useForm();

  const clearForm = () => {
    form.resetFields();
  };

  if (defaultValues === []) {
    form.resetFields();
  }

  const onCreate = (values) => {
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
    editMeal(meal, mealId);
    toggleModal();
  };

  const handleEdit = () => {
    form
      .validateFields()
      .then((values) => {
        onEdit(values);
      })
      .catch((info) => {
        //TODO: Handle
        console.log('Validate Failed:', info);
      });
  };

  const handleDelete = (id) => {
    deleteMeal(id);
    toggleModal();
  };

  const handleCancel = () => {
    clearForm();
    toggleModal();
  };

  const onFinish = () => {
    clearForm();
  };

  if (error) {
    let errorMessage = 'A server side error has occurred';
    if (`${error.status}`.startsWith('4')) {
      console.log('true');
      errorMessage = `Failed: ${error.data.message}`;
    }
    return (
      <Modal
        title="An Error has occurred..."
        visible={visible}
        getContainer={() => document.getElementById('overlay-root')}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        <p>{errorMessage}</p>
      </Modal>
    );
  }

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
        <Button
          form="mealForm"
          key="delete"
          htmlType="button"
          onClick={() => handleDelete(mealId)}
          type="primary"
          danger
        >
          Delete Meal
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

  return (
    <Modal
      title={ModalTitle}
      visible={visible}
      getContainer={() => document.getElementById('overlay-root')}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        submitBtn,
      ]}
    >
      {loading ? (
        <Spin tip="Loading" />
      ) : (
        <Form
          id="mealForm"
          form={form}
          name="Edit_Meal_Item"
          {...layout}
          onFinish={onFinish}
        >
          <FormDays data={days} default={mealDays} />
          <FormMealName default={mealName} />
          <FormTags tags={tags} default={mealTags} />
          <FormIngredients data={units} default={mealIngredients} />
        </Form>
      )}
    </Modal>
  );
};

export default MealModal;
