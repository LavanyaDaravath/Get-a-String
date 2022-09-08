const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let addDays = require("date-fns/addDays");
  res.send(
    addDays(
      `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
      100
    )
  );
});
app.listen(3000);
module.exports = app;
