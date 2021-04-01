import { Modal, Button } from 'antd';
import React, { useState } from 'react';

const MealItemModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
        <p>Form content to go here</p>
        <p>Form content to go here</p>
        <p>Form content to go here</p>
      </Modal>
    </>
  );
};

export default MealItemModal;
