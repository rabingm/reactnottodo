import express, { request } from "express";

const router = express.Router();

router.get("*", (req, res, next) => {
  console.log("You've reached the get server");
  next();
});

router.post("/", (req, res, next) => {
    console.log(req.body);
    res.send("You've reached the post server");
  
});

router.patch("", (req, res, next) => {
  res.send("You've reached the patch server");

 
});

router.put("", (req, res, next) => {
  res.send("You've reached the put server");
});

router.get("", (req, res, next) => {
  res.send("You've reached the get server");
});

router.delete("", (req, res, next) => {
  res.send("You've reached the delete server");
});

export default router;
