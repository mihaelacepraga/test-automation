const  WatchesPage = require('../pageobjects/wathces.page');

describe('Watches page', () => {

    it('should show the banner container',async () => {
        // 
        WatchesPage.open();
        await expect(WatchesPage.promoBanner).toBeDisplayed();
    });

    it('Should contain link on banner and verrify if it is clickable',async () => {
        await expect(WatchesPage.shopNow).toHaveHrefContaining('/ceasuri-barbatesti/');
        await expect(WatchesPage.shopNow).toBeClickable();
        
    });
    it('should click on banner and verify the new url',async () => {
        await WatchesPage.click();
        await expect(browser).toHaveUrl('https://www.emag.ro/ceasuri-barbatesti/c?ref=banner_0_1')
    });
    
});