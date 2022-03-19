import { ServiceController } from "@modules/accounts/useCase/ServiceController";
import { Router } from "express";

const Service = Router();

const serviceController = new ServiceController();

Service.get("/", serviceController.handle);

export { Service };
