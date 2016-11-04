package webElements;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;


public class SideMenuWebElement {
	
	 private WebElement mySidemenuWebElement;
	
	public SideMenuWebElement(WebElement element){
		this.mySidemenuWebElement=element;
	}
	
	
	
	public static By findFilterHeader(String header){
		return By.xpath("//div[contains(@class,'facet-control__header')]/h4[contains(text(),'"
				+header + "')]");
	}
	
	public static By findFilterOption(String header, String option){
		return By.xpath("//div[./div[contains(@class,'facet-control__header')][./h4[contains(text(),'"+header+"')]]]//label[contains(text(),'"+option+"')]");
	}
	
	
	
	public boolean isDisplayed(){
		return mySidemenuWebElement.isDisplayed();
	}


}
