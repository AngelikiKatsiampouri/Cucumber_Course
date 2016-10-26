package locators;

import org.openqa.selenium.By;

public final class Locators {
	
	
	
	/**
	 * @param attribute of the element.
	 * @param value of the attribute
	 * @return
	 */
	public static By findInputByAttribute(String attribute, String value){
		return By.xpath("//input[contains(@"+attribute+",'"+value+"')]");		
	}
	
	/**
	 * @param attribute of the element.
	 * @param value of the attribute
	 * @return
	 */
	public static By findAnchorByAttribute(String attribute, String value){
		return By.xpath("//a[contains(@"+attribute+",'"+value+"')]");		
	}
	
public static By findSearchContainer(){
	
	return By.xpath("//div[contains(@class , '[ fluid-grid__item large--one-fifth ] navigation-container')]");
	
}

}
