livereload = require('livereload');
server = livereload.createServer();
server.watch(__dirname + "/document");
