import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import contactDeleteService from "../../services/contact/contactDelete.service";

const contactDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await contactDeleteService(id, res);
    return res.status(204).send();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default contactDeleteController;
