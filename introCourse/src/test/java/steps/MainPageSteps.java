package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;




public class MainPageSteps{

	
@Given("^Customer navigates to main page$")
public void customer_navigates_to_main_page() throws Throwable {
	
	WebDriver driver = new FirefoxDriver();
	driver.navigate().to("https://www.bol.com/nl/index.html");
	driver.get("https://www.bol.com/nl/index.html");
}

}