Feature: As customer i want to use bol.com to select my new gaming laptop. 

@GameLaptop 
Scenario: As customer i want to have a overview of available gaming laptops 
	Given Customer navigates to main page 
	When Customer searchers for "Gaming laptops" 
	Then the website displays gaming laptops
	Then filter options are present
	| filter1    | filter2       | filter3 | 
	| Categorieën| Schermgrootte |  Merk   |
	