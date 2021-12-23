"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import file system promises
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// checking image availability
const checkImage = (imageName, width, height) => {
    const resizedDir = path_1.default.join(__dirname, "../../images/thumbnails/");
    const file_path = path_1.default.join(resizedDir, `${imageName.toLowerCase()}(${width}x${height}).jpg`);
    return fs_1.default.existsSync(file_path);
};
exports.default = checkImage;
