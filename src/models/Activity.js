const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  activityTitle: {
    type: String,
    required: true,
  },
  activityCategory: {
    type: String,
    required: true,
  },
  activityContributor: {
    type: String,
    required: true,
  },
  activityCreatedAt: {
    type: Date,
    default: Date.now,
  },
  activityUpdatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Activity", ActivitySchema);
