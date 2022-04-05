describe('Select type of document', () => {
    let selectDoc;

    it('Should have the correct page title', async() => {
        await browser.url('/');
        await expect(browser).toHaveTitle('Programari online pasapoarte');
    });

    it('should detect the select and click on it ',async () => {
        selectDoc = await $('#selectul');
        await expect(selectDoc).toBeDisplayed()
        await selectDoc.click(); 
    });

    it('Verify if list have 8 options ', async() => {
        let listTypeDoc = await selectDoc.$$('option');
        await expect(listTypeDoc).toBeElementsArrayOfSize(8);
        console.log(listTypeDoc);
        
    });


    it('Should find and select "pasaport simplu electronic"', async() => {

        let displayTypeDoc = await selectDoc.$$('option')[1];
        await expect(displayTypeDoc).toHaveText('pasaport simplu electronic');
        displayTypeDoc.click();
        
    });

    it('Verify if is displayed validation message, when the user select first option "Tipul de document ....." ', async() => {
        let firstSelect = await $('select').$('option*=Tipul de document');
        firstSelect.click();
        await expect(firstSelect).toHaveValue('0: null');
        let validationMessage = await $('//*[@id="forma"]/div/div[1]/div[1]/div[2]/div[4]/small');
        await expect(validationMessage).toBeDisplayed();
        await expect(validationMessage).toHaveText('Este obligatoriu.');
        await browser.pause(5000);
    
    });
});