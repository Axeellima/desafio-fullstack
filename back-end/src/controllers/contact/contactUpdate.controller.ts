import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import contactUpdateService from "../../services/contact/contactUpdate.service";
const contactUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const updated = await contactUpdateService(id, {
      name,
      email,
      phone,
    });
    return res.status(200).send(updated);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
    return res.status(401).send({ message: error });
  }
};

export default contactUpdateController;
