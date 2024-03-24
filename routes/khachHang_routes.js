var express = require("express");
var router = express.Router();
const KhachHangControl = require("../controller/khachHang_controller");
router.get("/getKhachHang", KhachHangControl.getListKhachHang);
router.post("/addKhachHang", KhachHangControl.addKhachHang);
router.put("/updateKhachHang/:id", KhachHangControl.updateKhachHang);
router.delete("/deleteKhachHang/:id", KhachHangControl.deleteKhachHang);
module.exports = router;