import fetch from 'isomorphic-unfetch';
import config from '../../config';

export const getTransactions = async () => fetch(
  config.baseUrl + config.apis.getTransactions, {
    method: 'get',
    mode: 'same-origin',
    credentials: 'include',
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

export const getTransactionItem = async (id) => fetch(
  config.baseUrl + config.apis.getTransactionItem, {
    method: 'post',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id
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

