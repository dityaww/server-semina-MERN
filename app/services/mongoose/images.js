const Images = require('../../api/v1/images/model')

const createImage = async (req) => {
    const result = Images.create({
        name : req.file ? `uploads/${req.file.filename}` : `uploads/avatar/default.jpg`
    })

    return result
}

const generateImage = async (req) => {
    const result = `uploads/${req.file.filename}`

    return result
}

module.exports = {
    createImage,
    generateImage
}