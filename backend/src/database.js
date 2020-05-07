const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(db => console.log('Base de datos conectada'))
        .catch(err => console.error(err));
        
        module.exports = mongoose;
