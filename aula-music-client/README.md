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

### Components
You will find Player component in src/components/Player.js.
### Containers
You will find List view with pagination in src/containers/Tracks/List.js.
You will find Details view in src/containers/Tracks/Details.js
### Redux
API calls can be found in src/actions/tracks.js.
Redux Player actions can be found in src/actions/player.js.
### Configuration
The frontend is connected to the backend through the 'proxy' field in package.json
### Pagination
Please, switch Rows per page in the Paginator to 1 in order to test pagination.

### Inspiration
I'm pretty proud of building Player UI with [Material UI](https://material-ui.com/) that I haven't used prior.
It was a short learning curve, but so far I'm liking it. I tried to copy iTunes, that's why the Details view is a form,
the List view is a grid similar to iTunes, and clicking on the song title starts playing the song from the start - all the features found on iTunes.

## List of Improvements

If I had more time, I would've added the following:
 - Add the scrubber to the Player. I decided to create a customized Player rather than using HTML5 <audio> tag, because I wanted it to look pretty. But like with any customized solution, there is extra effort to create features that come with the `<audio>` tag by default. 
 - Hook up Previous Track and Next Track buttons in the Player.
 - Add progress indicators.
 - Add 'Save' button and corresponding functionality in the Details form.
 - Add support for different environments, such as Development, Production, etc
 - Add integration tests.
 - Add Sass support and Webpack, since that's what I use daily. Not entirely sold on having styles in the components,
  as suggested by the Material UI documentation.
