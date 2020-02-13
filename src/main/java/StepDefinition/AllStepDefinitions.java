package StepDefinition;

import org.openqa.selenium.By;
import Transactions.PDLALLTransactions;
import Utilitiess.RegistrationPage;
import Utilitiess.TestBase;
import Utilitiess.Utilities;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AllStepDefinitions extends TestBase{
	 RegistrationPage regpage;
	 Utilities util;
	 PDLALLTransactions pdlall;
	
	@Before
	public void setup() {
		TestBase.initialization();
	}
	
	@After
	public void teardown() {
		driver.quit();
	}
	
	@Then("^User entered \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enteredd_and_and(String username, String password, String storeID) throws Throwable {
		util=new Utilities();
		util.LogintoApplication(username, password, storeID);
	}

	@Given("^User browsed \"([^\"]*)\" and is on Login page$")
	public void user_browsed_and_is_on_Login_page(String url) throws Throwable {
		driver.get(url);
	}

	@When("^Title of the page is Login Page$")
	public void title_of_the_page_is_Login_Page() throws Throwable {
		String title = driver.getTitle();
		System.out.println("Title of the page is " + title);
		Assert.assertEquals("Login Page", title);
	}

	@Then("^User clicked on Login button$")
	public void user_clicked_on_Login_button() throws Throwable {
		driver.findElement(By.name("login")).click();
	}

	@Then("^User is on Home page$")
	public void user_is_on_Home_page() throws Throwable {
		String title = driver.getTitle();
		System.out.println("Title of the page is " + title);
		Assert.assertEquals("QFund", title);
	}
	
	@Then("^User has taken a new PDL Loan by providing \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_has_taken_a_new_PDL_Loan_by_providing_and_and_and
	(String loanamount, String Collateraltype, String disbtytpe, String accountnbr) throws Throwable {
		pdlall= new PDLALLTransactions();
		pdlall.NewPDLByACH(null, Collateraltype, disbtytpe, accountnbr);
	}
	
	@Then("^User logged into application$")
	public void user_logged_into_application() throws Throwable {
		util=new Utilities();
		util.LogintoApplication();
	}

	@Then("^User completed the registration process by providing \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and  \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_completed_the_registration_process_by_providing_and_and_and_and_and_and_and_and_and_and
	(String ssn1, String ssn2, String ssn3, String accountnbr, String photoid, String lastname, String firstname, 
			String state_dd, String pay_freq, String net_income, String gross_income) throws Throwable {
		regpage=new RegistrationPage();	
		regpage.Registration(ssn1, ssn2, ssn3, accountnbr, photoid, lastname, firstname, state_dd, pay_freq, net_income, gross_income);

	}

	@Then("^User starts new loan initialization by providing \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_starts_new_loan_initialization_by_providing_and_and
	(String ssn1, String ssn2, String ssn3) throws Throwable {
		util=new Utilities();
		util.newloaninitialization(ssn1, ssn2, ssn3);
	}
	
	@Then("^User started transaction initialization by providing \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_started_transaction_initialization_by_providing_and_and
	(String ssn1, String ssn2, String ssn3) throws Throwable {
		util=new Utilities();
		util.transactionsinitialization(ssn1, ssn2, ssn3);
	}

	@Then("^User Voided loan by selecting \"([^\"]*)\" as tender type$")
	public void user_Voided_loan_by_selecting_as_tender_type(String tendertype) throws Throwable {
		pdlall= new PDLALLTransactions();
	    pdlall.PDLVoid(tendertype);
	}
	
	@Then("^User Rescind loan by selecting \"([^\"]*)\" as tender type$")
	public void user_Rescind_loan_by_selecting_as_tender_type(String tendertype) throws Throwable {
		pdlall= new PDLALLTransactions();
		pdlall.RescindPDL(tendertype);
	}
	
	@Then("^User completed the partial payment transaction by providing \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_completed_the_partial_payment_transaction_by_providing_and
	(String payment_type, String payment_Amt) throws Throwable {
		pdlall= new PDLALLTransactions();
		pdlall.PartialPayment(payment_Amt, payment_type);
	}
	
	@Then("^User Voided the payment transaction by selecting \"([^\"]*)\"$")
	public void user_Voided_the_payment_transaction_by_selecting(String tender_type) throws Throwable {
		pdlall= new PDLALLTransactions();
		pdlall.PartialPaymentVoid(tender_type);
	}
	
	@Then("^User completed the payoff transaction by providing \"([^\"]*)\"$")
	public void user_completed_the_payoff_transaction_by_providing(String payment_type) throws Throwable {
		pdlall= new PDLALLTransactions();
		pdlall.BuyBack(payment_type);
	}

	@Then("^User Voided the payoff transaction by selecting \"([^\"]*)\"$")
	public void user_Voided_the_payoff_transaction_by_selecting(String tender_type) throws Throwable {
		pdlall= new PDLALLTransactions();
		pdlall.BuyBackVoid(tender_type);
	}
	
	@Then("^User completed ACH-Deposit transaction$")
	public void user_completed_ACH_Deposit_transaction() throws Throwable {
		pdlall= new PDLALLTransactions();
		pdlall.ACHDeposit();
	}

	@Then("^User completed ACH-Deposit Void transaction$")
	public void user_completed_ACH_Deposit_Void_transaction() throws Throwable {
		pdlall= new PDLALLTransactions();
		pdlall.ACHDepositVoid();
	}
	
	@Then("^User completed the ACH-PrePayment transaction by providing \"([^\"]*)\"$")
	public void user_completed_the_ACH_PrePayment_transaction_by_providing_and
	(String payment_type) throws Throwable {
		pdlall= new PDLALLTransactions();
		pdlall.ACHPrePayment(payment_type);
		
	}

	@Then("^User Voided ACH-PrePayment transaction by selecting \"([^\"]*)\"$")
	public void user_Voided_ACH_PrePayment_transaction_by_selecting(String tender_type) throws Throwable {
		pdlall= new PDLALLTransactions();
		pdlall.ACHPrePaymentVoid(tender_type);
	}

	@Then("^User has taken new PDL Loan by DC as collateral type by providing \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_has_taken_new_PDL_Loan_by_DC_as_collateral_type_by_providing_and
	(String LoanAmt, String cardtype) throws Throwable {
		pdlall= new PDLALLTransactions();
		pdlall.NewPDLByDC(null, cardtype);
	}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
