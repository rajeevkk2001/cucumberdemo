package StepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import util.BasePage;

import java.util.ArrayList;
import java.util.List;

public class LoginSteps extends BasePage {

    private BasePage baseUtil;

    public LoginSteps(BasePage baseUtil) {
        this.baseUtil = baseUtil;
    }

    @Given("^I navigate to the login page of application$")
    public void iNavigateToTheLoginPageOfApplication() {
        System.out.println(" Step: Navigate to login page");
        System.out.println(" Dependecy Injection value is "+baseUtil.toString());
    }

    @And("^User Clicks on Login button$")
    public void userClicksOnLoginButton() {
        System.out.println("Step: Click on Login button");

    }

    @Then("^I should see the Landing page$")
    public void iShouldSeeTheLandingPage() {
        System.out.println("Step : Display Landing page");
    }

    @And("^I enter user name as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void iEnterUserNameAsAndPasswordAs(String username, String password) throws Throwable {
       System.out.println("\n  Step: Entered user name is "+username +" and password is "+password);
    }

    @And("^I enter <username> and <password>$")
    public void iEnterUsernameAndPassword(DataTable dataTable) {
       // dataTable.getTableConverter();

        List<List<String>> data = dataTable.raw(); // this return List<List<String>>
        System.out.println(data.get(0));
        System.out.println(data.get(1));
    }

    @And("^I enter (^\"]*) and (^\"]*) with Pojo$")
    public void iEnterUsernameAndPasswordWithPojo(String username, String  password) {
     System.out.println("user name is "+username);
        System.out.println("password is "+password);
    }

    @And("^I enter username and password with Pojo$")
    public void iEnterUsernameAndPasswordWithPojo(DataTable table) {

        // Create an Arraylist
        List<Users> users = new ArrayList<Users>();
        users = table.asList(Users.class);

        for (Users user : users){
            System.out.println(user.username + "     " +user.password);
            // all the variable value in the pojo and feature file should be small letter to avoid no such field exception
        }

    }

    @And("^I enter <username> and <password> using Scenario$")
    public void EnterUsernameAndPasswordUsingScenario(String username, String password) {
        System.out.println("user name is "+username);
        System.out.println("password is "+password);
    }




    public class Users {
      public String username;
      public String password;

      public Users(String username, String password){
        this.username = username;
        this.password = password;
      }
    }
}
