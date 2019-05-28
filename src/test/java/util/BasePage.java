package util;

import org.apache.maven.model.Prerequisites;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class BasePage implements TestConfig {

    public static WebDriver driver;
    public static Properties prop;

    public BasePage() {
        try {
            prop = new Properties();
            FileInputStream fis = new FileInputStream("src/test/java/config/config.properties");
            prop.load(fis);
        }catch (IOException e ){
           e.getMessage();
        }
    }

    public static void initializeTest()  {
        String browserName = prop.getProperty("browser");
        if(browserName.equals("chrome")){
         /* try{
              Runtime.getRuntime().exec("taskkill /F /IM chrome.exe");
          }catch (IOException e){
              e.getMessage();
          }*/
            System.setProperty(CHROMEDRIVER,CHROMEDRIVER_PATH);
            driver = new ChromeDriver();

        }

        else if(browserName.equals("FF")){
            System.setProperty(FIREFOX_DRIVER, FIREFOX_DRIVER_PATH);
            driver = new FirefoxDriver();
        }
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT , TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(IMPLICIT_WAIT, TimeUnit.SECONDS);
        driver.get(CRM_URL);
    }



}
