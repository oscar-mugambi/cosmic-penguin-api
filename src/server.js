"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = require("./env");
const app = (0, express_1.default)();
const port = 6000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello from Cosmic Penguin API!');
});
app.get('/api/info', (req, res) => {
    res.json({
        app: 'Cosmic Penguin API',
        version: '1.0.0',
        environment: env_1.env.NODE_ENV || 'development',
    });
});
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running at http://localhost:${port}`);
});
