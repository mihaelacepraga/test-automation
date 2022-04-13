
# epasapoarte.ro TestCases
    
## 1. Access home page [code](https://github.com/mihaelacepraga/test-automation/blob/ePasapoarte/testCases-epasapoarte.ro/test/specs/homePage.e2e.js "TestCase Nr.1")
#### Description:
     Open home page and check if it has correct title.
#### Steps to reproduce:
    1. Go to https://www.epasapoarte.ro;
    2. Check if the open page has title "Programari online pasapoarte";
#### Expected result:
     User should be able to access https://www.epasapoarte.ro/, 
     which has title "Programari online pasapoarte".
#### Test Data: 
     https://www.epasapoarte.ro/ 
#### Status:
    Done

## 2. Test Input Name [code](https://github.com/mihaelacepraga/test-automation/blob/ePasapoarte/testCases-epasapoarte.ro/test/specs/inputName.e2e.js "TestCase Nr.2")
#### Description:
      Open home page and check if input "Nume" are existing and it working properly.
#### Steps to reproduce:
    1. Go to https://www.epasapoarte.ro/;
    2. Check if input "Nume" are existing and click on it;
    3. Verify if appear validation message "Este obligatoriu.",when the input "Nume" lost focus;
    4. Verify if appear validation message "Minim 2 caractere.", when add just a letter;
    5. Verify if appear validation message "Minim 2 caractere.Numai litere.", when add an  other character than letters;
    6. Verify if appear validation message "Numai litere.", when add in input name any others characters than letters;
    7. Check if input value is "Cepraga";
#### Expected result:
     User should be able to access https://www.epasapoarte.ro/, 
     to find input "Nume" and add value "Cepraga".
     
#### Test Data: 
     - https://www.epasapoarte.ro/;
     - input value "Cepraga";
#### Status:
    Done

## 3. Test Input lastName [code](https://github.com/mihaelacepraga/test-automation/blob/ePasapoarte/testCases-epasapoarte.ro/test/specs/inputFirstName.e2e.js "TestCase Nr.3")
#### Description:
      Open home page and check if input "Prenume" are existing and it working properly.
#### Steps to reproduce:
    1. Go to https://www.epasapoarte.ro/;
    2. Check if input "Prenume" are existing and click on it;
    3. Verify if appear validation message "Este obligatoriu.",when the input "Prenume" lost focus;
    4. Verify if appear validation message "Minim 2 caractere.", when add just a letter;
    5. Verify if appear validation message "Minim 2 caractere.Numai litere.", when add an  other character than letters;
    6. Verify if appear validation message "Numai litere.", when add in input name any others characters than letters;
    7. Check if input value is "Andreea";
#### Expected result:
     User should be able to access https://www.epasapoarte.ro/, 
     to find input "Prenume" and add value "Andreea".
     
#### Test Data: 
     - https://www.epasapoarte.ro/;
     
#### Status:
   Done
   
## 4. Test Input phoneNumber [code](https://github.com/mihaelacepraga/test-automation/blob/ePasapoarte/testCases-epasapoarte.ro/test/specs/inputPhoneNumber.e2e.js "TestCase Nr.4")
#### Description:
      Open home page and check if input "Telefon" exist and it working properly.
#### Steps to reproduce:
    1. Go to https://www.epasapoarte.ro/;
    2. Check if input "Telefon" exist and click on it;
    3. Verify if input is disabled ;
    4. Verify if user can open page "Protectia Datelor", and check checkbox "Protectia date";
    5. Verify if appear validation message "Numai cifre . si -.", when user add an other character than numbers;
    6. Add a phone number valid and check if it is "0724871231";
#### Expected result:
     User should be able to access https://www.epasapoarte.ro/, 
     to find input "Telefon" and add value "0724871231".
     
#### Test Data: 
     - https://www.epasapoarte.ro/;
     - phoneNumber: 0724871231;
     
#### Status:
     Done

#### Test Data: 
     - https://www.epasapoarte.ro/;
     

#### Status:
   Done
   
## 5. Test InputEmail [code](https://github.com/mihaelacepraga/test-automation/blob/ePasapoarte/testCases-epasapoarte.ro/test/specs/inputEmail.e2e.js "TestCase Nr.5")
#### Description:
      Open home page and check if input "Email" exist and it is working properly.
#### Steps to reproduce:
    1. Go to https://www.epasapoarte.ro/;
    2. Check if input "Email1" exist and click on it;
    3. Verify if user has validation message "Este obligatoriu", when input Email is empty.
    4. Verify if appear validation message "Format email invalid", when add others characters than "[ăâîşșţțŞȘŢȚĂÂÎáéíóöőúüűŐÚŰÁÉÜÓÖÍA-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$";
    5. Add an input value "mihaelacepraga@gmail.com" and check if exist an input whith it;
    6. Check if input "Email2" exist and click on it;
    7. Verify if appear validation message "Este obligatoriu.Nu coincide cu anteriorul.',  when input Email is empty.
    8. Veryfy if appear validation message "Nu coincide cu anteriorul.Format email invalid, when user add other email than "email1".
    9. Add an value "mihaelacepraga@gmail.com" and check if coincides with the previous one;
#### Expected result:
     User should be able to access https://www.epasapoarte.ro/, 
     to find input "Email1" and add value "mihaelacepraga@gmail.com", then to find input "Email2"and set the same value "mihaelacepraga@gmail.com".
#### Test Data: 
     - https://www.epasapoarte.ro/;
     - email1: "mihaelacepraga@gmail.com";
     - email2: "mihaelacepraga@gmail.com";
#### Status:
    Failed

## 6. Test Select Type of Document [code](https://github.com/mihaelacepraga/test-automation/blob/ePasapoarte/testCases-epasapoarte.ro/test/specs/selectTypeDoc.e2e.js "TestCase Nr.6")
#### Description:
      Open home page and check if the select "Tipul de document" exist and it is working properly, when user select the "pasaport simplu electronic".
#### Steps to reproduce:
    1. Go to https://www.epasapoarte.ro/;
    2. Check if the select "Tipul de document" is existing and click on it;
    3. Verify if the select has a list whith 8 options;
    4. Verify if user can find and select the option than contain the text "pasaport simplu electronic;
    5. Verify if is displayed validation message "Este obligatoriu.",when the user select the first option "Tipul de document ....." again;
#### Expected result:
     User should be able to access https://www.epasapoarte.ro/, 
     to find the select "Tipul de document" and can select the option than contain the text "pasaport simplu electronic.
#### Test Data: 
     - https://www.epasapoarte.ro/;
     - Select the option "pasaport simplu electronic";
   
#### Status:
     Done

## 7. Test Select the localion and the time [code](https://github.com/mihaelacepraga/test-automation/blob/ePasapoarte/testCases-epasapoarte.ro/test/specs/inputPlace.e2e.js  "TestCase Nr.7")
#### Description:
      Open home page and check if the input location exist and it is working properly, and user can select an available hour for appointment .
#### Steps to reproduce:
    1. Go to https://www.epasapoarte.ro/;
    2. Check if user can find the input location;
    3. Verify if it display message "Alege locatia...";
    4. Verify if is displayed a list of available localities;
    5. Verify if exist a list of leters and can select "I";
    6. Check if there is 2 locations whith leter "I";
    7. Verify if is selected city "Iasi";
    8. The user can select one person from the list;
    9. Check how many months is displayed and choose the first one, otherwise you may see the message "Nu mai sunt locuri disponibile.";
    10. Select first available day if it exist;
    11. Choose last available hour from the shown list;
    12. Verify if exist button "Alege" and select it;


#### Expected result:
     User should be able to access https://www.epasapoarte.ro/,to find the input location and can select city "Iasi",can choose the first available month, day and select the last available time.
#### Test Data: 
     - https://www.epasapoarte.ro/;
     - Select the option "pasaport simplu electronic";
     - Location`s Numbers = 44;
     - Numbers Leters = 15;
     - Position Leter "I" = 7;
     - Selected city "Iasi";
     - selected persons from the list ---> 1;
     - Selected month from the available list---> the first;
     - Selected day from the available list--->the first;
     - Selected available hour from the shown list--> the last;
   
#### Status:
     Done

