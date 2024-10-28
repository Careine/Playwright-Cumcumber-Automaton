Feature: Authentification

    Background: 
        Given I navigate to demo.orangehrmlive.com

    Scenario: Login successful
        When I enter the username as "Admin"
        And I enter the password as "admin123"
        And I click on login button
        Then I should be redirect on dashboard page

    Scenario: Login failure
        When I enter the fakeusername as ""
        And I enter the fakepassword as ""
        And I click on login button
        Then I have received the error message

    Scenario: Logout
        When I enter the username as "Admin"
        And I enter the password as "admin123"
        And I click on login button
        And I should be redirect on dashboard page
        And I click profil button, I can click on logout button
        Then I should be redirect on login page