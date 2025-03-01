global.expect = require("expect");

const babel = require("babel-core");
const jsdom = require("jsdom");
const path = require("path");

before(function (done) {
  jsdom.env({
    html: "",
    scripts: [path.resolve(__dirname, "..", "index.js")],
    done: function (err, window) {
      if (err) {
        console.error(err);
        return;
      }
      global.window = window;
      global.document = window.document;
      done();
    }
  });
});
