// Import Dependencies
import { connectToDatabase } from "../lib/database";

module.exports = async (req, res) => {
  if (req.method === "GET") {
    const db = await connectToDatabase();
    const collection = await db.collection("jobs");
    // Select the users collection from the database
    const jobs = await collection.find({}).toArray();

    res.status(200).json({ jobs });
  }  else {
    res.status(404).json({ status: "Error route note found" });
  }
};