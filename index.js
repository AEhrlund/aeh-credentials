'use strict'
const Cryptr = require('cryptr')
const passwordPrompt = require('password-prompt')

module.exports = {
    decryptCredentials: decryptCredentials,
    encryptCredentials: encryptCredentials,
    promptForPassword: promptForPassword
}

function decryptCredentials(password, encCredentials) {
    const cryptr = new Cryptr(password)
    const strCredentials = cryptr.decrypt(encCredentials)
    return JSON.parse(strCredentials)
}

function encryptCredentials(password, decCredentials) {
    const cryptr = new Cryptr(password)
    return cryptr.encrypt(JSON.stringify(decCredentials))
}

async function promptForPassword() {
    return new Promise((resolve) => {
        passwordPrompt('Password: ', { method: 'hide' }).then(password => {
            resolve(password)
        })
    })
}
