# Random Jokes and Image API

This API serves random jokes along with a random image. It combines data from the [Official Joke API](https://official-joke-api.appspot.com/) and the [Picsum Photos API](https://picsum.photos/).

## Usage

### Get a Random Joke and Image

- **URL**

  `/get-img`

- **Method**

  `GET`

- **Success Response**

  - **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
      "name": "Random Joke and Image",
      "url": "https://picsum.photos/200/300",
      "setup": "Why don't skeletons fight each other?",
      "punchline": "They don't have the guts."
    }
    ```

- **Sample Call**

  ```bash
  curl -X GET http://localhost:6060/get-img
  ```

## How to Run

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```
   
4. Run the server:

   ```bash
   npm start
   ```

The server will start at `http://localhost:6060`.

---