const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const modifySubmissionsController = require('../controllers/modifySubmissionsController');
const originAuth = require('../middlewares/originMiddleware');
const auth = require('../middlewares/authMiddleware');

router.delete('/delete/:id', modifySubmissionsController.deleteSubmission);
router.post('/create', upload.fields([{ name: 'pythonFile', maxCount: 1 }, { name: 'jsonFile', maxCount: 1 }]), modifySubmissionsController.uploadFiles);


module.exports = router;

