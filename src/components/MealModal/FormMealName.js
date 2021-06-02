import { Input } from 'antd';
import { Form } from 'antd';

const FormMealName = (props) => {
  return (
    <Form.Item
      label="Meal Name"
      name="mealName"
      required
      tooltip="This is a required field"
      rules={[{ required: true, message: 'Please enter a name' }]}
    >
      <Input defaultValue={props.default} />
    </Form.Item>
  );
};

export default FormMealName;
