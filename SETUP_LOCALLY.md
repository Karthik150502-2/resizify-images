# How to Set Up Graphite and GitHub

## Prerequisites
- Sign in to Graphite with a GitHub account: [Graphite Activation](https://app.graphite.dev/activate)
- Create an account with Gadget

---

## Part 1: Install Graphite in the CLI and Authenticate

### Prerequisite
- Graphite requires a minimum `git --version` of **2.38.0** (as of v1.0.0).

### Installation Steps

#### macOS and Linux:
```sh
brew install withgraphite/tap/graphite
gt --version
```

#### Using npm:
```sh
npm install -g @withgraphite/graphite-cli@stable
gt --version
```

#### Sign in to Graphite
1. Run the command below to authenticate:
   ```sh
   gt auth --token <your_cli_auth_token>
   ```
2. Replace `<your_cli_auth_token>` with your actual authentication token.
3. Paste and run the command in the terminal.

---

## Part 2: Set Up the Gadget and Shopify App

### Install Gadget CLI
```sh
npm install -g ggt@latest
```

### Setting Up Your App with Gadget
1. Click on **New App**
   ![New App](https://github.com/user-attachments/assets/9bc7ff4f-3da0-42f0-9f8b-48e1415d06d8)
2. Select **Shopify App** → Click **Next**
   ![Shopify App](https://github.com/user-attachments/assets/29eae9fc-7a5e-4ef6-980f-587f6d462cf9)
3. Give your app a **unique name**.
4. Select the template **Shopify Embedded React App**.
5. Choose a programming language (**JavaScript/TypeScript**).
   ![Language Selection](https://github.com/user-attachments/assets/4123ca22-090f-4d5a-af08-d3a5eae150ec)

#### Cloning an Existing Development Environment
**(Avoid cloning from the production environment.)**
1. Select the project to clone.
   ![Select Project](https://github.com/user-attachments/assets/7afb41d8-2169-4a36-9e8a-91d32b829909)
2. Click **Create a new Development Environment**.
   ![Create Environment](https://github.com/user-attachments/assets/6e82c8d2-c696-4076-931b-938104f8d6e5)
3. Name the environment and select the source environment.
   ![Clone Environment](https://github.com/user-attachments/assets/7526ea5d-149a-40ea-84ae-0d453f8ec91c)
4. Copy settings from the cloned environment:
   - **Environment Variables:** Copy from **Settings > Environment Variables**.
   - **Shopify App Connections:** Ensure proper configuration.

---

## Part 3: Connect Your Gadget App with the Partner’s App

### Steps
1. Navigate to **Partners Dashboard** → **Apps > All Apps**.
2. Click **Create App** → **Create App Manually**.
   ![Create App](https://github.com/user-attachments/assets/6051105b-0f12-46fd-96d2-35a06cad3f41)
3. Name your app.
4. Copy the **Client ID** and **Client Secret**.
5. In your Gadget app, click **Connect Shopify**.
   ![Connect Shopify](https://github.com/user-attachments/assets/f5431a26-f6ae-4615-9722-46855c49ea76)
6. Paste the copied **Client ID** and **Client Secret**.
7. Click **Continue**.
8. Set **API Scopes & Data Models**.
   ![API Scopes](https://github.com/user-attachments/assets/53453b02-3b24-417f-ac4f-b7fdb3033477)
9. Copy the **App URL** and **Redirection URL**.
   ![URLs](https://github.com/user-attachments/assets/43919649-eccb-4b56-8690-abf73071efbf)
10. Go to **Partner’s Dashboard > Configurations**.
11. Paste the copied URLs and click **Save and Release**.
   ![Save & Release](https://github.com/user-attachments/assets/f5a34540-0e40-4024-bb98-725a8fa3c722)
12. Create a **Development Store** to test your app.
   ![Development Store](https://github.com/user-attachments/assets/93e6d084-8eb1-49ea-b463-e0618920b3a5)

---

## Part 4: Cloning the Repo from GitHub & Working with Graphite

### Clone the Repo
```sh
git clone https://github.com/Shopvana/Resizify.git
git branch -av  # List all remote branches
git checkout -b dev origin/dev  # Checkout and track remote branch
git pull origin dev  # Pull latest changes
```

### Using Graphite Locally for PRs and Stack PRs

#### Creating a PR Locally with Graphite
1. Checkout to `dev` branch:
   ```sh
   gt checkout
   ```
2. Make changes and stage files:
   ```sh
   gt add --all
   ```
3. Create a new branch with your changes:
   ```sh
   gt create -m "Feature description" feature-branch-name
   ```
4. Submit the PR:
   ```sh
   gt submit
   ```

#### When to Create Separate Branches vs. Stack PRs
- **Separate Branches:** When working on independent features.
- **Stack PRs:** When changes are related and depend on each other.

---

## Summary
This guide covers setting up Graphite, Gadget, and Shopify App, connecting to a Partner’s App, and managing repositories and PRs with Graphite. Follow the steps carefully to streamline your development workflow.

