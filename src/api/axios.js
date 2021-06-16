import axios from 'axios';

const baseURL = process.env.REACT_APP_BASEURL;

export const get = (url = '', options = {}) =>
  new Promise((res, rej) => {
    axios.defaults.baseURL = baseURL;

    axios
      .get(url, options)
      .then((data) => res(data))
      .catch((err) => rej(err));
  });

export const post = (url = '', body = {}, options = {}) =>
  new Promise((res, rej) => {
    axios.defaults.baseURL = baseURL;

    axios
      .post(url, body, options)
      .then((data) => res(data))
      .catch((err) => rej(err));
  });

export const put = async (url = '', body = {}, options = {}) =>
  new Promise((res, rej) => {
    axios.defaults.baseURL = baseURL;

    axios
      .put(url, body, options)
      .then((data) => res(data))
      .catch((err) => rej(err));
  });

//NOTE: delete is a keyword, hence the use of remove instead
export const remove = (url = '', options = {}) =>
  new Promise((res, rej) => {
    axios.defaults.baseURL = baseURL;

    axios
      .delete(url, options)
      .then((data) => res(data))
      .catch((err) => rej(err));
  });
