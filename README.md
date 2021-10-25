# Weather App

An application used to get weather data from Lithuania built with React and create-react-app.

## Project Screenshots

<br />

![Desktop](https://i.imgur.com/xOVXmcp.png)
![Mobile1](https://i.imgur.com/RBSL0UN.png)
![Mobile2](https://i.imgur.com/elPNSQV.png)

## Getting Started with Weather App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### Start development server

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Launch test runner

`npm test`

### Create a production build

`npm run build`

### Eject

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Reflection

This was a 4-5 day project built for a company to test my knowledge and skillset. The goal of the project for me was to build a fast application that uses React since it's a required tech at the company. For this project I chose to use the create-react-app boilerplate to minimize initial setup and invest more time in diving into actual code.

For this project I received a link to Adobe XD where there were design sheets and assets stored.

The main challenges I ran into was IE11 (Internet Explorer 11) support and meteo having problems with api calls. The IE problem required me to spend additional time researching and then rewriting existing code that was already working perfectly on modern browsers. Meteo API on the other hand required me to setup a proxy called "cors-anywhere" so I could have the call go through a proxy that I hosted on Heroku. Without "cors-anywhere" it would have been impossible to receive data as there's problems on meteo's end.

Where I could have done better is probably could have written cleaner code and structured the project better. Some things on the style could be improved for sure like the initial state when the app first loads. I'm also not happy how I imported the svg's but at least it works.

There's also the fact that the design asked you to do 6 cards for each day but it was not possible due to the fact that the API didn't provide you with every piece of data that you'd need to do that.
