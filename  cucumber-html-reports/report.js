$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GameLaptops.feature");
formatter.feature({
  "id": "as-customer-i-want-to-use-bol.com-to-select-my-new-gaming-laptop.",
  "description": "",
  "name": "As customer i want to use bol.com to select my new gaming laptop.",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "as-customer-i-want-to-use-bol.com-to-select-my-new-gaming-laptop.;as-customer-i-want-to-have-a-overview-of-available-gaming-laptops",
  "tags": [
    {
      "name": "@GameLaptop",
      "line": 3
    }
  ],
  "description": "",
  "name": "As customer i want to have a overview of available gaming laptops",
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
formatter.step({
  "name": "filter options are present",
  "keyword": "Then ",
  "line": 8,
  "rows": [
    {
      "cells": [
        "filter1",
        "filter2",
        "filter3"
      ],
      "line": 9
    },
    {
      "cells": [
        "Categorieën",
        "Schermgrootte",
        "Merk"
      ],
      "line": 10
    }
  ]
});
formatter.match({
  "location": "MainPageSteps.customer_navigates_to_main_page()"
});
formatter.result({
  "duration": 4823760826,
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
  "duration": 1220494376,
  "status": "passed"
});
formatter.match({
  "location": "GamingPageSteps.the_website_displays_gaming_laptops()"
});
formatter.result({
  "duration": 726059221,
  "status": "passed"
});
formatter.match({
  "location": "GamingPageSteps.filter_options_are_present(DataTable)"
});
formatter.result({
  "duration": 107389948,
  "status": "passed"
});
});