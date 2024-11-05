const {faker} = require('@faker-js/faker')

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const year = date.getFullYear();
    return `${year}-${day}-${month}`;
}

function generateFakeInformation(){
    const birthday = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
    return{
        username: faker.internet.userName(),
        password: faker.internet.password(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        birthday: formatDate(birthday), // Formatage en 'dd-mm-aaaa',
        nickname:  `${faker.person.firstName()}_${faker.animal.type()}`
    }
}

module.exports = generateFakeInformation;