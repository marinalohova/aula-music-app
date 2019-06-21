Aula Music Service

## Available Scripts

In the project directory, you can run:
### `nvm use 11.12.0`
### `npm i`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Available Endpoints

**List Tracks**
----
  Returns a json array of tracks.

* **URL**

  /tracks

* **Method:**

  `GET`

*  **URL Params**

   **Optional:**

   `page=[integer]`
   `pageSize=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{"name":"Grenade","artist":"Bruno Mars","duration":"3:43", "path": "/Library/Bruno Mars/Grenade.mp3"}]`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Endpoint doesn't exist" }`

* **Sample Call:**

  ```javascript
    fetch('/api/tracks')
              .then(response => response.json())
              .then(json => console.log(json))
  ```

## List of Improvements

Normally I would use Sequelize for database. So in real life I would have tables such as tracks, artists, artists_tracks
to create N-N association. And I would create corresponding models to leverage Sequelize automatic mapping.
For the purpose of this task I learned [lowdb](https://github.com/typicode/lowdb), a tiny lodash-based database,
and stored all the info in the single table ‘tracks’. I do know how to make normalized data :)

Unfortunately, I didn't have time left for tests, but again in real world situation I definitely provide test coverage.
I can still add tests on the weekend, if you are curious.

I researched MusicKit Js and originally planned to import songs and their metadata from Itunes,
rather than manually inserting them (yuck!), but again, not enough time for that. I can definitely add that if you are curious.
