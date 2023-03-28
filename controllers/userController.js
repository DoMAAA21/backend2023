const User = require("../models/user");

const ErrorHandler = require("../utils/errorHandler");

// const sendToken = require("../utils/jwtToken");

// const sendEmail = require("../utils/sendEmail");

const cloudinary = require("cloudinary");

const crypto = require("crypto");

exports.allUsers = async (req, res, next) => {
    const users = await User.find();
  
    res.status(200).json({
      success: true,
  
      users,
    });
  };


//  exports.newUser = async (req, res, next) => { 

//   console.log(req.body);

// //   let formData = new FormData();
// // formData.append("avatar",req.body);

// // console.log(formData);
  
//   const result = await cloudinary.v2.uploader.upload(
//      req.body.avatar,
//       {
//         folder: "avatars",
  
//         width: 150,
  
//         crop: "scale",
//       },
//       (err, res) => {
//         console.log(err, res);
//       }
//     );

//     console.log(result);

   
//     const {
//       name,
  
//       email,
  
//       password,
//     } = req.body;

// //     let formData = new FormData();
// // formData.append("avatar", file);
    
//     const user = await User.create({
//       name,
  
//       email,
  
//       password,
  
//       avatar: {
//         public_id: result.public_id,
  
//         url: result.secure_url,
//       },
//     });
  


    
//   };

  exports.newUser = async (req, res, next) => {

    // const result = await cloudinary.v2.uploader.upload(
    //   req.body.avatar,
    //    {
    //      folder: "avatars",
   
    //      width: 150,
   
    //      crop: "scale",
    //    },
    //    (err, res) => {
    //      console.log(err, res);
    //    }
    //  );
    


    
    
    const product = await User.create(req.body);


    
  
    res.status(201).json({
      success: true,
  
      product,
    });
  };