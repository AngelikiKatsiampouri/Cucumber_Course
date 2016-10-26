Feature: As customer I want to use bol.com to select my new gaming laptop.

  @GameLaptop
  Scenario: As customer I want to have a view of gaming laptops I can buy
    Given Customer navigates to main page
    When Customer searches for "Gaming laptops"
    Then the website displays gaming laptops

  @GameLaptop
  Scenario: As customer I want to filter on gaming laptops
    Given Customer navigates to main page
    When Customer searches for "Gaming laptops"
    Then filter options are present
      | filter_Categorieën | filter_Schermgrootte | filter_Merk |
      | Categorieën        | Schermgrootte        | Merk        |
