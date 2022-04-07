var LineByLineReader = require("line-by-line"),
  lr = new LineByLineReader("combolist.txt"); // datasource
var fs = require("fs");

lr.on("line", function(line) {
  console.log(line.split(":")[0]);
  fs.appendFile("output.txt", `${line.split(":")[0]}\n`, "utf8", (err) => {
    console.log("Saved");
  });
});
