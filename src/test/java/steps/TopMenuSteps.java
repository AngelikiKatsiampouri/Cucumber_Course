package steps;

import org.openqa.selenium.WebElement;

import webElements.TopMenuWebElement;
import cucumber.api.java.en.When;
import cucumberConfiguration.SetupEnvironment;

public class TopMenuSteps {

	

	/**
	 * Searches on the top search field on a given input value.
	 * @param searchKeyWords are the characters you can search for.
	 * @throws InterruptedException when sleep fails
	 */
	@When("^Customer searches for \"([^\"]*)\"$")
	public void customer_searchers_for(String searchKeyWords) throws InterruptedException {
		WebElement searchInputElement = SetupEnvironment.myDriver
				.findElement(TopMenuWebElement.findInputByAttribute("class", "search-input small_details"));
		searchInputElement.sendKeys(searchKeyWords);
		WebElement searchButtonElement = SetupEnvironment.myDriver
				.findElement(TopMenuWebElement.findInputByAttribute("class", "search-btn"));
		searchButtonElement.click();
		Thread.sleep(2000);

	}

}
