package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)    //    is not needed for Testng
@CucumberOptions(
        features = {"src/test/java/Features"},
        glue = "StepDefinitions",
        format = {"json:target/JSONReports/cucumber.json","html:target/HTMLReport/html-pretty"}
)
public class TestRunnerTestNG_JSONReport extends AbstractTestNGCucumberTests {



}
