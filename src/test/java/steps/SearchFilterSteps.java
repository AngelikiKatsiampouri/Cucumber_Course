package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import util.WebDriverSetUp;
import cucumber.api.java.en.When;

public class SearchFilterSteps {
	
	

@When("^Customer searchers for \"([^\"]*)\"$")
public void customer_searchers_for(String searchKeyWords) throws Throwable {
  WebElement searchInputElement=  WebDriverSetUp.myDriver.findElement(By.xpath("//input[@class='search-input small_details']"));
  searchInputElement.sendKeys(searchKeyWords);
  WebElement searchButtonElement=  WebDriverSetUp.myDriver.findElement(By.xpath("//input[@class='search-btn  large--is-visible  small_details  tst_headerSearchButton']"));
  searchButtonElement.click();
}

}
