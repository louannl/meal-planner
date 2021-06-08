import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';

const PopConfirm = (props) => {
  return (
    <Popconfirm
      title={props.title}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      okText="Yes"
      cancelText="No"
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
    >
      {props.children}
    </Popconfirm>
  );
};

export default PopConfirm;
