const Images = require('../../api/v1/images/model')
const { NotFoundError } = require('../../errors')

const createImage = async (req) => {
    const result = Images.create({
        name : req.file ? `uploads/${req.file.filename}` : `uploads/avatar/default.jpg`
    })

    return result
}

// tambahkan function checking Image 
const checkingImage = async (id) => {
    const result = await Images.findOne({ _id: id });
    console.log(result);
  
    if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id :  ${id}`);
  
    return result;
};

const generateImage = async (req) => {
    const result = `uploads/${req.file.filename}`

    return result
}

module.exports = {
    createImage,
    generateImage,
    checkingImage
}