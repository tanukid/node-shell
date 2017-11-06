const commands = require('./commands')

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  var cmd = data.toString().trim(); // remove the newline
  process.stdout.write('You typed: ' + cmd + '\n');
  commands[cmd](() => process.stdout.write('prompt >'));
});
