const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const cors = require('cors');
const auth = require('./routes/auth')
const admin = require('./routes/admin')
const home = require('./routes/home')

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

connectDB();
// Middlewares
app.use(cors());
app.use(express.json({limit:"50mb"}));

// Routes
app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api/home", home);

app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
})