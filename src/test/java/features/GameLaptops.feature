Feature: Customer chooses gaming laptop from Bol.com website.

  @GameLaptop @Search
  Scenario: As customer I want to have a view of gaming laptops I can buy
    Given Customer navigates to main page
    When Customer searches for "Gaming laptops"
    Then the website displays gaming laptops

  @GameLaptop @Filter
  Scenario: As customer I want to filter on gaming laptops
    Given Customer navigates to main page
    When Customer searches for "Gaming laptops"
    Then filter options are present
      | filter_Categorieën | filter_Schermgrootte | filter_Merk |
      | Categorieën        | Schermgrootte        | Merk        |
