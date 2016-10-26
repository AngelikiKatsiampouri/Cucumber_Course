package steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class SetupEnvironment {

	public static WebDriver myDriver;

	public static String CHROME_PATH = "/src/test/resources/drivers/chromedriver_win32.exe";

	public static String CHROME_PROPERTY = "webdriver.chrome.driver";

	@Before
	public void setup(Scenario scenario) {
		System.setProperty(CHROME_PROPERTY, System.getProperty("user.dir") + CHROME_PATH);
		myDriver = new ChromeDriver();
		myDriver.manage().window().maximize();
		System.out.println("Starting Scenario: " + scenario.getName());

	}

	@After
	public void tearDown(Scenario scenario) throws IOException {
		System.out.println("Completed Scenario: " + scenario.getName());
		try {
			if (scenario.isFailed()) {
				System.out.println("Scenario: " + scenario.getName() + " failed!");
				takeScreenShotAndAttachToScenario(scenario);

			}
		} finally {
			if (myDriver != null) {
				myDriver.quit();
			}
		}

	}

	public void takeScreenShotAndAttachToScenario(Scenario scenario) throws IOException {
		File source = ((TakesScreenshot) SetupEnvironment.myDriver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(source, new File("target/screenshot/screenshot.png"));
	}

}
