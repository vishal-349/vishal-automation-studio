/****************************************************
 * 1️⃣ IMPORTS & BASIC SETUP
 ****************************************************/
const express = require('express');
const cors = require('cors');
require('dotenv').config();

/****************************************************
 * 2️⃣ DATABASE CONNECTION
 ****************************************************/
const connectDB = require('./config/db');

/****************************************************
 * 3️⃣ APP INITIALIZATION
 ****************************************************/
const app = express();

/****************************************************
 * 4️⃣ GLOBAL MIDDLEWARES
 * - cors: allow cross-origin requests
 * - express.json: parse JSON body
 ****************************************************/
app.use(cors());
app.use(express.json());

/****************************************************
 * 5️⃣ CONNECT TO MONGODB
 ****************************************************/
connectDB();

/****************************************************
 * 6️⃣ HEALTH CHECK ROUTE
 * Used to verify backend is running
 ****************************************************/
app.get('/health', (req, res) => {
  res.json({ status: 'Backend running' });
});

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);


/****************************************************
 * 8️⃣ START SERVER
 ****************************************************/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
