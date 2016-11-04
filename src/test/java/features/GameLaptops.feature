Feature: Customer chooses gaming laptop from Bol.com website.

  @GameLaptop @Search
  Scenario: As customer I want to have a view of gaming laptops I can buy
    Given Customer enters webshop
    When Customer searches for "Gaming laptops"
    Then "Gaming Laptop" products are present

  @GameLaptop @Filter
  Scenario: As customer I want to filter on gaming laptops
    Given Customer enters webshop
    When Customer searches for "Gaming laptops"
    Then filter options are present
      | filter_Categorieën | filter_Schermgrootte | filter_Merk |
      | Categorieën        | Schermgrootte        | Merk        |
    When customer filters in
      | Schermgrootte  | Merk   |
      | 12 tot 14 inch | Lenovo |
    Then number of products found is 1
