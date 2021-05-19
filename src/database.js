import mongoose from 'mongoose';
import config from './config';

//Database conection
mongoose.connect(config.URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Database is contected'))
.catch(err => console.log(err, 'Database is not conected'));