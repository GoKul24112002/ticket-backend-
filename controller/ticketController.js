const modelticket = require("../model/ticket");

const ticketController = {

  // CREATE
  userCreate: async (req, res) => {
    try {
      const user = new modelticket(req.body);
      await user.save();

      res.status(201).json({
        success: true,
        message: "Ticket created successfully",
        data: user
      });

    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Invalid data",
        error: error.message
      });
    }
  },

  // GET ALL
  userGetAll: async (req, res) => {
    try {
      const users = await modelticket.find();
      res.json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // GET ONE — using UUID ticketId
  userGet: async (req, res) => {
    try {
      const user = await modelticket.findOne({ ticketId: req.params.id });
      if (!user) return res.status(404).json({ message: "Ticket not found" });
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // UPDATE ONE — using UUID ticketId
  userUpdate: async (req, res) => {
    try {
      const updated = await modelticket.findOneAndUpdate(
        { ticketId: req.params.id },
        req.body,
        { new: true }
      );
      if (!updated) return res.status(404).json({ message: "Ticket not found" });
      res.json(updated);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // DELETE ONE — using UUID ticketId
  userDelete: async (req, res) => {
    try {
      const deleted = await modelticket.findOneAndDelete({ ticketId: req.params.id });
      if (!deleted) return res.status(404).json({ message: "Ticket not found" });
      res.json({ message: "Deleted", deleted });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

};

module.exports = ticketController;
