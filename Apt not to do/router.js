import express, { request } from "express";
import TaskList from "./models/task_lists/TaskLists.schema.js";
// import TaskList from "./TaskLists.schema.js";

const router = express.Router();

import {
  insertTask,
  updateToDo,
  displayDb,
  deleteTasks,
} from "./models/task_lists/TaskLists.model.js";

router.get("*", (req, res, next) => {
  console.log("You've reached the get server");
  next();
});

//create new task in the database
router.post("/", async (req, res) => {
  console.log(req.body);
  const result = await insertTask(req.body);
  res.json({
    status: "success",
    message: "Your task is added",
    result,
  });
});

router.patch("/", async (req, res) => {
  try {
    const result = await updateToDo(req.body);
    res.json({
      status: "success",
      message: "data has been added",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.put("", (req, res) => {
  res.send("You've reached the put server");
});

router.get("/", async (req, res) => {
  //Receive all the data from database
  const result = await displayDb();
  console.log(result);
  res.json({
    status: "success",
    message: "This is the list of all available data in database",
    result,
  });
});

router.delete("", async (req, res) => {
  const { args } = req.body;
  console.log(args);
  const result = await deleteTasks(args);
  if (result?.args) {
    return res.json({
      status: "success",
      message: "Task is deleted",
    });
  }

  res.json({
    status: "success",
    message: "Nothing to delete",
  });
});

export default router;
