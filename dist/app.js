"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
// 上記の書き方ではTypescirptはmoduleを読み込んでくれない
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.listen("3000");
