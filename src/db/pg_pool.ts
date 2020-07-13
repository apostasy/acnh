import * as pg from "pg";
const Pool = pg.Pool;
import url from "url";

const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(":");

const config = {
  database: params.pathname.split("/")[1],
  host: params.hostname,
  password: auth[1],
  port: parseInt(params.port, 10),
  user: auth[0],
};

const pool = new Pool(config);
export default pool;
