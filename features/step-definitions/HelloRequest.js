const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/home.page');


Given(/^I am on the home page$/, async () => {
    await HomePage.open()
});

Given(/^I click on lets connect menu$/, async () => {
    await HomePage.clickLetsConnectMenu()
});

Given(/^I fill the form$/, async () => {
    await HomePage.fillLetsConnectForm()
});

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

