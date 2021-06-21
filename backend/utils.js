const jwt = require('jsonwebtoken');
const generateToken = (user) => {
    return
        jwt.sign({
        _id: user._id, email: user.email,
        password: user.password
    }
        , process.env.JWT_SECRET,
        {
            expiresIn: '30d',
        });
}
// const generateToken = await generateAuthToken()
module.exports = generateToken;