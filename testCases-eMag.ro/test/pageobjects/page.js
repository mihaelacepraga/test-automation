module.exports = class Page {
      /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path){
        return browser.url(`https://www.emag.ro/${path}`)
    }
}