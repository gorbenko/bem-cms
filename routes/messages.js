var express = require('express');
var router = express.Router();

var fs = require('fs');
var nl2br = require('nl2br');

/* POST message. */
router.post('/add', function(req, res, next) {
  var message = req.body.message;

  fs.appendFile('messages.txt', message + '\n', function (err) {
    console.log(err);
  });

  res.send({
    date: new Date(),
    message: message
  });

});

router.get('/', function (req, res, next) {
  fs.readFile('messages.txt', 'utf8', function (err, data) {
    if (err) throw err;
    res.send(nl2br(data, false));
  });
});

module.exports = router;
