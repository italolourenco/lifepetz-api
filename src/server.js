require("module-alias/register");

const app = require("./app");

const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Example app listening on ${port}!`);
});
