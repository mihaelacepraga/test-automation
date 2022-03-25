
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
      Open home page and check if input "Telefon" are existing and it working properly.
#### Steps to reproduce:
    1. Go to https://www.epasapoarte.ro/;
    2. Check if input "Telefon" are existing and click on it;
    3. Verify if input is disabled ;
    4. Verify if user can open page "Protectia Datelor", and check checkbox "Protectia date";
    5. Verify if appear validation message "Numai cifre . si -.", when add an other character than numbers;
    6. Add a phone number valid and check if it is "0724871231";
#### Expected result:
     User should be able to access https://www.epasapoarte.ro/, 
     to find input "Telefon" and add value "0724871231".
     
#### Test Data: 
     - https://www.epasapoarte.ro/;
     - phoneNumber: 0724871231;
     
#### Status:
     Done
