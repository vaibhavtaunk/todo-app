module.exports = {
  port: 5000,
  db: {
    uri: 'mongodb://localhost:27017/todo-app',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  secretKey: 'supersecretkey',
};
