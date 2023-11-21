# Cookies_local_storage

---

## Set Up Environment

---

### 1. Initialize npm in Your Project

Make sure your project has a package.json file. In your project directory, run:

```bash
npm init -y
...
### 2. Install Webpack and Webpack Dev Server

Install webpack, webpack-cli, and webpack-dev-server in your project. Ensure you are in the project root directory and run:

```bash
npm install webpack webpack-cli webpack-dev-server --save-dev
```

### 3. Verify Installation

After installation, check if webpack-dev-server is present in the node_modules/.bin/ directory:

```bash
ls node_modules/.bin/
```

***Look for webpack-dev-server in the listed files.***

   4. [Starting the Webpack Dev Server](#starting-the-webpack-dev-server)
      - As the project Specifies by running:

        ```bash
        node_modules/.bin/webpack-dev-server
        ```

      - You can use npx which simplifies running locally installed binaries. By running:

        ```bash
        npx webpack-dev-server
        ```

      - You can also add a start script to your package.json file to make running the server more convenient:
        In your package.json, add the following line under "scripts": (You may already have the "scripts" in your package.json, if so append "start" otherwise append this code to json.

        ```bash
        "scripts": {
            "start": "webpack-dev-server"
        }
        ```

        Then, you can start the server with:

        ```bash
        npm start
        ```

   5. [Warning for Mode Not Set](#warning-for-mode-not-set)

      - Webpack . default production: requires you to specify a mode which can either be development, production, or none. This setting optimizes the build for each specific environment.

        Here's how you can address this warning:

        - Create a Webpack Configuration File
          Create a file named `webpack.config.js` in the root of your project. This file will contain your Webpack configuration.

        - Add Basic Configuration
          In the webpack.config.js file, you can start with a basic configuration that specifies the mode. Here’s a simple example:

        ```bash
        module.exports = {
            mode: 'development',
            // Add more configurations as needed
        };
        ```

        Set the mode to 'development' as it enables more helpful error messages and a less optimized build for faster build times.
         For production,  change this to 'production', to enable optimizations like minification and more efficient code.

        - Run Webpack Dev Server Again
          After setting up your webpack.config.js file, try running the Webpack Dev Server again:
          **See Step 4 ^**
          This should resolve the warning about the mode not being set. You can further customize the webpack.config.js file with additional configurations like entry points, loaders, plugins, etc., depending on your project's requirements.

        **NOTES**

        To use webpack-dev-server for this project I needed to update a configuration file to allow to host files from the path `'/'` root. and change .js file from "main" to "index"
        This allowed me to use the webpack-dev-server to test as well as live server.

        `webpack-config.js`

        ``` JavaScript
        /* 
        set webpack-dev-server configuration options.
        */
        path = require('path');

        module.exports = {
            mode: 'development',
            output: {
                filename: 'index.js',
            },
            devServer: {
            static: {
                // Serve from the root directory
                directory: path.join(__dirname, './'),
                },
            }
        };
        ```

---

## Learning Objectives

...

   4. [Using js-cookie for Easy Cookie Manipulation](#using-js-cookie-for-easy-cookie-manipulation)

      - ***js-cookie:*** A Simple, Lightweight JavaScript API
        - Purpose: js-cookie simplifies the process of working with cookies in JavaScript. It provides an easy-to-use API for creating, reading, updating, and deleting cookies.

        ***Installation Options***

        - ***NPM Package:***
          - You can install js-cookie via npm (Node Package Manager) if you're working in a Node.js environment or using a build tool like Webpack. To install it, you would run the following command in the root of your application:

        ```bash
        npm install js-cookie
        ```

         This command adds js-cookie to your package.json dependencies, making it part of your project's package management.

        - ***CDN (Content Delivery Network):***
          - Alternatively, if you are not using a package manager or a build system, you can include js-cookie in your project via a CDN. This method is common for simpler or frontend-only projects. You can add a `<script>` tag in your HTML that points to the js-cookie library hosted on a CDN:

        ```html
        <script src="https://cdn.jsdelivr.net/npm/js-cookie@latest/dist/js.cookie.min.js"></script>
        ```

        - ***Usage:***
          After installation, you can use js-cookie in your JavaScript code.
          It provides an easier way to create, read, and delete cookies.
          For example:

          Example:

        ```javascript
        // Setting a cookie
        Cookies.set('name', 'value', { expires: 7 });

        // Reading a cookie
        let name = Cookies.get('name');

        // Deleting a cookie
        Cookies.remove('name');
        ```

   5. [Using Browser Web Storage](#using-browser-web-storage)

      - Web Storage API provides mechanisms by which browsers can store key/value pairs.
          It's more secure and can store more data compared to cookies.

   6. [Differences Between Local Storage and Session Storage](#differences-between-local-storage-and-session-storage)

      - Local Storage:
        - Persists data across sessions. Data does not expire with the closing of the browser.
          - Useful for storing user preferences or long-term data.
      - Session Storage:
        - Data is cleared when the page session ends (when the browser tab is closed).
          - Suitable for temporary storage of information, like a user's input in a form.

        Example of Local and Session Storage

        ```javascript
        // Local Storage
        localStorage.setItem('key', 'value');
        console.log(localStorage.getItem('key'));
        localStorage.removeItem('key');

        // Session Storage
        sessionStorage.setItem('sessionKey', 'sessionValue');
        console.log(sessionStorage.getItem('sessionKey'));
        sessionStorage.removeItem('sessionKey');
        ```
