const https = require("http");
// where the file is.
// adnan changes
const { charaters } = require("./chars");
/**
 *
 * chars = {
 *  charaters: ..,
 *  names: ---,
 * }
 */

// http://localhost:8000
const server = https.createServer((req, res) => {
  if (req.url === "/getCharacters") {
    const characterJSON = JSON.stringify(charaters); // converts Object into JSON String
    // console.log(object)
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(characterJSON);
    return;
  }

  res.writeHead(200);
  res.end("Hello there");
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server lsitening on port ${PORT}`);
});

//

/*

1. create a http server 
2. run and listen to the server on some "PORT"

*/
