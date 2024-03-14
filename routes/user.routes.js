const { Router } = require('express');
const { GET, POST, PUT } = require('../controllers/user.controller');


const router = Router();

router.get('/', GET);
router.post('/', POST);
router.put('/:userId', PUT);


module.exports = router;