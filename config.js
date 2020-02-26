export default {
  baseUrl:'http://localhost:3000',
  dbUrl: 'mongodb://localhost:27017',
  dbName: 'miqueas',
  apis: {
    getItems: '/api/getItems',
    addItem: '/api/addItem',
    getItem: '/api/getItem',
    login: '/api/login',
    verifyToken: '/api/verifyToken',
  },
  pages: {
    Index: '/',
    AddItem: '/add',
    Inventory: '/inventory',
    Log: '/log',
    Profile: '/profile',
  },
};