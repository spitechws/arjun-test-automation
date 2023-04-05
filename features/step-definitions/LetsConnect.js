const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/home.page');

Given(/^I click on allow cookie button if exist$/, async () => {
    await HomePage.allowCookie()
});

Given(/^I am on the home page$/, async () => {
    await HomePage.open()
});

Given(/^I click on lets connect menu$/, async () => {
    await HomePage.clickLetsConnectMenu()
});

Given(/^I fill the form$/, async () => {
    await HomePage.fillLetsConnectForm()
});

Given(/^I verify success message$/, async () => {
    await HomePage.verifySuccessMessage()
});


