Aula Music Service

## Available Scripts

In the project directory, you can run:
### `nvm use 11.12.0`
### `npm i`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

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

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Couldn't load tracks" }`

* **Sample Call:**

  ```javascript
    fetch('/api/tracks')
              .then(response => response.json())
              .then(json => console.log(json))
  ```
## Learn More
This API is built to host the entire CRUD's. It is very easy to add the rest of CRUD methods in /controller/TrackController.js, as such:
```javascript
module.exports = {
    list,
    create
};

async function create(data) {
    return (await db).get('tracks')
      .push(data)
      .write()
}
```
Then you can reference those in /routes/tracks.js, as such:
```javascript
module.exports = app => {
    app.post('/tracks',
        async (req, res) => {
            var newTrack = request.body;
            var result = await TrackController.create(newTrack);
            res.json({result});
        });
 ```

In a similar manner, it is easy to add more routes in /routes/index.js, as such:
```javascript
const routes = [
    require('./tracks.js'),
    require('./artists.js')
];
};
```
  
And in /routes/artists.js

```javascript
module.exports = app => {

    app.get('/artists',
        async (req, res) => {
            
            var artists = await ArtistController.list();
            res.json({artists});
        });
 ```

## List of Improvements

### Sequelize
Normally, I would use [Sequelize](http://docs.sequelizejs.com/) database. With Sequelize, I would have tables such as tracks, artists, and artists_tracks to create N-N association. I would create the corresponding models to leverage Sequelize automatic mapping.
For the purpose of this task I learned [lowdb](https://github.com/typicode/lowdb), a tiny Lodash-based database. With lowdb, I stored all the info in a single table ‘tracks’. But I do know how to make normalized data :)

## Testing
Unfortunately, I didn't have time left for tests, but in real world situation I would definitely provide test coverage. I can still add tests on the weekend, if you are curious.

## MusicKit JS
I researched MusicKit Js and originally planned to import songs and their metadata from Itunes,
rather than manually inserting them (yuck!), but again, not enough time for that. I can definitely add that, if you are curious.
