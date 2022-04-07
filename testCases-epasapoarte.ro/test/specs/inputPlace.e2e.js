describe('Select the localitie', () => {
    
let inputLoc;
let chooseLoc;

    it('Should have the correct page title', async() => {
        await browser.url('/');
        await expect(browser).toHaveTitle('Programari online pasapoarte');
    });

    it('Should find the input localitie', async() => {
        inputLoc = await $('#inputloc').$('[role=button]');
        inputLoc.click();
        await expect(inputLoc).toBeExisting();
        browser.pause(4000);
    });

    it('Verify if is displayed "Alege locatia..."', async() => {
        chooseLoc = await $('#showlocatia');
        await expect(chooseLoc).toHaveText('Alege locatia...');
    });

    it('Verify if is displayed the list of localities', async() => {
        let displayTypeDoc = await $('#selectul').$$('option')[1];
        displayTypeDoc.click();
        await expect(displayTypeDoc).toHaveText('pasaport simplu electronic');

        let listLoc = await $('#collapseloc').$$('//*[@id="collapseloc"]/div/div/div/div');
        await expect( listLoc).toBeDisplayed();
        await expect(listLoc).toHaveChildren(44);
    });

    it('Verify if are existing a list of leters and can select city Iasi', async() => {
        let displayTypeDoc = await $('#selectul').$$('option')[1];
        await expect(displayTypeDoc).toHaveText('pasaport simplu electronic');
        displayTypeDoc.click();
        let listLeters = await $('.litere').$$('tr>td');
        await expect(listLeters).toBeElementsArrayOfSize(15);
       let chooseLeter = listLeters[7].click();
        
    });

    it('Check if there are 2 localities whith leter "I" and select "Iasi"', async() => {
        let twoLoc = await $('.locatii').$$('.row .loctit');
        await expect(twoLoc).toBeElementsArrayOfSize(2);
        let locIasi = await twoLoc[1];
        await expect(locIasi).toHaveText('Iasi:');
        let selectIasi = await $('//*[@id="collapseloc"]/div/div/div/div/div[2]/div[2]/button').click();
        await browser.pause(3000);
    });

    it('Check if the city "Iasi" is selected', async() => {
        chooseLoc = await $('#showlocatia');
        await expect(chooseLoc).toHaveText('Iasi');
    });
   
    
});