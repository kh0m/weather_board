# README

## Assignment

Create a website using Rails that allows a user to do the following:
* Allow a user to log in, and log out.
* Display weather for NYC, London, and Hong Kong from forecast.io APIs.
* Allow the user to enter a city and see the current weather, 3 day forecast, and almanac.
* The user should be able favorite locations and seed a dashboard of weather conditions.  eg. seeing a  dashboard of weather for cities you will travel too.
* The app should have a public github repo & be hosted on heroku.
* For this project feel free to use CSS templates and javascript libraries where appropriate.
* You may use any libraries and API’s of your choice.
* Please include some unit test and integration test in the testing framework of your choice.

## Tools and reflection

### React

I knew that providing weather info would involve repeated UI components, so I decided to have a go at it with [react-rails](https://github.com/reactjs/react-rails).

One thing that tripped me up with it is that when you use ES6 with it, it doesn't automatically bind your own handlers with 'this' like it would if you used older syntax. My was that frustrating!

### Google Places Autocomplete

I wanted to use the Google Maps API for geocoding my names into coordinates and vice versa so I signed up and got a key.

For the searchbox on my index page, I found a handy script that uses the Google Places autocomplete API. [sauce](http://stackoverflow.com/questions/13689705/how-to-add-google-maps-autocomplete-search-box)

### Authentication with AuthLogic

I had heard of [AuthLogic](https://github.com/binarylogic/authlogic) before as a good tool for rails authentication. This was my first time trying it.

### Minitest

For my unit and integration tests, I stuck with the built-in minitest framework. This is what they use for exercism.io and so I was already familiar with it.
