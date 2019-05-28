package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import util.BasePage;

public class LoginPage extends BasePage {
    WebDriver driver = null;
    public  LoginPage(WebDriver driver){
        this.driver =driver;
        PageFactory.initElements(driver,this);
    }

    @FindBy(name = "userName")
    public WebElement txtUserName;

    @FindBy(xpath = ".//input[@name='password']")
    public WebElement txtPassword;

    @FindBy(xpath = ".//input[@id='loginButton']")
    public WebElement btnLogin;

    @FindBy(xpath = "//div[@id='sc34']")
    public WebElement tollData;

    public void enterUserNameAndPassword(String userName, String passWrd){
        txtUserName.sendKeys("rajeevkk2001");
        txtPassword.sendKeys("Beauty123#");

    }

    public HomePage clickLogin(){
        btnLogin.click();
        return  new HomePage(driver);
    }

    public String validateLoginPageTitle(){
        return driver.getTitle();
    }

    public void getTollTrasactions(){
        // System.out.println(tollData);

        System.out.println("Printing Toll Data\n");
        System.out.println(tollData.getText());

    }


}
