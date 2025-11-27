const modelticket = require("../model/ticket");

const ticketController = {
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


  userGet: async (req, res) => {
      const users = await modelticket.findOne(id);
      res.json(body);
  },

  userUpdate: async (req, res) => {
      const updated = await modelticket.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
      );
      res.json(updated);
  },

  userDelete: async (req, res) => {
      const deleted = await modelticket.findByIdAndDelete(req.params.id);
      res.json({ message: "Deleted", deleted });
  }
}

module.exports = ticketController;
