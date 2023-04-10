

const smallTimeout = 1000 //1 seconds

module.exports = class Page {

    async checkAsteriskMark(element) {
        await expect(element).toHaveText('*')
    }

    async waitForSmallTime() {
        await browser.pause(10*smallTimeout);
    }

    async waitForLongTime() {
        await browser.pause(20 * smallTimeout);
    }
}
