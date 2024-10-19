const app = require('./app');
const connectDB = require('./config/database');
const config = require('./config/default');

// Connect to the database
connectDB();

// Start the server
const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
