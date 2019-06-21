This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `nvm use 11.12.0`
### `npm i`
### `npm start`

Runs the app in the development mode.<br>
The backend must be running att http://localhost:5000 (see 'aula-music-service' project)
Open [http://localhost:3000](http://localhost:3000) to load Aula Music App.

## Learn More

You will find the code for Player component in src/components/Player.js.
You will find List of tracks with pagination in src/container/Tracks/List.js.
You will find Details for a particular track in src/container/Tracks/Details.js
API calls can be found in src/actions/tracks.js
Redux Player actions can be found in src/actions/player.js
The frontend is connected to the backend through the 'proxy' field in package.json

Particularly proud of building Player UI with [Material UI](https://material-ui.com/) that I haven't used prior.
It was a short learning curve, but so far I'm liking it. I tried to copy iTunes, that's why the song details are a form,
the song list is a grid with the similar to iTunes column names, and clicking on the song title starts playing the song from the start - all the features found on iTunes.

Please, switch Rows per page in the pagination to 1 in order to test pagination.

### List of Improvements

If I had more time I would've added the following to UX:
 -- Added the scrubber to the Player
 -- Connected Prev, Rewind buttons
 -- Progress loading indicators
 -- Saving functionality to the Details form.
 -- Support for different environments, such as Development, Production, etc
 -- Integration tests
 -- Sass support and Webpack, since that's what I use in real world situations. Not entirely sold on having styles in the components,
  as suggested by Material UI documentation.