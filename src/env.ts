import dotenv from 'dotenv';
import path from 'path';

const isDev: boolean = process.env.NODE_ENV !== 'production';

dotenv.config({
  path: path.join(
    process.cwd(),
    isDev ? '.env.development' : '.env.production'
  ),
});
