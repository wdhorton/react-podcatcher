const express = require('express');
require('isomorphic-fetch');
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/itunes_search', (req, res) => {
  fetch(`https://itunes.apple.com/search?entity=podcast&term=${req.query.query}`)
    .then(r => r.json())
    .then(body => {
      res.json(body);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
})

app.listen(3051, err => {
  if (err) { console.error(err); }
  console.log('Express server listening');
});
