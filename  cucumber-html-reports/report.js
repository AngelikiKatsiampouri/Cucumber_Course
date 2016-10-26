$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GameLaptops.feature");
formatter.feature({
  "id": "as-customer-i-want-to-use-bol.com-to-select-my-new-gaming-laptop.",
  "description": "",
  "name": "As customer I want to use bol.com to select my new gaming laptop.",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 4404844989,
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
  "duration": 1720604645,
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
  "duration": 818560700,
  "status": "failed",
  "error_message": "java.lang.IllegalMonitorStateException\r\n\tat java.lang.Object.wait(Native Method)\r\n\tat steps.SearchFilterSteps.customer_searchers_for(SearchFilterSteps.java:21)\r\n\tat ✽.When Customer searchers for \"Gaming laptops\"(GameLaptops.feature:6)\r\n"
});
formatter.match({
  "location": "GamingPageSteps.the_website_displays_gaming_laptops()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 950295951,
  "status": "passed"
});
formatter.before({
  "duration": 3504050695,
  "status": "passed"
});
formatter.scenario({
  "id": "as-customer-i-want-to-use-bol.com-to-select-my-new-gaming-laptop.;as-customer-i-want-to-filter-on-gaming-laptops",
  "tags": [
    {
      "name": "@GameLaptop",
      "line": 10
    }
  ],
  "description": "",
  "name": "As customer I want to filter on gaming laptops",
  "keyword": "Scenario",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "Customer navigates to main page",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "Customer searchers for \"Gaming laptops\"",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "filter options are present",
  "keyword": "Then ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "filter_Categorieën",
        "filter_Schermgrootte",
        "filter_Merk"
      ],
      "line": 15
    },
    {
      "cells": [
        "Categorieën",
        "Schermgrootte",
        "Merk"
      ],
      "line": 16
    }
  ]
});
formatter.match({
  "location": "MainPageSteps.customer_navigates_to_main_page()"
});
formatter.result({
  "duration": 1444189323,
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
  "duration": 904499733,
  "status": "failed",
  "error_message": "java.lang.IllegalMonitorStateException\r\n\tat java.lang.Object.wait(Native Method)\r\n\tat steps.SearchFilterSteps.customer_searchers_for(SearchFilterSteps.java:21)\r\n\tat ✽.When Customer searchers for \"Gaming laptops\"(GameLaptops.feature:13)\r\n"
});
formatter.match({
  "location": "GamingPageSteps.filter_options_are_present(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 840191504,
  "status": "passed"
});
});