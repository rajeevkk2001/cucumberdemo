$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FreeCRMLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "duration": 10428001979,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validate the login of CRM application",
  "description": "",
  "id": "free-crm-login-feature;validate-the-login-of-crm-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@LoginScenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is already there in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter user name",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The landing page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCRMSteps.userIsAlreadyThereInLoginPage()"
});
formatter.result({
  "duration": 7143515361,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMSteps.titleOfThePageIsFreeCRM()"
});
formatter.result({
  "duration": 116466789,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMSteps.userEnterUserName()"
});
formatter.result({
  "duration": 424751395,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMSteps.userEnterPassword()"
});
formatter.result({
  "duration": 329840840,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMSteps.theLandingPageShouldBeDisplayed()"
});
formatter.result({
  "duration": 1570218560,
  "status": "passed"
});
formatter.after({
  "duration": 1046190282,
  "status": "passed"
});
formatter.uri("FreeCRMLoginWithPOM.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM Application Test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@POMLogin"
    }
  ]
});
formatter.before({
  "duration": 8385628065,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validate the Login and Verify Landing Page",
  "description": "",
  "id": "free-crm-application-test;validate-the-login-and-verify-landing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@POMLoginScenario"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Opens the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login page is displayed, verify the title",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "When enter username, password and click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCRMLoginPOM.userOpensTheBrowser()"
});
formatter.result({
  "duration": 58710654,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLoginPOM.loginPageIsDisplayedVerifyTheTitle()"
});
formatter.result({
  "duration": 29635867,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLoginPOM.whenEnterUsernamePasswordAndClickOnSubmit()"
});
formatter.result({
  "duration": 719125331,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMLoginPOM.verifyTheLandingPage()"
});
formatter.result({
  "duration": 98360,
  "status": "passed"
});
formatter.after({
  "duration": 11502951869,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ABHIKKUTTANS-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.39.562718 (9a2698cba08cf5a471a29d30c8b3e12becabb0e9), userDataDir\u003dC:\\Users\\ABHIKK~1\\AppData\\Local\\Temp\\scoped_dir11340_5876}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d74.0.3729.169, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: fed1c1e4f4d43ac782ad7e932458c4ac\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:667)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:542)\r\n\tat StepDefinitions.Hook.tearDown(Hook.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.lang.RuntimeException: Process refused to die after 10 seconds, and couldn\u0027t taskkill it: Timeout waiting for process to die\r\n\tat org.openqa.selenium.os.ProcessUtils.killWinProcess(ProcessUtils.java:133)\r\n\tat org.openqa.selenium.os.ProcessUtils.killProcess(ProcessUtils.java:81)\r\n\tat org.openqa.selenium.os.UnixProcess$SeleniumWatchDog.destroyHarder(UnixProcess.java:265)\r\n\tat org.openqa.selenium.os.UnixProcess$SeleniumWatchDog.access$200(UnixProcess.java:219)\r\n\tat org.openqa.selenium.os.UnixProcess.destroy(UnixProcess.java:127)\r\n\tat org.openqa.selenium.os.CommandLine.destroy(CommandLine.java:153)\r\n\tat org.openqa.selenium.remote.service.DriverService.stop(DriverService.java:220)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:94)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\t... 48 more\r\nCaused by: org.openqa.selenium.os.ProcessUtils$ProcessStillAliveException: Timeout waiting for process to die\r\n\tat org.openqa.selenium.os.ProcessUtils.waitForProcessDeath(ProcessUtils.java:67)\r\n\tat org.openqa.selenium.os.ProcessUtils.killWinProcess(ProcessUtils.java:129)\r\n\t... 56 more\r\nCaused by: java.lang.InterruptedException\r\n\tat java.lang.ProcessImpl.waitFor(ProcessImpl.java:451)\r\n\tat org.openqa.selenium.os.ProcessUtils$ProcessWaiter.run(ProcessUtils.java:154)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.uri("NTTALogin_GetTollTransactions.feature");
formatter.feature({
  "line": 2,
  "name": "Login NTTA Feature hvjjkkjhkjhkhkjkjkjkjkjkhkh",
  "description": "",
  "id": "login-ntta-feature-hvjjkkjhkjhkhkjkjkjkjkjkhkh",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tagFeature"
    }
  ]
});
formatter.before({
  "duration": 8395297708,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login to NTTA site and Get the recent toll transactions",
  "description": "",
  "id": "login-ntta-feature-hvjjkkjhkjhkhkjkjkjkjkjkhkh;login-to-ntta-site-and-get-the-recent-toll-transactions",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tagScenario"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "When the NTTA website is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Title of the site is verified",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter Username and Password Details",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "test",
        "teee"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Get the Toll Transactions",
  "keyword": "Then "
});
formatter.match({
  "location": "NTTALogin.when_the_NTTA_website_is_opened()"
});
formatter.result({
  "duration": 2676247,
  "status": "passed"
});
formatter.match({
  "location": "NTTALogin.titleOfTheSiteIsVerified()"
});
formatter.result({
  "duration": 29220189,
  "status": "passed"
});
formatter.match({
  "location": "NTTALogin.enterUsernameAndPasswordDetails(DataTable)"
});
formatter.result({
  "duration": 30155869804,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"userName\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d2.39.562718 (9a2698cba08cf5a471a29d30c8b3e12becabb0e9),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ABHIKKUTTANS-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.39.562718 (9a2698cba08cf5a471a29d30c8b3e12becabb0e9), userDataDir\u003dC:\\Users\\ABHIKK~1\\AppData\\Local\\Temp\\scoped_dir5188_10370}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d74.0.3729.169, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 554d4765001bcd7220307b7297abc2c4\n*** Element info: {Using\u003dname, value\u003duserName}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.sendKeys(Unknown Source)\r\n\tat pages.LoginPage.enterUserNameAndPassword(LoginPage.java:30)\r\n\tat StepDefinitions.NTTALogin.enterUsernameAndPasswordDetails(NTTALogin.java:51)\r\n\tat ✽.Then Enter Username and Password Details(NTTALogin_GetTollTransactions.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NTTALogin.userClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NTTALogin.verifyTheLandingPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 718171667,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "This feature file is to test the login fucntionality",
  "description": "",
  "id": "this-feature-file-is-to-test-the-login-fucntionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8657338148,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login with correct Username and Password",
  "description": "",
  "id": "this-feature-file-is-to-test-the-login-fucntionality;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the login page of application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter user name as \"admin\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should see the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iNavigateToTheLoginPageOfApplication()"
});
formatter.result({
  "duration": 2828491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 46
    }
  ],
  "location": "LoginSteps.iEnterUserNameAsAndPasswordAs(String,String)"
});
formatter.result({
  "duration": 521308,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 183463,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeTheLandingPage()"
});
formatter.result({
  "duration": 156520,
  "status": "passed"
});
formatter.after({
  "duration": 793819485,
  "status": "passed"
});
formatter.uri("multipleData.feature");
formatter.feature({
  "line": 1,
  "name": "This feature is for login test with multiple data",
  "description": "",
  "id": "this-feature-is-for-login-test-with-multiple-data",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8381801006,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login with correct Username and Password",
  "description": "",
  "id": "this-feature-is-for-login-test-with-multiple-data;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the login page of application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \u003cusername\u003e and \u003cpassword\u003e",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "rajeev",
        "rkk"
      ],
      "line": 7
    },
    {
      "cells": [
        "sabitha",
        "sabi"
      ],
      "line": 8
    },
    {
      "cells": [
        "ahhi",
        "abhi"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iNavigateToTheLoginPageOfApplication()"
});
formatter.result({
  "duration": 905339,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterUsernameAndPassword(DataTable)"
});
formatter.result({
  "duration": 345543,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 85103,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeTheLandingPage()"
});
formatter.result({
  "duration": 105630,
  "status": "passed"
});
formatter.after({
  "duration": 681173341,
  "status": "passed"
});
formatter.uri("multipleDataWithPojo.feature");
formatter.feature({
  "line": 1,
  "name": "This feature is for login test with multiple data",
  "description": "",
  "id": "this-feature-is-for-login-test-with-multiple-data",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8146000019,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login with correct Username and Password",
  "description": "",
  "id": "this-feature-is-for-login-test-with-multiple-data;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the login page of application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter username and password with Pojo",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "rajeev",
        "rkk"
      ],
      "line": 7
    },
    {
      "cells": [
        "sabitha",
        "sabi"
      ],
      "line": 8
    },
    {
      "cells": [
        "ahhi",
        "abhi"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iNavigateToTheLoginPageOfApplication()"
});
formatter.result({
  "duration": 1232493,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterUsernameAndPasswordWithPojo(DataTable)"
});
formatter.result({
  "duration": 3387432,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 159942,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeTheLandingPage()"
});
formatter.result({
  "duration": 106913,
  "status": "passed"
});
formatter.after({
  "duration": 745637200,
  "status": "passed"
});
});