const COMMON = require("../COMMON");
const { ChiTietHoaDonModel } = require("../models/chiTietHoaDon_model");
const mongoose = require("mongoose");
exports.getListChiTietHoaDon = async (req, res, next) => {
  try {
    await mongoose.connect(COMMON.uri);
    const ChiTietHoaDon = await ChiTietHoaDonModel.find();
    console.log(ChiTietHoaDon);

    res.status(200).json(ChiTietHoaDon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Lỗi khi lấy chi tiết hóa đơn" });
  }
};

exports.addChiTietHoaDon = async (req, res, next) => {
  try {
    await mongoose.connect(COMMON.uri);

    const { idHoaDon, idDichVu, soLuong, tongTien } = req.body;

    const newChiTietHoaDon = new ChiTietHoaDonModel({
      idHoaDon,
      idDichVu,
      soLuong,
      tongTien,
    });

    const savedChiTietHoaDon = await newChiTietHoaDon.save();

    res.status(200).json(savedChiTietHoaDon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Lỗi khi thêm chi tiết hóa đơn" });
  }
};

exports.updateChiTietHoaDon = async (req, res, next) => {
  try {
    await mongoose.connect(COMMON.uri);

    const idChiTietHoaDon = req.params.id;
    const { idHoaDon, idDichVu, soLuong, tongTien  } =
      req.body;

    const updatedChiTietHoaDon = await ChiTietHoaDonModel.findByIdAndUpdate(
      idChiTietHoaDon,
      { idHoaDon, idDichVu, soLuong, tongTien },
      { new: true }
    );

    res.status(200).json(updatedChiTietHoaDon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Lỗi khi cập nhật chi tiết hóa đơn" });
  }
};

exports.deleteChiTietHoaDon = async (req, res, next) => {
  try {
    await mongoose.connect(COMMON.uri);

    const ChiTietHoaDonId = req.params.id;

    await ChiTietHoaDonModel.findByIdAndDelete(ChiTietHoaDonId);

    res.status(200).json({ message: "Xóa công việc thành công" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Lỗi khi xóa công việc" });
  }
};

exports.searchChiTietHoaDonTheoId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await ChiTietHoaDonModel.findById(id).populate("idHoaDon").populate("idDichVu");
    res.json({
      status: 200,
      messenger: "Thông tin hóa đơn",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
