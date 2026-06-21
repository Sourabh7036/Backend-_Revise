import express from "express";
import notesrouter from "./routes/notes.js";
import ConnectDb from "./db/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
ConnectDb();

app.use(express.json());

app.use("/", notesrouter);
app.get("/sher", (req, res) => {
  res.send("Sher is sher ");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is Running at ${process.env.PORT}`);
});
