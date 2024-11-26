[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

## What you need to 8-)

>>> Backend App
1. A laptop or pc with Nodejs 5 installed
2. You download one for your machine here [Nodejs](https://nodejs.org/en/download/package-manager)
3. After Installing Nodejs, clone the the repository and cd into `\CoreApi`
4. From `Backend` run cmd `run npm install` to download dependencies
5. After a successful install, run cmd `npm start` and the app should be listining to http://127.0.0.1:4000

>>>FrontEnd App

1. To run this you'll need Node.js and Npm installed
2. From repository root navigate to `Frontend`
3. run cmd `npm install` to install required dependencies
4. run cmd `npm start` to run the UI app server
5. App should be running on http://127.0.0.1:3000 but do not access the web app on this port.

>>> Application Workflow
Frontend: The React app provides the user interface, making API requests to the backend for data.
Backend: The Express.js server handles API requests and serves the React frontend.
Reverse Proxy: The backend forwards requests to the React development server during development.

This app utilises a reverse proxy in the backend to access the UI application, once both server are running navigate to http://127.0.0.1:4000 to access the UI application.