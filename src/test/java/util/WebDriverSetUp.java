package util;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.*;


 public final class WebDriverSetUp {
	
	 public static WebDriver myDriver;
	 
	 public static String CHROME_PATH="/src/test/resources/drivers/chromedriver_win32.exe";
	 
	 public static String CHROME_PROPERTY="webdriver.chrome.driver";
	 
	 private WebDriverSetUp(){
		 
	 }
	 
	 
	 public static void  startChromeDriver(){
		 System.setProperty(CHROME_PROPERTY, System.getProperty("user.dir")+CHROME_PATH);
		 myDriver=new ChromeDriver();
		 myDriver.get("https://www.bol.com/nl/index.html");
	 }
	 
	 


}
