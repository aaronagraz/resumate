const express = require("express");
const router = express.Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController.js");

// * get all users localhost:3001/api/user
// * get one users localhost:3001/api/user/:userId
// * create one user localhost:3001/api/user/:userId
// * update one user localhost:3001/api/user/:userId
// * eliminate one user localhost:3001/api/user/:userId

router.route("/").get(getUsers).post(createUser);
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
