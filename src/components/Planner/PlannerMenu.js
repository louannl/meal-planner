import { PlusOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const PlannerMenu = (props) => {
  const handleNewMeal = async () => {
    await props.selectMeal();
    await props.toggleModal();
  };

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Planner']}>
      <Menu.Item key="Planner">Meal Planner</Menu.Item>
      <Menu.Item key="Add" icon={<PlusOutlined />} onClick={handleNewMeal}>
        Add Meal
      </Menu.Item>
      {/* TODO: <Menu.Item key="Edit-Tags">Edit Tags</Menu.Item>
      <Menu.Item key="Edit-Ingredients">Edit Ingredients</Menu.Item> */}
    </Menu>
  );
};

export default PlannerMenu;
