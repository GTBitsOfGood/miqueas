export default {
  baseUrl:'http://localhost:3000',
  dbUrl: 'mongodb+srv://miqueas-dev:' + process.env.DB_PASS + '@cluster0-9lk2k.mongodb.net/test?retryWrites=true&w=majority',
  dbName: 'miqueas',
  apis: {
    getCategories: '/api/getItems',
    getItems: '/api/getItems',
    get1000Items: '/api/get1000Items',
    addItem: '/api/addItem',
    getItem: '/api/getItem',
    login: '/api/login',
    verifyToken: '/api/verifyToken',
    searchQuery: '/api/searchQuery',
    addItemVariation: '/api/addItemVariation',
    updateItemVariation: '/api/updateItemVariation',
    getItemVariation: '/api/getItemVariation',
    addTransaction: '/api/addTransaction'
  },
  pages: {
    Index: '/',
    AddItem: '/add',
    Inventory: '/inventory',
    Log: '/log',
    Profile: '/profile',
  },
};
