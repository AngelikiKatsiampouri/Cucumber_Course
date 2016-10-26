$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GameLaptops.feature");
formatter.feature({
  "id": "as-customer-i-want-to-use-bol.com-to-select-my-new-gaming-laptop.",
  "description": "",
  "name": "As customer I want to use bol.com to select my new gaming laptop.",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 4403734916,
  "status": "passed"
});
formatter.scenario({
  "id": "as-customer-i-want-to-use-bol.com-to-select-my-new-gaming-laptop.;as-customer-i-want-to-have-a-view-of-gaming-laptops-i-can-buy",
  "tags": [
    {
      "name": "@GameLaptop",
      "line": 3
    }
  ],
  "description": "",
  "name": "As customer I want to have a view of gaming laptops I can buy",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "Customer navigates to main page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "Customer searchers for \"Gaming laptops\"",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "the website displays gaming laptops",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "MainPageSteps.customer_navigates_to_main_page()"
});
formatter.result({
  "duration": 3642799435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaming laptops",
      "offset": 24
    }
  ],
  "location": "SearchFilterSteps.customer_searchers_for(String)"
});
formatter.result({
  "duration": 2821424143,
  "status": "passed"
});
formatter.match({
  "location": "GamingPageSteps.the_website_displays_gaming_laptops()"
});
formatter.result({
  "duration": 2364460372,
  "status": "passed"
});
formatter.after({
  "duration": 1131134646,
  "status": "passed"
});
formatter.before({
  "duration": 3442480289,
  "status": "passed"
});
formatter.scenario({
  "id": "as-customer-i-want-to-use-bol.com-to-select-my-new-gaming-laptop.;as-customer-i-want-to-filter-on-gaming-laptops",
  "tags": [
    {
      "name": "@GameLaptop",
      "line": 9
    }
  ],
  "description": "",
  "name": "As customer I want to filter on gaming laptops",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "Customer navigates to main page",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "Customer searchers for \"Gaming laptops\"",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "filter options are present",
  "keyword": "Then ",
  "line": 13,
  "rows": [
    {
      "cells": [
        "filter_Categorieën",
        "filter_Schermgrootte",
        "filter_Merk"
      ],
      "line": 14
    },
    {
      "cells": [
        "Categorieën",
        "Schermgrootte",
        "Merk"
      ],
      "line": 15
    }
  ]
});
formatter.match({
  "location": "MainPageSteps.customer_navigates_to_main_page()"
});
formatter.result({
  "duration": 3606051699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaming laptops",
      "offset": 24
    }
  ],
  "location": "SearchFilterSteps.customer_searchers_for(String)"
});
formatter.result({
  "duration": 2974123910,
  "status": "passed"
});
formatter.match({
  "location": "GamingPageSteps.filter_options_are_present(DataTable)"
});
formatter.result({
  "duration": 2393311570,
  "status": "passed"
});
formatter.after({
  "duration": 1017840795,
  "status": "passed"
});
});