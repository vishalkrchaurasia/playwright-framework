Feature: Greeting
@Regression @ErrorValidation
		Scenario Outline: Verify error validation
		Given a login to Ecommerce2 application with "<username>" and "<password>"
		Then Verify Error message is displayed

		 Examples:
          | username    	  | 	password  |
          | anshika@gmail.com | Iamking@000   |
       
       
