const router = require('express').Router();

router.use('/assets', require('./assets'));
router.use('/collections', require('./collections'));


module.exports = router;