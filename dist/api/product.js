"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
/**
 * GET product list.
 *
 * @return product list | empty.
 */
exports.router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Get data has successfully",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
module.exports = exports.router;
