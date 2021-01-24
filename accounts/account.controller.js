
const express = require('express');
const router = express.Router();
const accountService = require('./account.service');

router.post("/register", register)



module.exports = router;

function register(req, res, next) {

    accountService
        .register(req.body, req.get("origin"))
        .then(() => {
            res.json({
                message: "successful register, please check your email"
            })
        })
        .catch(next);
}
