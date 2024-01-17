const User = require('../models/userModel');
const bcryptjs = require('bcryptjs');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const uploadFiles = require('../utils/supabase');

exports.singUp = catchAsync(async (req, res) => {
  const { name, email, password, role } = req.body;
  const { profileimage} = req.file

  const promiseUploadProfileImage = async (file)=>{
    const uploadProfileImage = await uploadFiles(file)
    const profileimageUrl = uploadProfileImage.fullPath
  }
  

  const salt = await bcryptjs.genSalt(10);
  const encryptedPassword = await bcryptjs.hash(password, salt);

  const user = await User.create({
    name: name.toLowerCase(),
    email: email.toLowerCase(),
    password: encryptedPassword,
    role,
  });

  return res.status(200).json({
    status: 'succes',
    message: 'User Create',
    user
  });
});

exports.LogIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      status: 'active',
      email: email.toLowerCase(),
    },
  });

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  if (!(await bcryptjs.compare(password, user.password))) {
    return next(new AppError('Uncorrect password o email', 401));
  }

  return res.status(200).json({
    status: 'succes',
    message: 'User Create',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      profileImgUrl: user.profileImgUrl,
      role: user.role,
    },
  });
});
