import express from "express";
import {
  fetchAllPaperReviews,
  postNewPaperReview,
} from "../../controllers/controllers";

// App Router for Paper Reviews API
export const AppRouter = express.Router();

// GET all paper reviews
// PATH: /api/paper-reviews/all-paper-reviews
AppRouter.get("/all-paper-reviews", fetchAllPaperReviews);

// POST new paper review
// PATH: /api/paper-reviews/add-new-paper-review
AppRouter.post("/add-new-paper-review", postNewPaperReview);
