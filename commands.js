const fs = require('fs');

module.exports = {
  pwd(cb) {
    process.stdout.write(process.cwd() + '\n');
    if (cb) cb();
  },

  date(cb) {
    process.stdout.write(new Date() + '\n');
    if (cb) cb();
  },

  ls(cb) {
    fs.readdir('.', function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      })
      if (cb) cb();
    });
  }
}
