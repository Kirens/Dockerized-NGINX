const port = process.env.PORT || 8081

require('http')
  .createServer(({ url, headers: { host } }, resp) => {
    const requested = host + url

    console.log(`Request recived from ${requested}`)

    resp.writeHead(200, {'Content-Type': 'application/json'})
    resp.end(JSON.stringify({ status: 'ok', data: 'Hello World!', requested }))
  })
  .listen(port)

console.log(`Server running at http://127.0.0.1:${port}/`);
