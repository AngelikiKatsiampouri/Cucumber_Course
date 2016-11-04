package steps;

import static org.junit.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import webElements.MainMenuWebElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumberConfiguration.SetupEnvironment;

public class MainMenuSteps {
	
	private String BOL_COM_URL="https://www.bol.com/nl/index.html";

	/**
	 * Navigate to the main page of the web site.
	 */
	@Given("^Customer enters webshop$")
	public void customer_navigates_to_main_page() {
		SetupEnvironment.myDriver.get(BOL_COM_URL);
	}
	
	/**
	 * Assert whether the element is present on the main page. 	 
	 */
	@Then("^\"([^\"]*)\" products are present$")
	public void the_website_displays_gaming_laptops(String element) {
		List<WebElement> webElements = SetupEnvironment.myDriver
				.findElements(MainMenuWebElement.getProductTitle(element));
		assertTrue("Er zijn geen "+element+" gevonden!", !webElements.isEmpty());
	}
	
	/**
	 * Assert that 
	 * @throws InterruptedException
	 */
	@Then("^number of products found is (\\d+)$")
	public void one_product_is_found_on_results(int productsNr) throws InterruptedException {
		WebDriverWait wait2 = new WebDriverWait(SetupEnvironment.myDriver, 30);
		List<WebElement> webElements2=wait2.until(ExpectedConditions.presenceOfAllElementsLocatedBy(MainMenuWebElement.getResultListItems()));
		assertTrue("Er zijn "+webElements2.size()+" elementen gevonden!", webElements2.size()==productsNr);
		
	}
}