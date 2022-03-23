
# epasapoarte.ro TestCases
    
## 1. Access home page [code](https://github.com/mihaelacepraga/test-automation/blob/ePasapoarte/testCases-epasapoarte.ro/test/specs/homePage.e2e.js)
#### Description:
     Open home page and check if it has correct title.
#### Steps to reproduce:
    1. Go to https://www.epasapoarte.ro/;
    2. Check if the open page has title "Programari online pasapoarte";
#### Expected result:
     User should be able to access https://www.epasapoarte.ro/, 
     which has title "Programari online pasapoarte".
#### Test Data: 
     https://www.epasapoarte.ro/ 
#### Status:
    Done

## 2. Test Input Name
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
     https://www.epasapoarte.ro/;
     input value"Cepraga";
#### Status:
    Done
