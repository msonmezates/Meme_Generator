const express = require('express');

const router = express.Router();

router.get('/memes', list);
router.get('/memes/:id', show);
router.post('/memes', create);
router.delete('/memes/:id', remove);

module.exports = router;
