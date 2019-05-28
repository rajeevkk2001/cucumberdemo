package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import util.BasePage;

import static util.BasePage.driver;

public class HomePage extends BasePage {
    private  WebDriver driver =null;

    public  HomePage(WebDriver driver){
        this.driver =driver;
        PageFactory.initElements(driver,this);
    }


    ////div[@id='mngacct']/a


    @FindBy(name = "UserName")
    public WebElement txtUserName;

    @FindBy(name = "Password")
    public WebElement txtPassword;

    @FindBy(how = How.NAME, using = "Login")
    public WebElement btnLogin;

}
