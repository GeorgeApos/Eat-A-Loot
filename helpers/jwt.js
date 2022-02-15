const expressJwt = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            { url: /\/api\/v1\/foods(.*)/, methods: ['GET', 'OPTIONS'] },
            '/api/v1/customers/login',
            '/api/v1/customers/register'
        ]
    })
}

async function isRevoked(req, payload, done) {
    if (!payload.isAdmin) {
        return done(null, true)
    }

    done();
}

module.exports = authJwt;