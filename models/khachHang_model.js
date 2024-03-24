const db = require("./db");
const khachHangSchema = new db.mongoose.Schema(
  {
    hoTen: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    sdt: {
      type: String,
      require: true,
    },
    diaChi: {
      type: String,
      require: true,
    },
    lichSuMuaHang: [{
      type: db.mongoose.Schema.Types.ObjectId,
      ref: "HoaDonModel",
    }],

    thongTinThanhToan: {
      type: String,
      require: true,
    },
  },
  {
    collection: "khachhangs",
  }
);
const KhachHangModel = db.mongoose.model("KhachHangModel", khachHangSchema);
module.exports = { KhachHangModel };
