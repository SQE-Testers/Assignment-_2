Feature: Search

    Feature Description

Scenario Outline:  Search Product

Given the user is on product page
When I Search <Input>
Then the body contains <Output>

Examples:
|Input   | Output  |
|"Bags"  | "Bags"  |
| " "    | "Error" |
| "-1"   | "Error" |

