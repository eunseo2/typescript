import express from 'express';

const routes = express.Router();

const api = require('./api');

routes.use('/api', api);

export default routes;
