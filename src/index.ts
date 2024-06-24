import 'dotenv/config';
import { User } from './models/User';

const mongoUser = process.env.mongoUser;
const mongoDb = process.env.mongoDb;
const mongoPass = process.env.mongoPw;
const mongoPort = process.env.mongoPort;

const uri = `mongodb://${mongoUser}:${mongoPass}@localhost:${mongoPort}/${mongoDb}?authSource=${mongoDb}`;

console.log(uri);
