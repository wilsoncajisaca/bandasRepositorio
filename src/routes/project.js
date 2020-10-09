const { Router } = require('express');
const { createProjects } = require('../controllers/project_controller');
const router = Router();

router.post('/add', createProjects);

module.exports = router;