package steps;

import locators.Locators;

import org.openqa.selenium.WebElement;


import cucumber.api.java.en.When;


public class SearchFilterSteps {
	
	

@When("^Customer searchers for \"([^\"]*)\"$")
public void customer_searchers_for(String searchKeyWords) throws Throwable {
  WebElement searchInputElement=  SetupEnvironment.myDriver.findElement(Locators.findInputByAttribute("class","search-input small_details"));
  searchInputElement.sendKeys(searchKeyWords);
  WebElement searchButtonElement=  SetupEnvironment.myDriver.findElement(Locators.findInputByAttribute("class","search-btn"));
  searchButtonElement.click();
  Thread.sleep(2000);
  
  
  
}

}
