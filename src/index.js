import app from './app';
import './database';
import config from './config';

//Inizialited server
(async ()=>{
    await app.listen(config.PORT);
    console.log('Server listend');
})();