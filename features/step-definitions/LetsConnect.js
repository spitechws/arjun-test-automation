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

Given(/^I verify lets connect page displayed$/, async () => {
    await HomePage.verifyLetsConnectPage()
});

Given(/^I fill the form$/, async () => {
    await HomePage.fillLetsConnectForm()
});

Given(/^I submit form by clicking on click button$/, async () => {
    await HomePage.submitFormByClick()
});

Given(/^I submit form by pressing tab key$/, async () => {
    await HomePage.submitFormByTab()
});

Given(/^I verify success message$/, async () => {
    await HomePage.verifySuccessMessage()
});


