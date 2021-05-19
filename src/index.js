import app from './app';
import config from './config';

//Inizialited server
(async ()=>{
    await app.listen(config.PORT);
    console.log('Server listend');
})();