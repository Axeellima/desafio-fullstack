import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import contactListService from "../../services/contact/contactList.service";
const contactListController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const users = await contactListService(id);

    return res.send(users);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default contactListController;
