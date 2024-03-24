const { KhachHangModel } = require("../models/khachHang_model");
const mongoose  = require('mongoose')
const COMMON = require("../COMMON")
exports.getListKhachHang = async (req, res, next) => {
  try {
    await mongoose.connect(COMMON.uri);
    const khachHangs = await KhachHangModel.find();
    console.log(khachHangs);
    res.send(khachHangs);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      messenger: "Lỗi Server",
      data: [],
    });
  }
};

exports.addKhachHang = async (req, res, next) => {
  await mongoose.connect(COMMON.uri);
  try {
    const newKhachHang = new KhachHangModel({
      hoTen: req.body.hoTen,
      email: req.body.email,
      sdt:req.body.sdt,
      diaChi:req.body.diaChi,
      lichSuMuaHang:req.body.lichSuMuaHang,
      thongTinThanhToan:req.body.thongTinThanhToan
    });

    const result = await newKhachHang.save();

    if (result) {
      res.json({
        status: 200,
        messenger: "Thêm thành công",
        data: result,
      });
    } else {
      res.status(400).json({
        status: 400,
        messenger: "Lỗi, thêm không thành công",
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      messenger: "Internal Server Error",
      data: [],
    });
  }
};
exports.deleteKhachHang = async (req, res, next) => {
  await mongoose.connect(COMMON.uri);
  try {
    const { id } = req.params;
    const result = await KhachHangModel.findByIdAndDelete(id);
    if (result) {
      res.json({
        status: 200,
        messenger: "Xóa thành công",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        messenger: "Lỗi,Xóa không thành công",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};
exports.updateKhachHang = async (req, res, next) => {
  await mongoose.connect(COMMON.uri);
  try {
    const { id } = req.params;
    const data = req.body;
    const updateKhachHang = await KhachHangModel.findById(id);

    let result = null;
    if (updateKhachHang) {
      updateKhachHang.hoTen = data.hoTen ?? updateKhachHang.hoTen;
      updateKhachHang.email =
        data.email ?? updateKhachHang.email;
      updateKhachHang.sdt = data.sdt ?? updateKhachHang.sdt;
      updateKhachHang.diaChi = data.diaChi ?? updateKhachHang.diaChi;
      updateKhachHang.lichSuMuaHang = data.lichSuMuaHang ?? updateKhachHang.lichSuMuaHang;
      updateKhachHang.thongTinThanhToan = data.thongTinThanhToan ?? updateKhachHang.thongTinThanhToan;
      result = await updateKhachHang.save();
    }
    if (result) {
      res.json({
        status: 200,
        messenger: "Cập nhật thành công",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        messenger: "Lỗi, cập nhật không thành công",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      messenger: "Internal Server Error",
      data: [],
    });
  }
};
exports.updateLichSuMuaHang = async (req, res, next) => {
  await mongoose.connect(COMMON.uri);
  try {
    const { id } = req.params;
    const data = req.body;
    const updateKhachHang = await KhachHangModel.findById(id);

    let result = null;
    if (updateKhachHang) {
      updateKhachHang.lichSuMuaHang = data.lichSuMuaHang ?? updateKhachHang.lichSuMuaHang;
      result = await updateKhachHang.save();
    }
    if (result) {
      res.json({
        status: 200,
        messenger: "Cập nhật thành công",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        messenger: "Lỗi, cập nhật không thành công",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      messenger: "Internal Server Error",
      data: [],
    });
  }
};
