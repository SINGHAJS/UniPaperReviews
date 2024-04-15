const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paperSchema = new Schema(
  {
    code: { type: String, required: true },
    paper: { type: String, required: true },
    reviews: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Paper', paperSchema);
