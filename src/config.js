import {config} from 'dotenv';

//Environment variables
config();
export default {
    PORT: process.env.PORT || 4000
};