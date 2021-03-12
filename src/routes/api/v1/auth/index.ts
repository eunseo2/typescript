import express from 'express';

export const auth = express.Router();

const { register, login, logout, check } = require('./auth.ctrl');

console.log(register, login);
auth.post('/register', register);
auth.post('login', login);
auth.post('/logout', logout);
auth.post('/check', check);
