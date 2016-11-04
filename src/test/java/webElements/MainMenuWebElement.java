package webElements;

import org.openqa.selenium.By;

public class MainMenuWebElement {
	
	
	
	public static By getProductTitle(String element){
		return By.xpath("//a[@class='product-title'][contains(text(),'"+element+"')]");
	}
	
	public static By getResultListItems(){
		return By.xpath("//div[@class='results-area']//li[@itemprop='itemListElement']");
	}
	
	
	

}
