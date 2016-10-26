package locators;

import org.openqa.selenium.By;

public class FilterLocators {

	
	
	/**
	 * @return
	 */
	public static By findFilterContainer() {

		return By.xpath("//div[contains(@class , '[ fluid-grid__item large--one-fifth ] navigation-container')]");

	}
	
	
	public static By findFilterHeader(String header){
		return By.xpath("//div[contains(@class,'facet-control__header')]/h4[contains(text(),'"
				+header + "')]");
	}
}
