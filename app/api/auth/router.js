const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { auth } = require("../../middleware/auth");
const { upload } = require("../../middleware/multer");

const {
  signIn,
  signUp,
  getAllUser,
  getByIdUser,
  updateUser,
  deleteUser
} = require("./controller");

router.post("/login", signIn);
router.post("/register", upload, signUp);
router.get("/user", auth, getAllUser);
router.get("/user/:id", auth, getByIdUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);



module.exports = router;
