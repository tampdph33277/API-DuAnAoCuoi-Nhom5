var { userModel } = require("../models/nguoiDung_models");
var bcrypt = require("bcrypt");
const COMMON = require("../COMMON");
console.log("API Router loaded");
const db = require("../models/db");

exports.DanhSach = async(req,res,next)=>{
  try {
    await db.mongoose.connect(COMMON.uri);
    const users = await userModel.find();
    console.log(users);
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      messenger: "Lỗi Server",
      data: [],
    });
  }

}

exports.doLogin = async (req, res, next) => {
  await db.mongoose.connect(COMMON.uri);
  try {
    const user = await userModel.findByCredentials(
      req.body.username,
      req.body.password
    );
    if (!user) {
      return res.status(401).json({ error: "Sai thông tin đăng nhập" });
    }
    // đăng nhập thành công, tạo token làm việc mới
    const token = await user.generateAuthToken();
    return res.status(200).send({ user, token });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
exports.doReg = async (req, res, next) => {
  await db.mongoose.connect(COMMON.uri);
  try {
    const salt = await bcrypt.genSalt(10);

    const user = new userModel(req.body);

    user.password = await bcrypt.hash(req.body.password, salt);
    const token = await user.generateAuthToken();

    let new_u = await user.save();
    

    return res.status(201).send({ user: new_u, token });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

