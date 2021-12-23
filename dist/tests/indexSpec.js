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
// test endpoit
// import SuperTest in the spec file.
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe("Tests response of the endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
    // test when all params are ok
    it("rerurns 200 when request is ok", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/imageConverter?image=fjord&width=300&height=300");
        expect(response.status).toBe(200);
    }));
    // test when some params not given
    it("returns 400 when incomplete request", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/imageConverter?image=fjord&width=&height=");
        expect(response.status).toBe(400);
    }));
    // test when some params equal 0 which is not accepted
    // -1
    it("returns 400 when invalid request", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/imageConverter?image=fjord&width=0&height=300");
        expect(response.status).toBe(400);
    }));
    // -2
    it("returns 400 when invalid request", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/imageConverter?image=fjord&width=300&height=0");
        expect(response.status).toBe(400);
    }));
}));
