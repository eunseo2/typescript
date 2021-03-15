import express from 'express';
const v1 = express.Router();

import auth from './auth';

// const auth = require('./auth');

v1.use('/auth', auth);

export default v1;
