
# Setting the project with Gadget, Graphite and Github.

## Prerequisites:
-	Sign in to Graphite with a Github account, [Sign Up to Graphite](https://app.graphite.dev/activate)
-	Create an Account with Gadget [Sign Up to Gadget](https://gadget.dev/)


## Part I - Install Graphite in the CLI and Authenticate Graphite

### Prerequisite
1)	As of v1.0.0, Graphite requires a minimum git --version of 2.38.0.

### Steps
1)	On MacOs and Linux;

```sh
brew install withgraphite/tap/graphite
```

```sh
gt --version
```


2)	Install with npm;

```sh
npm install -g @withgraphite/graphite-cli@stable
```

```sh
gt --version
```

3)	Sign in to Graphite
Copy the auth token command

```sh
gt auth --token <your_cli_auth_token>
```

shown (your CLI auth token will be pre-filled). Paste it in the terminal and run the command


## Part II - Set up the Gadget and Shopify App

### Steps
1)	Install gadget CLI to work with gadget locally.

```sh
npm install -g ggt@latest
```

### Create a new Gadget app and connect it to Shopify

2. Setting up your App with gadget,
Go to Gadget.dev, and after signing up, Click on “New App” button

![image](https://github.com/user-attachments/assets/41dc2ae7-0c64-479b-a037-2c2fa97b48a3)


3. Select “Shopify App” and click on “Next”

![image](https://github.com/user-attachments/assets/29eae9fc-7a5e-4ef6-980f-587f6d462cf9)

4. Give your app a unique name, for your app domain.

5. Select the template “Shopify embedded react app”.

6. Select language - Javascript/ Typescript

![image](https://github.com/user-attachments/assets/4123ca22-090f-4d5a-af08-d3a5eae150ec)


OR

### Cloning the development environment of an already existing project from Gadget.

> [!WARNING]
> Avoid cloning from production environment.

1. Go to your gadget app, and select the project you want to clone

![image](https://github.com/user-attachments/assets/313cc66a-d36c-4c17-9e94-6131bc5bfaa1)



2. From the navbar, click on the “Create a new Development Environment“.

![image](https://github.com/user-attachments/assets/247ae24d-d218-42ae-9bbc-8ae7a01a60ca)


3. Give it a name and choose the environment which you would like to clone, for your new environment.

![image](https://github.com/user-attachments/assets/7526ea5d-149a-40ea-84ae-0d453f8ec91c)


4. Now you have your new gadget environment to work with.

5.	You need to copy all the settings from your cloned environment, since the configurations would be reset when you clone a new environment.
- The environment variables, go to the gadget development env of your app, and from **settings > Environment variables**, copy the variables to your environment.

- Except for **"GADGET_PUBLIC_MANTLE_APP_ID"** and **"MANTLE_API_KEY"**, for this you need to create new dev app link from Heymantle using the Client Id, and Client Secret of the partner's app, and they it would spit out a Mantle Public App ID and an API key whose value you would need to replace with the values of **"GADGET_PUBLIC_MANTLE_APP_ID"** and **"MANTLE_API_KEY"**, reference: [Heymantle Docs](https://heymantle.com/docs)



![image](https://github.com/user-attachments/assets/6850022e-8def-4cd3-a409-ab2e2ad6b1fa)


-	The Shopify app connections.

<img width="953" alt="image" src="https://github.com/user-attachments/assets/fbbb8cfe-6687-4d85-a531-8889d6240021" />


-	A partner's app connection.
You need a partner’s app to reflect changes made in this new environment. Follow the next steps to connect it with Shopify.




## Part III - Connect your gadget app with the partner’s app.

### Steps

1) Go to partners dashboard, and select Apps, All Apps from the menu on the left in partners dashboard.

2) Click on **“Create App”** button

3) Click on manually **“Create App manually”**

![image](https://github.com/user-attachments/assets/6051105b-0f12-46fd-96d2-35a06cad3f41)

![image](https://github.com/user-attachments/assets/2254f26a-8615-4a76-86f4-73ac47be271f)

![image](https://github.com/user-attachments/assets/24330a58-e859-4fff-bcd5-baef14b4c732)

4. Give your app a name.

5. Copy the Client ID and Client Secret you see on the screen, we will be needing it later.

6. Go back to your gadget app

7. In the Home page of your gadget app, click on the Connect shopify button

8. Scroll down, and you will see two input boxes to enter Client Id, and the Client Secret. Paste the Client Id and the Client secret that you had copied before here.

9. Click on continue

![image](https://github.com/user-attachments/assets/f5431a26-f6ae-4615-9722-46855c49ea76)


You have to follow Step 10, 11 and 12 only when you are creating your own app, when you clone from an existing app these settings are already set for you.

10. You will be sent to API scopes and data models configurations page, this is where you will need to select the Data models for which you need access from your Merchant’s admin account.

11. For now just, select Products with read scope and product from the options below.

![image](https://github.com/user-attachments/assets/4e473dac-b25c-4f81-8c2e-2dfdbc612ca2)

13. Now click on confirm.

14. A dialog box with, an app url and redirection url will appear, copy them both.

![image](https://github.com/user-attachments/assets/0266faea-6741-449f-809f-b5de1fbf1a67)


14. Go back to your partners dashboard, and select the app that you had created.

15. From the options in menu at left, click on configurations.

16. In URLs, section, paste the App url and the redirection url in the input boxes given.
![image](https://github.com/user-attachments/assets/f5a34540-0e40-4024-bb98-725a8fa3c722)


17. And then click on Save and Release on the top.

18. Now click on the overview from the options in the left menu.

19. And from the **“Test your app”** section click on **“Select store”** button.

![image](https://github.com/user-attachments/assets/7d9a5eb1-3415-4d48-af0d-aaad92377d91)

20. Click on the create a new store in the top.

21. And give a name to the store

22. For the Build version, select **“Developer preview”**, and from the options given, select 
**“Extended Variants”**.

![image](https://github.com/user-attachments/assets/9dce17fd-f666-44fd-9377-64bb44149f64)

23. And in the **“Data and configurations”**, section, select **“Start with sample data”**.

![image](https://github.com/user-attachments/assets/93e6d084-8eb1-49ea-b463-e0618920b3a5)

24. Click on create development store.
Now you have a developmental store for yourself, where you can test and play around with your products and test it thoroughly.

25. Click on the Apps from the menu on the left, and select your app, and from the App dashboard, click on configurations. If you scroll down in the configurations page, you would see a Dropdown for Event version, you must select the same version that is listed for you gadget app’s **settings > plugins > shopify > API Version**.

![image](https://github.com/user-attachments/assets/ff9a045e-42d2-416a-bd85-1f0d3929a661)

![image](https://github.com/user-attachments/assets/d7e48797-0cbf-4be8-a381-f295c18a158d)




## Part IV - Cloning the repo from Github and Steps to create branches and Pull Requests using Graphite locally.

### Steps

1. Clone the repo from the github.

```sh
git clone https://github.com/Shopvana/Resizify.git
```

2. Lists out all the remote branches present in the repo.

```sh
git branch -av
``` 

3. To create and switch to a local dev branch tracking origin/dev, run:

```sh
git checkout -b dev origin/dev
```

4. verify that you are in the remote dev branch.

```sh 
git branch
``` 

5. Pull the latest changes in the remote dev branch if need be.

```sh
git pull origin dev 
```


**Using Graphite locally to create PR's and Stack PRs**

1) Creating PR's locally from Graphite

- Use Graphite's interactive CLI to switch branches:

```sh
gt checkout 
```

- Lists out all the repos that you have locally, and you can select the branch you need to get on interactively from the CLI


**There are two scenarios, based on which you have to decide whether you need to create a separate branch or a Stack of branches having changes correlating to one another.**


> [!IMPORTANT]
> **When to create separate branches?** 

When you have a new feature to work on that is completely not related to one another/ is a independent feature.

i) Checkout to dev branch and make changes upon the dev branch. 

```sh
gt checkout
``` 
Select the dev branch with up/ down keys

ii) Make the changes for the feature you are working on, and

```sh
gt add
```

Add the modified files, or 

```sh
gt add --all 
```

to add all modified files at once.


iii) After making the change and running this command, Graphite will create a completely new branch for you with the changes you have made from the dev branch.

```sh
gt create -m "Message about the feature" name_of_the_branch
```

iv) To submit the branch

```sh
gt submit
```

**When these PRs are merged, they are merged to the dev branch of the repo, since you checked out from the dev branch initially.**









> [!IMPORTANT]
>**When to create a Stack?**

When you have a large feature to work on, and you decide to break the work in small portions, you can create branches for each small feature adding up to become that one big feature you were working on.

To Stack is to create a list of branches, that are build upon one another. You can easily navigate in your stack of branches, with `gt up`, `gt down`, to reach to the old and new changes you have made.

i) Checkout to dev branch and make changes upon the dev branch, initially;
- Make the changes, Add the files to which you have made the changes.

```sh
gt add 
```

- Create the branch

```sh
gt create -m "Message 1" branch_name_1
```

ii) Adding a new Stack.

- After `gt create`, now you have a new branch, for the changes you have made recently

- Without checking out the dev branch, stays in the same branch.

- Make some more changes based on the need.

- Add the files to which you have made the changes.

```sh
gt add
```

- Create a branch

```sh
gt create -m "Message 2" branch_name_2
```

- You can follow this steps for adding more stacks on one another.

- And finally, submit the PR.

```sh 
gt submit
```

Submits all the branches as separate PRs stacked on top of one another.


iii) To add some changes in the same branch, without creating a stack, after a PR has been created, simply commit the changes using `gt modify`.

- Make the changes you need to add.

- Add the files you have have changes/ or add files that have been modified.

```sh
gt add or gt add --all
```

- To add the changes to the current branch.

```sh
gt modify
```

or

```sh
gt modify -m "some_message"
```


- Submit the changes to the exiting PR.

```sh
gt submit
```







## Part V – Working with Gadget locally, and Syncing with Gadget and local code. 

After you have cloned the repo from Github, and checked out to the remote dev branch of the repo. You can follow the below step to sync your local code to Gadget, and vice versa, as you make changes to either one of them.

### Steps
1) To bring down the code from gadget locally, sync command;
```sh
ggt dev ./<app-name> --app=<app-name> --env=<gadget-development-enviornment-name> --allow-unknown-directory
```

This command starts a HMR (Hot Module Reload) for you code in **local -> Gadget code**, and **Gadget code -> local**, meaning, after running this command, whatever changes you make in your local code, will reflect in your Gadget repo, and vice-versa. With changes finally reflecting in your Admin dashboard app where you have your app installed. 

Sometimes, when you have conflicting changes in your Gadget repo, and local code, after running the sync command,

The Graphite CLI prompts you to select a option keep the local change or to keep the changes from Gadget repo, you can choose accordingly.

