const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const cors = require('cors');
const auth = require('./routes/auth')

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", auth);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at ${PORT}`);
})