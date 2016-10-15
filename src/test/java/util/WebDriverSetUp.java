package util;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.*;


 public final class WebDriverSetUp {
	
	 public static WebDriver myDriver;
	 
	 private WebDriverSetUp(){
		 
	 }
	 
	 
	 public static void  startChromeDriver(){
		 System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/src/test/resources/drivers/chromedriver_win32.exe");
		 myDriver=new ChromeDriver();
		 myDriver.get("https://www.bol.com/nl/index.html");
	 }
	 
	 


}
