package steps;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import static org.junit.Assert.assertTrue;

import cucumber.api.java.en.Then;
import util.WebDriverSetUp;

public class GamingPageSteps {

	@Then("^the website displays gaming laptops$")
	public void the_website_displays_gaming_laptops() throws Throwable {
		List<WebElement> GamingLaptopsWebElements = WebDriverSetUp.myDriver
				.findElements(By.xpath("//a[@class='product-title'][contains(text(),'Gaming Laptop')]"));
		assertTrue("Er zijn geen gaming laptops gevonden!", !GamingLaptopsWebElements.isEmpty());

		for (WebElement webElement : GamingLaptopsWebElements) {

			System.out.println(webElement.getText());
		}
	}
}
