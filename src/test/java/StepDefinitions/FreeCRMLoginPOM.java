package StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.FreeCRMLogin;
import util.BasePage;

public class FreeCRMLoginPOM extends BasePage {
    FreeCRMLogin freeCRMLogin = new FreeCRMLogin(driver);
    @Given("^User Opens the Browser$")
    public void userOpensTheBrowser() {
     System.out.println("Opened the Browser");
    }


    @When("^Login page is displayed, verify the title$")
    public void loginPageIsDisplayedVerifyTheTitle() {
        String title = freeCRMLogin.validateLoginPageTitle();
        Assert.assertEquals("CRM",title);
        System.out.println("Title verified");
    }

    @And("^When enter username, password and click on submit$")
    public void whenEnterUsernamePasswordAndClickOnSubmit() {
        freeCRMLogin.login(USERNAME_FREECRM,PSW_FREECRM);
        System.out.println("User Name and Password is entered");

    }

    @Then("^Verify the Landing page$")
    public void verifyTheLandingPage() {
     System.out.println("Verifying the Landing Page");
    }
}
