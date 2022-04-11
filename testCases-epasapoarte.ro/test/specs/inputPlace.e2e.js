var assert = require('assert');

describe('Select the localitie', () => {

let inputLoc;
let chooseLoc;
let twoLoc;
let numberPers;
let nrOfDays;
let listDays;
let avaibleMounth;
const locationNumber = 44;
const numberOfLeters = 15;
const positionLeterI = 7;
const appointmentHour = ' 15:30 ';
let missingAppointmentMessage = 'Nu mai sunt locuri disponibile.';


    it('Should have the correct page title', async() => {
        await browser.url('/');
        await expect(browser).toHaveTitle('Programari online pasapoarte');
        await browser.maximizeWindow();
    });

    it('Should find the input localitie', async() => {
        inputLoc = await $('#inputloc').$('[role=button]');
        await inputLoc.click();
        await expect(inputLoc).toBeExisting();
    });

    it('Verify if is displayed "Alege locatia..."', async() => {
        chooseLoc = await $('#showlocatia');
        await expect(chooseLoc).toHaveText('Alege locatia...');
    });

    it('Verify if is displayed the list of localities', async() => {
        let displayTypeDoc = await $('#selectul').$$('option')[1];
        await displayTypeDoc.click();
        await expect(displayTypeDoc).toHaveText('pasaport simplu electronic');

        let listLoc = await $('#collapseloc').$$('//*[@id="collapseloc"]/div/div/div/div');
        await expect( listLoc).toBeDisplayed();
        await expect(listLoc).toHaveChildren(locationNumber);
    });

    it('Verify if are existing a list of leters and can select "I"', async() => {
        let listLeters = await $('.litere').$$('tr>td');
        await expect(listLeters).toBeElementsArrayOfSize(numberOfLeters);
        let chooseLeter = await listLeters[positionLeterI].click();
        
    });

    it('Check if there are 2 localities whith leter "I"', async() => {

        twoLoc = await $$('//*[@id="collapseloc"]/div/div/div/div/div');
        await expect(twoLoc).toBeElementsArrayOfSize(2);
        
    });

    it('Verify is selected city "Iasi"', async() => {

        let locIasi = await twoLoc[1];
        await expect(locIasi).toHaveTextContaining(' Bd. Primaverii, nr.36, Iasi');
        let chooseIasi = await $('//*[@id="collapseloc"]/div/div/div/div/div[2]/div[2]/button');
        chooseIasi.click();
        await expect(chooseLoc).toHaveText('Iasi');
    });
    
     
    it('Check if the user can select one person', async () => {
        numberPers = await $$('#myTab');
        await expect(numberPers).toHaveChildren(4);
        let selectNrPer = await $('//*[@id="myTab"]/label[1]/input');
        await expect(selectNrPer).toHaveValue('1');
        await expect(selectNrPer).toBeEnabled();
    });
   
    it('Verify how many mounth is displayed and choose the first', async () => {

         let inputDate = await $('#nav-tab').$$('a');
         await expect(inputDate).toBeElementsArrayOfSize(inputDate.length);

         if (inputDate.length > 0) {
             
             await expect(inputDate[0]).toBeSelected();
             console.log("Count of mounth ",inputDate.length); 
             await browser.pause(4000);

         }
         else {
              
            missingAppointmentMessage = await $('//*[@id="collapsedata"]/div/div/div/div[1]');
            await expect(missingAppointmentMessage).toHaveText('Nu mai sunt locuri disponibile.');
            await browser.pause(4000)
            console.log("Message- ",'Nu mai sunt locuri disponibile.'); 
         }


        });

});
