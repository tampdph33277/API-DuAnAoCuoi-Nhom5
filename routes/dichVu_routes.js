var express = require("express");
var router = express.Router();
const dichVuControl = require("../controller/dichVu_controller");
router.get("/getDichVu", dichVuControl.getListDichVu);
router.post("/addDichVu", dichVuControl.addDichVu);
router.put("/updateDichVu/:id", dichVuControl.updateDichVu);
router.delete("/deleteDichVu/:id", dichVuControl.deleteDichVu);
router.get("/searchDichVuByPrice",dichVuControl.searchDichVuByPrice)
router.put("/updateDichVuStatus/:id", dichVuControl.updateDichVuStatus);
module.exports = router;
