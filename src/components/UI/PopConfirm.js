import { Popconfirm } from 'antd';

const PopConfirm = (props) => {
  return (
    <Popconfirm
      title={props.title}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      okText="Yes"
      cancelText="No"
    >
      {props.children}
    </Popconfirm>
  );
};

export default PopConfirm;
