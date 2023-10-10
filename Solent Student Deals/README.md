
### Technology Stack

The Student Discounts and Deals Web App is developed using a modern technology stack to ensure efficiency, scalability, and a seamless user experience. Here are the key components of our technology stack:

- **Frontend Framework:** React JS
- **Styling:** Tailwind CSS
- **Build Tool:** Vite (for fast development and building)
- **Backend and Database:** Firebase (Firestore for data storage)
- **Authentication:** Firebase Authentication (Email and Password plus Google Social Login)
- **Hosting:** Firebase Hosting
- **Other Libraries:** Material UI, React Icons, ant-design, headlessui

### 3.2 Installation Guide

To install and run the Student Discounts and Deals Web App locally for development or testing purposes, follow these steps:

**Prerequisites:**

- Node.js and npm (Node Package Manager) should be installed on your machine.

**Step 1: Clone the Repository**

Open your terminal and run the following command to clone the project repository from GitHub:


`git clone https://github.com/sarkersh/Contemporary-Web-Applications--QHO640`

**Step 2: Navigate to the Project Directory**

Change your current directory to the project folder:



`cd student-discounts-web-app`

**Step 3: Install Dependencies**

Use npm to install the project dependencies:


`npm install`

**Step 4: Firebase Configuration**


- First, you need to create a Firebase project and an app on the Firebase console. This will allow you to use Firebase services such as Hosting, Authentication, and Firestore. 
- Next, you need to install the Firebase CLI and the Vite CLI on your computer. You can use the commands 
  `npm install -g firebase-tools` and `npm install -g create-vite` to install them globally.
- Then, you need to initialize your project by running the command `firebase init` hosting from the root of your local project directory. This will connect your project to your Firebase app and create some configuration files. You can choose Vite as your framework and select React as your template.
- After that, you need to install the Firebase SDK and connect your React app to Firebase. You can use the command `npm install firebase` or `yarn add firebase` to install the SDK. Then, you need to create a file called `firebase.jsx` in your src directory and import the Firebase services you need. You can also use the auto-init feature to automatically initialize the Firebase app with the configuration behind the scenes. 
- Finally, you need to deploy your site to Firebase Hosting by running the command `firebase deploy --only hosting`. This will upload your files to Firebase servers and assign a URL to your site. You can also use a custom domain if you prefer.


**Step 6: Run your app locally**

Run the following command to start the development server:


`npm run dev`

This will launch the app locally, and you can access it in your browser at `http://localhost:5173/`.


**Step 7: To compile you app for production**

'vite build'


### 3.3 Deployment to Firebase Hosting

To deploy the app to Firebase Hosting for production use, follow these steps:

**Step 1: Install Firebase CLI**

If you haven't already, install the Firebase CLI globally on your machine:



`npm install -g firebase-tools`

**Step 2: Log in to Firebase**

Run the following command to log in to your Firebase account:



`firebase login`

**Step 3: Initialize Firebase Hosting**

Navigate to your project directory and initialize Firebase Hosting:



`cd student-discounts-web-app firebase init hosting`

Follow the prompts to configure Firebase Hosting for your project.

**Step 4: Deploy to Firebase Hosting**

After configuring Firebase Hosting, deploy the app by running:


`firebase deploy --only hosting`

Firebase will provide you with a hosting URL where your app is deployed.
