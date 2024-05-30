// routes/analyticsRoutes.js
const router = express.Router();
const express = require('express');
const { getAnalytics } = require('../controllers/getAnalyticsController');
const isAdmin = require('../middlewares/adminMiddleware');
const originAuthMiddleware = require('../middlewares/originAuthMiddleware');
const { checkHealth } = require('../controllers/healthCheckController');

router.get('/health', originAuthMiddleware, checkHealth);
router.get('/analytics',originAuthMiddleware, isAdmin, getAnalytics);

module.exports = router;
