package locators;

import org.openqa.selenium.By;

public final class Locators {
	
	
	
	public static By findInputByAttribute(String attribute, String value){
		return By.xpath("//input[contains(@"+attribute+",'"+value+"')]");		
	}
	
	public static By findAnchorByAttribute(String attribute, String value){
		return By.xpath("//a[contains(@"+attribute+",'"+value+"')]");		
	}
	


}
