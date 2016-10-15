package cucumberConfiguration;

import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty","html: cucumber-html-reports",
"json: cucumber-html-reports/cucumber.json" }, features = "src/test/java/features/", glue="steps", monochrome = true, tags = "@GameLaptop",   dryRun = false
 )
public class CucumberRunner {

}


