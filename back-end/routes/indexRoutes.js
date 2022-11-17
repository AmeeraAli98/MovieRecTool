const express = require("express")
const indexController = require("../controllers/IndexController");
const router = express.Router();
router.post("/sign-up",indexController.register)
router.post("/login", indexController.login)
router.post("/my-list", indexController.addMovie)
router.get("/my-list", indexController.getList)
router.post("/update", indexController.updateList)
router.post("/delete", indexController.deleteItem)
module.exports=router