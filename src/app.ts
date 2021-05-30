// const express = require("express");
// 上記の書き方ではTypescirptはmoduleを読み込んでくれない

// import * as express from "express";
import express = require("express");

const app = express();

app.listen("3000");
