const http = require('http');
require('dotenv').config()

const port = process.env.SERVER_PORT
;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`);
};

const server = http.createServer(requestHandler);

  server.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });