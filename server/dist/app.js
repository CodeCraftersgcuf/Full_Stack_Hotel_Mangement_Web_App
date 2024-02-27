"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_config_1 = __importDefault(require("./configs/db.config"));
const app = (0, express_1.default)();
const port = process.env.APP_PORT || 8080;
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
};
/* ------------------- Middlewares -------------------- */
dotenv_1.default.config();
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
(0, db_config_1.default)();
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
