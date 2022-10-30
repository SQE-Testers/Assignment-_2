Feature: Search

    Feature Description
@Scenario

Scenario: Search Product
Given the user is on product page
When I Search "Bags"
Then the body contains "Bags"

