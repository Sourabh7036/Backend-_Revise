import express from "express";
import { creatednotesController , getNotesController, deleteNotesController, updateNotesController} from "../controllers/notesController.js";

const router = express.Router();


router.post("/notes", creatednotesController);
router.get("/notes",getNotesController)
router.delete("/notes",deleteNotesController)
router.patch("/notes/:title", updateNotesController)

export default router;
