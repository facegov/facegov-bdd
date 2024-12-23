Feature: User Login
    As a user
    I want to log in to the system
    So that I can access my account

    Scenario: Successful login
        Given a user with username "testUser"
        And the user has a valid password "password123"
        When they attempt to login
        Then the login should succeed
        And they should see a welcome message