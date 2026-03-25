const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://narendra:ramchandra789@cluster0.1lwyrzv.mongodb.net/?appName=Cluster0");
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;