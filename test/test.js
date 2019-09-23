'use strict'
const expect = require('expect')
const credentials = require('../index')

function test() {
    process.stdout.write('Test encrypt/get credentials...')
    const testCred = {
        username: 'user-name',
        totpSecret: 'totp-secret'
    }
    const testPassword = 'password'
    const enc = credentials.encryptCredentials(testPassword, testCred)
    const dec = credentials.decryptCredentials(testPassword, enc)
    expect(dec.username).toEqual(testCred.username)
    expect(dec.totpSecret).toEqual(testCred.totpSecret)
    console.log(' success!')

    process.stdout.write('Get credentials wrong password...')
    expect(() => { credentials.decryptCredentials('xxx', ecn) }).toThrow()
    console.log(' success!')
}

test()
