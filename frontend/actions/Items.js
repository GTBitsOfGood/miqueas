import fetch from 'isomorphic-unfetch';
import config from '../../config';

export const getItems = async () => fetch(
  config.baseUrl + config.apis.getItems, {
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

  export const get1000Items = async () => fetch(
    config.baseUrl + config.apis.get1000Items, {
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

export const addItem = async (item) => fetch(
  config.baseUrl + config.apis.addItem, {
    method: 'post',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item,
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

export const getItem = async (urlString) => fetch(
  `${config.baseUrl}${config.apis.getItem}?url=${urlString}`, {
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