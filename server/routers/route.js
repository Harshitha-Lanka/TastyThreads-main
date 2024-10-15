const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/controller");

router.route("/").get(Controllers.home);
router.route("/SignUp").post(Controllers.signup);
router.route("/RecipeForm").get(Controllers.recipeform);

module.exports = router;