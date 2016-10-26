package steps;

import cucumber.api.java.en.Given;

public class MainPageSteps {

	/**
	 * This method navigates to the main page of the web site.
	 *  @throws InterruptedException when sleep fails
	 */
	@Given("^Customer navigates to main page$")
	public void customer_navigates_to_main_page() throws Throwable {
		SetupEnvironment.myDriver.get("https://www.bol.com/nl/index.html");
		Thread.sleep(2000);
	}

}