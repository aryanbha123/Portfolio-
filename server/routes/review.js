const router  = require('express').Router()


router.post('/reviews/add' , require('../controllers/review').addReview);
router.post('/reviews/update' , require('../controllers/review').updateReview);
router.get('/reviews/get' ,require('../controllers/review').fetchReview);



module.exports = router;