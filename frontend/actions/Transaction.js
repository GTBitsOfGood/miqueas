import fetch from 'isomorphic-unfetch';
import config from '../../config';
import apiRoute from './util';

export const getTransactions = async (res) => fetch(
  apiRoute(res, config.apis.getTransactions), {
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

export const getTransaction = async (id) => fetch(
  apiRoute(res, config.apis.getTransaction), {
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

export const getTransactionItem = async (id, res) => fetch(
  apiRoute(res, config.apis.getTransactionItem), {
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
