const jwt = require('jsonwebtoken');


// typical middlwware in NODE EXPRESS
module.exports = (req, res, next) => {
     try {
        const token  = req.headers.authorization.split(' ')[1];
        // secret string for creating the token (salt) check if its valid ot not
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = {email: decodedToken.email, userId: decodedToken.userId};
        next();
     }catch(error) {
         // this message goes to dialog materials pop up
         res.status(401).json({ message: 'You are not authenticated!'});
     }

};