import express from "express";
import { Service } from "./Service.routes";

const router = express();

router.use(Service);

export { router };
