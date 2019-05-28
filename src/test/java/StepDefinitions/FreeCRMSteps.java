package StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class FreeCRMSteps {
    WebDriver driver;
    @Given("^user is already there in login page$")
    public void userIsAlreadyThereInLoginPage() {
        System.setProperty("webdriver.chrome.driver","C:\\chromedriver\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://ui.cogmento.com/");
         System.out.println("Opening the browser");
    }

    @When("^title of the page is free CRM$")
    public void titleOfThePageIsFreeCRM() {
        String title = driver.getTitle();
        Assert.assertEquals(title,"CRM");
        System.out.println("Home page title is verified");
    }

    @Then("^User enter user name$")
    public void userEnterUserName() {

     driver.findElement(By.xpath("//input[@name='email']")).sendKeys("austin.arancheril@gmail.com   ");
     System.out.println("User name is entered");
    }

    @And("^User enter password$")
    public void userEnterPassword() {
        driver.findElement(By.xpath("//input[@name='password']")).sendKeys("Beauty123#");
        driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        driver.findElement(By.xpath("//div[text()='Login']")).click();
        System.out.println("Password is entered");
    }

    @Then("^The landing page should be displayed$")
    public void theLandingPageShouldBeDisplayed() {
        List<WebElement>  elements= driver.findElements(By.xpath("//span[@class='item-text'][text()='Contacts']"));
        Assert.assertEquals(elements.size(),1);
        System.out.println("Landing page is displayed");
        driver.quit();
    }


}
