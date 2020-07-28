###   CSIS-484: Capstone Phase 1
###   Jeremy Smith

### Getting started
1. To get started, cd into './fina' and run the command:
'npm install' OR 'yarn install' depending on whether you use yarn or npm.

2. Then, create another local server using XAMP or MAMP for your database.

3. Create a DB called 'finadb' under your phpMyAdmin.

4. Copy and paste the SQL DB dump commands from 'phpMyAdmin SQL Dump.docx' from the "Capstone Phase 1" folder. Press 'Go'.

4. Then modify the contents of './server.js' to use your DB credentials.
Should look like this :

    var connection = mysql.createConnection({
        host: '127.0.0.1',  *localhost, no need to change*
        user: 'jeremy',     *Change user to your username*
        password: 'foo',    *Change password to your password*
        port: '3306',       *Change port to your port*
        database: 'finadb'  *Can change if you desire*
    })
5. Once your database is up and running then just cd back into './fina' from the terminal and run 'npm run dev' and you are ready to go!



### Pre-generated readme content with React application.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
