# Playwright-Cumcumber-Automaton
Automation project with playwright and cucumber.

## Requirements

Before starting, please ensure that you have the following items installed on your machine :

- [Node.js](https://nodejs.org/) (Version 14 or the most recent)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone repository :
   ```bash
   git clone https://github.com/Careine/Playwright-Cumcumber-Automaton.git
   cd Playwright-Cumcumber-Automaton
   ```
2. Install npm or yarm dependencies:
   ```bash
   npm install
   ```
4. Install Playwright:
   ```bash
   npx playwright install
   ```
5. Install Cucumber:
   ```bash
   npm i @cucumber/cucumber
   ```
6. Install Faker 
   ```bash
   npm install --save-dev @faker-js/faker
   ```
## Use

### Run tests
   ```bash
   npx test run
   ```

#### To run the tests with specifique browser :
   ```bash
   npx playwright test --browser=chromium
   npx playwright test --browser=firefox
   npx playwright test --browser=webkit
   ```

### Open test report
 ```bash
xdg-open cucumber-report.html  # For Linux
open cucumber-report.html       # For macOS
start cucumber-report.html      # For Windows
```

### Launch in headless or non-headless mode
By default, tests run in headless mode. To run in non-headless mode, add the --headed option :
   ```bash
   npm test run --headed
   ```

## Project structure
 ```bash
  PLAYWRIGHT-CUCUMBER-AUTOMATON/
  ├── .github/workflows                 # Contains GitHub Actions workflows
  │   └── playwright.yml                # Configuration file to run Playwright tests
  │
  ├── src/                              # Main source directory
  │   ├── fixture                       # Contains reusable data and utilities for tests
  │   │   └── faker.js                  # Configuration file for Faker.js
  │   │
  │   ├── test                          # Main test directory
  │   │   ├── features                  # Contains Cucumber scenario files
  │   │   │   ├── employee.feature      # Test scenario for employees
  │   │   │   └── login.feature         # Test scenario for login
  │   │   │
  │   │   ├── hooks                     # Contains setup hooks for tests
  │   │   │   └── hooks.js              # Hooks file for common setup steps
  │   │   │
  │   │   └── steps                     # Contains Cucumber step definition files
  │   │       ├── employeeStep.js       # Step definitions for employee scenarios
  │   │       └── loginStep.js          # Step definitions for login scenarios
  │
  ├── cucumber.json                     # Configuration file for Cucumber
  │
  ├── playwright.config.js              # Configuration file for Playwright
  │
  ├── package.json                      # Project dependencies and scripts
  │
  ├── .gitignore                        # Git ignore file
  │
  └── README.md                         # Project documentation

   ```

 
