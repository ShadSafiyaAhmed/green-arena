import User from "../models/userModel.js";

//>>>>>>>>>>>>>>>>>>>>>>>Register User<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

const registerUser = async (req, res) => {
  const { username, email, mobile, password, confirmPassword } = req.body;

  //validate input

  if (!username || !email || !mobile || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "password does not match" });
  }

  try {
    //check if user already exists

    const existingUser = await User.findOne({
      $or: [{ email }, { username }, { mobile }],
    });
    if (existingUser) {
      return res.status(400).json({ message: "user already exists!" });
    }
    //create new User

    const newUser = new User({ username, email, mobile, password });
    await newUser.save();
    return res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { registerUser };
