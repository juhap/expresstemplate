import express from "express";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
import bunyan from "bunyan";
import api from "./controllers/api";
import morgan from "morgan";

const app = express();
dotenv.config({ path: ".env.example" }); 
app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "../views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.locals.logger = bunyan.createLogger({
    name: process.env.APPNAME || "default",
    level: <bunyan.LogLevel>process.env.LOGLEVEL || bunyan.DEBUG
});
app.use(morgan("dev"));
app.use("/api", api);

export default app;
