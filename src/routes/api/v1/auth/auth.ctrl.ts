import express from 'express';

const register = async (req: express.Request, res: express.Response) => {
  res.send('register');
};

const login = async (req: express.Request, res: express.Response) => {
  res.send('login');
};

const logout = async (req: express.Request, res: express.Response) => {
  res.send('logout');
};

const check = async (req: express.Request, res: express.Response) => {
  res.send('check');
};

export { register, login, logout, check };
