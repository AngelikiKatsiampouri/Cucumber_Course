package steps;


import static org.junit.Assert.assertTrue;
import gherkin.formatter.model.DataTableRow;

import java.util.List;

import org.openqa.selenium.WebElement;

import webElements.SideMenuWebElement;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberConfiguration.SetupEnvironment;

public class SideMenuSteps {

	
	
	/**
	 * Verify that the filter options are present on screen.
	 * @param filterOptions the options that are present in the DataTable.
	 * @throws InterruptedException when sleep fails
	 */
	@Then("^filter options are present$")
	public void filter_options_are_present(DataTable filterOptions) throws InterruptedException {
		List<DataTableRow> tableRows = filterOptions.getGherkinRows();
		for (int i = 1; i < tableRows.size(); i++) {
			DataTableRow row = tableRows.get(i);
			for (int j = 0; j < row.getCells().size(); j++) {
				WebElement filterElement = SetupEnvironment.myDriver
						.findElement(SideMenuWebElement.findFilterHeader(row.getCells().get(j)));
				SideMenuWebElement filterel=new SideMenuWebElement(filterElement);
				assertTrue("Filter optie " + row.getCells().get(j) + " staat niet op het scherm",
						filterel.isDisplayed());
			}

		}

		Thread.sleep(2000);
	}
	
	/**
	 * Filters the results with the side filtering options.
	 * @param filterOptions the options that are present in the DataTable.
	 * @throws InterruptedException when sleep fails
	 */
	@When("^customer filters in$")
	public void customer_filters_in(DataTable filterOptions) throws InterruptedException{
		List<DataTableRow> tableRows = filterOptions.getGherkinRows();
		DataTableRow headers = tableRows.get(0);
		DataTableRow options = tableRows.get(1);
		for (int i = 0; i < tableRows.size(); i++) {
				WebElement filterElement = SetupEnvironment.myDriver
						.findElement(SideMenuWebElement.findFilterOption(headers.getCells().get(i),options.getCells().get(i)));
				filterElement.click();
				
			}
		Thread.sleep(2000);
		}
		
	

}
