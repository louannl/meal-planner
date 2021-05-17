import axios from 'axios';

const baseURL = 'http://localhost:5000';

export const get = (url = '', options = {}) =>
  new Promise((res, rej) => {
    axios.defaults.baseURL = baseURL;

    axios
      .get(url, options)
      .then((data) => res(data))
      .catch((err) => rej(err));
  });

//POSTPUTPATCH
//DELETE
