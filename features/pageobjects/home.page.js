

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

    get btnAllowCookie() {
        return $(locators.BUTTON_ACCEPT_COOKIE)
    }

    get successMessage() {
        return $(locators.SUCCESS_MESSAGE_DIV)
    }

    get googleCaptchaSkipButton() {
        return $(locators.GOOGLE_CAPTCHA_SKIP)
    }

    open() {
        return browser.url(properties.BASE_URL)
    }

    async clickLetsConnectMenu() {
        await this.menuLetsConnect.click()
    }

    async allowCookie() {      
        await this.btnAllowCookie.click()
    }

    async fillLetsConnectForm() {
        await this.firstName.setValue(testData.FIRST_NAME);
        await this.lastName.setValue(testData.LAST_NAME);
        await this.country.setValue(testData.COUNTRY);
        await this.mobile.setValue(testData.MOBILE);
        await this.email.setValue(testData.EMAIL);
        await this.message.setValue(testData.MESSAGE);           
        await this.btnSubmit.scrollIntoView();            
        await this.btnSubmit.click()
    }

    async verifySuccessMessage() {        
        await expect(this.successMessage).toHaveText(testData.SUCCESS_MESSAGE)
    }

}

module.exports = new HomePage();
