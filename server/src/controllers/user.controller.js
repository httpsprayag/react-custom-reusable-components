const userService = require("../services/user.service");

exports.registerUser = async (req, res) => {
  console.log("Body : ", req.body);
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
