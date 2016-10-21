package cucumberConfiguration;

import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "pretty","html: cucumber-html-reports",
"json: cucumber-html-reports/cucumber.json" }, features = "src/test/java/features/", strict = true,glue="steps", monochrome = true, tags = {"@GameLaptop"})
public class CucumberRunner {

}

//The plugin value “pretty” is for pretty formatter output
