const express = require('express');
const router = express.Router();
const actorsControllers = require('../controllers/actorsController');

router.get('/actors', actorsControllers.list);
router.get('/actors/detail/:id', actorsControllers.detail);


module.exports = router;