const bcrypt = require('bcrypt');
const { readUsers, writeUsers } = require('../utils/fileHelper');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const users = readUsers();

  const existing = users.find(user => user.email === email);
  if (existing) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, email, password: hashedPassword });
  writeUsers(users);

  res.json({ message: 'Register successful' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({
    message: 'Login successful',
    user: { username: user.username, email: user.email }
  });
};
