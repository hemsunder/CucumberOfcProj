Feature: Qfund application all features

  @SmokeTestt
  Scenario: Application login scenario
    Given User browsed "https://qclocalpreprod.qfund.net/cc/demoIndex.do" and is on Login page
    When Title of the page is Login Page
    Then User entered "admin" and "1234" and "503"
    Then User clicked on Login button
    And User is on Home page

  @SmokeTest
  Scenario Outline: Customer Registration scenario
    Given User browsed "https://qclocaluat.qfund.net/cc/demoIndex.do" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User completed the registration process by providing "<ssn1>" and "<ssn2>" and "<ssn3>" and  "<accountnbr>" and "<photoid>" and "<lastname>" and "<firstname>" and "<state_dd>" and "<pay_freq>" and "<net_income>" and "<gross_income>"

    Examples: 
      | username | password | storeID | ssn1 | ssn2 | ssn3 | accountnbr | photoid   | lastname | firstname | state_dd | pay_freq  | loanamount | Collateraltype | disbtytpe | url                                             | net_income | gross_income |
      | admin    |     1234 |     1010 |  323 |   20 | 2000 |    3423313 | 545545313 | jack     | jhones    | Kansas   | Bi-Weekly |        500 | ACH            | Cash      | https://qclocalpreprod.qfund.net/cc/demoIndex.do |       1200 |         1500 |
			| admin    |     1234 |     1010 |  314 |   20 | 2000 |    3423314 | 545545314 | jack     | jhones    | Kansas   | Bi-Weekly |        500 | ACH            | Cash      | https://qclocalpreprod.qfund.net/cc/demoIndex.do |       1200 |         1500 |
			| admin    |     1234 |     1010 |  315 |   20 | 2000 |    3423315 | 545545315 | jack     | jhones    | Kansas   | Bi-Weekly |        500 | ACH            | Cash      | https://qclocalpreprod.qfund.net/cc/demoIndex.do |       1200 |         1500 |
			| admin    |     1234 |     1010 |  316 |   20 | 2000 |    3423316 | 545545316 | jack     | jhones    | Kansas   | Bi-Weekly |        500 | ACH            | Cash      | https://qclocalpreprod.qfund.net/cc/demoIndex.do |       1200 |         1500 |
			| admin    |     1234 |     1010 |  317 |   20 | 2000 |    3423317 | 545545317 | jack     | jhones    | Kansas   | Bi-Weekly |        500 | ACH            | Cash      | https://qclocalpreprod.qfund.net/cc/demoIndex.do |       1200 |         1500 |
			| admin    |     1234 |     1010 |  318 |   20 | 2000 |    3423318 | 545545318 | jack     | jhones    | Kansas   | Bi-Weekly |        500 | ACH            | Cash      | https://qclocalpreprod.qfund.net/cc/demoIndex.do |       1200 |         1500 |
			| admin    |     1234 |     1010 |  319 |   20 | 2000 |    3423319 | 545545319 | jack     | jhones    | Kansas   | Bi-Weekly |        500 | ACH            | Cash      | https://qclocalpreprod.qfund.net/cc/demoIndex.do |       1200 |         1500 |
			| admin    |     1234 |     1010 |  320 |   20 | 2000 |    3423320 | 545545320 | jack     | jhones    | Kansas   | Bi-Weekly |        500 | ACH            | Cash      | https://qclocalpreprod.qfund.net/cc/demoIndex.do |       1200 |         1500 |
			| admin    |     1234 |     1010 |  321 |   20 | 2000 |    3423321 | 545545321 | jack     | jhones    | Kansas   | Bi-Weekly |        500 | ACH            | Cash      | https://qclocalpreprod.qfund.net/cc/demoIndex.do |       1200 |         1500 |
			| admin    |     1234 |     1010 |  322 |   20 | 2000 |    3423322 | 545545322 | jack     | jhones    | Kansas   | Bi-Weekly |        500 | ACH            | Cash      | https://qclocalpreprod.qfund.net/cc/demoIndex.do |       1200 |         1500 |
			
			
  #Idaho Illinois Kansas Missouri Nevada Texas Nebraska
  #Monthly Semi-Monthly Weekly Bi-Weekly
  @PDLTest(enabled=false)
  Scenario Outline: Customer Registration and New PDL-Loan scenario
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User logged into application
    #Then User completed the registration process by providing "<ssn1>" and "<ssn2>" and "<ssn3>" and  "<accountnbr>" and "<photoid>" and "<lastname>" and "<firstname>" and "<state_dd>" and "<pay_freq>" and "<net_income>" and "<gross_income>"
    Then User starts new loan initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    And User has taken a new PDL Loan by providing "<loanamount>" and "<Collateraltype>" and "<disbtytpe>" and "<accountnbr>"

    Examples: 
      | username | password | storeID | ssn1 | ssn2 | ssn3 | accountnbr | photoid   | lastname | firstname | state_dd | pay_freq  | loanamount | Collateraltype | disbtytpe | url                                             | net_income | gross_income |
      | admin    |     1234 |     521 |  313 |   20 | 2000 |    3423313 | 545545313 | jack     | jhones    | Kansas   | Bi-Weekly |        500 | ACH            | Cash      | https://qclocalpreprod.qfund.net/cc/demoIndex.do |       1200 |         1500 |

  @PDLTest(enabled=false)
  Scenario Outline: New PDL-Loan scenario
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User starts new loan initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    And User has taken a new PDL Loan by providing "<loanamount>" and "<Collateraltype>" and "<disbtytpe>" and "<accountnbr>"

    Examples: 
      | username | password | storeID | ssn1 | ssn2 | ssn3 | accountnbr | photoid   | lastname | firstname | state_dd | pay_freq  | loanamount | Collateraltype | disbtytpe | url                                             | net_income | gross_income |
      | admin    |     1234 |     521 |  313 |   20 | 2000 |    3423313 | 545545313 | jack     | jhones    | Kansas   | Bi-Weekly |        500 |        DC      | Cash      | https://qclocalpreprod.qfund.net/cc/demoIndex.do |       1200 |         1500 |
	#ACH, DC, CHECK

  @PDLTest(enabled=false)
  Scenario Outline: PDL Loan Void Scenario
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User started transaction initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    Then User Voided loan by selecting "<tendertype>" as tender type

    Examples: 
      | username | password | storeID | ssn1 | ssn2 | ssn3 | tendertype | url                                             |
      | admin    |     1234 |     521 |  313 |   20 | 2000 | Cash       | https://qclocalpreprod.qfund.net/cc/demoIndex.do |

  @PDLTest(enabled=false)
  Scenario Outline: PDL Loan Rescind Scenario
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User started transaction initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    Then User Rescind loan by selecting "<tendertype>" as tender type

    Examples: 
      | username | password | storeID | ssn1 | ssn2 | ssn3 | tendertype | url                                             |
      | admin    |     1234 |     521 |  313 |   20 | 2000 | Cash       | https://qclocalpreprod.qfund.net/cc/demoIndex.do |

  @PDLTest(enabled=false)
  Scenario Outline: PDL Loan Partial Payment scenario
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User started transaction initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    And User completed the partial payment transaction by providing "<payment_type>" and "<payment_Amt>"

    Examples: 
      | payment_type | payment_Amt | username | password | storeID | ssn1 | ssn2 | ssn3 | url                                             |
      | Cash         |          50 | admin    |     1234 |     521 |  313 |   20 | 2000 | https://qclocalpreprod.qfund.net/cc/demoIndex.do |

  # Cash, Cashiers Check, Debit Card, Money Order, Check
  @PDLTest(enabled=false)
  Scenario Outline: PDL Loan Partial Payment Void scenario
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User started transaction initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    And User Voided the payment transaction by selecting "<tender_type>"

    Examples: 
      | tender_type | username | password | storeID | ssn1 | ssn2 | ssn3 | url                                             |
      | Cash        | admin    |     1234 |     521 |  313 |   20 | 2000 | https://qclocalpreprod.qfund.net/cc/demoIndex.do |

  # Cash, Original Tender
  @PDLTest(enabled=false)
  Scenario Outline: PDL Loan Payoff/Buyback scenario
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User started transaction initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    And User completed the payoff transaction by providing "<payment_type>"

    Examples: 
      | payment_type | username | password | storeID | ssn1 | ssn2 | ssn3 | url                                             |
      | Cash         | admin    |     1234 |     521 |  313 |   20 | 2000 | https://qclocalpreprod.qfund.net/cc/demoIndex.do |

  # Cash, Cashiers Check, Debit Card, Money Order, Check
  @PDLTest(enabled=false)
  Scenario Outline: PDL Loan Payoff/Buyback Void scenario
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User started transaction initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    And User Voided the payoff transaction by selecting "<tender_type>"

    Examples: 
      | tender_type | username | password | storeID | ssn1 | ssn2 | ssn3 | url                                             |
      | Cash        | admin    |     1234 |     521 |  313 |   20 | 2000 | https://qclocalpreprod.qfund.net/cc/demoIndex.do |
# Cash, Original Tender

  @PDLTest(enabled=false)
  Scenario Outline: PDL ACH-Deposit scenario
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User started transaction initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    And User completed ACH-Deposit transaction

    Examples: 
      | username | password | storeID | ssn1 | ssn2 | ssn3 | url                                             |
      | admin    |     1234 |     521 |  313 |   20 | 2000 | https://qclocalpreprod.qfund.net/cc/demoIndex.do |

  @PDLTest(enabled=false)
  Scenario Outline: PDL ACH-Deposit Void scenario
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User started transaction initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    And User completed ACH-Deposit Void transaction

    Examples: 
      | username | password | storeID | ssn1 | ssn2 | ssn3 | url                                             |
      | admin    |     1234 |     521 |  313 |   20 | 2000 | https://qclocalpreprod.qfund.net/cc/demoIndex.do |
      
   @PDLTest(enabled=false)
  Scenario Outline: PDL Loan ACH-PrePayment scenario
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User started transaction initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    And User completed the ACH-PrePayment transaction by providing "<payment_type>" 

    Examples: 
      | payment_type |  username | password | storeID | ssn1 | ssn2 | ssn3 | url                                             |
      | Cash         |   admin    |     1234 |     521 |  313 |   20 | 2000 | https://qclocalpreprod.qfund.net/cc/demoIndex.do |

  # Cash, Cashiers Check, Debit Card, Money Order, Check
  @PDLTest(enabled=false)
  Scenario Outline: PDL Loan ACH-PrePayment Void scenario
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User started transaction initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    And User Voided ACH-PrePayment transaction by selecting "<tender_type>"

    Examples: 
      | tender_type | username | password | storeID | ssn1 | ssn2 | ssn3 | url                                             |
      | Cash        | admin    |     1234 |     521 |  313 |   20 | 2000 | https://qclocalpreprod.qfund.net/cc/demoIndex.do |

  # Cash, Original Tender
  
  @PDLTest(enabled=false)
  Scenario Outline: PDL New Loan by DC collateral type
    Given User browsed "<url>" and is on Login page
    When Title of the page is Login Page
    Then User entered "<username>" and "<password>" and "<storeID>"
    Then User clicked on Login button
    Then User starts new loan initialization by providing "<ssn1>" and "<ssn2>" and "<ssn3>"
    And User has taken new PDL Loan by DC as collateral type by providing "<cardtype>" and "<LoanAmt>"

    Examples: 
      | tender_type | username | password | storeID | ssn1 | ssn2 | ssn3 | 											url                        | cardtypeee  |  Loan_Amt  |
      | Cash        | admin    |     1234 |     521 |  313 |   20 | 2000 | https://qclocalpreprod.qfund.net/cc/demoIndex.do | NEW CARD    |     500    |
  
  
