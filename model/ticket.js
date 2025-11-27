const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");


const ticketSchema = new mongoose.Schema({
  ticketId: { type: String, unique: true , default: uuidv4 },
    ticketId: { type: String, unique: true, default: () => uuidv4() },
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'open' },
  priority: { type: String, default: 'low' }
}, {
  timestamps: true   // correct place: schema options
});

module.exports = mongoose.model('Ticket', ticketSchema);
