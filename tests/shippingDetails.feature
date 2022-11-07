Feature: Shipping Details
Background:
Given as a customer I have added product in cart
And as a customer I am on shipping page
Scenario Outline: Adding shipping Details
When as a customer I enter <email> in email field
And enters <firstName> in first name field
And enters <lastName> in last name field
And enters <company> in company field
And enters <streetAddress> in street Address field
And enters <city> in city field
And enters <state> in state field
And enters <zip> in zip field
And enters <country> in country field
And enters <phoneNumber> in phone number field
And presses Next
Then I should be able to see <res>
Examples:
| email | firstName | lastName | company | streetAddress | city | state | zip | country | phoneNumber | res |
| "426mohsinali@gmail.com" | "Mohsin" | "Ali" | "Netsol" | "st# 18" | "Lahore" | "Alabama" | "67898" | "Pakistan" | "2345676543" | "Checkout" |
| "Mali@gmail.com" | "Mohsiassn" | "Alasai" | "Nadsdsetsol" | "sadadt# 18" | "Lahore" | "Alabama" | "67898" | "Pakistan" | "234888676543" | "Checkout" |