

const Page = require('./page');

import properties from './../properties/properties.js';
import locators from './../properties/Locators.js';
import testData from './../test-data/test_data.js';

class HomePage extends Page {

    get menuLetsConnect() {
        return $(locators.MENU_LETS_CONENCT);
    }

    get firstName() {
        return $(locators.FIRST_NAME)
    }

    get lastName() {
        return $(locators.LAST_NAME)
    }
    get mobile() {
        return $(locators.MOBILE)
    }

    get email() {
        return $(locators.EMAIL)
    }
    get country() {
        return $(locators.COUNTRY)
    }
    get message() {
        return $(locators.MESSAGE)
    }
    get organization() {
        return $(locators.ORGANIZATION)
    }
    get btnSubmit() {
        return $(locators.SUBMIT_BUTTON)
    }

    get firstNameLabel() {
        return $(locators.FIRST_NAME_LABEL)
    }

    get lastNameLabel() {
        return $(locators.LAST_NAME_LABEL)
    }
    get mobileLabel() {
        return $(locators.MOBILE_LABEL)
    }

    get emailLabel() {
        return $(locators.EMAIL_LABEL)
    }
    get countryLabel() {
        return $(locators.COUNTRY_LABEL)
    }
    get messageLabel() {
        return $(locators.MESSAGE_LABEL)
    }
    get organizationLabel() {
        return $(locators.ORGANIZATION_LABEL)
    }


    get btnAllowCookie() {
        return $(locators.BUTTON_ACCEPT_COOKIE)
    }

    get successMessage() {
        return $(locators.SUCCESS_MESSAGE_DIV)
    }

    get firstNameRequired() {
        return $(locators.FIRST_NAME_REQUIRED)
    }
    get lastNameRequired() {
        return $(locators.LAST_NAME_REQUIRED)
    }

    get emailRequired() {
        return $(locators.EMAIL_REQUIRED)
    }

    open() {
        return browser.url(properties.BASE_URL)
    }

    async clickLetsConnectMenu() {
        await this.menuLetsConnect.click()
    }

    async allowCookie() {
        let elementVisible = await this.btnAllowCookie.isExisting()
        if (elementVisible) {
            await this.btnAllowCookie.click()
        }
    }

    async verifyLetsConnectPage() {
        await expect(browser).toHaveUrlContaining(testData.CONTACT_US_URL_SEGMENT)
    }

    async fillLetsConnectForm() {        
        await this.firstName.setValue(testData.FIRST_NAME);
        await this.lastName.setValue(testData.LAST_NAME);
        await this.email.setValue(testData.EMAIL);
        await this.country.setValue(testData.COUNTRY);
        await this.mobile.setValue(testData.MOBILE);
        await this.message.setValue(testData.MESSAGE);
    }

    async submitFormByClick() {
        await this.btnSubmit.scrollIntoView();
        await this.btnSubmit.click()
    }

    async submitFormByEnter() {
        await browser.keys("Enter")
    }


    async verifySuccessMessage() {
        await expect(this.successMessage).toHaveText(testData.SUCCESS_MESSAGE)
    }


    async verifySuccessMessage() {
        await expect(this.successMessage).toHaveText(testData.SUCCESS_MESSAGE)
    }

    async verifyFieldExist(fieldName) {
        switch (fieldName) {
            case "first_name":
                await expect(this.firstName).toBePresent()
                await expect(this.firstNameLabel).toBePresent()
                await expect(this.firstNameLabel).toHaveText('First Name')
                break;
            case "last_name":
                await expect(this.lastName).toBePresent()
                await expect(this.lastNameLabel).toBePresent()
                await expect(this.lastNameLabel).toHaveText('Last Name')
                break;
            case "email":
                await expect(this.email).toBePresent()
                await expect(this.emailLabel).toBePresent()
                await expect(this.emailLabel).toHaveText('Business Email')
                break;
            case "mobile":
                await expect(this.mobile).toBePresent()
                await expect(this.mobileLabel).toBePresent()
                await expect(this.mobileLabel).toHaveText('Phone Number')
                break;
            case "country":
                await expect(this.country).toBePresent()
                await expect(this.countryLabel).toBePresent()
                await expect(this.countryLabel).toHaveText('Country/ Region')
                break;
            case "organization":
                await expect(this.organization).toBePresent()
                await expect(this.organizationLabel).toBePresent()
                await expect(this.organizationLabel).toHaveText('Company / Organization')
                break;
            case "message":
                await expect(this.message).toBePresent()
                await expect(this.messageLabel).toBePresent()
                await expect(this.messageLabel).toHaveText('How Can We Help You?')
                break;
            case "submit_button":
                await expect(this.btnSubmit).toBePresent()
                await expect(this.btnSubmit).toHaveAttribute('value', 'Submit')
                break;
        }
    }

    async verifyFieldRequried(fieldName) {
        switch (fieldName) {
            case "first_name":
                await this.checkAsteriskMark(this.firstNameRequired)
                await expect(this.firstNameLabel).toBePresent()
                await expect(this.firstNameLabel).toHaveText('First Name')
                break;
            case "last_name":
                await expect(this.lastName).toBePresent()
                await expect(this.lastNameLabel).toBePresent()
                await expect(this.lastNameLabel).toHaveText('Last Name')
                break;
            case "email":
                await expect(this.email).toBePresent()
                await expect(this.emailLabel).toBePresent()
                await expect(this.emailLabel).toHaveText('Business Email')
                break;
            case "mobile":
                await expect(this.mobile).toBePresent()
                await expect(this.mobileLabel).toBePresent()
                await expect(this.mobileLabel).toHaveText('Phone Number')
                break;
            case "country":
                await expect(this.country).toBePresent()
                await expect(this.countryLabel).toBePresent()
                await expect(this.countryLabel).toHaveText('Country/ Region')
                break;
            case "organization":
                await expect(this.organization).toBePresent()
                await expect(this.organizationLabel).toBePresent()
                await expect(this.organizationLabel).toHaveText('Company / Organization')
                break;
            case "message":
                await expect(this.message).toBePresent()
                await expect(this.messageLabel).toBePresent()
                await expect(this.messageLabel).toHaveText('How Can We Help You?')
                break;
            case "submit_button":
                await expect(this.btnSubmit).toBePresent()
                await expect(this.btnSubmit).toHaveAttribute('value', 'Submit')
                break;
        }
    }

}

module.exports = new HomePage();
