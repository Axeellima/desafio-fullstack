import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import contactCreateService from "../../services/contact/contactCreate.service";
const contactCreateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const newUser = await contactCreateService(id, {
      name,
      email,
      phone,
    });
    return res.status(201).send(newUser);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
export default contactCreateController;
