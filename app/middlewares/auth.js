const { UnauthenticatedError, UnauthorizedError } = require("../errors")
const { isTokenValid } = require("../utils")

const authenticateUser = async ( req, res, next ) => {
    try {
        let token

        const authHeader = req.headers.authorization

        if (authHeader && authHeader.startsWith('Bearer')) {
            token = authHeader.split(' ')[1]
        }

        if (!token) {
            throw new UnauthenticatedError('Authentication failed')
        }

        const payload = isTokenValid({ token })

        req.user = {
            email: payload.email,
            role: payload.role,
            name: payload.name,
            organizer: payload.organizer,
            id: payload.userId,
        }

        next()
    } catch (err) {
        next(err)
    }
}

const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError('Unauthorize to access this route')
        }
        next()
    }
}

module.exports = { authenticateUser, authorizeRoles }