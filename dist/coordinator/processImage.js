"use strict";
// import file system promises
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
exports.manipulateImage = void 0;
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const manipulateImage = (imageName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const file_path = path_1.default.join(__dirname, `../../images/${imageName.toLowerCase()}.jpg`);
    const output_file_path = path_1.default.join(__dirname, `../../images/thumbnails/${imageName.toLowerCase()}(${width}x${height}).jpg`);
    try {
        yield (0, sharp_1.default)(file_path)
            .resize({ width, height })
            .toFile(output_file_path);
    }
    catch (_a) {
        throw new Error("Sorry, cannot manipulate!");
    }
    return output_file_path;
});
exports.manipulateImage = manipulateImage;
