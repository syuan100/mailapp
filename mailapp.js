/////////////////
// SETUP
/////////////////
var fs = require('fs');
var SMTPServer = require('smtp-server').SMTPServer;

/////////////////
// SETUP EMAIL
/////////////////

// This example starts a SMTP server using TLS with your own certificate and key
var server = new SMTPServer({
    secure: true,
    key: fs.readFileSync(path.join(__dirname, 'sec', 'yuanamarry.me.key')),
    cert: fs.readFileSync(path.join(__dirname, 'sec', 'yuanamarry.me.crt'))
});
server.listen(465);