const express = require('express');
const Router = express.Router();
const PaperController = require('../../controllers/papersController');

// GET all papers
// PATH: /api/paper-review-app/papers
Router.get('/papers', PaperController.getAllPapers);

// GET single paper
// PATH: /api/paper-review-app/papers/:id
Router.get('/papers/:id', PaperController.getPaperById);

// POST paper
// PATH: /api/paper-review-app/papers
Router.post('/papers', PaperController.postPaper);

module.exports = Router;
