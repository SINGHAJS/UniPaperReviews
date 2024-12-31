import mongoose from "mongoose";

const PaperReviewSchema = new mongoose.Schema({
    id : {
        type: String, 
        required: true,
    },
    paperTitle : {
        type: String,
        required: true,
    },
    university : {
        type: String,
        required: true,
    },
    degreeName : {
        type: String,
        required: true,
    }
})

export const PaperReview = mongoose.model('PaperReview', PaperReviewSchema);