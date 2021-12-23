"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express and creating the global app
const express_1 = __importDefault(require("express"));
// import routes
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 7000;
// creat endpoint 
app.use("/api", index_1.default);
// creat server, listen to port & output a message to the console
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
