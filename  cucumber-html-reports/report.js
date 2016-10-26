$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GameLaptops.feature");
formatter.feature({
  "id": "as-customer-i-want-to-use-bol.com-to-select-my-new-gaming-laptop.",
  "description": "",
  "name": "As customer I want to use bol.com to select my new gaming laptop.",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 4854194668,
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
  "duration": 3965395640,
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
  "duration": 39142765,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[contains(@class,\u0027search-input_small_details\u0027)]\"}\n  (Session info: chrome\u003d53.0.2785.143)\n  (Driver info: chromedriver\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 31 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u00272C3QTZ1\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_75\u0027\n*** Element info: {Using\u003dxpath, value\u003d//input[contains(@class,\u0027search-input_small_details\u0027)]}\nSession ID: 513b224c5f85d124bca97e834e25136c\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\katsia00\\AppData\\Local\\Temp\\scoped_dir8436_27497, chromedriverVersion\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b)}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, version\u003d53.0.2785.143, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat steps.SearchFilterSteps.customer_searchers_for(SearchFilterSteps.java:17)\r\n\tat ✽.When Customer searchers for \"Gaming laptops\"(GameLaptops.feature:6)\r\n"
});
formatter.match({
  "location": "GamingPageSteps.the_website_displays_gaming_laptops()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1668412376,
  "status": "passed"
});
formatter.before({
  "duration": 3611387763,
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
  "duration": 3465391124,
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
  "duration": 33050506,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[contains(@class,\u0027search-input_small_details\u0027)]\"}\n  (Session info: chrome\u003d53.0.2785.143)\n  (Driver info: chromedriver\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 33 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u00272C3QTZ1\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_75\u0027\n*** Element info: {Using\u003dxpath, value\u003d//input[contains(@class,\u0027search-input_small_details\u0027)]}\nSession ID: 9f59dd08f4c7eb426e52c6d30116fa3a\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\katsia00\\AppData\\Local\\Temp\\scoped_dir9204_6656, chromedriverVersion\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b)}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, version\u003d53.0.2785.143, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat steps.SearchFilterSteps.customer_searchers_for(SearchFilterSteps.java:17)\r\n\tat ✽.When Customer searchers for \"Gaming laptops\"(GameLaptops.feature:12)\r\n"
});
formatter.match({
  "location": "GamingPageSteps.filter_options_are_present(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1498241702,
  "status": "passed"
});
});