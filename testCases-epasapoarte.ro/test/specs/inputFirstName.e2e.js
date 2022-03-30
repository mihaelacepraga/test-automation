describe('Set the value for first name', () => {

    let inputFirstName;

    it('Should have the correct page title', async() => {
        await browser.url('https://www.epasapoarte.ro/');
        await expect(browser).toHaveTitle('Programari online pasapoarte');
    });
    
    it('Should detect if input "Prenume" are existing', async() => {
        inputFirstName = await $('[name="Prenume"]');
        await expect(inputFirstName).toBeExisting();
    });

    it('Should have validation message "Este obligatoriu.",when the input "Prenume" lost focus.',
       async() => {
        inputFirstName.click();
        let sectionHome = await $('#programare');
        sectionHome.click();
        let validationMessage = await $('//*[@id="forma"]/div/div[1]/div[1]/div[1]/div[3]/small');
        await expect(validationMessage).toBeDisplayed();
        await expect(validationMessage).toHaveText('Este obligatoriu.');
        
    });
   
    it('Should have validation message "Minim 2 caractere.", when add just a letter', async() => {
        await inputFirstName.setValue('R');
        let validationMessage = await $('//*[@id="forma"]/div/div[1]/div[1]/div[1]/div[3]');
        await expect(validationMessage).toBeDisplayed();
        await expect(validationMessage).toHaveText('Minim 2 caractere.');
        await inputFirstName.clearValue();
    });

    it('Should have validation message "Minim 2 caractere.Numai litere.", when add an other character than letters', async() => {
        await inputFirstName.setValue('=');
        let validationMessage = await $('.validation');
        await expect(validationMessage).toBeDisplayed();
        await expect(validationMessage).toHaveText('Minim 2 caractere.Numai litere.');
        await inputFirstName.clearValue();
    });

    it('Should have validation message "Numai litere.", when add in input name any others characters than letters', async() => {
        await inputFirstName.setValue('Ramo5');
        let validationMessage = await $('//*[@id="forma"]/div/div[1]/div[1]/div[1]/div[3]/small');
        await expect(validationMessage).toBeDisplayed();
        await expect(validationMessage).toHaveText('Numai litere.');
        await inputFirstName.clearValue();
    });

    it('Should have input value "Andreea"', async() => {
        await inputFirstName.setValue('Andreea');
        await expect(inputFirstName).toHaveValue('Andreea');
        
    }); 

});