package steps;

import gherkin.formatter.model.DataTableRow;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static org.junit.Assert.assertTrue;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;


public class GamingPageSteps {

	@Then("^the website displays gaming laptops$")
	public void the_website_displays_gaming_laptops() throws Throwable {
		List<WebElement> GamingLaptopsWebElements = SetupEnvironment.myDriver
				.findElements(By.xpath("//a[@class='product-title'][contains(text(),'Gaming Laptop')]"));
		assertTrue("Er zijn geen gaming laptops gevonden!", !GamingLaptopsWebElements.isEmpty());
		for (WebElement webElement : GamingLaptopsWebElements) {
			System.out.println(webElement.getText());
		}
		Thread.sleep(2000);
	}
	
	
	
	@Then("^filter options are present$")
	public void filter_options_are_present(DataTable table) throws Throwable {
	   List<DataTableRow> tableRows=table.getGherkinRows();
	   for (int i = 1; i < tableRows.size(); i++) {
		   DataTableRow row = tableRows.get(i);
		   for(int j=0;j<row.getCells().size();j++){
			   WebElement filterElement = SetupEnvironment.myDriver
						.findElement(By.xpath("//div[contains(@class,'facet-control__header')]/h4[contains(text(),'"+row.getCells().get(j)+"')]"));
			   System.out.println(row.getCells().get(j));
			   assertTrue("Filter optie "+row.getCells().get(j)+" staat niet op het scherm", filterElement.isDisplayed()); 
		   }
		 
	   }

	   Thread.sleep(2000);
	}
	
}
