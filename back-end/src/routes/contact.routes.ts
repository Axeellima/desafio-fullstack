import { Router } from "express";
import contactCreateController from "../controllers/contact/contactCreate.controller";
import contactDeleteController from "../controllers/contact/contactDelete.controller";
import contactListController from "../controllers/contact/contactList.controller";
import contactUpdateController from "../controllers/contact/contactUpdate.controller";

export const contactRoutes = Router();

// ID do usuário vinculado
contactRoutes.post("/:id", contactCreateController);

// ID do usuário vinculado
contactRoutes.get("/:id", contactListController);

// ID do contato
contactRoutes.delete("/:id", contactDeleteController);

// ID do contato
contactRoutes.patch("/:id", contactUpdateController);
