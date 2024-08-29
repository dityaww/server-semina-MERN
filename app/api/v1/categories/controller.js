const Categories = require('./model')
const { StatusCodes } = require('http-status-codes')

// import services
const { getAllCategories, createCategories, getOneCategories, updateCategories, deleteCategories } = require('../../../services/mongoose/categories')

const create = async (req, res, next) => {
    try {
        const result = await createCategories(req)

        res.status(StatusCodes.CREATED).json({
            data: result
        })
    } catch (err) {
        next(err)
    }
}

const index = async (req, res, next) => {
    try {
        const result = await getAllCategories(req)

        // untuk menyeleksi data yang ingin dikirim
        // const result = await Categories.find().select('_id name')

        res.status(StatusCodes.OK).json({
            data: result
        })
    } catch (err) {
        next(err)
    }
}

const find = async (req, res, next) => {
    try {
       const result = await getOneCategories(req)

        res.status(StatusCodes.OK).json({
            data: result,
        })
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updateCategories(req)

        res.status(StatusCodes.OK).json({
            data: result,
        })
    } catch (err) {
        next(err)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteCategories(req)
        
        res.status(StatusCodes.OK).json({
            data: result,
        })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    index,
    find,
    create,
    update,
    destroy
}