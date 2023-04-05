

const smallTimeout=10000

module.exports = class Page {
    
    async waitForSmallTime(){
        await browser.pause(smallTimeout);
    }

    async waitForLongTime(){
        await browser.pause(5*smallTimeout);
    }
}
