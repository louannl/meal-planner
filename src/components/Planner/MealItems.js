import React from 'react';
import { List } from 'antd';
import MealTags from './MealTags';
import { CloseOutlined } from '@ant-design/icons';

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
          <List.Item
            value={meal?.id}
            key={meal?.meal}
            extra={
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => props.deleteMeal(meal?.id, props.dayId)}
              >
                <CloseOutlined />
              </div>
            }
          >
            <List.Item.Meta
              style={{ margin: '4px 0' }}
              title={<a href="#meal-item">{meal?.meal}</a>}
              onClick={() => handleMeal(meal?.id)}
            />
            <MealTags tags={meal?.tags} />
          </List.Item>
        );
      }}
    ></List>
  );
};

export default MealItems;
