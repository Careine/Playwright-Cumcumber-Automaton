/**
 * Fichier de définition des étapes (steps) pour les tests d'authentification
 * Gère les scénarios de connexion à l'application
 */

// Import des dépendances nécessaires
const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const generateFakeInformation = require('../../fixture/faker.js');
const config = require('../../../playwright.config.js');

// Données de test pour l'authentification
var fakeUsername = generateFakeInformation().username;
var fakePassword = generateFakeInformation().password;

const baseUrl = config.use?.baseURL;
if (!baseUrl) {
    throw new Error("baseURL n'est pas défini dans le fichier config");
}

/**
 * Étape initiale - Navigation vers la page de connexion
 */
Given('I navigate to demo.orangehrmlive.com', async function () {
    await page.goto(`${baseUrl}/auth/login`);
    await expect(page).toHaveURL(/.*login/);
    const title = await page.title();
    expect(title).toBe('OrangeHRM');
});

/**
 * Saisie du nom d'utilisateur
 * @param {string} username - Nom d'utilisateur fourni ou par défaut
 */
When('I enter the username as {string}', async function (username) {
    await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').fill(username);
    await page.waitForTimeout(2000);
});

/**
 * Saisie du mot de passe
 * @param {string} password - Mot de passe fourni ou par défaut
 */
When('I enter the password as {string}', async function (password) {
    await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').fill(password);
});

/**
 * Action de clic sur le bouton de connexion
 */
When('I click on login button', async function () {
    await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
    await page.waitForTimeout(5000);
});

When('I enter the fakeusername as {string}', async function (fakeusername) {
    await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').fill(fakeusername || fakeUsername);
});

When('I enter the fakepassword as {string}', async function (fakepassword) {
    await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').fill(fakepassword || fakePassword);
});

/**
 * Vérification de la redirection vers le tableau de bord
 */
Then('I should be redirect on dashboard page', async function () {
    expect(page).toHaveURL(/.*index/);
    await page.waitForTimeout(2000);
});

When('I click profil button, I can click on logout button', async function () {
    await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li').click();
    await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[4]/a').click();
});

/**
 * Vérification du message d'erreur pour les identifiants invalides
 */
Then('I have received the error message', async function () {
    await page.waitForSelector('xpath=//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]', { timeout: 5000 });
    await expect(page.locator('xpath=//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]')).toContainText('Invalid credentials');
});

Then('I should be redirect on login page', async function () {
    await expect(page).toHaveURL(/.*login/);
});

