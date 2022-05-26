// const { async } = require('../pageobjects/login.page');
const LoginPage = require('../pageobjects/login.page');
const Page = require('../pageobjects/page');

describe('eMag login ', () => {

    it('Should find login button',async () => {

        await browser.url('/')
        await LoginPage.logIn.click();
        await expect(browser).toHaveUrl('https://auth.emag.ro/user/login');
        await expect(browser).toHaveTitle('eMAG.ro - Libertate în fiecare zi'); 
    });

    it('should contain welcome message',async() => {

        await expect(LoginPage.authPanel).toHaveText('Salut!');
    });

    it('should contain email input',async() => {
        await expect(LoginPage.inputEmail).toBePresent();
        
    });
    it('should can set value for email ',async () => {
        await LoginPage.inputEmail.setValue('mihaelacepraga@gmail.com');
        await LoginPage.submit();
        await expect(LoginPage.inputEmail).toHaveValue('mihaelacepraga@gmail.com')
        
    });

    it('should contain a required message and the password input', async() => {
         // # Wait until user manually solve Captcha while testing
        await LoginPage.displayCaptcha.waitForDisplayed({ reverse:true });
        
        await expect(LoginPage.requiredMes).toHaveTextContaining('Introdu parola');
        await LoginPage.inputPass.setValue('Qwerty09');
        await expect(LoginPage.inputPass).toHaveElementClass('form-control');
;        
    });
});