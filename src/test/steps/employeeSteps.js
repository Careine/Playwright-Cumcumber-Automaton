/**
 * Fichier de définition des étapes (steps) pour les tests d'automatisation des fonctionnalités employés
 * Utilise Cucumber pour les tests BDD et Playwright pour l'automatisation
 */

// Import des dépendances nécessaires
const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const generateFakeInformation = require("../../fixture/faker.js");
const config = require("../../../playwright.config.js");

// Génération des données de test aléatoires pour les employés
const lastName = generateFakeInformation().lastname;
const firstName = generateFakeInformation().firstname;
const birthdayUser = generateFakeInformation().birthday;
const nameuser = generateFakeInformation().username;
const pwd = generateFakeInformation().password;
const nickname = generateFakeInformation().nickname;
let searchUser = "a"

// ====== Navigation dans l'application ======
When('I click on the PIM menu', async function () {
    await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
});

// ====== Création d'un nouvel employé ======
When("I click on add button, I redirected to add employee page", async function () {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button').click();
    expect(page).toHaveURL(/.*addEmployee/);
    await page.waitForTimeout(2000);
});

// Saisie des informations personnelles
When("I enter staff firstname as {string}", async function (firstname) {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[1]/div[2]/input').fill(firstname || firstName)
});

When("I enter staff lastname as {string}", async function (lastname) {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[3]/div[2]/input').fill(lastname || lastName)
});

// Configuration du compte utilisateur
When("I click on toggle create login detail", async function () {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[2]/div/label/span').click();
    await page.waitForTimeout(2000);
});

When("I enter username as {string}", async function (username) {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div[1]/div/div[2]/input').fill(username || nameuser);
});

When("I enter password, I confirme the password as {string}", async function (password) {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[1]/div/div[2]/input').fill(password || pwd);
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[2]/div/div[2]/input').fill(password || pwd);
});

// Actions de sauvegarde
When("I click on save button", async function () {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]').click();
});

When("I click the save button on the detailed employee page", async function () {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/button').click();
});

// ====== Recherche d'employés ======
When("I enter the employee name to search", async function () {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input').fill(searchUser);
});

When("I click on search button", async function () {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]').click();
});

// ====== Modification des informations employé ======
When("I click on edit button", async function () {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[9]/div/button[1]/i').click();
});

When("I should be redirected by employee details", async function () {
    expect(page).toHaveURL(/.*viewPersonalDetails/);
});

// Mise à jour des informations personnelles
When("I enter employee's birthday as {string}", async function (birthday) {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1]/div/div[2]/div/div/input').fill(birthday || birthdayUser);
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1]/div/div[2]/div/div/input').press('Enter');
});

When("I select the gender", async function () {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[2]/div/div[2]/div[2]/div[2]/div/label').click();
});

// ====== Vérification des résultats de recherche ======
When("I have the result of my research", async function () {
    await page.waitForSelector('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div');
    const rowCount = await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div').count();
    expect(rowCount).toBeGreaterThan(0);
});

// ====== Suppression d'employé ======
When("I click on delete button", async function () {
    await page.waitForSelector('.oxd-icon.bi-trash', { state: 'visible' });
    await page.locator('.oxd-icon.bi-trash').nth(0).click();
    await page.locator('//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]').click();
});

// ====== Assertions et vérifications ======
Then("I should be redirected to the list of employees page", async function () {
    expect(page).toHaveURL(/.*viewEmployeeList/);
    await page.waitForTimeout(2000);
});

Then("I see a successful message", async function () {
    const isTextPresent = await page.waitForSelector('//*[@id="oxd-toaster_1"]');
    expect(isTextPresent).toBeTruthy();
});
