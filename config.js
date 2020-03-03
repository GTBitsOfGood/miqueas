export default {
  baseUrl:'http://localhost:3000',
  dbUrl: 'mongodb+srv://miqueas-dev:' + process.env.DB_PASS + '@cluster0-9lk2k.mongodb.net/test?retryWrites=true&w=majority',
  dbName: 'miqueas',
  apis: {
    getItems: '/api/getItems',
    get1000Items: '/api/get1000Items',
    addItem: '/api/addItem',
    getItem: '/api/getItem',
    login: '/api/login',
    verifyToken: '/api/verifyToken',
    searchQuery: '/api/searchQuery'
  },
  pages: {
    Index: '/',
    AddItem: '/add',
    Inventory: '/inventory',
    Log: '/log',
    Profile: '/profile',
  },
};
