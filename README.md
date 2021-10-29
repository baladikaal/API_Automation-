# API Automation

Testing API Automation


## Teknologi yang digunakan

- Node.js dan NPM
- Babel (ES6+)
- SuperTest
- Mocha
- Chai



## Testing

- URL API Testing : http://api.weatherbit.io/v2.0
- GET /current?lat={lat}&lon={lon} : lat = `40.730610` dan lon = `-73.935242`
- GET /forecast/3hourly?postal_code={postal_code}  : code = `28546`



## Installing

- Install Node.Js dan Npm

- Open command prompt on the api-automation-exercise parent folder and write this code:

  `npm init -y`

  `npm i --save-dev supertest mocha @babel/cli @babel/core @babel/node @babel/register @babel/preset-env`

- Open or import the project to Visual Studio Code 1.61 or above

- Create new terminal and write this code to execute:

  `npm test`



## Download

** Node.js

https://nodejs.org/en/download/

** Visual Studio Code

https://code.visualstudio.com/download
