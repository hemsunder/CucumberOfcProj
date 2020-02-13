$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium WebDriver/QfundCucumber/src/main/java/Features/qfund.feature");
formatter.feature({
  "line": 1,
  "name": "Qfund application all features",
  "description": "",
  "id": "qfund-application-all-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Customer Registration scenario",
  "description": "",
  "id": "qfund-application-all-features;customer-registration-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User browsed \"https://qclocaluat.qfund.net/cc/demoIndex.do\" and is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the page is Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User entered \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and \"\u003cstoreID\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicked on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User completed the registration process by providing \"\u003cssn1\u003e\" and \"\u003cssn2\u003e\" and \"\u003cssn3\u003e\" and  \"\u003caccountnbr\u003e\" and \"\u003cphotoid\u003e\" and \"\u003clastname\u003e\" and \"\u003cfirstname\u003e\" and \"\u003cstate_dd\u003e\" and \"\u003cpay_freq\u003e\" and \"\u003cnet_income\u003e\" and \"\u003cgross_income\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "qfund-application-all-features;customer-registration-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "storeID",
        "ssn1",
        "ssn2",
        "ssn3",
        "accountnbr",
        "photoid",
        "lastname",
        "firstname",
        "state_dd",
        "pay_freq",
        "loanamount",
        "Collateraltype",
        "disbtytpe",
        "url",
        "net_income",
        "gross_income"
      ],
      "line": 20,
      "id": "qfund-application-all-features;customer-registration-scenario;;1"
    },
    {
      "cells": [
        "admin",
        "1234",
        "1010",
        "323",
        "20",
        "2000",
        "3423313",
        "545545313",
        "jack",
        "jhones",
        "Kansas",
        "Bi-Weekly",
        "500",
        "ACH",
        "Cash",
        "https://qclocalpreprod.qfund.net/cc/demoIndex.do",
        "1200",
        "1500"
      ],
      "line": 21,
      "id": "qfund-application-all-features;customer-registration-scenario;;2"
    },
    {
      "cells": [
        "admin",
        "1234",
        "1010",
        "314",
        "20",
        "2000",
        "3423314",
        "545545314",
        "jack",
        "jhones",
        "Kansas",
        "Bi-Weekly",
        "500",
        "ACH",
        "Cash",
        "https://qclocalpreprod.qfund.net/cc/demoIndex.do",
        "1200",
        "1500"
      ],
      "line": 22,
      "id": "qfund-application-all-features;customer-registration-scenario;;3"
    },
    {
      "cells": [
        "admin",
        "1234",
        "1010",
        "315",
        "20",
        "2000",
        "3423315",
        "545545315",
        "jack",
        "jhones",
        "Kansas",
        "Bi-Weekly",
        "500",
        "ACH",
        "Cash",
        "https://qclocalpreprod.qfund.net/cc/demoIndex.do",
        "1200",
        "1500"
      ],
      "line": 23,
      "id": "qfund-application-all-features;customer-registration-scenario;;4"
    },
    {
      "cells": [
        "admin",
        "1234",
        "1010",
        "316",
        "20",
        "2000",
        "3423316",
        "545545316",
        "jack",
        "jhones",
        "Kansas",
        "Bi-Weekly",
        "500",
        "ACH",
        "Cash",
        "https://qclocalpreprod.qfund.net/cc/demoIndex.do",
        "1200",
        "1500"
      ],
      "line": 24,
      "id": "qfund-application-all-features;customer-registration-scenario;;5"
    },
    {
      "cells": [
        "admin",
        "1234",
        "1010",
        "317",
        "20",
        "2000",
        "3423317",
        "545545317",
        "jack",
        "jhones",
        "Kansas",
        "Bi-Weekly",
        "500",
        "ACH",
        "Cash",
        "https://qclocalpreprod.qfund.net/cc/demoIndex.do",
        "1200",
        "1500"
      ],
      "line": 25,
      "id": "qfund-application-all-features;customer-registration-scenario;;6"
    },
    {
      "cells": [
        "admin",
        "1234",
        "1010",
        "318",
        "20",
        "2000",
        "3423318",
        "545545318",
        "jack",
        "jhones",
        "Kansas",
        "Bi-Weekly",
        "500",
        "ACH",
        "Cash",
        "https://qclocalpreprod.qfund.net/cc/demoIndex.do",
        "1200",
        "1500"
      ],
      "line": 26,
      "id": "qfund-application-all-features;customer-registration-scenario;;7"
    },
    {
      "cells": [
        "admin",
        "1234",
        "1010",
        "319",
        "20",
        "2000",
        "3423319",
        "545545319",
        "jack",
        "jhones",
        "Kansas",
        "Bi-Weekly",
        "500",
        "ACH",
        "Cash",
        "https://qclocalpreprod.qfund.net/cc/demoIndex.do",
        "1200",
        "1500"
      ],
      "line": 27,
      "id": "qfund-application-all-features;customer-registration-scenario;;8"
    },
    {
      "cells": [
        "admin",
        "1234",
        "1010",
        "320",
        "20",
        "2000",
        "3423320",
        "545545320",
        "jack",
        "jhones",
        "Kansas",
        "Bi-Weekly",
        "500",
        "ACH",
        "Cash",
        "https://qclocalpreprod.qfund.net/cc/demoIndex.do",
        "1200",
        "1500"
      ],
      "line": 28,
      "id": "qfund-application-all-features;customer-registration-scenario;;9"
    },
    {
      "cells": [
        "admin",
        "1234",
        "1010",
        "321",
        "20",
        "2000",
        "3423321",
        "545545321",
        "jack",
        "jhones",
        "Kansas",
        "Bi-Weekly",
        "500",
        "ACH",
        "Cash",
        "https://qclocalpreprod.qfund.net/cc/demoIndex.do",
        "1200",
        "1500"
      ],
      "line": 29,
      "id": "qfund-application-all-features;customer-registration-scenario;;10"
    },
    {
      "cells": [
        "admin",
        "1234",
        "1010",
        "322",
        "20",
        "2000",
        "3423322",
        "545545322",
        "jack",
        "jhones",
        "Kansas",
        "Bi-Weekly",
        "500",
        "ACH",
        "Cash",
        "https://qclocalpreprod.qfund.net/cc/demoIndex.do",
        "1200",
        "1500"
      ],
      "line": 30,
      "id": "qfund-application-all-features;customer-registration-scenario;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1762115966,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Customer Registration scenario",
  "description": "",
  "id": "qfund-application-all-features;customer-registration-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User browsed \"https://qclocaluat.qfund.net/cc/demoIndex.do\" and is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the page is Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User entered \"admin\" and \"1234\" and \"1010\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicked on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User completed the registration process by providing \"323\" and \"20\" and \"2000\" and  \"3423313\" and \"545545313\" and \"jack\" and \"jhones\" and \"Kansas\" and \"Bi-Weekly\" and \"1200\" and \"1500\"",
  "matchedColumns": [
    16,
    17,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://qclocaluat.qfund.net/cc/demoIndex.do",
      "offset": 14
    }
  ],
  "location": "AllStepDefinitions.user_browsed_and_is_on_Login_page(String)"
});
formatter.result({
  "duration": 456584455,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.title_of_the_page_is_Login_Page()"
});
formatter.result({
  "duration": 23607975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 26
    },
    {
      "val": "1010",
      "offset": 37
    }
  ],
  "location": "AllStepDefinitions.user_enteredd_and_and(String,String,String)"
});
formatter.result({
  "duration": 1060445686,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.user_clicked_on_Login_button()"
});
formatter.result({
  "duration": 2789090511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "323",
      "offset": 54
    },
    {
      "val": "20",
      "offset": 64
    },
    {
      "val": "2000",
      "offset": 73
    },
    {
      "val": "3423313",
      "offset": 85
    },
    {
      "val": "545545313",
      "offset": 99
    },
    {
      "val": "jack",
      "offset": 115
    },
    {
      "val": "jhones",
      "offset": 126
    },
    {
      "val": "Kansas",
      "offset": 139
    },
    {
      "val": "Bi-Weekly",
      "offset": 152
    },
    {
      "val": "1200",
      "offset": 168
    },
    {
      "val": "1500",
      "offset": 179
    }
  ],
  "location": "AllStepDefinitions.user_completed_the_registration_process_by_providing_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 34376041408,
  "status": "passed"
});
formatter.after({
  "duration": 537808804,
  "status": "passed"
});
formatter.before({
  "duration": 1164122596,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Customer Registration scenario",
  "description": "",
  "id": "qfund-application-all-features;customer-registration-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User browsed \"https://qclocaluat.qfund.net/cc/demoIndex.do\" and is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the page is Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User entered \"admin\" and \"1234\" and \"1010\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicked on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User completed the registration process by providing \"314\" and \"20\" and \"2000\" and  \"3423314\" and \"545545314\" and \"jack\" and \"jhones\" and \"Kansas\" and \"Bi-Weekly\" and \"1200\" and \"1500\"",
  "matchedColumns": [
    16,
    17,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://qclocaluat.qfund.net/cc/demoIndex.do",
      "offset": 14
    }
  ],
  "location": "AllStepDefinitions.user_browsed_and_is_on_Login_page(String)"
});
formatter.result({
  "duration": 440312757,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.title_of_the_page_is_Login_Page()"
});
formatter.result({
  "duration": 19965607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 26
    },
    {
      "val": "1010",
      "offset": 37
    }
  ],
  "location": "AllStepDefinitions.user_enteredd_and_and(String,String,String)"
});
formatter.result({
  "duration": 1046815224,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.user_clicked_on_Login_button()"
});
formatter.result({
  "duration": 1843561158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314",
      "offset": 54
    },
    {
      "val": "20",
      "offset": 64
    },
    {
      "val": "2000",
      "offset": 73
    },
    {
      "val": "3423314",
      "offset": 85
    },
    {
      "val": "545545314",
      "offset": 99
    },
    {
      "val": "jack",
      "offset": 115
    },
    {
      "val": "jhones",
      "offset": 126
    },
    {
      "val": "Kansas",
      "offset": 139
    },
    {
      "val": "Bi-Weekly",
      "offset": 152
    },
    {
      "val": "1200",
      "offset": 168
    },
    {
      "val": "1500",
      "offset": 179
    }
  ],
  "location": "AllStepDefinitions.user_completed_the_registration_process_by_providing_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 27842942662,
  "status": "passed"
});
formatter.after({
  "duration": 531498576,
  "status": "passed"
});
formatter.before({
  "duration": 1166696249,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Customer Registration scenario",
  "description": "",
  "id": "qfund-application-all-features;customer-registration-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User browsed \"https://qclocaluat.qfund.net/cc/demoIndex.do\" and is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the page is Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User entered \"admin\" and \"1234\" and \"1010\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicked on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User completed the registration process by providing \"315\" and \"20\" and \"2000\" and  \"3423315\" and \"545545315\" and \"jack\" and \"jhones\" and \"Kansas\" and \"Bi-Weekly\" and \"1200\" and \"1500\"",
  "matchedColumns": [
    16,
    17,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://qclocaluat.qfund.net/cc/demoIndex.do",
      "offset": 14
    }
  ],
  "location": "AllStepDefinitions.user_browsed_and_is_on_Login_page(String)"
});
formatter.result({
  "duration": 479908441,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.title_of_the_page_is_Login_Page()"
});
formatter.result({
  "duration": 16664573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 26
    },
    {
      "val": "1010",
      "offset": 37
    }
  ],
  "location": "AllStepDefinitions.user_enteredd_and_and(String,String,String)"
});
formatter.result({
  "duration": 1077662877,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.user_clicked_on_Login_button()"
});
formatter.result({
  "duration": 2859757762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "315",
      "offset": 54
    },
    {
      "val": "20",
      "offset": 64
    },
    {
      "val": "2000",
      "offset": 73
    },
    {
      "val": "3423315",
      "offset": 85
    },
    {
      "val": "545545315",
      "offset": 99
    },
    {
      "val": "jack",
      "offset": 115
    },
    {
      "val": "jhones",
      "offset": 126
    },
    {
      "val": "Kansas",
      "offset": 139
    },
    {
      "val": "Bi-Weekly",
      "offset": 152
    },
    {
      "val": "1200",
      "offset": 168
    },
    {
      "val": "1500",
      "offset": 179
    }
  ],
  "location": "AllStepDefinitions.user_completed_the_registration_process_by_providing_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 26965336924,
  "status": "passed"
});
formatter.after({
  "duration": 536381348,
  "status": "passed"
});
formatter.before({
  "duration": 1154849254,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Customer Registration scenario",
  "description": "",
  "id": "qfund-application-all-features;customer-registration-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User browsed \"https://qclocaluat.qfund.net/cc/demoIndex.do\" and is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the page is Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User entered \"admin\" and \"1234\" and \"1010\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicked on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User completed the registration process by providing \"316\" and \"20\" and \"2000\" and  \"3423316\" and \"545545316\" and \"jack\" and \"jhones\" and \"Kansas\" and \"Bi-Weekly\" and \"1200\" and \"1500\"",
  "matchedColumns": [
    16,
    17,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://qclocaluat.qfund.net/cc/demoIndex.do",
      "offset": 14
    }
  ],
  "location": "AllStepDefinitions.user_browsed_and_is_on_Login_page(String)"
});
formatter.result({
  "duration": 308472097,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.title_of_the_page_is_Login_Page()"
});
formatter.result({
  "duration": 32463867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 26
    },
    {
      "val": "1010",
      "offset": 37
    }
  ],
  "location": "AllStepDefinitions.user_enteredd_and_and(String,String,String)"
});
formatter.result({
  "duration": 1088396102,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.user_clicked_on_Login_button()"
});
formatter.result({
  "duration": 1753087018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "316",
      "offset": 54
    },
    {
      "val": "20",
      "offset": 64
    },
    {
      "val": "2000",
      "offset": 73
    },
    {
      "val": "3423316",
      "offset": 85
    },
    {
      "val": "545545316",
      "offset": 99
    },
    {
      "val": "jack",
      "offset": 115
    },
    {
      "val": "jhones",
      "offset": 126
    },
    {
      "val": "Kansas",
      "offset": 139
    },
    {
      "val": "Bi-Weekly",
      "offset": 152
    },
    {
      "val": "1200",
      "offset": 168
    },
    {
      "val": "1500",
      "offset": 179
    }
  ],
  "location": "AllStepDefinitions.user_completed_the_registration_process_by_providing_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 27520127741,
  "status": "passed"
});
formatter.after({
  "duration": 535026597,
  "status": "passed"
});
formatter.before({
  "duration": 1118076055,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Customer Registration scenario",
  "description": "",
  "id": "qfund-application-all-features;customer-registration-scenario;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User browsed \"https://qclocaluat.qfund.net/cc/demoIndex.do\" and is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the page is Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User entered \"admin\" and \"1234\" and \"1010\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicked on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User completed the registration process by providing \"317\" and \"20\" and \"2000\" and  \"3423317\" and \"545545317\" and \"jack\" and \"jhones\" and \"Kansas\" and \"Bi-Weekly\" and \"1200\" and \"1500\"",
  "matchedColumns": [
    16,
    17,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://qclocaluat.qfund.net/cc/demoIndex.do",
      "offset": 14
    }
  ],
  "location": "AllStepDefinitions.user_browsed_and_is_on_Login_page(String)"
});
formatter.result({
  "duration": 630499220,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.title_of_the_page_is_Login_Page()"
});
formatter.result({
  "duration": 16445779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 26
    },
    {
      "val": "1010",
      "offset": 37
    }
  ],
  "location": "AllStepDefinitions.user_enteredd_and_and(String,String,String)"
});
formatter.result({
  "duration": 1015032317,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.user_clicked_on_Login_button()"
});
formatter.result({
  "duration": 1820674420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "317",
      "offset": 54
    },
    {
      "val": "20",
      "offset": 64
    },
    {
      "val": "2000",
      "offset": 73
    },
    {
      "val": "3423317",
      "offset": 85
    },
    {
      "val": "545545317",
      "offset": 99
    },
    {
      "val": "jack",
      "offset": 115
    },
    {
      "val": "jhones",
      "offset": 126
    },
    {
      "val": "Kansas",
      "offset": 139
    },
    {
      "val": "Bi-Weekly",
      "offset": 152
    },
    {
      "val": "1200",
      "offset": 168
    },
    {
      "val": "1500",
      "offset": 179
    }
  ],
  "location": "AllStepDefinitions.user_completed_the_registration_process_by_providing_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 27426486712,
  "status": "passed"
});
formatter.after({
  "duration": 545013667,
  "status": "passed"
});
formatter.before({
  "duration": 1140582888,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Customer Registration scenario",
  "description": "",
  "id": "qfund-application-all-features;customer-registration-scenario;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User browsed \"https://qclocaluat.qfund.net/cc/demoIndex.do\" and is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the page is Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User entered \"admin\" and \"1234\" and \"1010\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicked on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User completed the registration process by providing \"318\" and \"20\" and \"2000\" and  \"3423318\" and \"545545318\" and \"jack\" and \"jhones\" and \"Kansas\" and \"Bi-Weekly\" and \"1200\" and \"1500\"",
  "matchedColumns": [
    16,
    17,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://qclocaluat.qfund.net/cc/demoIndex.do",
      "offset": 14
    }
  ],
  "location": "AllStepDefinitions.user_browsed_and_is_on_Login_page(String)"
});
formatter.result({
  "duration": 379275540,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.title_of_the_page_is_Login_Page()"
});
formatter.result({
  "duration": 15954600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 26
    },
    {
      "val": "1010",
      "offset": 37
    }
  ],
  "location": "AllStepDefinitions.user_enteredd_and_and(String,String,String)"
});
formatter.result({
  "duration": 1057835169,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.user_clicked_on_Login_button()"
});
formatter.result({
  "duration": 2586812316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "318",
      "offset": 54
    },
    {
      "val": "20",
      "offset": 64
    },
    {
      "val": "2000",
      "offset": 73
    },
    {
      "val": "3423318",
      "offset": 85
    },
    {
      "val": "545545318",
      "offset": 99
    },
    {
      "val": "jack",
      "offset": 115
    },
    {
      "val": "jhones",
      "offset": 126
    },
    {
      "val": "Kansas",
      "offset": 139
    },
    {
      "val": "Bi-Weekly",
      "offset": 152
    },
    {
      "val": "1200",
      "offset": 168
    },
    {
      "val": "1500",
      "offset": 179
    }
  ],
  "location": "AllStepDefinitions.user_completed_the_registration_process_by_providing_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 27402763708,
  "status": "passed"
});
formatter.after({
  "duration": 534659663,
  "status": "passed"
});
formatter.before({
  "duration": 1162961722,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Customer Registration scenario",
  "description": "",
  "id": "qfund-application-all-features;customer-registration-scenario;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User browsed \"https://qclocaluat.qfund.net/cc/demoIndex.do\" and is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the page is Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User entered \"admin\" and \"1234\" and \"1010\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicked on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User completed the registration process by providing \"319\" and \"20\" and \"2000\" and  \"3423319\" and \"545545319\" and \"jack\" and \"jhones\" and \"Kansas\" and \"Bi-Weekly\" and \"1200\" and \"1500\"",
  "matchedColumns": [
    16,
    17,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://qclocaluat.qfund.net/cc/demoIndex.do",
      "offset": 14
    }
  ],
  "location": "AllStepDefinitions.user_browsed_and_is_on_Login_page(String)"
});
formatter.result({
  "duration": 480900355,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.title_of_the_page_is_Login_Page()"
});
formatter.result({
  "duration": 16251219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 26
    },
    {
      "val": "1010",
      "offset": 37
    }
  ],
  "location": "AllStepDefinitions.user_enteredd_and_and(String,String,String)"
});
formatter.result({
  "duration": 1073989107,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.user_clicked_on_Login_button()"
});
formatter.result({
  "duration": 1902078993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "319",
      "offset": 54
    },
    {
      "val": "20",
      "offset": 64
    },
    {
      "val": "2000",
      "offset": 73
    },
    {
      "val": "3423319",
      "offset": 85
    },
    {
      "val": "545545319",
      "offset": 99
    },
    {
      "val": "jack",
      "offset": 115
    },
    {
      "val": "jhones",
      "offset": 126
    },
    {
      "val": "Kansas",
      "offset": 139
    },
    {
      "val": "Bi-Weekly",
      "offset": 152
    },
    {
      "val": "1200",
      "offset": 168
    },
    {
      "val": "1500",
      "offset": 179
    }
  ],
  "location": "AllStepDefinitions.user_completed_the_registration_process_by_providing_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 29102697967,
  "status": "passed"
});
formatter.after({
  "duration": 532747856,
  "status": "passed"
});
formatter.before({
  "duration": 1124714304,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Customer Registration scenario",
  "description": "",
  "id": "qfund-application-all-features;customer-registration-scenario;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User browsed \"https://qclocaluat.qfund.net/cc/demoIndex.do\" and is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the page is Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User entered \"admin\" and \"1234\" and \"1010\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicked on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User completed the registration process by providing \"320\" and \"20\" and \"2000\" and  \"3423320\" and \"545545320\" and \"jack\" and \"jhones\" and \"Kansas\" and \"Bi-Weekly\" and \"1200\" and \"1500\"",
  "matchedColumns": [
    16,
    17,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://qclocaluat.qfund.net/cc/demoIndex.do",
      "offset": 14
    }
  ],
  "location": "AllStepDefinitions.user_browsed_and_is_on_Login_page(String)"
});
formatter.result({
  "duration": 453031177,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.title_of_the_page_is_Login_Page()"
});
formatter.result({
  "duration": 27532625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 26
    },
    {
      "val": "1010",
      "offset": 37
    }
  ],
  "location": "AllStepDefinitions.user_enteredd_and_and(String,String,String)"
});
formatter.result({
  "duration": 980730713,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.user_clicked_on_Login_button()"
});
formatter.result({
  "duration": 2143928978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320",
      "offset": 54
    },
    {
      "val": "20",
      "offset": 64
    },
    {
      "val": "2000",
      "offset": 73
    },
    {
      "val": "3423320",
      "offset": 85
    },
    {
      "val": "545545320",
      "offset": 99
    },
    {
      "val": "jack",
      "offset": 115
    },
    {
      "val": "jhones",
      "offset": 126
    },
    {
      "val": "Kansas",
      "offset": 139
    },
    {
      "val": "Bi-Weekly",
      "offset": 152
    },
    {
      "val": "1200",
      "offset": 168
    },
    {
      "val": "1500",
      "offset": 179
    }
  ],
  "location": "AllStepDefinitions.user_completed_the_registration_process_by_providing_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 27607628867,
  "status": "passed"
});
formatter.after({
  "duration": 533445200,
  "status": "passed"
});
formatter.before({
  "duration": 1147646780,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Customer Registration scenario",
  "description": "",
  "id": "qfund-application-all-features;customer-registration-scenario;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User browsed \"https://qclocaluat.qfund.net/cc/demoIndex.do\" and is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the page is Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User entered \"admin\" and \"1234\" and \"1010\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicked on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User completed the registration process by providing \"321\" and \"20\" and \"2000\" and  \"3423321\" and \"545545321\" and \"jack\" and \"jhones\" and \"Kansas\" and \"Bi-Weekly\" and \"1200\" and \"1500\"",
  "matchedColumns": [
    16,
    17,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://qclocaluat.qfund.net/cc/demoIndex.do",
      "offset": 14
    }
  ],
  "location": "AllStepDefinitions.user_browsed_and_is_on_Login_page(String)"
});
formatter.result({
  "duration": 342627611,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.title_of_the_page_is_Login_Page()"
});
formatter.result({
  "duration": 22029308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 26
    },
    {
      "val": "1010",
      "offset": 37
    }
  ],
  "location": "AllStepDefinitions.user_enteredd_and_and(String,String,String)"
});
formatter.result({
  "duration": 1036870479,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.user_clicked_on_Login_button()"
});
formatter.result({
  "duration": 1560575051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "321",
      "offset": 54
    },
    {
      "val": "20",
      "offset": 64
    },
    {
      "val": "2000",
      "offset": 73
    },
    {
      "val": "3423321",
      "offset": 85
    },
    {
      "val": "545545321",
      "offset": 99
    },
    {
      "val": "jack",
      "offset": 115
    },
    {
      "val": "jhones",
      "offset": 126
    },
    {
      "val": "Kansas",
      "offset": 139
    },
    {
      "val": "Bi-Weekly",
      "offset": 152
    },
    {
      "val": "1200",
      "offset": 168
    },
    {
      "val": "1500",
      "offset": 179
    }
  ],
  "location": "AllStepDefinitions.user_completed_the_registration_process_by_providing_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 27511064660,
  "status": "passed"
});
formatter.after({
  "duration": 531985317,
  "status": "passed"
});
formatter.before({
  "duration": 1233986690,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Customer Registration scenario",
  "description": "",
  "id": "qfund-application-all-features;customer-registration-scenario;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User browsed \"https://qclocaluat.qfund.net/cc/demoIndex.do\" and is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the page is Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User entered \"admin\" and \"1234\" and \"1010\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicked on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User completed the registration process by providing \"322\" and \"20\" and \"2000\" and  \"3423322\" and \"545545322\" and \"jack\" and \"jhones\" and \"Kansas\" and \"Bi-Weekly\" and \"1200\" and \"1500\"",
  "matchedColumns": [
    16,
    17,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://qclocaluat.qfund.net/cc/demoIndex.do",
      "offset": 14
    }
  ],
  "location": "AllStepDefinitions.user_browsed_and_is_on_Login_page(String)"
});
formatter.result({
  "duration": 582888007,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.title_of_the_page_is_Login_Page()"
});
formatter.result({
  "duration": 15394813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 26
    },
    {
      "val": "1010",
      "offset": 37
    }
  ],
  "location": "AllStepDefinitions.user_enteredd_and_and(String,String,String)"
});
formatter.result({
  "duration": 1063825226,
  "status": "passed"
});
formatter.match({
  "location": "AllStepDefinitions.user_clicked_on_Login_button()"
});
formatter.result({
  "duration": 1583933169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "322",
      "offset": 54
    },
    {
      "val": "20",
      "offset": 64
    },
    {
      "val": "2000",
      "offset": 73
    },
    {
      "val": "3423322",
      "offset": 85
    },
    {
      "val": "545545322",
      "offset": 99
    },
    {
      "val": "jack",
      "offset": 115
    },
    {
      "val": "jhones",
      "offset": 126
    },
    {
      "val": "Kansas",
      "offset": 139
    },
    {
      "val": "Bi-Weekly",
      "offset": 152
    },
    {
      "val": "1200",
      "offset": 168
    },
    {
      "val": "1500",
      "offset": 179
    }
  ],
  "location": "AllStepDefinitions.user_completed_the_registration_process_by_providing_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 27282573093,
  "status": "passed"
});
formatter.after({
  "duration": 535622906,
  "status": "passed"
});
});