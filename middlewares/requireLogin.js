module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(401).semd({ error: "You must log in!"})
    }

    next();
}