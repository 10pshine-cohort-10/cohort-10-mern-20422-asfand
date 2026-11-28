const dotenv = require('dotenv');
const path = require('path');

// load .env from server root
dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

const config = {
  port: parseInt(process.env.PORT, 10) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/notes-app',
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  logLevel: process.env.LOG_LEVEL || 'info',
};

// make sure critical vars are set
const required = ['jwtSecret'];
for (const key of required) {
  if (!config[key]) {
    console.error(`Missing required config: ${key}. Check your .env file.`);
    process.exit(1);
  }
}

module.exports = config;
