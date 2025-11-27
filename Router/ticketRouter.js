const express = require('express');
const ticketController = require("../controller/ticketController");
const ticketRouter = express.Router();

ticketRouter.post("/create", ticketController.userCreate);
ticketRouter.get("/get", ticketController.userGetAll);
ticketRouter.get("/get/:id", ticketController.userGet);
ticketRouter.put("/update/:id", ticketController.userUpdate);
ticketRouter.delete("/delete/:id", ticketController.userDelete);

module.exports = ticketRouter;
