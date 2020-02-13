package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features= {"C:/Selenium WebDriver/QfundCucumber/src/main/java/Features/qfund.feature"},
		glue= {"StepDefinition"}, 
		format= {"pretty", "html:test-output"}, 
		dryRun=false,
		monochrome=true, 
		strict=true, 
		tags= {"@SmokeTest" , "~@RegressionTest", "~@PDLTest(enabled=true)"}
		
		)


public class TestRunner {

}
