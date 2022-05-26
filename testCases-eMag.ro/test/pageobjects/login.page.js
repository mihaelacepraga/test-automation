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

    async open() {
        await super.open('/user/login')
    };
    
    async submit (){
        await this.btnSubmit.click()
    };

    // async submit () {
    //     await this.submitBtn.click()
    // }




}

module.exports = new LoginPage();