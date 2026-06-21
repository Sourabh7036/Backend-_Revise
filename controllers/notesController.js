import Note from "../models/Note.js";

const notes = [];

export const creatednotesController = async (req, res) => {
  const { title, description } = req.body;

  const note = await Note.create({
    title: title,
    description: description,
  });
  console.log(note);

  res.status(201).json({
    message: "Note Created successfully",
  });
};

export const getNotesController = async (req, res) => {
  const Notes = await Note.find();
  res.status(200).json({
    message: "data gets successfully",
    success: 1,
    Notes: Notes,
  });
};

export const deleteNotesController = async (req, res) => {
  const { title } = req.query;
  console.log(title);
  const deleteItem = await Note.deleteMany({ title: title });
  console.log(deleteItem);
  res.status(200).json({
    message: "Note deleted successfully",
  });
};

export const updateNotesController = async (req, res) => {
  const { title } = req.params;
  const { newTitle } = req.body;
  console.log(title, newTitle);
  const update = await Note.updateMany(
    {
      title,
    },
    {
      $set: {
        title: newTitle,
      },
    },
  );
  console.log(update);

  res.status(201).json({
    message: "Title updated successfully",
  });
};
