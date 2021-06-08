import React from 'react';
import { Card, List } from 'antd';
import MealTags from './MealTags';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import '../UI/ListItem.css';
import Meta from 'antd/lib/card/Meta';
import PopConfirm from '../UI/PopConfirm';

const MealItems = (props) => {
  const handleMeal = async (id) => {
    //IMPROVEMENT: Why does this only work if asynchronous?
    await props.selectMeal(id);
    await props.toggleModal();
  };

  return (
    <List
      itemLayout="vertical"
      dataSource={props.meals}
      renderItem={(meal) => {
        return (
          <Card
            style={{ marginTop: 16 }}
            value={meal?.id}
            key={meal?.meal}
            hoverable
            actions={[
              <PopConfirm
                title="Are you sure you want to delete this meal item?"
                onConfirm={() => props.deleteMeal(meal?.id, props.dayId)}
                onCancel=""
              >
                <CloseOutlined key="delete" />
              </PopConfirm>,
              <EditOutlined key="edit" onClick={() => handleMeal(meal?.id)} />,
            ]}
          >
            <Meta
              onClick={() => handleMeal(meal?.id)}
              title={meal?.meal}
              description={<MealTags tags={meal?.tags} />}
            />
          </Card>
        );
      }}
    ></List>
  );
};

export default MealItems;
