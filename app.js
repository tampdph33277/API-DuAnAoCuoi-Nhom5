var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var nhanVienRouter = require('./routes/nhanVien_routes');
var congViecRouter = require('./routes/congViec_routes');
var dichVuRouter = require('./routes/dichVu_routes');
var hoaDonRouter = require('./routes/hoaDon_routes')
var khachHangRouter = require("./routes/khachHang_routes");
var chiTietHoaDonRouter = require("./routes/chiTietHoaDon_routes");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/congviecs', congViecRouter);
app.use('/dichvus', dichVuRouter);
app.use('/nhanviens', nhanVienRouter);
app.use('/hoadons',hoaDonRouter);
app.use('/khachhangs',khachHangRouter);
app.use('/chitiethoadons',chiTietHoaDonRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
