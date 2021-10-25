var express = require('express');
var router = express.Router();
var thisVar = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  thisVar +=1;
  res.send('User Access are: ' + thisVar);
});

module.exports = router;
