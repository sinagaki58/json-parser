const parser = require("./index.js");

const json = JSON.stringify({
  data: "hello",
  number: 1,
  array: ["a", "b"],
  object: {
    nested: "1",
  },
});
console.log(json);
console.log(parser.parseJSON(json));
