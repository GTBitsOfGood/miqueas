import fetch from 'isomorphic-unfetch';
import config from '../../config';

export const addTransaction = async (transaction) => fetch(
  config.baseUrl + config.apis.addTransaction, {
  method: 'post',
  mode: 'same-origin',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    transaction,
  }),
},
)
  .then((response) => response.json())
  .then((json) => {
    if (json == null) {
      throw new Error('Could not connect to API!');
    } else if (!json.success) {
      throw new Error(json.message);
    }

    return json.payload;
  });