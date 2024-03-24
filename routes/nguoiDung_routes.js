var express = require("express");
var router = express.Router();
const apiCtrl = require("../controller/nguoidung_controller");
router.post('/login', apiCtrl.doLogin);
router.post('/reg', apiCtrl.doReg);
var mdw = require('../middleware/api.auth');
router.get('/products', mdw.api_auth,  apiCtrl.DanhSach );
module.exports = router;
