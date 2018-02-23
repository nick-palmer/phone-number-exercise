let express = require('express');
let router = express.Router();
let combos = require('../combinations');


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.get('/phone-numbers/:number', function(req, res, next) {
  let results = combos.getResults(req.params.number,req.query.resultsPerPage,req.query.page);
  let data = {
    combinations: results.numbers,
    count: results.totalCount
  }
  console.log(JSON.stringify(data))
  res.send(data);
});


module.exports = router;
