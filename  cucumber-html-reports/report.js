$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GameLaptops.feature");
formatter.feature({
  "id": "customer-chooses-gaming-laptop-from-bol.com-website.",
  "description": "",
  "name": "Customer chooses gaming laptop from Bol.com website.",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 4261473592,
  "status": "passed"
});
formatter.scenario({
  "id": "customer-chooses-gaming-laptop-from-bol.com-website.;as-customer-i-want-to-have-a-view-of-gaming-laptops-i-can-buy",
  "tags": [
    {
      "name": "@GameLaptop",
      "line": 3
    },
    {
      "name": "@Search",
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
  "name": "Customer enters webshop",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "Customer searches for \"Gaming laptops\"",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "\"Gaming Laptop\" products are present",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "MainMenuSteps.customer_navigates_to_main_page()"
});
formatter.result({
  "duration": 2129006634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaming laptops",
      "offset": 23
    }
  ],
  "location": "TopMenuSteps.customer_searchers_for(String)"
});
formatter.result({
  "duration": 2844486920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaming Laptop",
      "offset": 1
    }
  ],
  "location": "MainMenuSteps.the_website_displays_gaming_laptops(String)"
});
formatter.result({
  "duration": 61495596,
  "status": "passed"
});
formatter.after({
  "duration": 990747560,
  "status": "passed"
});
formatter.before({
  "duration": 3391004878,
  "status": "passed"
});
formatter.scenario({
  "id": "customer-chooses-gaming-laptop-from-bol.com-website.;as-customer-i-want-to-filter-on-gaming-laptops",
  "tags": [
    {
      "name": "@GameLaptop",
      "line": 9
    },
    {
      "name": "@Filter",
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
  "name": "Customer enters webshop",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "Customer searches for \"Gaming laptops\"",
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
formatter.step({
  "name": "customer filters in",
  "keyword": "When ",
  "line": 16,
  "rows": [
    {
      "cells": [
        "Schermgrootte",
        "Merk"
      ],
      "line": 17
    },
    {
      "cells": [
        "12 tot 14 inch",
        "Lenovo"
      ],
      "line": 18
    }
  ]
});
formatter.step({
  "name": "number of products found is 1",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "location": "MainMenuSteps.customer_navigates_to_main_page()"
});
formatter.result({
  "duration": 1394911034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaming laptops",
      "offset": 23
    }
  ],
  "location": "TopMenuSteps.customer_searchers_for(String)"
});
formatter.result({
  "duration": 2704552900,
  "status": "passed"
});
formatter.match({
  "location": "SideMenuSteps.filter_options_are_present(DataTable)"
});
formatter.result({
  "duration": 2127338666,
  "status": "passed"
});
formatter.match({
  "location": "SideMenuSteps.customer_filters_in(DataTable)"
});
formatter.result({
  "duration": 2808132360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    }
  ],
  "location": "MainMenuSteps.one_product_is_found_on_results(int)"
});
formatter.result({
  "duration": 10553387704,
  "status": "passed"
});
formatter.after({
  "duration": 837879090,
  "status": "passed"
});
});