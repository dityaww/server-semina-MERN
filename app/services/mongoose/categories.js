const Categories = require('../../api/v1/categories/model')
const { BadRequestError, NotFoundError } = require('../../errors')

const getAllCategories = async () => {
    const result = await Categories.find()

    return result
}

const createCategories = async (req) => {
    const { name } = req.body

    const check = await Categories.findOne({ name })

    // check properti name jika duplikat balikannya bad req (400)
    if (check) throw new BadRequestError('Kategori nama duplikat')
    
    const result = await Categories.create({ name })
    return result
}

const getOneCategories = async (req) => {
    const { id } = req.params

    const result = await Categories.findOne({ _id: id })

    // if id tidak ada
    if (!result) throw new NotFoundError(`Tidak ada kategori dengan id : ${id}`)

    return result
}

const updateCategories = async (req) => {
    const { id } = req.params
    const { name } = req.body

    // cek dulu ada atau tidak id nya
    const checkCategoryId = await Categories.findOne({
        _id: id
    })
    
    // if id tidak ada
    if (!checkCategoryId) throw new NotFoundError(`Tidak ada kategori dengan id : ${id}`)

    const check = await Categories.findOne({ 
        name, 
        _id: { $ne: id },
    })

    // jika name nya sama
    if (check) throw new BadRequestError('Kategori nama duplikat')

    const result = await Categories.findOneAndUpdate(
        { _id: id }, 
        { name }, 
        { new: true, runValidators: true }
    )

    return result
}

const deleteCategories = async (req) => {
    const { id } = req.params

    const result = await Categories.findOneAndDelete({ _id: id })

    // if id tidak ada
    if (!result) throw new NotFoundError(`Tidak ada kategori dengan id : ${id}`)

    return result 
}

const checkingCategories = async (id) => {
    const result = await Categories.findOne({ _id: id });
  
    if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);
  
    return result;
};

module.exports = {
    getAllCategories,
    createCategories,
    getOneCategories,
    updateCategories,
    deleteCategories,
    checkingCategories
}