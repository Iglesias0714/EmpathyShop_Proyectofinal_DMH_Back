const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Authenticate user
exports.authenticateUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    console.log('Intentando autenticar usuario:', username);
    const user = await User.findOne({ username, password }).exec();
    if (user) {
      res.status(200).json({ message: 'Authentication successful', user });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (err) {
    console.error('Error durante la autenticación:', err.message);
    res.status(500).json({ message: err.message });
  }
};
