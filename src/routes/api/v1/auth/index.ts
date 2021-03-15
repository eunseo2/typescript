import express from 'express';

const auth = express.Router();

import { register, login, logout, check } from './auth.ctrl';

// const { register, login, logout, check } = require('./auth.ctrl');

auth.post('/register', register);
auth.post('login', login);
auth.post('/logout', logout);
auth.post('/check', check);

export default auth;
