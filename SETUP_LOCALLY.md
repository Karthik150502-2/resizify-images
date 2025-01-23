How to setup Graphite and Github
	Prerequisites:
-	Sign in to Graphite with a Github account, https://app.graphite.dev/activate
-	Create an Account with Gadget


Part 1 – Install Graphite in the CLI and Authenticate Graphite
Prerequisite:
1)	As of v1.0.0, Graphite requires a minimum git --version of 2.38.0.


Steps:
1)	With MacOs and Linux;
brew install withgraphite/tap/graphite
gt --version

2)	Install with npm;
npm install -g @withgraphite/graphite-cli@stable
gt --version
	
3)	Signin to Graphite and 
-	Copy the gt auth --token <your_cli_auth_token> command shown (your CLI auth token will be pre-filled for you).
-	Paste it in the terminal and run the command





Part 2 – Set up the Gadget and Shopify App

Steps:
1)	Install gadget CLI to work with gadget locally.
npm install -g ggt@latest
	
a)	Setting up your App with gadget.
1.	Click on “New App” button
2.	Select “Shopify App” and click on “Next”
3.	Give your app a unique name, for your app domain.
4.	Select the template “Shopify embedded react app”
5.	Select language Javascript/ Typescript

OR

b) Cloning already existing project from Gadget.
1.	Go to your gadget app, and select the project.
![image](https://github.com/user-attachments/assets/7afb41d8-2169-4a36-9e8a-91d32b829909)

2. From the navbar, click on the “Create a new Development environment“.
![image](https://github.com/user-attachments/assets/6e82c8d2-c696-4076-931b-938104f8d6e5)

3. Give it a name and chose the environment which you would like to clone, for your new environment.
![image](https://github.com/user-attachments/assets/a084a4eb-b904-446f-bc8a-27ed0dd77215)

4. Now you have your new gadget environment to work with.
5.	You need to copy all the setting from your cloned environment, since the configurations would be reset when you clone a new environment.
-	The environment variables.
-	The Shopify app connections.
-	Any connections if present.
You need to the partner’s app which will reflect the changes you make in this new environment, you can follow the next steps to connect to partner's app in shopify.


Part 3 -	Connect your gadget app with the partner’s app.
1.	Go to partners dashboard, and select Apps from the menu on the left in partners dashboard.
![image](https://github.com/user-attachments/assets/e8f6fbff-a1d8-43a8-a80c-d0f41503e815)

2.	Click on “Create App” button
3.	Click on manually “Create App manually”
![image](https://github.com/user-attachments/assets/6aa193d3-e59c-4c00-804c-cf5e8f197db0)

4.	Give your app a name.
5.	Copy the Client ID and Client Secret you see on the screen, we will be needing it later.
6.	Go back to your gadget app
7.	In the Home page of your gadget app, click on the Connect shopify button
![image](https://github.com/user-attachments/assets/f5431a26-f6ae-4615-9722-46855c49ea76)

8.	Scroll down, and you will two input boxes to enter Client Id, and the Client Secret. Paste the Client Id and the Client secret that you had copied before here.
9.	Click on continue
![image](https://github.com/user-attachments/assets/4e473dac-b25c-4f81-8c2e-2dfdbc612ca2)

10.	You will be sent to API scopes and data models configurations page, this is where you will need to select the Data models for which you need access from your Merchant’s admin account.
11. For now just, select Products with read scope and product from the options below.
![image](https://github.com/user-attachments/assets/53453b02-3b24-417f-ac4f-b7fdb3033477)

12.	Now click on confirm.
13.	A dialog box with, an app url and redirection url will appear, copy them both.
![image](https://github.com/user-attachments/assets/43919649-eccb-4b56-8690-abf73071efbf)

14.	Go back to you partners dashboard, and select the app that you had created.
15.	From the options in menu at left, click on configurations.
16. In URLs, section, paste the App url and the redirection url in the input boxes given.
![image](https://github.com/user-attachments/assets/f5a34540-0e40-4024-bb98-725a8fa3c722)

17.	And then click on Save and Release on the top.
18.	Now Click, on the overview from the options in the left menu.
19.	And from the “Test your app” section click on “Select store” button.
![image](https://github.com/user-attachments/assets/7d9a5eb1-3415-4d48-af0d-aaad92377d91)

    
20.	Click on the create a new store in the top.
21.	And give a name for the store
22.	For the Build version, select “Developer preview”, and from the options given, select 
“Extended Variants”.
![image](https://github.com/user-attachments/assets/9dce17fd-f666-44fd-9377-64bb44149f64)


23.	And in the “Data and configurations”, section, select “Start with sample data”.
![image](https://github.com/user-attachments/assets/93e6d084-8eb1-49ea-b463-e0618920b3a5)

24.	Click on create development store.
Now you have a developmental store for yourself, where you can test and play around with your products and test it thoroughly.

25.	Click on the Apps from the menu on the left, and select your app, and from the App dashboard, click on configurations. If you scroll down in the configurations page, you would see a Dropdown for Event version, you must select the same version that is listed for you gadget app’s settings > plugins > shopify > API Version.

![image](https://github.com/user-attachments/assets/ff9a045e-42d2-416a-bd85-1f0d3929a661)

![image](https://github.com/user-attachments/assets/d7e48797-0cbf-4be8-a381-f295c18a158d)


