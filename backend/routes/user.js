const router = require("express").Router();
const userController = require("../controllers/userController");


router.delete('/', userController.deleteUser);
router.get('/ ', userController.getUser);

module.exports = router;