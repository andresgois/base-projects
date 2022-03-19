import { Request, Response } from "express";

class ServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response.status(200).json({ message: "OK4" });
  }
}

export { ServiceController };
