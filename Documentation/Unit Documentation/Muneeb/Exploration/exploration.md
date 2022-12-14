
# Unit Testing Of Magento-2:

It is a ecommerce Store of Magento and here is the link of it you can check it out here
http://magento2demo.firebearstudio.com/



## Documentation:

In this Documentation I will explain how the magento test
thier ecommerce Store.





## Environment Variables:

To do the unit testing they use the following tools

`GRUNT`

GRUNT is a Javascript Task runner use to perform 
following tasks:

Munification

Compilation

Unit Testing

You can read more about it from here

https://en.wikipedia.org/wiki/Grunt_(software)

`Jasmine`

JASMINE 

Jasmine is an open-source testing framework for JavaScript. 
It aims to run on any JavaScript-enabled platform, 
to not intrude on the application nor the IDE, 
and to have easy-to-read syntax

you can read more about it from here

https://en.wikipedia.org/wiki/Jasmine_(JavaScript_testing_framework)





## Platform:

`Node.js`




## Dependencies:

`npm`

npm is a package manager for the JavaScript
 programming language maintained by npm, Inc. 
 npm is the default package manager for the 
 JavaScript runtime environment Node.js
 
 
 
 
### Test Code for UNIT Testing: 

`JASMINE`
##### Steps:

1.Create a file with .test.js extension

2.Put the file that you want to test

3.Write Jasmine code 

Example

define([
    'underscore',
    'Magento_Ui/js/grid/columns/actions'
], function (_, Actions) {
    'use strict';

    describe('ui/js/grid/columns/actions', function () {
        var model,
            action;

        beforeEach(function () {
            model = new Actions({
                index: 'actions',
                name: 'listing_action',
                indexField: 'id',
                dataScope: '',
                rows: [{
                    identifier: 'row'
                }]
            });
            action = {
                index: 'delete',
                hidden: true,
                rowIndex: 0,
                callback: function() {
                    return true;
                }
            };
        });

        it('Check addAction function', function () {
            expect(model.addAction('delete', action)).toBe(model);
        });

        it('Check getAction function', function () {
            var someAction = _.clone(action);

            someAction.index = 'edit';
            model.addAction('edit', someAction);
            expect(model.getAction(0, 'edit')).toEqual(someAction);
        });

        it('Check getVisibleActions function', function () {
            var someAction = _.clone(action);

            someAction.hidden = false;
            someAction.index= 'view';
            model.addAction('delete', action);
            model.addAction('view', someAction);
            expect(model.getVisibleActions('0')).toEqual([someAction]);
        });




4.Run `npm install` in your terminal.
