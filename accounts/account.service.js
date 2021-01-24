const userModel = require('./account.model');
const crypto = require('crypto');
const bcrypt = require("bcryptjs");

module.exports = {
    register
}




async function register(params, origin) {

    if(await userModel.findOne({email: params.email})) {
        return res.json({
            message: "existing email"
        })
    }

    const account = new userModel(params);


    // //도큐멘트의 데이터가 첫번째면 어드민으로 넣겟다
    const isFirstAccount = await userModel.countDocuments({}) === 0;

    account.verificationToken = randomTokenString()

    account.passwordHash = bcrypt.hashSync(params.password)

    await account.save();
    console.log(account)
}

function randomTokenString() {
    return crypto.randomBytes(40).toString("hex")
}

async function sendAlreadyRegisteredEmail (email, origin) {

    let message;
    // if(origin) {
    //     message = `<p>If you do not your password please visit the <a>forgot password</a> page.</p>`
    // }
}
