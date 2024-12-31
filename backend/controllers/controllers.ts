import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { PaperReview } from "../models/PaperReview";

// GET all paper reviews
// PATH: api/paper-reviews/all-paper-reviews
export const fetchAllPaperReviews = async (
  request: Request,
  response: Response
) => {
  response.status(200).json({ message: "GET all paper reviews" });
};

export const postNewPaperReview = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    const { id, paperTitle, university, degreeName } = request.body;

    if (!id || !paperTitle || !university || !degreeName) {
      response
        .status(400)
        .json({ message: "Please provide all the required fields" });
      return;
    }

    const newPaperReview = await PaperReview.create({
      id,
      paperTitle,
      university,
      degreeName,
    });

    response.status(200).json({ message: "POST paper review" });
  } catch (error) {
    console.error("Error posting new paper review", error);
    response
      .status(500)
      .json({ message: "Error posting new paper review", error: error });
  }
};
