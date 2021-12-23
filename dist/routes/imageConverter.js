"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkImage_1 = __importDefault(require("../coordinator/checkImage"));
const processImage_1 = require("../coordinator/processImage");
const path_1 = __importDefault(require("path"));
const route = express_1.default.Router();
const imageConverter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const image = req.query.image;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    const resizedDir = path_1.default.join(__dirname, "../../images/thumbnails/");
    console.log(resizedDir);
    const file_path = path_1.default.join(resizedDir, `${image.toLowerCase()}(${width}x${height}).jpg`);
    if (!(req.query.image && req.query.width && req.query.height)) {
        res.statusCode = 400;
        return res.send("400: Invalid request");
    }
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        res.statusCode = 400;
        return res.send("Invalid dimensions.");
    }
    const reflectedImage = yield (0, checkImage_1.default)(image, width, height);
    if (reflectedImage) {
        res.sendFile(file_path);
    }
    else {
        try {
            const image_path = yield (0, processImage_1.manipulateImage)(image, width, height);
            res.sendFile(image_path);
        }
        catch (e) {
            const error = e;
            if (error.message == "Image not available") {
                res.statusCode = 404;
                res.send("404: Image not available. Please enter a correct image name.");
            }
        }
    }
});
exports.default = imageConverter;
