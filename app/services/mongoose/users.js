const Users = require('../../api/v1/users/model')
const Organizer = require('../../api/v1/organizers/model')
const { BadRequestError } = require('../../errors')
const { StatusCodes } = require('http-status-codes')

const createOrganizer = async ( req ) => {
    const { organizer, name, email, password, confirmPassword, role } = req.body

    if (password !== confirmPassword) {
        throw new BadRequestError('Password dan confirm password tidak sesuai')
    }

    const result = await Organizer.create({ organizer })

    const users = await Users.create({
        name,
        email, 
        password,
        role,
        organizer: result._id    
    })

    delete users._doc.password

    return users
}

const createUser = async (req, res) => {
    const { name, password, confirmPassword, role, email} = req.body

    if (password !== confirmPassword) {
        throw new BadRequestError('Password dan konfirmasi password tidak cocok')
    }

    const result = await Users.create({
        name,
        email, 
        organizer: req.user.organizer,
        password,
        role
    })

    return result
}

const getAllUsers = async (req) => {
    const result = await Users.find()

    return result 
}

module.exports = { createOrganizer, createUser, getAllUsers }