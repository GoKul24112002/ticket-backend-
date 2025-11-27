const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  priority: String,
  timestamps: true 
});

module.exports = mongoose.model('ticket', ticketSchema);
