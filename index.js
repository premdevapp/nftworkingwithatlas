const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;

const database =new mongoose.connect(
    `mongodb+srv://premnath:Premnath@nftcluster.eayls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log('Connected to database');
}
).catch((err) => {
    console.err('Connection failed\n', err);
}
);

app.use(cors());
app.use(require('morgan')('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(require('./routes'));

app.use((req, res, next)=> {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors': {
      message: err.message,
      error: {}
    }});
  });


app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on  port ${port}...`);
  });