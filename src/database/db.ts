import { Sequelize } from 'sequelize';

interface env {
  [key: string]: string | undefined;
}

const { DB_HOST, DB_DATABASE, DB_USER, DB_PW }: env = process.env;

if (!DB_DATABASE || !DB_USER) {
  throw new Error();
}

const db = new Sequelize(DB_DATABASE, DB_USER, DB_PW, {
  host: DB_HOST,
  dialect: 'mariadb',
  define: {
    underscored: true,
  },

  pool: {
    max: 5, //maximum size of the pool
    min: 0, //minium size of the pool
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});

export default db;

// type someObj = {
//   a: string;
//   b: string;
//   c: number;
// };

// const a: someObj = {
//   a: 'a',
//   b: 'b',
//   c: 3,
// };

// const b: someObj = {
//   a: 'a',
//   b: 'b',
//   c: 3,
// };

// const c: someObj = {
//   a: 'a',
//   b: 'b',
//   c: 3,
// };

// export default a;

// import a, { b, c } from './';
