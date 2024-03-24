const db = require("./db");
const chiTietHoaDonSchema = new db.mongoose.Schema(
  {
    idHoaDon: {
      type: db.mongoose.Schema.Types.ObjectId,
      ref: "HoaDonModel",
    },
    idDichVu: {
      type: db.mongoose.Schema.Types.ObjectId,
      ref: "DichVuModel",
    },
    soLuong: {
      type: Number,
      require: true,
    },
    tongTien: {
      type: Number,
      require: true,
    },
  },
  {
    collection: "chitiethoadons",
  }
);
const ChiTietHoaDonModel = db.mongoose.model("ChiTietHoaDonModel", chiTietHoaDonSchema);
module.exports = { ChiTietHoaDonModel};
