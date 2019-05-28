package StepDefinitions;

import cucumber.api.DataTable;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.TollDataPage;
import pages.HomePage;
import pages.LoginPage;
import util.BasePage;

import java.util.ArrayList;
import java.util.List;

public class NTTALogin extends BasePage {
    LoginPage loginPage = new LoginPage(driver);
  //  HomePage homePage;
    //TollDataPage tollDataPage;

    @Given("^When the NTTA website is opened$")
    public void when_the_NTTA_website_is_opened() {
       // BasePage.initializeTest();
        System.out.println("NTTA Website is opened");

    }

    @When("^Title of the site is verified$")
    public void titleOfTheSiteIsVerified() {
        //loginPage = new LoginPage(driver);
        String title = loginPage.validateLoginPageTitle();
        if (title.contains("NTTA Customer Service Center")) {
            System.out.println("Title verification is completed");

            System.out.println("Title is  " + title);
        } else {
            System.out.println("Title verificatio is failed");
        }


    }

    @Then("^Enter Username and Password Details$")
    public void enterUsernameAndPasswordDetails(DataTable dt) {
        List<Users> users = new ArrayList<Users>();
        System.out.println("Entering User name and password");
        users = dt.asList(Users.class);

        for (Users user : users) {
            loginPage.enterUserNameAndPassword(user.username, user.password);
        }
        System.out.println("User name and Password has been entered");


    }

    @And("^User Click on Login button$")
    public HomePage userClickOnLoginButton() {
        System.out.println("Clicking  on the login button");

        loginPage.clickLogin();
        HomePage homePage = new HomePage(driver);
        return homePage;


    }


    @Then("^Get the Toll Transactions$")
    public void verifyTheLandingPage() {
        System.out.println("Home page verifiction step \n");
        loginPage.getTollTrasactions();
        driver.quit();

    }

}





  /*  @When("^Title of the site is verified$")
    public void title_of_the_site_is_verified() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    }

    @Then("^Enter Username and Password Details$")
    public void enter_Username_and_Password_Details(DataTable arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
        // E,K,V must be a scalar (String, Integer, Date, enum etc)

    }

    @Then("^User Click on Login button$")
    public void user_Click_on_Login_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    }

    @Then("^Verify the Landing page$")
    public void verify_the_Landing_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    }

}
*/

class Users{

    String username;
    String password;

    public Users(String username, String password) {
        this.username = username;
        this.password = password;
    }
}

