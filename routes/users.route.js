const express = require("express");
const { limiter } = require("../controllers/middleware/limiter");
const viewCount = require("../controllers/middleware/viewCount");
const usersController = require("../controllers/users.controller");
const router = express.Router();

router
  .route("/")
  .get(usersController.getAllusers)
  .post(usersController.insertuser).patch(usersController.updateuser).delete(usersController.deleteuser);

  router.route("/all").get(viewCount,limiter, usersController.getAllusers)
  router.route("/random").get(usersController.getRandomuser);
module.exports = router;
