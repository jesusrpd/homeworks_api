import {config} from 'dotenv';

//Environment variables
config();
export default {
    PORT: process.env.PORT || 4000,
    URI: `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.rkcwz.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
    SECRET: `${process.env.SECRET}`
};