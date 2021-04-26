const express = require("express");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var db = require("./password");

// var corsOptions = {
//   origin: "http://localhost:19000/",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

app.options("*", cors());

app.use(bodyParser.json());

app.post("*", function (request, response, next) {
  db.query("ALTER TABLE WEB5 AUTO_INCREMENT=1", function (err1, result1) {
    db.query("SET @COUNT = 0;", function (err2, result2) {
      db.query(
        "UPDATE topic SET id = @COUNT:=@COUNT+1;",
        function (err3, result3) {
          next();
        }
      );
    });
  });
});

app.get("/api/topics", (req, res) => {
  db.query("SELECT * FROM WEB5", (err, data) => {
    res.json(data);
  });
});

app.post("/api/topics/create", (req, res) => {
  const { title, description } = req.body.data;
  db.query(
    "INSERT INTO WEB5(title, description, created) VALUES (?, ?, NOW())",
    [title, description],
    (err, result) => {
      res.send(result);
    }
  );
});

app.post("/api/topics/update/:id", (req, res) => {
  console.log(req.params.id);
  const { title, description, id } = req.body.data;
  db.query(
    "UPDATE WEB5 SET title = ?, description = ? WHERE id = ?",
    [title, description, id],
    (err1, result1) => {
      res.send(result1);
    }
  );
});

app.post("/api/topics/delete/:id", (req, res) => {
  console.log(req.params.id);
  const { id } = req.body.data;
  db.query("DELETE FROM WEB5 WHERE id = ?", [id], (result) => {
    res.send();
  });
});

app.listen(4000, function () {
  console.log(`Server On : http://localhost:4000/`);
});
