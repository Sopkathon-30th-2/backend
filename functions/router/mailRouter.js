const { Router } = require("express");
const { mailController } = require("../controller");

const router = Router();

router.get("/", mailController.deleteEmail);
router.get("/count", mailController.getTotalEmailCount);

module.exports = router;
