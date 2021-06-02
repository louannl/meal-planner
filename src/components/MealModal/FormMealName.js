import { Input } from 'antd';
import { Form } from 'antd';

const FormMealName = (props) => {
  let defaultName = '';
  if (props.default) {
    defaultName = props.default;
  }

  return (
    <Form.Item
      label="Meal Name"
      name="mealName"
      required
      tooltip="This is a required field"
      initialValue={defaultName}
      rules={[{ required: true, message: 'Please enter a name' }]}
    >
      <Input />
    </Form.Item>
  );
};

export default FormMealName;
