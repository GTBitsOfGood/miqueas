import mongoose from 'mongoose';

export default async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose
    .connect('mongodb+srv://miqueas-dev:' + process.env.DB_PASS + '@cluster0-9lk2k.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      dbName: urls.dbName
    })
    .catch(e => {
      console.error('Error connecting to database.');

      throw e;
    });
};
