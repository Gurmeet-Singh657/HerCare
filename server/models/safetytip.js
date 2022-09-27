"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SafetyTip = mongoose.model(
  "SafetyTip",
  new mongoose.Schema(
    {
      typeOfViolence: { type: String },
      title: { type: String, allowNull: false },
      message: { type: String, allowNull: false },
      status: {
        type: String,
        enum: ["live", "pending", "rejected"],
        default: "live",
      },
    },
    { timestamps: true }
  )
);

const doc = new SafetyTip();
doc.address;
module.exports = SafetyTip;
