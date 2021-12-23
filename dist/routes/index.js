"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from express to have access to the express router
const express_1 = __importDefault(require("express"));
const imageConverter_1 = __importDefault(require("./imageConverter"));
// create router object
const routes = express_1.default.Router();
// create endpoint with get request
// routes.get("/", (req: express.Request, 
//     res: express.Response,) => {
//     res.send("Hello, world");
//    });
routes.get("/imageConverter", imageConverter_1.default);
// export the route here and import it into the main file
exports.default = routes;
