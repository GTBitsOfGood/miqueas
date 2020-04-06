const prod = process.env.NODE_ENV === 'production';

export default {
  baseUrl: prod ? process.env.BASE_URL : 'http://localhost:3000',
  dbUrl: 'mongodb://localhost:27017',
  dbName: 'miqueas',
  apis: {
    getCategories: '/api/getItems',
    getItems: '/api/getItems',
    get1000Items: '/api/get1000Items',
    addItem: '/api/addItem',
    getItem: '/api/getItem',
    getItemName: '/api/getItemName',
    getTransactions: '/api/getTransactions',
    getTransactionItem: '/api/getTransactionItem',
    login: '/api/login',
    verifyToken: '/api/verifyToken',
    searchQuery: '/api/searchQuery',
    addItemVariation: '/api/addItemVariation',
    updateItemVariation: '/api/updateItemVariation',
    getItemVariation: '/api/getItemVariation',
    addTransaction: '/api/addTransaction',
    updateTransaction: '/api/updateTransaction',
    signUp: '/api/signUp',
  },
  pages: {
    Index: '/',
    AddItem: '/add',
    Inventory: '/inventory',
    Log: '/log',
    Profile: '/profile',
  },
};
