var path = require('path');
var rootPath = path.normalize(__dirname,'/../../');

module.export ={
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/eMarket',
        port: process.env.PORT || 3030
    },
    production:{
        rootPath: rootPath,
        db: 'mongodb://aminsheikhi@gmail.com:am681980@proximus.modulusmongo.net:27017/miNe8jym',
        port: process.env.PORT || 80
    }
}