import { message } from 'antd';

const toast = (type, text) => {
  message[type](text);
};

export const warningToast = (text) => {
  toast('warning', text);
};

export const errorToast = (text) => {
  toast('error', text);
};

export const successToast = (text) => {
  toast('success', text);
};
