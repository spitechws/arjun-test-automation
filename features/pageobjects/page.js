

const smallTimeout = 1000 //mili seconds

module.exports = class Page {

    async checkAsteriskMark(element) {
        await expect(element).toHaveText('*')
    }

    async waitForSmallTime() {
        await browser.pause(30*smallTimeout);
    }

    async waitForLongTime() {
        await browser.pause(60 * smallTimeout);
    }
}
