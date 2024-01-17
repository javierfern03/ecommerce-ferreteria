const express = require("express")

const autControllers = require("../Controllers/authControllers")
const { upload } = require("../utils/multer")

// const authMiddlewares = require("../Middlewares/authMiddlewares")

const router = express.Router()


router.post("/singup",upload.single("profileimage"), autControllers.singUp)

router.post("/login", autControllers.LogIn)


module.exports = router