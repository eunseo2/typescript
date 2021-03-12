import express from 'express';

exports.register = async (req: express.Request, res: express.Response) => {
  res.send('register');
};

exports.login = async (req: express.Request, res: express.Response) => {
  res.send('login');
};

exports.logout = async (req: express.Request, res: express.Response) => {
  res.send('logout');
};

exports.check = async (req: express.Request, res: express.Response) => {
  res.send('check');
};
