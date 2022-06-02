
const LoginPage = require('../pageobjects/login.page');
const auth = require('../pageobjects/secrets');

describe('eMag login with valid credentials', () => {

    it('Should find login button',async () => {
        
        await LoginPage.open();
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

        const login_mail = auth.emag_login ;
        await LoginPage.inputEmail.setValue(login_mail);
        console.log(auth.emag_login +" "+ auth.emag_password)
        await LoginPage.submit();
        await expect(LoginPage.inputEmail).toHaveValue(login_mail)
    
    });
    it('should display Captcha and solve it manually', async() => {
         // # Wait until user manually solve Captcha while testing

        await LoginPage.displayCaptcha.waitForDisplayed({ reverse:true });
        await browser.pause(4000);
    });

    it('should contain a required message and the password input', async() => {
       
        const login_pass = auth.emag_password;
        await expect(LoginPage.requiredMes).toHaveTextContaining('Introdu parola');
        await LoginPage.inputPass.setValue(login_pass);
        
        await expect(LoginPage.inputPass).toHaveElementClass('form-control');      
    });

    it('should find button submit and click on it',async () => {
        await expect(LoginPage.btnContinue).toHaveText('Continuă');
        await LoginPage.btnContinue.click();
        await LoginPage.displayCaptcha.waitForDisplayed({ reverse:true });
        await expect(browser).toHaveUrl('https://www.emag.ro/user/mfa-optin');
       
    });
    it('should select token button and user to be login',async () => {
        await expect(LoginPage.btnToken).toHaveHref('https://www.emag.ro/token');
        await LoginPage.btnToken.click();
        await expect(LoginPage.myAccount).toHaveText('M');
    });
    it('user should can log out',async () => {
        await LoginPage.btnClose.waitForDisplayed({timeout:2000});
        await LoginPage.btnClose.click();
        await LoginPage.myAccount.moveTo();
        await LoginPage.logOut.waitForDisplayed({timeout:1000});
        await expect(LoginPage.logOut).toHaveHref('/user/logout?ref=ua_logout');
        await LoginPage.logOut.click();
        
        
    });
    it('user should be logout ', async() => {
        await LoginPage.myAccount.moveTo();
        await expect(LoginPage.logAccount).toHaveTextContaining('Intra in contul tau')
        
    });
});