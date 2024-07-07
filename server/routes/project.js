const router = require('express').Router()


router.get('/projects/get' , require('../controllers/projectCtrl').getProjects);
router.get('/project/get' , require('../controllers/projectCtrl').getProject );

// router.post('/project/add')

module.exports = router;