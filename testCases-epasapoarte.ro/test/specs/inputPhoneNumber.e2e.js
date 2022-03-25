describe('Open page and add Phone Number', () => {

    let inputPhoneNumber;

    it('Should have the correct page title', async() => {
        await browser.url('https://www.epasapoarte.ro/');
        await expect(browser).toHaveTitle('Programari online pasapoarte');
    
    });

    it('should have an input phone number and verify if it is disabled ', async() => {
        inputPhoneNumber = await $('#telefon')
        await inputPhoneNumber.click()
        await expect(inputPhoneNumber).toBeDisabled()
    });

    it('should check checkbox "Protectia date"', async() => {
        let protectionDate = await $('.protdat')
        await protectionDate.click()
        await expect(browser).toHaveTitle('Programari online pasapoarte');
        await browser.back();
        let checkReadProtDate = await $('#protdat')
        checkReadProtDate.click()
    });

    it('Should have a validation message', async() => {
        await inputPhoneNumber.click()
        await inputPhoneNumber.setValue('0789o')
        let validationMessage = await $('//*[@id="forma"]/div/div[1]/div[1]/div[1]/div[4]/small')
        await expect(validationMessage).toBeDisplayed()
        await expect(validationMessage).toHaveText('Numai cifre . si -.')
        await inputPhoneNumber.clearValue()

    });
    it('Should add a phone number valid', async() => {
        await inputPhoneNumber.setValue('0724871231')
        await expect(inputPhoneNumber).toHaveAttr('ng-reflect-model', '0724871231')
    
    });

   
});