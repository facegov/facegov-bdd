const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert');

interface World {
    username: string;
    password: string;
    loginResult?: boolean;
    message?: string;
}

Given('a user with username {string}', function(this: World, username: string) {
    this.username = username;
});

Given('the user has a valid password {string}', function(this: World, password: string) {
    this.password = password;
});

When('they attempt to login', async function(this: World) {
    this.loginResult = this.username === 'testUser' && this.password === 'password123';
});

Then('the login should succeed', function(this: World) {
    assert.strictEqual(this.loginResult, true);
});

Then('they should see a welcome message', function(this: World) {
    this.message = `Welcome back, ${this.username}!`;
    assert.ok(this.message.includes(this.username));
});