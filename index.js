const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TICKET')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const ticketRouter = require('./Router/ticketRouter');

const app = express();
app.use(express.json());

app.use('/api/tickets', ticketRouter);

app.listen(4000, () => console.log('Listening on port 4000'));
    