
const Page = require('./page');

class SearchPage extends Page{

    get searchInput () {
        return $('#searchboxTrigger')};

    get searchBtn () {
        return $('//*[@id="masthead"]/div/div/div[2]/div/form/div[1]/div[2]/button[2]')};
        
    get category (){
        return $('//*[@id="main-container"]/section[1]/div/div[3]/div[1]/div[1]/div[2]/div/div[2]/div[2]/a/div/div[2]/div');
    }
   
    get firstItem (){
        return $('#card_grid').$$('.card-item')[0];
    }

    open() {
        return super.open('/')
    }

}

module.exports = new SearchPage();