"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
exports.router = express.Router();
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
