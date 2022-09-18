"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addressSchema = require("./addressSchema");

const SafetyTip = mongoose.model(
  "SafetyTip",
  new mongoose.Schema(
    {
      address: { type: addressSchema, default: () => ({}) },
      title: { type: String, allowNull: false },
      message: { type: String, allowNull: false }
    },
    { timestamps: true }
  )
);


const doc = new SafetyTip();
doc.address;
module.exports = SafetyTip;