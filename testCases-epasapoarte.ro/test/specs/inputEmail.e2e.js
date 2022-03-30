describe('Set an input value for email and confirm it', () => {

    let inputEmail1;
    let inputEmail2;


    it('Should have the correct page title', async() => {
        await browser.url('https://www.epasapoarte.ro/');
        await expect(browser).toHaveTitle('Programari online pasapoarte');
    });
    
    it('Should detect if input "Email1" are existing', async() => {
        inputEmail1 = await $('#email1');
        await expect(inputEmail1).toBeExisting();
    });

    it('Should have validation message "Este obligatoriu.', async() => {
        inputEmail1.click();
        await inputEmail1.setValue(' ');
        let validationMessage = await $('#forma > div > div.col > div.row > div:nth-child(2) > div.validation > small');
        await expect(validationMessage).toBeDisplayed();
        await expect(validationMessage).toHaveText('Este obligatoriu.');
        
    });
   
    it('Should have validation message "Format email invalid.', async() => {
        await inputEmail1.setValue('.4');
        let validationMessage = await $('#forma > div > div.col > div.row > div:nth-child(2) > div.validation > small');
        await expect(validationMessage).toBeDisplayed();
        await expect(validationMessage).toHaveText('Format email invalid.');
        await inputEmail1.clearValue();
    });
   
    it('Should have validation message "Format email invalid.", when I add input "..........@...a"', async() => {
        await inputEmail1.setValue('..........@...a');
        let validationMessage = await $('//*[@id="forma"]/div/div[1]/div[1]/div[2]/div[2]/small');
        await expect(validationMessage).toBeDisplayed();
        await expect(validationMessage).toHaveText('Format email invalid.');
        await inputEmail1.clearValue();
    });
      

    it('Should have input value "mihaelacepraga@gmail.com"', async() => {
        await inputEmail1.setValue('mihaelacepraga@gmail.com');
        await expect(inputEmail1).toHaveAttr('ng-reflect-model', 'mihaelacepraga@gmail.com');
    });

    it('Should detect if input "Email2" are existing', async() => {
        inputEmail2 = await $('#email2');
        await expect(inputEmail2).toBeExisting();
    });

    it('Should have validation message "Este obligatoriu.Nu coincide cu anteriorul.', async() => {
        inputEmail2.click();
        await inputEmail2.setValue(' ');
        let validationMessage = await $('//*[@id="forma"]/div/div[1]/div[1]/div[2]/div[3]');
        await expect(validationMessage).toBeDisplayed();
        await expect(validationMessage).toHaveText('Este obligatoriu.Nu coincide cu anteriorul.');
        await inputEmail2.clearValue();

    });
        
    it('Should have validation message "Nu coincide cu anteriorul.Format email invalid.', async() => {
        inputEmail2.click();
        await inputEmail2.setValue('ca');
        let validationMessage = await $('//*[@id="forma"]/div/div[1]/div[1]/div[2]/div[3]');
        await expect(validationMessage).toBeDisplayed();
        await expect(validationMessage).toHaveText('Nu coincide cu anteriorul.Format email invalid.');
        await inputEmail2.clearValue();
    });

    it('Should have input value "mihaelacepraga@gmail.com"', async() => {
        await inputEmail2.setValue('mihaelacepraga@gmail.com');
       await expect(inputEmail2).toHaveValueContaining('mihaelacepraga@gmail.com');
      
    });


});