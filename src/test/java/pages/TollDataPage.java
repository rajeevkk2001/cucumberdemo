package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import util.BasePage;

public class TollDataPage extends BasePage {

       public  TollDataPage() throws Exception{
           Thread.sleep(5000);
        PageFactory.initElements(driver,this);
    }

    //@FindBy(xpath = "//td[@class='content']//table[2]/tbody//div[@class='switchcontent']//tbody")
    @FindBy(xpath = "//div[@id='sc34']")
    public WebElement tollData;

    public void getTollTrasactions(){
      // System.out.println(tollData);

        System.out.println("Printing Toll Data");
    }
}
