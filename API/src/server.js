const express = require('express');
const cors = require('cors');
const youch = require('youch');

class App {
  constructor() {
    this.express = express();

    /* Set environment variables with validation (Development)
       or read only (Production and Test)*/
    if (process.env.NODE_ENV === 'development') {
      require('dotenv-safe').config({ allowEmptyValues: true });
    } else {
      require('dotenv').config();
    }

    this.middlewares();
    this.security();
    this.routes();
    this.exception();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  security() {
    this.express.disable('x-powered-by');
    this.express.disable('etag');
  }
  routes() {
    this.express.use(require('./routes'));
  }
  exception() {
    /* In production returns standard error, in other environments
       returns errors treated in JSON format.*/
    this.express.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV !== 'production') {
        const errYouch = new youch(err, req);
        return res.json(await errYouch.toJSON());
      }
      return res.status(err.status || 500).json({
        message: 'Internal server error, please try again later'
      });
    });
  }
}

module.exports = new App().express;
