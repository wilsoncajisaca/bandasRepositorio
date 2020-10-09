const { Router } = require('express');
const { getProjects } = require('../controllers/project_controller');
const router = Router();


router.post('/', getProjects);

module.exports = router;