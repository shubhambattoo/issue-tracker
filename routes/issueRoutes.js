const express = require('express');
const issueController = require('../controllers/issueController');
const router = express.Router();

router
  .route('/')
  .get(issueController.getIssues)
  .post(issueController.createIssue);

router
  .route('/:id')
  .get(issueController.getIssue)
  .put(issueController.updateIssue)
  .delete(issueController.deleteIssue);

module.exports = router;
