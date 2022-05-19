describe('eMag product search', () => {

    it('should open the main url and verify the title', async() => {
        await browser.url('https://www.emag.ro/');
        await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată')
        
    });

    it('should search for a product and verify the text search value', async() => {
        const searchInput = await $('#searchboxTrigger');
        const searchBtn = await $('//*[@id="masthead"]/div/div/div[2]/div/form/div[1]/div[2]/button[2]');
        await searchInput.setValue('Laptop');
        await searchBtn.click();
        await expect(searchInput).toHaveValue('Laptop') 
    });

    it('should redirect to a new page and verify the title', async() => {
        await expect(browser).toHaveTitle('Cautare Laptop - Cumpara Acum - eMAG.ro')
        
    });
    it('should update the search category',async () => {

       const category = await $('//*[@id="main-container"]/section[1]/div/div[3]/div[1]/div[1]/div[2]/div/div[2]/div[2]/a/div/div[2]/div');
       await expect(category).toHaveText('Laptopuri');

        
    });
    
});