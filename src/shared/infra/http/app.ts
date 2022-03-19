import express from "express";
import { router } from "./routes";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(router);

export { app };
