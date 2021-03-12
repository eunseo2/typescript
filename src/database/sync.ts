import fs from 'fs';
import path from 'path';
import db from './db';

const associate = () => {
  const dir = path.join(__dirname, './models');
  fs.readdirSync(dir).forEach((model) => {
    const table = require(`./models/${model}`);
    if (table.hasMany) {
      table.hasMany();
    }
  });
};

const sync = () => {
  associate();
  db.sync({ force: true });
};

export default sync;
