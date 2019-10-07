# Call Center Challenge
Automation project for call forwarding of registered and unregistered customer calls.

## Technologies used
- NodeJs in API Module.
- React in WEB Module.
- Redis in queue control.

## Prerequisite
It's necessary that in the application environment you've:<br>
- Redis (https://redis.io/).
- NodeJs (https://nodejs.org/en/).
- Dependency management, you may choose Yarn (https://yarnpkg.com/lang/en/) or NPM (It come with Node's installation).

## Installation*
For the correct operation of the application, it's necessary to perform the following procedures:<br>
- Create a copy of the **.env.Example** file (It's located at the root of the API module) and name it like **.env**, after that you'll fill the fields in **.env** with the desired settings.
- Create an environment variable named **NODE_ENV** containing the environment you want to run the application (*development*, *test* or *production*).
- Load libraries for each module (API and WEB) using the commands below in both root, it's corresponding to your dependency management:

      yarn

    or

       npm install

*&#42; This topic is detailed in Documents module of this repository.*

## Usage
At the root of each module (API and WEB) use the command below, it's corresponding to your dependency management:

     yarn start
or

    npm run start
In the WEB module, the command will open the project in your default browser, while in the API module it'll be displayed the address to access the API, as example ```http://localhost:3030```

## Automated tests
The API module has automated tests that can be run using the below commands at the root:<br>

When using windows

     yarn test-windows
or

    npm run test-windows
When using linux

     yarn test-linux
or

    npm run test-linux


## Documentation
In the documentation module there is a document describing the architecture used in the application and the configuration process with more details.
