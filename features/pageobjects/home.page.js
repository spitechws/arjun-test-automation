

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

    open() {
        return browser.url(properties.BASE_URL)
    }

    async clickLetsConnectMenu() {
        await this.menuLetsConnect.click()
    }

    async fillLetsConnectForm() {
        await this.firstName.setValue(testData.FIRST_NAME);
        await this.lastName.setValue(testData.LAST_NAME);
        //await this.btnSubmit.click();
    }

}

module.exports = new HomePage();
