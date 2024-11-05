Feature: CRUD Employee

    Background:
        Given I navigate to demo.orangehrmlive.com
        And I enter the username as "Admin"
        And I enter the password as "admin123"
        And I click on login button
        And I should be redirect on dashboard page
    
    Scenario: List of employee
        When I click on the PIM menu
        Then I should be redirected to the list of employees page

    Scenario: Add staff and create login detail
        When I click on the PIM menu
        And I click on add button, I redirected to add employee page
        And I enter staff firstname as ""
        And I enter staff lastname as ""
        And I click on toggle create login detail
        And I enter username as ''
        And I enter password, I confirme the password as ''
        And I click on save button
        Then I see a successful message
    
    Scenario: Search staff
        When I click on the PIM menu
        And I enter the employee name to search
        And I click on search button
        Then I have the result of my research

    Scenario: Edit employee information
        When I click on the PIM menu
        And I enter the employee name to search
        And I click on search button        
        And I have the result of my research
        And I click on edit button
        And I should be redirected by employee details
        And I enter the employee Nickname
        And I enter employee's birthday as ""
        And I select the gender 
        And I click the save button on the detailed employee page
        Then I see a successful message

    Scenario: Delete employee
        When I click on the PIM menu
        And I enter the employee name to search
        And I click on search button
        And I have the result of my research
        And I click on delete button
        Then I see a successful message

