const express = require("express");

const app = express();
// const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')
const auth = require("./routes/auth");

// app.use(bodyParser());

// app.use(
//     bodyParser.urlencoded({
//       extended: true,
      
//     })
//   );
// app.use(fileUpload());
// app.use(multer());
// const fileupload = require('express-fileupload'); 

// app.use(fileUpload({useTempFiles: true}))
app.use(express.json());
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cookieParser());
app.use("/api/v1", auth);
module.exports = app;