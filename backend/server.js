
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'API de inventario funcionando'
    });
});

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Servidor iniciado en http://localhost:${PORT}`);
    });
}

startServer();
