import { Given, When, Then } from '@cucumber/cucumber';
import { assert } from 'chai';
import { LoginService } from '../../src/login';

interface LoginContext {
    username: string;
    password: string;
    loginService: LoginService;
    loginResult?: boolean;
    message?: string;
}

Given('a user with username {string}', function(this: LoginContext, username: string) {
    this.username = username;
    this.loginService = new LoginService();
});

Given('the user has a valid password {string}', function(this: LoginContext, password: string) {
    this.password = password;
});

When('they attempt to login', async function(this: LoginContext) {
    this.loginResult = await this.loginService.login(this.username, this.password);
});

Then('the login should succeed', function(this: LoginContext) {
    assert.isTrue(this.loginResult);
});

Then('they should see a welcome message', function(this: LoginContext) {
    this.message = this.loginService.getWelcomeMessage(this.username);
    assert.include(this.message, this.username);
});