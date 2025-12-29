// scripts/importAttractions.js
require("dotenv").config();
const mongoose = require("mongoose");
const Attraction = require("../models/attraction");

// ✅ make sure this file is INSIDE your backend folder (same level as server.js in your screenshot)
const data = require("../attractions.json");

async function run() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing in .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to MongoDB:", mongoose.connection.name);
    console.log("JSON records:", Array.isArray(data) ? data.length : "NOT AN ARRAY");
    console.log("First record:", Array.isArray(data) && data.length ? data[0] : "NONE");

    if (!Array.isArray(data) || data.length === 0) {
      console.log("No data found. Check the JSON path and file contents.");
      return;
    }

    const ops = data.map((a) => ({
      updateOne: {
        filter: { attractionId: a.attractionId }, // ✅ serial ID from JSON
        update: {
          $set: {
            attractionId: a.attractionId,
            country: a.country,
            city: a.city,
            name: a.name,
            picture: a.picture,
            description: a.description,
          },
        },
        upsert: true,
      },
    }));

    const result = await Attraction.bulkWrite(ops, { ordered: false });

    console.log("Import done:", {
      upserted: result.upsertedCount,
      modified: result.modifiedCount,
      matched: result.matchedCount,
    });
  } catch (err) {
    console.error("Import failed:", err.message);
  } finally {
    await mongoose.disconnect();
  }
}

run();


// Script is made by AI.
