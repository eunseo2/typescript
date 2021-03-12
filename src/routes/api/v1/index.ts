import express from 'express';
const v1 = express.Router();

const auth = require('./auth');

v1.use('/auth', auth);

export default v1;
