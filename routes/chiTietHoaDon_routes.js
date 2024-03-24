var express = require("express");
var router = express.Router();
const ChiTietHoaDonControl = require("../controller/chiTietHoaDon_controller");
router.get("/getChiTietHoaDon", ChiTietHoaDonControl.getListChiTietHoaDon);
router.post("/addChiTietHoaDon", ChiTietHoaDonControl.addChiTietHoaDon);
router.put("/updateChiTietHoaDon/:id", ChiTietHoaDonControl.updateChiTietHoaDon);
router.delete("/deleteChiTietHoaDon/:id",ChiTietHoaDonControl.deleteChiTietHoaDon);
router.get('/searchChiTietHoaDon/:id',ChiTietHoaDonControl.searchChiTietHoaDonTheoId)
module.exports = router;