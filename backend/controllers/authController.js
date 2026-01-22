/****************************************************
 * AUTH CONTROLLER
 * Handles signup & login logic
 ****************************************************/

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/****************************************************
 * @desc   Signup new user
 * @route  POST /api/auth/signup
 ****************************************************/
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1️⃣ Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // 2️⃣ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // 3️⃣ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4️⃣ Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 5️⃣ Response
    res.status(201).json({
      message: 'User registered successfully',
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/****************************************************
 * @desc   Login user & return JWT
 * @route  POST /api/auth/login
 ****************************************************/
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' });
    }

    // 2️⃣ Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 3️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 4️⃣ Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // 5️⃣ Response
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
