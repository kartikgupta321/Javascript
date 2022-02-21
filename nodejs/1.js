// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>form</title>
  </head>
  
  <body>
      <div>
          <h1>travel form for a trip</h1>
          <form action="form.php"></form>
          <input type="text" placeholder="enter your name">
          <br>
          <br>
          <label for="sectionida">
              <input type="radio" value="section A" name="section" id="sectionida"> section a
          </label>
          <label for="sectionidb">
              <input type="radio" value="section b" name="section" id="sectionidb"> section b
          </label>
          <label for="sectionidc">
              <input type="radio" value="section c" name="section" id="sectionidc"> section c
          </label>
          <br>
          <br>
          <input type="checkbox" name="want food cnteen card" id="foodcanteen" class="red" name="canteen">
          <label for="foodcanteen">want food canteen card</label>
          <br>
          <br>
          <textarea name="explain" id="explain" cols="30" rows="10" placeholder="explain why u want to join"></textarea>
          <br>
          <br>
          <select name="car" id="car">
              <option value="car1">no car </option>
              <option value="car1">mercedes</option>
              <option value="car2">jaguar</option>
          </select>
          </form>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});