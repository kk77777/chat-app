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

message.addEventListener('keypress', function() {
  socket.emit('typing', user.value);
});

socket.on('chat', function(data) {
  feedback.innerHTML = '';
  output.innerHTML +=
    '<p><strong>' + data.user + ':</strong>' + data.message + '</p>';
});

socket.on('typing', function(data) {
  feedback.innerHTML = '<p><em>' + data + ' is typing.</em></p>';
});
