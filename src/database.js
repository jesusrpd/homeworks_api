import mongoose from 'mongoose';
import config from './config';

//Database conection
mongoose.connect(config.URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('Database is contected'))
.catch(err => console.log(err, 'Database is not conected'));