Feature: CRUD Employee

    Background:
        Given I navigate to demo.orangehrmlive.com
        And I enter the username as "Admin"
        And I enter the password as "admin123"
        And I click on login button
        And I should be redirect on dashboard page
    
    # Scenario: List of employee
    #     When I click on menu PIM, I should be redirect by list of employee page