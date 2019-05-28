package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import util.BasePage;

public class FreeCRMLogin extends BasePage {
    WebDriver driver = null;
    public  FreeCRMLogin(WebDriver driver){
        this.driver =driver;
        PageFactory.initElements(driver,this);
    }

    //Page Factory - OR:
    @FindBy(xpath="//input[@name='email']")
    WebElement username;

    @FindBy(xpath="//input[@name='password']")
    WebElement password;

    @FindBy(how = How.XPATH ,using = "//div[text()='Login']")
    WebElement loginBtn;

    @FindBy(xpath="//button[contains(text(),'Sign Up')]")
    WebElement signUpBtn;

    @FindBy(xpath="//img[contains(@class,'img-responsive')]")
    WebElement crmLogo;


    //Actions:
    public String validateLoginPageTitle(){
        return driver.getTitle();
    }

    public boolean validateCRMImage(){
        return crmLogo.isDisplayed();
    }

    public HomePage login(String un, String pwd){

        username.sendKeys(un);
        password.sendKeys(pwd);
        //loginBtn.click();
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();", loginBtn);
        return new HomePage(driver);
    }

}
