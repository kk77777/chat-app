let socket = io.connect('http://localhost:4000/');

let user = document.getElementById('user'),
  message = document.getElementById('message'),
  btn = document.getElementById('send-button'),
  output = document.getElementById('output');

btn.addEventListener('click', function() {
  socket.emit('chat', {
    message: message.value,
    user: user.value
  });
});

socket.on('chat', function(data) {
  output.innerHTML +=
    '<p><strong>' + data.user + ':</strong>' + data.message + '</p>';
});
