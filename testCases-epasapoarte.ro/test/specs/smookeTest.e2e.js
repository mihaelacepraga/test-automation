describe('Smooke Test', () => {
    let btnBook;
    let inputName;
    let inputFirstName;
    let inputEmail1;
    let inputEmail2;
    let inputPhoneNumber;
    let checkReadProtDate;
    let selectDoc;
    let displayTypeDoc;
    let listLeters;
    const numberOfLeters = 15;
    const positionLeterI = 7;
    let missingAppointmentMessage = 'Nu mai sunt locuri disponibile.';
    let inputLoc;
    let chooseLoc;
    let twoLoc;
    let numberPers;
    let chooseLeter;

    


    it('Should access page "epasapoarte.ro" ', async() => {
        await browser.url('https://www.epasapoarte.ro/');
        await expect(browser).toHaveTitle('Programari online pasapoarte');
        await browser.maximizeWindow();
        
    });
    
    it('Find the button "Rezerva", and verify if it is not clickable,when the user does`t add all credentials', async() => {
        btnBook = await $('#subrez');
        await expect(btnBook).toHaveText('REZERVA');
        await expect(btnBook).toBeDisabled();
        await expect(btnBook).not.toBeClickable();
        await browser.pause(2000);

    });
 

    it('Should have value "Abc" in input-"Nume" ', async() => {
        inputName = await $('[name="Nume"]');
        await inputName.setValue('Abc');
        await expect(inputName).toHaveValue('Abc');
    
    });

    it('Should have value "Clm" in input-"Prenume" ', async() => {
        inputFirstName = await $('[name="Prenume"]');
        await inputFirstName.setValue('Clm');
        await expect(inputFirstName).toHaveValue('Clm');
        await browser.pause(4000);
    });

    it('Should add a valid phone number', async() => {
        inputPhoneNumber = await $('#telefon');
        checkReadProtDate = await $('#protdat');
        await checkReadProtDate.click();
        await inputPhoneNumber.setValue('0987676');
        await expect(inputPhoneNumber).toHaveValue('0987676');
        await browser.pause(4000);
    });

    
    it('Should have value "abcdf@gmail.mom" in input-"Email1 and Email2"', async() => {
        inputEmail1 = await $('#email1');
        await inputEmail1.setValue('abcdf@gmail.mom');
        await expect(inputEmail1).toHaveValue('abcdf@gmail.mom');

        inputEmail2 = await $('#email2');
        await inputEmail2.setValue('abcdf@gmail.mom');
        await expect(inputEmail2).toHaveValue('abcdf@gmail.mom');
        await browser.pause(2000);
    });

    it('Should find and select "pasaport simplu electronic"', async() => {
        displayTypeDoc = await $('#selectul').$$('option')[1];
        await expect(displayTypeDoc).toHaveText('pasaport simplu electronic');
        await displayTypeDoc.click();
      
    });
    it('Verify if is displayed "Alege locatia..."', async() => {
        chooseLoc = await $('#showlocatia');
        await expect(chooseLoc).toHaveText('Alege locatia...');
    });
   
    it('Verify if are existing a list of leters and can select "I"', async() => {
        listLeters = await $('.litere').$$('tr>td');
        await expect(listLeters).toBeElementsArrayOfSize(numberOfLeters);
        chooseLeter = await listLeters[positionLeterI].click();
        
    });

    it('Check if there is 2 locations whith leter "I"', async() => {
        twoLoc = await $$('//*[@id="collapseloc"]/div/div/div/div/div');
        await expect(twoLoc).toBeElementsArrayOfSize(2);
    });

    it('Verify if is selected city "Iasi"', async() => {
        let locIasi = await twoLoc[1];
        await expect(locIasi).toHaveTextContaining(' Bd. Primaverii, nr.36, Iasi');
        
       let chooseIasi = await $('//*[@id="collapseloc"]/div/div/div/div/div[2]/div[2]/button');
       
        chooseIasi.click();
        await expect(chooseLoc).toHaveText('Iasi');
    });
    
     
    it('Check if the user can select one person from the list', async () => {
        let selectNrPer = await $('//*[@id="myTab"]/label[1]/input');
        await expect(selectNrPer).toHaveValue('1');
        await expect(selectNrPer).toBeEnabled();
    });
   
    it('Check how many months is displayed and choose the first one, otherwise you may see the message "Nu mai sunt locuri disponibile."', async () => {
        let inputDate = await $('#nav-tab').$$('a');

        if (inputDate.length > 0) {
            await expect(inputDate[0]).toBeClickable()
            inputDate[0].click();
            console.log("The month selected is",await inputDate[0].getText());
         }
         else {
            missingAppointmentMessage = await $('//*[@id="collapsedata"]/div/div/div/div[1]');
            await expect(missingAppointmentMessage).toHaveText('Nu mai sunt locuri disponibile.');
            console.log("Message- ",'Nu mai sunt locuri disponibile.'); 
            await browser.pause(2000);
         }
        });

        it('Select first available day', async() => {
            let alldays = await $('.days').$$('div');
            await expect(alldays[0]).toBeExisting();
            await expect(alldays[0]).toBeClickable();
            alldays[0].click();
            console.log('The first day displayed is ======>',await alldays[0].getText());  
        });

        it('Choose last available hour', async() => {
            const hoursAvailable = await $('//*[@id="chooseora"]/div[2]').$$('div');
            const lastHourAvailable = hoursAvailable[hoursAvailable.length - 1];
            await expect(lastHourAvailable).toBeExisting();
            await expect(lastHourAvailable).toBeClickable();
            lastHourAvailable.click();
            console.log('The hour choosed is', await lastHourAvailable.getText());
           
        });


        it('Verify if exist button "Alege" and you can it select', async() => {
            let btnSelectTime = await $('#alegora');
            await expect(btnSelectTime).toHaveTextContaining('ALEGE');
            await expect(btnSelectTime).toBeClickable();
           
            await btnSelectTime.click();
           
           
        });

        it('Find the button "Rezerva", and verify if it is clickable,when user add the correct credentials', async() => {
            // btnBook = await $('#subrez');
            await expect(btnBook).toHaveText('REZERVA');
            await expect(btnBook).not.toBeDisabled();
            await expect(btnBook).toBeClickable();
            await browser.saveScreenshot('/home/mihaela/Desktop/test-automation/testCases-epasapoarte.ro/img.scren/screenshot2.png');
            await browser.pause(2000);
    
        });
    
});