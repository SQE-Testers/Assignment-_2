const {Given, When ,Then } = require('@cucumber/cucumber');

Given(/^as a customer I have added product in cart$/, function() {
 return  browser
            .url("https://magento.jsmartfix.com/")

            .click("#ui-id-6 > span:nth-child(2)")

            .click("#narrow-by-list2 > dd > ol > li:nth-child(1) > a")
               
});

Given('as a customer I am on shipping page', function() {
   return browser
        .click("#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(1) > div > a > span > span > img")

        .click("#product-addtocart-button > span")
        .pause(3000)

        .click("body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a")
        .pause(5000)

        .click("#top-cart-btn-checkout")
        .pause(2000)
});

When('as a customer I enter {string} in email field',async function(string){
     browser
        .setValue('#customer-email',[string,browser.Keys.ENTER])
        .pause(1*1000)
  });

  Given('enters {string} in first name field',async function(string){
    browser
        .setValue('input[name=firstname]', [string, browser.Keys.ENTER])
        .pause(1*1000)
  });

  Given('enters {string} in last name field',async function(string){
    browser
        .setValue('input[name=lastname]', [string, browser.Keys.ENTER])
        .pause(1*1000)
  });

  Given('enters {string} in company field',async function(string){
     browser
    .setValue('input[name=company]', [string, browser.Keys.ENTER])
     .pause(1*1000)
  });

  Given('enters {string} in street Address field',async function(string){
    browser
        .setValue('input[name="street[0]"]', [string, browser.Keys.ENTER])
    
  });

  Given('enters {string} in city field',async function(string){
    browser
        .setValue('input[name=city]', [string, browser.Keys.ENTER])
        .pause(1*1000)
  });



  Given('enters {string} in state field',async function(string){
     browser
        .setValue('select[name=region_id]', [string, browser.Keys.ENTER])
        .pause(1*1000)
  });

  Given('enters {string} in zip field',async function(string){
     browser
        .setValue('input[name=postcode]', [string, browser.Keys.ENTER])
        .pause(1*1000)
  });

  Given('enters {string} in country field',async function(string){
     browser
        .setValue('select[name=country_id]', [string, browser.Keys.ENTER])
        .pause(1*1000)
  });


  Given('enters {string} in phone number field',async function(string){
     browser
        .setValue('input[name=telephone]', [string, browser.Keys.ENTER])
        .pause(1*1000)
  });

  Given('presses Next',async function(){
     browser
        .click("#checkout-shipping-method-load > table > tbody > tr:nth-child(1) > td:nth-child(1) > input")
        .click("#shipping-method-buttons-container > div > button")
        .pause(5*1000)
  });

Then('I should be able to see {string}', function(string) {

  return browser
          .assert.titleEquals(string)
          .pause(3*1000)
});
