import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import mustache from "mustache-express";

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "..", "public")));

server.listen(process.env.PORT);
