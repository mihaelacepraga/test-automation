const Page = require('./page');

class WatchesPage extends Page{

    get promoBanner() {
        return $('div:nth-child(2) > section:nth-child(1)')
    };
    
    get shopNow() {
        return $('section:nth-child(1) > a')
    };
    
    async open() {
       await super.open('/ceasuri-barbati/sd?ref=hp_menu_quick-nav_1696_25&type=subdepartment')
    }
    async click(){
        return await this.shopNow.click()
    };
}

module.exports = new WatchesPage();