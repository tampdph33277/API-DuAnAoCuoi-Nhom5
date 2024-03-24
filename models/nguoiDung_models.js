var db = require("./db");
const jwt = require("jsonwebtoken"); 
require("dotenv").config();
const chuoi_ky_tu_bi_mat = process.env.TOKEN_SEC_KEY;
const bcrypt = require("bcrypt");

var userSchema = new db.mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    token: {
      type: String,
      required: false,
    },
  },
  { collection: "nguoidungs" }
);

/**
 * Hàm tạo token để đăng nhập với API
 * @returns {Promise<*>}
 */
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  console.log(user);
  const token = jwt.sign(
    { _id: user._id, username: user.username },
    chuoi_ky_tu_bi_mat
  );
  // user.tokens = user.tokens.concat({token}) // code này dành cho nhiều token, ở demo này dùng 1 token
  user.token = token;
  await user.save();
  return token;
};

/**
 * Hàm tìm kiếm user theo tài khoản
 * @param username
 * @param password
 * @returns {Promise<*>}
 */
userSchema.statics.findByCredentials = async (username, password) => {
  const user = await userModel.findOne({ username });
  if (!user) {
    throw new Error("Không tồn tại user");
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Sai password");
  }
  return user;
};
let userModel = db.mongoose.model("userModel", userSchema);
module.exports = { userModel };
