"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addressSchema = require("./addressSchema");

const Incident = mongoose.model(
  "Incident",
  new mongoose.Schema(
    {
      address: { type: addressSchema, default: () => ({}) },
      age: {
        type: Number,
        min: 18,
        allowNull: false,
        required: [true, "Age is required"],
      },
      identity: {
        type: String,
        enum: ["Myself", "Someone Else"],
        default: "Myself",
      },
      gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
      },
      title: { type: String, allowNull: false },
      message: { type: String, allowNull: false },
      time: { type: Date, allowNull: true },
      typeOfViolence: {
        type: String,
        enum: [
          "Rape/Sexual Assault",
          "Chain Snatching/Robbery",
          "Domestic Violence",
          "Physical Assault, Stalking, Online Harrasment",
        ],
      },
      reportToPolice: {
        type: String,
        enum: [
          "Yes I did",
          "I will, in the future",
          "I am not sure if I want to",
          "No",
          "I tried",
        ],
      },
      status: {
        type: String,
        enum: ["live", "pending", "rejected"],
        default: "live",
      },
    },
    { timestamps: true }
  )
);


const doc = new Incident();
doc.address;
module.exports = Incident;