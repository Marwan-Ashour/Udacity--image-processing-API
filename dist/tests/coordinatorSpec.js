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
const path_1 = __importDefault(require("path"));
const processImage_1 = require("../coordinator/processImage");
describe("suite test to check the cached image", () => {
    it("returns the reflected image path", () => __awaiter(void 0, void 0, void 0, function* () {
        const gottenPath = path_1.default.join(__dirname, `../../images/thumbnails/fjord(200x200).jpg`);
        console.log(gottenPath);
        expect((yield (0, processImage_1.manipulateImage)("fjord", 200, 200))).toBe(gottenPath);
    }));
});
