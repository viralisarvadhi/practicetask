const router = require('express').Router();
const controller = require('../controllers/greeting.controller');

router.get('/', controller.getAllGreetings);
router.post('/', controller.createGreeting);

module.exports = router;
