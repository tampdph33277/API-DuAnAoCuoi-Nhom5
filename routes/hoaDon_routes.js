var express = require("express");
var router = express.Router();
const hoaDonControl = require("../controller/hoaDon_controller");
router.get("/getHoaDon", hoaDonControl.getListHoaDon);
router.post("/addHoaDon", hoaDonControl.addHoaDon);
router.put("/updateHoaDon/:id", hoaDonControl.updateHoaDon);
router.delete("/deleteHoaDon/:id", hoaDonControl.deleteHoaDon);
router.get("/searchHoaDon/:id",hoaDonControl.searchHoaDonTheoId);
module.exports = router;