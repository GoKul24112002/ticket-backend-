const mongoose = require('mongoose');
const { type } = require('os');
const { v4: uuidv4 } = require("uuid");


const ticketSchema = new mongoose.Schema({
  email:{ type:String,required: true },
  ticketId: { type: String, unique: true, default: () => uuidv4() },
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String},
  priority: { type: String }
}, {
  timestamps: true   // correct place: schema options
});

module.exports = mongoose.model('Ticket', ticketSchema);
