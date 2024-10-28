const {faker} = require('@faker-js/faker')

function generateFakeInformation(){
    return{
        username: faker.internet.userName(),
        password: faker.internet.password()
    }
}

module.exports = generateFakeInformation;