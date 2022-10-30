const {Given, Then, When, Before} = require('@cucumber/cucumber');

Given('the user is on product page', function() {    
    return browser
    .navigateTo('http://magento2demo.firebearstudio.com/')
    .waitForElementVisible('body',1000);
});

When('I Search {string}', function(searchTerm) {
    browser.click('#search')
    return browser
    .waitForElementVisible('body > div.page-wrapper > header > div.header.content > a > img')
    .setValue('input.input-text[type=text]',[searchTerm, browser.Keys.ENTER]);
  });

  Then('the body contains {string}', function(title) {
    return browser.assert.visible(title);
  })





  
