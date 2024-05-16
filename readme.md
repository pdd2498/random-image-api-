Sure, here's a simple README file for your random image generator API:

---

# Random Image Generator API

This API provides a simple endpoint to fetch a random image with its metadata.

## Usage

### Endpoint

```
GET /get-img
```

### Response

The API responds with a JSON object containing the name and URL of a random image.

Example Response:
```json
{
  "name": "random image",
  "url": "https://picsum.photos/200/300"
}
```

## Getting Started

1. Clone this repository or download the files.
2. Install dependencies using `npm install`.
3. Start the server with `node server.js` or `npm start`.
4. The server will start on port 6060 by default.
5. Access the API endpoint at `http://localhost:6060/get-img` to get a random image.

## Dependencies

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
