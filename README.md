# Huntington Tri-State Hospitals

Huntington Tri-State Hospitals is an app designed for people who live in the Huntington, WV Tri-State area. It's made so that residents of the area can make an doctors appointment easily on their handheld device. I made this app in my free time to learn the basics of React Native.

## Testing Instructions
After cloning this repository to your own machine,

**Create the Database:**
1. Open Visual Studio.
2. At the start screen, select `Open a Local Folder`.
4. Navigate to your workspace directory, open the `Doctor-App-ReactNative` folder, then select the SQL folder.
5. Execute BOTH .sql files in the [SQL folder](https://github.com/spencer-lott/property-capstone/tree/main/SQL) with the green play button in the top left of the window. (The first file creates the database and tables if they don’t already exist, and the second file inserts some sample data into those tables for testing)

**Run the API:**
1. Open Visual Studio.
2. At the start screen, select `Open a project or solution`.
3. Navigate to your workspace directory, open the `Doctor-App-ReactNative` folder, and select the **.sln** file to run the solution.
4. Configure the localhost to your local IP Address. You find this by typing in the search bar at the bottom of your screen 'cmd'. Then, in the command prompt type 'ipconfig' and hit enter. Scroll down if you have to, and the number you will be looking for is under 'IPv4 Address'. Copy that number and insert it here in the launchSettings.json file: 
![plot](Doctor-App-ReactNative\Doctor-App-ReactNative\client\doctor-app\assetsassets\ipAddressConfiguration.png)
4. Hit the Green play button on the toolbar that says "Doctor_App_ReactNative".
5. This will run the API along with an API tool [Swagger](https://swagger.io/docs/specification/2-0/what-is-swagger/) for testing at the address `https://<your-ip-address>:5236/swagger/index` and open it in your default browser.

**Run the Client:**
1. In your command line, cd into the [Client Folder](https://github.com/spencer-lott/property-capstone/tree/main/PM%20Capstone%202/client), and into the folder named `doctor-app`.
2. While in the `doctor-app` folder you will need to install the following dependencies: 
• npm install @clerk/clerk-expo 
• npm install @react-navigation/native
• npx expo install react-native-screens react-native-safe-area-context
• npm install @react-navigation/stack
• npx expo install react-native-gesture-handler
• npm install @react-navigation/bottom-tabs
• npx expo install expo-font
• npm install moment --save

3. Once the above dependencies have been installed run `npx expo start`.
4. Install the Expo Go app on your phone
5. Scan the QR code or use an android emulator to open the app. (You will have to make an account with the clerk website if you don't have one already. P.S. These are all free resources accessible by anyone.)