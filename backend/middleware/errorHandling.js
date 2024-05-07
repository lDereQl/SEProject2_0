const errorHandler = (req, res, next, error) => {
    return res.status(500).json({status: true, message: "Something went wrong"})
}

module.exports = errorHandler