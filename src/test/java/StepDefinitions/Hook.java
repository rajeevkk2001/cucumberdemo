package StepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import util.BasePage;
import cucumber.api.Scenario;

public class Hook extends BasePage {
   // private BaseUtil baseUtil;

    public Hook() {
       super();
    }

    @Before
    public static void initializeTest(){
        System.out.println("Opening the Browser");
        BasePage.initializeTest();

    }

    @After
    public  void tearDown(Scenario scenario){
        if (scenario.isFailed() == true){
            System.out.println("scenario is failed ,  take screen shot");
        }
        System.out.println("Closing the Browser");
        driver.quit();
    }
}
