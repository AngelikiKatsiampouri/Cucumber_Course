package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;




public class MainPageSteps{

	
@Given("^Customer navigates to main page$")
public void customer_navigates_to_main_page() throws Throwable {
	System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/src/test/resources/drivers/chromedriver_win32.exe");
	WebDriver driver = new ChromeDriver();
	driver.get("https://www.bol.com/nl/index.html");
}

}