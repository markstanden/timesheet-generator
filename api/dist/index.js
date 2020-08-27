"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const apiPort = 5000;
app.get('/', (req, res) => {
    res.send('Root Test Message...');
});
app.get('/test', (req, res) => {
    res.send('/test Test Message...');
});
app.listen(5000, () => {
    console.log('API server running on port 5000');
});
//# sourceMappingURL=index.js.map