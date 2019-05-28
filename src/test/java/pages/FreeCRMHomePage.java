package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import util.BasePage;

public class FreeCRMHomePage extends BasePage {
    private WebDriver driver = null;

    // Initializing the Page Objects:
    public FreeCRMHomePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//td[contains(text(),'User: Austin')]")
    @CacheLookup
    WebElement userNameLabel;

    @FindBy(xpath = "//a[contains(text(),'Contacts')]")
    WebElement contactsLink;

    @FindBy(xpath = "//a[contains(text(),'New Contact')]")
    WebElement newContactLink;


    @FindBy(xpath = "//a[contains(text(),'Deals')]")
    WebElement dealsLink;

    @FindBy(xpath = "//a[contains(text(),'Tasks')]")
    WebElement tasksLink;

    public String verifyHomePageTitle(){
        return driver.getTitle();
    }


    public boolean verifyCorrectUserName(){
        return userNameLabel.isDisplayed();
    }

    public FreeCRMContactsPage clickOnContactsLink(){
        contactsLink.click();
        return new FreeCRMContactsPage();
    }

    public FreeCRMDealsPage clickOnDealsLink(){
        dealsLink.click();
        return new FreeCRMDealsPage();
    }

    public FreeCRMTasksPage clickOnTasksLink(){
        tasksLink.click();
        return new FreeCRMTasksPage();
    }

    public void clickOnNewContactLink(){
        Actions action = new Actions(driver);
        action.moveToElement(contactsLink).build().perform();
        newContactLink.click();

    }

}
