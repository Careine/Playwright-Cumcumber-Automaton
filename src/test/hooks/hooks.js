/**
 * Fichier de configuration des hooks Cucumber
 * Les hooks permettent d'exécuter du code avant et après les scénarios de test
 * Ils sont utilisés pour la configuration et le nettoyage de l'environnement de test
 */

const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

let browser;
let context;
let page;

// Set default timeout to 60 seconds
setDefaultTimeout(60 * 1000);

/**
 * Configuration initiale avant l'exécution de tous les tests
 * Initialise le navigateur Chromium
 */
BeforeAll(async function () {
  // Launch browser before running any tests
  browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  });
});

/**
 * Actions à effectuer avant chaque scénario de test
 * Crée un nouveau contexte et une nouvelle page pour chaque test
 */
Before(async function () {
  // Create new browser context and page before each scenario
  context = await browser.newContext();
  page = await context.newPage();
  // Expose the page to the scenario world for reuse in step definitions
  global.page = page;
});

/**
 * Actions à effectuer après chaque scénario de test
 * Ferme le contexte pour nettoyer l'environnement
 */
After(async function () {
  // Close the page after each scenario
  await page.close();
  await context.close();
});

/**
 * Nettoyage final après l'exécution de tous les tests
 * Ferme le navigateur
 */
AfterAll(async function () {
  // Close the browser after all tests are done
  await browser.close();
});
