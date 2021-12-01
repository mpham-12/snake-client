const net = require("net");
// establishes a connection with the game server
const connect = function () {

  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connceted to game server');
    conn.write('Name: MP');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50)

    conn.on('data', (data) => {
      console.log('Server says:', data)
    });

    // interpret incoming data as text

    return conn;
  });

}
module.exports = connect;
