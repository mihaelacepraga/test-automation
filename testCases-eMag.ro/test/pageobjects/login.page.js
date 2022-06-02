const Page = require("./page");

class LoginPage extends Page {
    
    get logIn () {
        return $('.btn-group').$('#my_account')
    };
    get authPanel() {
        return $('.auth-panel-header')
    } ;
    
    get inputEmail () {
        return $('#user_login_email')
    };

    get btnSubmit () {
        return $('#user_login_continue')
    };

   
    get requiredMes () {
       return $('[for="user_login_password"]')
    };

    get displayCaptcha() {
        return $('.skip')
    };
    get inputPass () {
       return $('#user_login_password')
    };
    get btnContinue () {
        return $('#user_login_continue')
    };
    
    get btnToken () {
        
        return $('[href="https://www.emag.ro/token"]')
    };
    
    get myAccount () {
        return $('#my_account')
    };
    get logAccount () {
        return $('.custom-dropdown-body span')
    };

    get btnClose (){
        return $('body > div.ns-wrap-bottom-right > div > div > button')
    };

    get logOut () {
        return $('.js-logout-btn')
    };
    
    async open() {
        await super.open('/')
    };
    
    async submit (){
        await this.btnSubmit.click()
    };

   




}

module.exports = new LoginPage();