const { NhanVienModel } = require("../models/nhanVien_model");
const mongoose  = require('mongoose')
const COMMON = require("../COMMON")
exports.getListNhanVien = async (req, res, next) => {
  try {
    await mongoose.connect(COMMON.uri);
    const nhanviens = await NhanVienModel.find();
    console.log(nhanviens);
    res.send(nhanviens);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      messenger: "Lỗi Server",
      data: [],
    });
  }
};

exports.addNhanVien = async (req, res, next) => {
  await mongoose.connect(COMMON.uri);
  try {
    const newNhanVien = new NhanVienModel({
      hoTen: req.body.hoTen,
      tenNguoiDung: req.body.tenNguoiDung,
      matKhau: req.body.matKhau,
      email: req.body.email,
      diaChi: req.body.diaChi,
      dienThoai: req.body.dienThoai,
      ghiChu: req.body.ghiChu,
    });

    const result = await newNhanVien.save();

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
exports.deleteNhanVien = async (req, res, next) => {
  await mongoose.connect(COMMON.uri);
  try {
    const { id } = req.params;
    const result = await NhanVienModel.findByIdAndDelete(id);
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
exports.updateNhanVien = async (req, res, next) => {
  await mongoose.connect(COMMON.uri);
  try {
    const { id } = req.params;
    const data = req.body;
    const updateNhanVien = await NhanVienModel.findById(id);

    let result = null;
    if (updateNhanVien) {
      updateNhanVien.hoTen = data.hoTen ?? updateNhanVien.hoTen;
      updateNhanVien.tenNguoiDung =
        data.tenNguoiDung ?? updateNhanVien.tenNguoiDung;
      updateNhanVien.matKhau = data.matKhau ?? updateNhanVien.matKhau;
      updateNhanVien.email = data.email ?? updateNhanVien.email;
      updateNhanVien.diaChi = data.diaChi ?? updateNhanVien.diaChi;
      updateNhanVien.dienThoai = data.dienThoai ?? updateNhanVien.dienThoai;
      updateNhanVien.ghiChu = data.ghiChu ?? updateNhanVien.ghiChu;
      result = await updateNhanVien.save();
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
