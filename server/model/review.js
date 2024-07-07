const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  displayPic: {
    type: String,
    default: ""
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'projects',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  time: {
    type: Date,
    default: Date.now
  }
});

// Create a compound index to ensure `id` and `projectId` are unique together
ReviewSchema.index({ id: 1, projectId: 1 }, { unique: true });

module.exports = mongoose.model('Review', ReviewSchema);
