import { Request, Response } from "express";

class ServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    response.render("index");
    return response.send();
  }
}

export { ServiceController };
