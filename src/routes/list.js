const express = require('express');
const router = express.Router();

router.get('/list', (req, res, next) => {
  res.json({ a: 1, b: 'b'});
});

module.exports = router;