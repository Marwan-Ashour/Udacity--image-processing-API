"use strict";
// const myFunc = (num: number): number => {
//     return num * num;
//   };
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//   export default myFunc;
//============================================
// import express and creating the global app
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 7000;
// creat endpoint 
app.get('/api', (req, res) => {
    res.send('Hello, world!');
});
// creat server, listen to port & output a message to the console
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
