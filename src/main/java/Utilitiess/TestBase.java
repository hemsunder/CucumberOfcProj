package Utilitiess;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;


public class TestBase {
	public static Properties prop;
	public static WebDriver driver;
	
	
	public TestBase() {
		try {
			prop=new Properties();
			FileInputStream fis= new FileInputStream("C:/Selenium WebDriver/QCProject/src/main/java/com/qc/config/config.properties");
			prop.load(fis);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} 
	}
	public static void initialization(){
		
		String browsername=prop.getProperty("browser");
		if(browsername.equals("chrome")){
			System.setProperty("webdriver.chrome.driver", "C:/Selenium WebDriver/Drivers/chromedriver.exe");
			driver=new ChromeDriver();
		} else if(browsername.equals("ie")){
			System.setProperty("webdriver.ie.driver", "C:/Selenium WebDriver/Drivers/IEDriverServer.exe");
			driver=new InternetExplorerDriver();
		}
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
			//driver.get(prop.getProperty("url"));
	}
	
	
}
