import express from 'express';

const routes = express.Router();

import api from './api';

routes.use('/api', api);

export default routes;
