Feature: As customer i want to use bol.com to select my new gaming laptop. 

@GameLaptop 
Scenario: As customer i want to navigate to gaming laptop page and filter on my needs
	Given Customer navigates to main page 
	When Customer searchers for "Gaming laptops" 
	Then the website displays gaming laptops
	
	
	
	Scenario: As customer i want to navigate to gaming laptop page and filter on my needs
	Given Customer navigates to main page 
	When Customer searchers for "Gaming laptops" 
	Then the website displays gaming laptops
	Then filter options are present
	| filter_Categorieën| filter_Schermgrootte | filter_Merk | 
	| Categorieën       | Schermgrootte        |  Merk       |
	