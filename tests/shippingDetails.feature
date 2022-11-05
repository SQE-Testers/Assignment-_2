Feature: Shipping Details

Background:
Given a customer have added product(s) in cart
And customer is on shipping page

Scenario Outline: Adding shipping Details

When customer enters <email> in email field
And enters<firstName> in first name field
And enters<lastName> in last name field
And enters<company> in company field
And enters<streetAddress> in street Address field
And enters<city> in city field
And enters<state/province> in state/province field
And enters<zip/postalCode> in zip/postalCode field
And enters<country> in country field
And enters<phoneNumber> in phone number field
Then I should get <result> message

Example:
| email | firstName | lastName | company | streetAddress | city | state/province | zip/postalCode | country | phoneNumber | result |
| empty | valid | valid | valid | valid | valid | valid | valid | valid | valid | email is a Required field |
| valid | empty | valid | valid | valid | valid | valid | valid | valid | valid | firstName is a Required field |
| valid | valid | empty | valid | valid | valid | valid | valid | valid | valid | lastName is a Required field |
| valid | valid | valid | empty | valid | valid | valid | valid | valid | valid | Success |
| valid | valid | valid | valid | empty | valid | valid | valid | valid | valid | streetAddress is a Required field |
| valid | valid | valid | valid | valid | empty | valid | valid | valid | valid | city is a Required field |
| Valid | valid | valid | valid | valid | valid | empty | valid | valid | valid | state/province is a Required field |
| valid | valid | valid | valid | valid | valid | valid | empty | valid | valid | zip/postalCode is a Required field |
| valid | valid | valid | valid | valid | valid | valid | valid | empty | valid | country is a Required field |
| valid | valid | valid | valid | valid | valid | valid | valid | valid | empty | phoneNumber is a Required field |
| inValid | valid | valid | valid | valid | valid | valid | valid | valid | valid | In valid Email Address |
| valid | valid | valid | valid | valid | valid | valid | valid | valid | valid | Success |