import React from 'react';
import { List } from 'antd';
import MealTags from './MealTags';
import { CloseOutlined } from '@ant-design/icons';

const MealItems = (props) => {
  const handleMeal = async (id) => {
    //FIXME: Why does this work this way?
    await props.selectMeal(id);
    await props.toggleModal();
  };

  //TODO: Delete meal from day only if multiple days

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
                onClick={() => props.deleteMeal(meal?.id)}
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
