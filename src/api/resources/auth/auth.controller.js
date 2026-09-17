

// register user
const register = async (req, res) => {
  try {
    const { email, password, comfirmedPassword } = req.body;
    if(!email) {
      return res.status(400).json({ message: 'email is required' });
    }
    if(!password) {
      return res.status(400).json({ message: 'password is required' });
    }
    if(password.length < 8) {
      return res.status(400).json({ message: 'password must be at least 8 chars' });
    }
    if(password != comfirmedPassword) {
      return res.status(400).json({ message: 'confirmed password must be match the password' });
    }
    return res.status(200).json({ message: 'rigestered successfully' })
  } catch (error) {
    return res.status(500).json({ message: 'failed to register user' });
  }
};




module.exports = {
  register
};
