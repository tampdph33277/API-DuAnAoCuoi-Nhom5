const db = require('./db')
const nhanVienSchema = new db.mongoose.Schema({
    hoTen:{
        type:String,
        require:true
    },
    tenNguoiDung:{
        type: String,
        require: true,
    },matKhau:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    diaChi:{
        type: String,
        require: true,
    },
    dienThoai:{
        type: String,
        require: true,
    },
    ghiChu:{
        type: String,
        require: true,
    }

},{
    collection:"nhanviens"
}) 
const NhanVienModel = db.mongoose.model("NhanVienModel",nhanVienSchema);
module.exports = {NhanVienModel};