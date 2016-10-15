package steps;


import util.WebDriverSetUp;
import cucumber.api.java.en.Given;




public class MainPageSteps{

	
@Given("^Customer navigates to main page$")
public void customer_navigates_to_main_page() throws Throwable {
	WebDriverSetUp.startChromeDriver();
}

}