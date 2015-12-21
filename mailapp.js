/////////////////
// SETUP
/////////////////
var fs = require('fs');
var path = require('path');
var SMTPServer = require('smtp-server').SMTPServer;

/////////////////
// SETUP EMAIL
/////////////////

// This example starts a SMTP server using TLS with your own certificate and key
var server = new SMTPServer({
    secure: true,
    key: fs.readFileSync(path.join(__dirname, 'sec', 'yuanamarry.me.key')),
    cert: fs.readFileSync(path.join(__dirname, 'sec', 'yuanamarry.me.crt')),
    onConnect: function(session, callback){
        console.log("on connect: " + session);
        return callback();
    }, 
    onRcptTo: function(address, session, callback){
        console.log("on receive: " + session);
        return callback(); // Accept the address
    },
    onData: function(stream, session, callback){
      stream.pipe(process.stdout); // print message to console
      stream.on('end', callback);
    }
});

server.listen(3333);