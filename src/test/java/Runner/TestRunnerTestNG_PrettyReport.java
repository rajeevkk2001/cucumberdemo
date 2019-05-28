package Runner;

import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)    //    is not needed for Testng
@CucumberOptions(
        features = {"src/test/java/Features"},
        glue = "StepDefinitions",
        tags = {"@POMLogin"},
        plugin = {"pretty","html:test-output"}
)
public class TestRunnerTestNG_PrettyReport  {



}
