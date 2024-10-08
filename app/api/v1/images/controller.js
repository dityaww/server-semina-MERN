const { createImage } = require("../../../services/mongoose/images");
const { StatusCodes } = require('http-status-codes')

const create = async (req, res, next) => {
    try {
        console.log(req.file);

        const result = await createImage(req)

        res.status(StatusCodes.CREATED).json({
            data: result
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { create }