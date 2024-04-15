const mongoose = require('mongoose');
const Paper = require('../models/Paper');

// GET all papers
// PATH: /api/paper-review-app/papers
const getAllPapers = async (request, response) => {
  try {
    const allPapers = await Paper.find({});
    return response.status(200).json(allPapers);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
};

// GET a single paper
// PATH: /api/paper-review-app/papers/:id
const getPaperById = async (request, response) => {
  const { id } = request.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(404).json({ response: 'Paper Not Found!' });
    }

    const paper = await Paper.findById(id);

    if (!paper) {
      return response.status(404).json({ response: 'Paper Not Found!' });
    }

    return response.status(200).json(paper);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
};

// GET single paper
// PATH: /api/paper-review-app/papers
const postPaper = async (request, response) => {
  const { code, paper } = request.body;

  try {
    const newPaper = await Paper.create({ code, paper });
    return response.status(200).json(newPaper);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllPapers,
  getPaperById,
  postPaper,
};
