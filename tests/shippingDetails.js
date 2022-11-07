module.exports = {
    "Testing magento" : browser => {

        browser.url("https://magento.jsmartfix.com/")
        //browser.pause(1000)

        browser.click("#ui-id-6 > span:nth-child(2)")
        //browser.pause(1000)

        browser.click("#narrow-by-list2 > dd > ol > li:nth-child(1) > a")
        browser.pause(1000)

        browser.click("#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(1) > div > a > span > span > img")
        browser.pause(3000)

        browser.click("#product-addtocart-button > span")
        browser.pause(4000)


        

        browser.click("body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a")
        browser.pause(5000)

        browser.click("#top-cart-btn-checkout")
        browser.pause(5000)

        //browser.setValue('#customer-email',[string,"mohsin@gamil.com"])
        browser.sendKeys('#customer-email', 'nightwatchooo');
        browser.pause(3000)

        
        //browser.click("body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a")
        //browser.pause(3000)
    }
}