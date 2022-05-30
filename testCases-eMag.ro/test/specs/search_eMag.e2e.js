const SearchPage = require('../pageobjects/search.page')

describe('eMag product search', () => {
    before(async() =>{
        await SearchPage.open();
    });
    after(async() => {
       await browser.url('/')
    });

    afterEach(async() => {
        await browser.refresh();
    });
    
    it('should open the main url and verify the title', async() => {
        await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată')
        
    });

    it('should search for a product and verify the text search value', async() => {
        await SearchPage.searchInput.setValue('Laptop');
        await SearchPage.searchBtn.click();
        await expect(SearchPage.searchInput).toHaveValue('Laptop') 
    });

    it('should redirect to a new page and verify the title', async() => {
        await expect(browser).toHaveTitle('Cautare Laptop - Cumpara Acum - eMAG.ro')
        
    });
    it('should update the search category',async () => {
       await expect(SearchPage.category).toHaveText('Laptopuri');
    });

    it('should select the first laptop',async () => {
        
        await SearchPage.firstItem.click();
        await expect(browser).toHaveTitle('Laptop HP 250 G8 cu procesor Intel Celeron N4020, 15.6", HD, 4GB, 256GB SSD, Intel UHD Graphics, Free DOS, Dark Ash Silver - eMAG.ro');
    });
    
});