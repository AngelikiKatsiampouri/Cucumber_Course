package webElements;

import org.openqa.selenium.By;

public class TopMenuWebElement{
	
/**
 * @param attribute of the element.
 * @param value of the attribute
 * @return
 */
public static By findInputByAttribute(String attribute, String value){
	return By.xpath("//input[contains(@"+attribute+",'"+value+"')]");		
}



}
