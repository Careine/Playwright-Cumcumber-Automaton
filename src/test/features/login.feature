# Feature: Authentification des utilisateurs
# Ce feature file teste les différents scénarios de connexion à l'application
# Il vérifie à la fois les cas de succès et d'échec

Feature: Login functionality

    Background: 
        Given I navigate to demo.orangehrmlive.com

    # Scénario de connexion réussie avec des identifiants valides
    Scenario: Successful login with valid credentials
        When I enter the username as "Admin"
        And I enter the password as "admin123"
        And I click on login button
        Then I should be redirect on dashboard page

    # Scénario de connexion échouée avec des identifiants invalides
    Scenario: Failed login with invalid credentials
        When I enter the username as "invalid_user"
        And I enter the password as "invalid_password"
        And I click on login button
        Then I have received the error message

    Scenario: Logout
        When I enter the username as "Admin"
        And I enter the password as "admin123"
        And I click on login button
        And I should be redirect on dashboard page
        And I click profil button, I can click on logout button
        Then I should be redirect on login page